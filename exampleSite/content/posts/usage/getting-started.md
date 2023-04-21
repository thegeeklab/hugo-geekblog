---
title: Getting Started
date: 2020-07-15T20:00:00+02:00
authors:
  - john-doe
  - Special User
tags:
  - Documentation
  - Usage
weight: 1
---

Geekblog is a simple Hugo theme for personal blogs. It is intentionally designed as a fast and lean theme and may not fit the requirements of complex projects. If a more feature-complete theme is required there are a lot of got alternatives out there. This post helps you to get started with the Geekblog theme, including initial setup and basic configuration.

<!--more-->

[![Build Status](https://img.shields.io/drone/build/thegeeklab/hugo-geekblog?logo=drone&server=https%3A%2F%2Fdrone.thegeeklab.de)](https://drone.thegeeklab.de/thegeeklab/hugo-geekblog)
[![Hugo Version](https://img.shields.io/badge/hugo-0.93-blue.svg)](https://gohugo.io)
[![GitHub release](https://img.shields.io/github/v/release/thegeeklab/hugo-geekblog)](https://github.com/thegeeklab/hugo-geekblog/releases/latest)
[![GitHub contributors](https://img.shields.io/github/contributors/thegeeklab/hugo-geekblog)](https://github.com/thegeeklab/hugo-geekblog/graphs/contributors)
[![License: MIT](https://img.shields.io/github/license/thegeeklab/hugo-geekblog)](https://github.com/thegeeklab/hugo-geekblog/blob/main/LICENSE)

{{< toc >}}

## Features

- Clean and simple design
- Light and mobile-friendly
- Easy customization
- Zero initial configuration
- Handy shortcodes
- Simple sticky posts
- Content tags
- Multiple authors
- Supports Atom and JSON feeds

## Setup requirements

You need a recent version of Hugo for local builds and previews of sites that use Geekblog. As we are using [webpack](https://webpack.js.org/) as pre-processor, the normal version of Hugo is sufficient. If you prefer the extended version of Hugo anyway this will work as well. For comprehensive Hugo documentation, see [gohugo.io](https://gohugo.io/documentation/).

If you want to use the theme from a cloned branch instead of a release tarball you'll need to install `webpack` locally and run the build script once to create all required assets.

```Shell
# install required packages from package.json
npm install

# run the build script to build required assets
npm run build

# build release tarball
npm run pack
```

## Using the theme

To prepare your new site environment just a few steps are required:

1. Create a new empty Hugo site.

   ```Shell
   hugo new site demosite
   ```

2. Switch to the root of the new site.

   ```Shell
   cd demosite
   ```

3. Install the Geekblog theme from a [release bundle](#option-1-download-pre-build-release-bundle) (recommended) or from [Git branch](#option-2-clone-the-github-repository).

4. Create the minimal required Hugo configuration `config.toml`. For all configuration options take a look at the [configuration](/usage/configuration/) page.

   ```Toml
   baseURL = "http://localhost"
   title = "Geekblog"
   theme = "hugo-geekblog"

   pluralizeListTitles = false

   # Geekblog required configuration
   pygmentsUseClasses = true
   pygmentsCodeFences = true
   disablePathToLower = true

   # Needed for mermaid shortcodes
   [markup]
     [markup.goldmark.renderer]
       unsafe = true
     [markup.tableOfContents]
       startLevel = 1
       endLevel = 9

   [taxonomies]
     author = "authors"
     tag = "tags"

   [mediaTypes]
     [mediaTypes."application/atom+xml"]
       suffixes = ["xml"]

   [outputFormats]
     [outputFormats.Atom]
       name = "Atom"
       mediaType = "application/atom+xml"
       baseName = "feed"
       isPlainText = false
       rel = "alternate"
       isHTML = false
       noUgly = true
       permalinkable = false

   [outputs]
     home = ["HTML", "ATOM"]
     page = ["HTML"]
     section = ["HTML"]
     taxonomy = ["HTML"]
     term = ["HTML", "ATOM"]
   ```

5. Test your site.

   ```Shell
   hugo server -D
   ```

   If you want to add some demo data you could use the content from the [Hugo basic example](https://github.com/gohugoio/hugoBasicExample):

   ```Shell
   curl -L https://github.com/gohugoio/hugoBasicExample/archive/master.tar.gz | tar -xz --exclude "config*" --exclude "LICENSE" --exclude "README*" --strip-components=1
   ```

### Option 1: Download pre-build release bundle

Download and extract the latest release bundle into the theme directory.

```Shell
mkdir -p themes/hugo-geekblog/
curl -L https://github.com/thegeeklab/hugo-geekblog/releases/latest/download/hugo-geekblog.tar.gz | tar -xz -C themes/hugo-geekblog/ --strip-components=1
```

### Option 2: Clone the GitHub repository

{{< hint type=note >}}
**Info**\
Keep in mind this method is not recommended and needs some extra steps to get it working.
If you want to use the Theme as submodule keep in mind that your build process need to
run the described steps as well.
{{< /hint >}}

Clone the Geekblog git repository.

```Shell
git clone https://github.com/thegeeklab/hugo-geekblog.git themes/hugo-geekblog
```

Build required theme assets e.g. CSS files and SVG sprites.

```Shell
npm install
npm run build
```

## Deployments

### Netlify

There are several ways to deploy your site with this theme on Netlify. Regardless of which solution you choose, the main goal is to ensure that the prebuilt theme release tarball is used or to run the [required commands](#option-2-clone-the-github-repository) to prepare the theme assets before running the Hugo build command.

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

This Makefile can be used in your `netlify.toml`, take a look at the Netlify [example](https://docs.netlify.com/configure-builds/file-based-configuration/#sample-netlify-toml-file) for more information:

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

### Subdirectories

{{< hint type=important >}}
**Warning**\
As deploying Hugo sites on subdirectories is not as robust as on subdomains, we do not recommend this.
If you have a choice, using a domain/subdomain should always be the preferred solution!
{{< /hint >}}

If you want to deploy your site to a subdirectory of your domain, some extra steps are required:

- Configure your Hugo base URL e.g. `baseURL = http://localhost/demo/`.
- Don't use `relativeURLs: false` nor `canonifyURLs: true` as is can cause unwanted side effects!

There are two ways to get Markdown links or images working:

- Use the absolute path including your subdirectory e.g. `[testlink](/demo/example-site)`
- Overwrite the HTML base in your site configuration with `geekblogOverwriteHTMLBase = true` and use the relative path e.g. `[testlink](example-site)`

But there is another special case if you use `geekblogOverwriteHTMLBase = true`. If you use anchors in your Markdown links you have to ensure to always include the page path. As an example `[testlink](#some-anchor)` will resolve to `http://localhost/demo/#some-anchor` and not automatically include the current page!

## Known Limitations

### Minify HTML results in spacing issues

Using `hugo --minify` without further configuration or using other minify tools that also minify HTML files might result in spacing issues in the theme and is **not** supported.

After some testing we decided to not spend effort to fix this issue for now as the benefit is very low. There are some parts of the theme where spaces between HTML elements matters but were stripped by minify tools. Some of these issues are related to <!-- spellchecker-disable -->[gohugoio/hugo#6892](https://github.com/gohugoio/hugo/issues/6892).<!-- spellchecker-enable --> While recommendation like "don't depend on whitespace in your layout" sounds reasonable, it seems to be not that straight forward especially for something like embedded icons into the text flow.

If you still want to use Hugo's minify flag you should at least exclude HTML file in your site [configuration](https://gohugo.io/getting-started/configuration/#configure-minify):

```toml
[minify]
  disableHTML = true
```

## Whats next?

There are a lot more things to discover. To get the most out of the Theme we have collected interesting posts covering more advanced topics:

- [Configuration](/posts/usage/configuration/)
- [Menus](/posts/usage/menus/)
- **Features**
  - [Code Blocks](/posts/features/code-blocks/)
  - [Dark Mode](/posts/features/dark-mode/)
  - [Icon Sets](/posts/features/icon-sets/)
  - [Theming](/posts/features/theming/)
  - [Authors](/posts/features/authors/)
  - [Sticky Posts](/posts/features/sticky/)
- [Shortcodes](/posts/advanced/shortcodes/)
  - [Advanced Images](/posts/post-with-images/)
  - [Includes](/posts/advanced/includes/)
  - [Table of Content](/posts/advanced/toc/)
- **Asciidoc**
  - [Admonitions](/posts/asciidoc/admonitions/)
  - [Admonition Icons](/posts/asciidoc/admonition-icons/)
