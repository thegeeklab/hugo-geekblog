---
title: Deployments
date: 2021-05-23T20:00:00+01:00
authors:
  - john-doe
tags:
  - Documentation
  - Shortcodes
weight: 5
---

{{< toc >}}

## Netlify

There are several ways to deploy your site with this theme on Netlify. Regardless of which solution you choose, the main goal is to ensure that the prebuilt theme release tarball is used or to run the [required commands](/posts/getting-started/#option-2-clone-the-github-repository) to prepare the theme assets before running the Hugo build command.

Here are some possible solutions:

**Use a Makefile:**

Add a Makefile to your repository to bundle the required steps.

```Makefile
THEME_VERSION := v0.8.2
THEME := hugo-geekblog
BASEDIR := docs
THEMEDIR := $(BASEDIR)/themes
.PHONY: doc
doc: doc-assets doc-build
.PHONY: doc-assets
doc-assets:
   mkdir -p $(THEMEDIR)/$(THEME)/ ; \
   curl -sSL "https://github.com/thegeeklab/$(THEME)/releases/download/${THEME_VERSION}/$(THEME).tar.gz" | tar -xz -C $(THEMEDIR)/$(THEME)/ --strip-components=1
.PHONY: doc-build
doc-build:
        cd $(BASEDIR); hugo
.PHONY: clean
clean:
   rm -rf $(THEMEDIR) && \
   rm -rf $(BASEDIR)/public
```

This Makefile can be used in your `netlify.toml`, take a look at the Netlify [example](https://docs.netlify.com/configure-builds/file-based-configuration/#sample-file) for more information:

```toml
[build]
publish = "docs/public"
command = "make doc"
```

**Chain required commands:**

Chain all required commands to prepare the theme and build your site on the `command` option in your `netlify.toml` like this:

```toml
[build]
publish = "docs/public"
command = "command1 && command 2 && command3 && hugo"
```

## Subdirectories

{{< hint danger >}}
**Warning**\
As deploying Hugo sites on subdirectories is not as robust as on subdomains, we do not recommend this.
If you have a choice, using a domain/subdomain should always be the preferred solution!
{{< /hint >}}

If you want to deploy your side to a subdirectory of your domain, some extra steps are required:

- Configure your Hugo base URL e.g. `baseURL = http://localhost/demo/`.
- Don't use `relativeURLs: false` nor `canonifyURLs: true` as is can cause unwanted side effects!

There are two ways to get Markdown links or images working:

- Use the absolute path including your subdirectory e.g. `[testlink](/demo/example-site)`
- Overwrite the HTML base in your site configuration with `geekblogOverwriteHTMLBase = true` and use the relative path e.g. `[testlink](example-site)`

But there is another special case if you use `geekblogOverwriteHTMLBase = true`. If you use anchors in your Markdown links you have to ensure to always include the page path. As an example `[testlink](#some-anchor)` will resolve to `http://localhost/demo/#some-anchor` and not automatically include the current page!
