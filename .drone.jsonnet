local PipelineTest(deps=[],) = {
  kind: 'pipeline',
  name: 'test',
  platform: {
    os: 'linux',
    arch: 'amd64',
  },
  steps: [
    {
      name: 'assets',
      image: 'node:lts',
      commands: [
        'npm install > /dev/null',
        'npx gulp default',
      ],
      environment: {
        FORCE_COLOR: true,
        NPM_CONFIG_LOGLEVEL: 'error',
      },
    },
    {
      name: 'testbuild',
      image: 'thegeeklab/hugo:0.83.1',
      commands: [
        'mkdir exampleSite/themes/ && ln -s $(pwd)/ exampleSite/themes/hugo-geekblog',
        'hugo -s exampleSite/ -b http://localhost/',
      ],
    },
    {
      name: 'html-validation',
      image: 'thegeeklab/vnu',
      commands: [
        'vnu --skip-non-html --also-check-css --errors-only exampleSite/public',
      ],
    },
    {
      name: 'link-validation',
      image: 'thegeeklab/link-validator',
      commands: [
        'link-validator -ro',
      ],
      environment: {
        LINK_VALIDATOR_BASE_DIR: 'exampleSite/public',
      },
    },
    {
      name: 'page-validation',
      image: 'thegeeklab/lhci',
      commands: [
        'lhci autorun',
      ],
      environment: {
        LHCI_SERVER_URL: 'https://drone-artifact.rknet.org/${DRONE_REPO_NAME}/',
      },
    },
    {
      name: 'page-validation-upload',
      image: 'plugins/s3',
      settings: {
        access_key: {
          from_secret: 's3_access_key',
        },
        bucket: 'drone-artifact',
        endpoint: 'https://sp.rknet.org',
        path_style: true,
        secret_key: {
          from_secret: 's3_secret_access_key',
        },
        source: 'lhci_reports/dist/*',
        strip_prefix: 'lhci_reports/dist/',
        target: '/${DRONE_REPO_NAME}',
      },
      when: {
        status: [
          'failure',
          'success',
        ],
      },
    },
    {
      name: 'page-validation-link',
      image: 'thegeeklab/drone-github-comment',
      settings: {
        api_key: {
          from_secret: 'github_token',
        },
        key: 'pr-${DRONE_PULL_REQUEST}',
        message: 'lhci_reports/dist/summary.md',
        skip_missing: true,
        update: true,
      },
      when: {
        ref: [
          'refs/pull/**',
        ],
        status: [
          'failure',
          'success',
        ],
      },
    },
  ],
  trigger: {
    ref: [
      'refs/heads/main',
      'refs/tags/**',
      'refs/pull/**',
    ],
  },
  depends_on: deps,
};


local PipelineBuild(deps=[],) = {
  kind: 'pipeline',
  name: 'build',
  platform: {
    os: 'linux',
    arch: 'amd64',
  },
  steps: [
    {
      name: 'assets',
      image: 'node:lts',
      commands: [
        'npm install > /dev/null',
        'npx gulp default',
      ],
      environment: {
        FORCE_COLOR: true,
        NPM_CONFIG_LOGLEVEL: 'error',
      },
    },
    {
      name: 'package',
      image: 'thegeeklab/alpine-tools',
      commands: [
        'mkdir dist/',
        'echo "${DRONE_TAG:-latest}" > VERSION',
        'tar -zcvf dist/hugo-geekblog.tar.gz -X .tarignore .',
      ],
    },
    {
      name: 'checksum',
      image: 'thegeeklab/alpine-tools',
      commands: [
        'cd dist/ && sha256sum * > ../sha256sum.txt',
      ],
    },
    {
      name: 'changelog',
      image: 'thegeeklab/git-chglog',
      commands: [
        'git fetch -tq',
        'git-chglog --no-color --no-emoji ${DRONE_TAG:---next-tag unreleased unreleased}',
        'git-chglog --no-color --no-emoji -o CHANGELOG.md ${DRONE_TAG:---next-tag unreleased unreleased}',
      ],
    },
    {
      name: 'release',
      image: 'plugins/github-release',
      settings: {
        api_key: {
          from_secret: 'github_token',
        },
        files: [
          'dist/*',
          'sha256sum.txt',
        ],
        note: 'CHANGELOG.md',
        overwrite: true,
        title: '${DRONE_TAG}',
      },
      when: {
        ref: [
          'refs/tags/**',
        ],
      },
    },
  ],
  trigger: {
    ref: [
      'refs/heads/main',
      'refs/tags/**',
      'refs/pull/**',
    ],
  },
  depends_on: deps,
};

local PipelineDocs(deps=[],) = {
  kind: 'pipeline',
  name: 'docs',
  platform: {
    os: 'linux',
    arch: 'amd64',
  },
  concurrency: {
    limit: 1,
  },
  steps: [
    {
      name: 'markdownlint',
      image: 'thegeeklab/markdownlint-cli',
      commands: [
        "markdownlint 'exampleSite/content/**/*.md' 'README.md'",
      ],
    },
    {
      name: 'spellcheck',
      image: 'node:lts-alpine',
      commands: [
        'npm install -g spellchecker-cli',
        "spellchecker --files 'exampleSite/content/**/*.md' 'README.md' -d .dictionary -p spell indefinite-article syntax-urls frontmatter --frontmatter-keys title --no-suggestions",
      ],
      environment: {
        FORCE_COLOR: true,
        NPM_CONFIG_LOGLEVEL: 'error',
      },
    },
    {
      name: 'assets',
      image: 'node:lts',
      commands: [
        'npm install > /dev/null',
        'npx gulp svg-sprite-list',
        'mkdir -p exampleSite/themes/hugo-geekblog/',
        'curl -sSL https://github.com/thegeeklab/hugo-geekblog/releases/latest/download/hugo-geekblog.tar.gz | tar -xz -C exampleSite/themes/hugo-geekblog/ --strip-components=1',
      ],
      when: {
        ref: [
          'refs/heads/main',
          'refs/tags/**',
        ],
      },
    },
    {
      name: 'assets-main',
      image: 'node:lts',
      commands: [
        'npm install > /dev/null',
        'npx gulp default',
        'npx gulp svg-sprite-list',
        'mkdir exampleSite/themes/ && ln -s $(pwd)/ exampleSite/themes/hugo-geekblog',
      ],
      environment: {
        FORCE_COLOR: true,
        NPM_CONFIG_LOGLEVEL: 'error',
      },
      when: {
        ref: [
          'refs/pull/**',
        ],
      },
    },
    {
      name: 'build',
      image: 'thegeeklab/hugo:0.83.1',
      commands: [
        'hugo -s exampleSite/',
      ],
    },
    {
      name: 'beautify',
      image: 'node:lts-alpine',
      commands: [
        'npm install -g js-beautify',
        "html-beautify -r -f 'exampleSite/public/**/*.html'",
      ],
      environment: {
        FORCE_COLOR: true,
        NPM_CONFIG_LOGLEVEL: 'error',
      },
    },
    {
      name: 'publish',
      image: 'plugins/s3-sync',
      settings: {
        access_key: {
          from_secret: 's3_access_key',
        },
        bucket: 'geekblogs-root',
        delete: true,
        endpoint: 'https://sp.rknet.org',
        path_style: true,
        secret_key: {
          from_secret: 's3_secret_access_key',
        },
        source: 'exampleSite/public/',
        strip_prefix: 'exampleSite/public/',
      },
      when: {
        ref: [
          'refs/heads/main',
          'refs/tags/**',
        ],
      },
    },
  ],
  trigger: {
    ref: [
      'refs/heads/main',
      'refs/tags/**',
      'refs/pull/**',
    ],
  },
  depends_on: deps,
};

local PipelineNotifications(deps=[],) = {
  kind: 'pipeline',
  name: 'notifications',
  platform: {
    os: 'linux',
    arch: 'amd64',
  },
  steps: [
    {
      name: 'matrix',
      image: 'thegeeklab/drone-matrix',
      settings: {
        homeserver: {
          from_secret: 'matrix_homeserver',
        },
        password: {
          from_secret: 'matrix_password',
        },
        roomid: {
          from_secret: 'matrix_roomid',
        },
        template: 'Status: **{{ build.Status }}**<br/> Build: [{{ repo.Owner }}/{{ repo.Name }}]({{ build.Link }}) ({{ build.Branch }}) by {{ commit.Author }}<br/> Message: {{ commit.Message }}',
        username: {
          from_secret: 'matrix_username',
        },
      },
      when: {
        status: [
          'success',
          'failure',
        ],
      },
    },
  ],
  trigger: {
    ref: [
      'refs/heads/main',
      'refs/tags/**',
    ],
    status: [
      'success',
      'failure',
    ],
  },
  depends_on: deps,

};

[
  PipelineTest(),
  PipelineBuild(deps=['test']),
  PipelineDocs(deps=['build']),
  PipelineNotifications(deps=['test', 'build', 'docs']),
]
