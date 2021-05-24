---
title: Getting Started
date: 2020-07-15T20:00:00+02:00
authors:
  - john-doe
tags:
  - Documentation
weight: 1
---

Geekblog is a simple Hugo theme for personal blogs. It is intentionally designed as a fast and lean theme and may not fit the requirements of complex projects. If a more feature-complete theme is required there are a lot of got alternatives out there. This post helps you to get started with the Geekblog theme, including initial setup and basic configuration.

<!--more-->

[![Build Status](https://img.shields.io/drone/build/thegeeklab/hugo-geekblog?logo=drone&server=https%3A%2F%2Fdrone.thegeeklab.de)](https://drone.thegeeklab.de/thegeeklab/hugo-geekblog)
[![Hugo Version](https://img.shields.io/badge/hugo-0.65-blue.svg)](https://gohugo.io)
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

## Install requirements

You need a recent version of Hugo for local builds and previews of sites that use Geekblog. As we are using [gulp](https://gulpjs.com/) as pre-processor the normal version of Hugo is sufficient. If you prefer the extended version of Hugo anyway this will work as well. For comprehensive Hugo documentation, see [gohugo.io](https://gohugo.io/documentation/).

If you want to use the theme from a cloned branch instead of a release tarball you'll need to install `gulp` locally and run the default pipeline once to create all required assets.

```Shell
# install required packages from package.json
npm install

# run gulp pipeline to build required assets
npx gulp default
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

3. Install the Geekblog theme from a [release bundle](#option-1-download-pre-build-release-bundle) (recommended) or form [Git branch](#option-2-clone-the-github-repository).

4. Create the minimal required Hugo configuration `config.toml`. For all configuration options see [here](#configuration).

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
       baseName = "atom"
       isPlainText = false
       rel = "alternate"
       isHTML = false
       noUgly = true
       permalinkable = false

   [outputFormats.outputs]
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
   curl -L https://github.com/gohugoio/hugoBasicExample/archive/main.tar.gz | tar -xz --exclude "config*" --exclude "LICENSE" --exclude "README*" --strip-components=1
   ```

### Option 1: Download pre-build release bundle

Download and extract the latest release bundle into the theme directory.

```Shell
mkdir -p themes/hugo-geekblog/
curl -L https://github.com/thegeeklab/hugo-geekblog/releases/latest/download/hugo-geekblog.tar.gz | tar -xz -C themes/hugo-geekblog/ --strip-components=1
```

### Option 2: Clone the GitHub repository

{{< hint info >}}
**Info**\
Keep in mind this method is not recommended and needs some extra steps to get it working.
If you want to use the Theme as submodule keep in mind that your build process need to
run the described steps as well.
{{< /hint >}}

Clone the Geekblog git repository.

```Shell
git clone https://github.com/thegeeklab/hugo-geekblog.git themes/geekblog
```

Build required theme assets e.g. CSS files and SVG sprites with `gulp`.

```Shell
npx gulp default
```

## Configuration

### Site configuration

{{< tabs "site-config" >}}
{{< tab "TOML" >}}

```Toml
baseURL = "http://localhost"
title = "Geekblog"
theme = "hugo-geekblog"

# Required to get well formatted code blocks
pygmentsUseClasses = true
pygmentsCodeFences = true
disablePathToLower = true
enableGitInfo = true

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
    # https://validator.w3.org/feed/docs/atom.html#whatIsAtom
    name = "Atom"
    mediaType = "application/atom+xml"
    # generated file = <baseName>.<mediaType."application/atom+xml".suffixes[0]> = atom.xml
    baseName = "atom"
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

[params]
  subtitle = "Blog about my favorite topics"
  description = "This is my personal blog about tech."
  keywords = []
  images = []

  # (Optional, default static/brand.svg) Set the path to a logo for the Geekblog
  # relative to your 'static/' folder.
  logo = "logo.png"

  # (Optional, default 6) Set how many table of contents levels to be showed on page.
  # Use false to hide ToC, note that 0 will default to 6 (https://gohugo.io/functions/default/)
  # You can also specify this parameter per page in front matter.
  geekblogToC = 3

  # (Optional, default none) Add a link to your Legal Notice page to the site footer.
  # It can be either a remote url or a local file path relative to your content directory.
  geekblogLegalNotice = "https://blog.example.com/legal"

  # (Optional, default none) Add a link to your Privacy Policy page to the site footer.
  # It can be either a remote url or a local file path relative to your content directory.
  geekblogPrivacyPolicy = "/privacy"

  # (Optional, default true) Add an anchor link to headlines.
  geekblogAnchor = true

  # (Optional, default true) Copy anchor url to clipboard on click.
  geekblogAnchorCopy = true

  # (Optional, default none) Sites main author.
  geekblogAuthor = "john-doe"

  # (Optional, default posts) Set the name of the default content section.
  geekblogContentSection = "my-pages"

  # (Optional, default true) Enable or disable image lazy loading for images rendered
  # by the 'img' shortcode.
  geekblogImageLazyLoading = true

  # (Optional, default false) Set HTMl <base> to .Site.BaseURL if enabled. It might be required
  # if a subdirectory is used within Hugo's BaseURL.
  # See https://developer.mozilla.org/de/docs/Web/HTML/Element/base.
  geekblogOverwriteHTMLBase = false

  # (Optional, default none) Adds a "Hosted on <provider>" line to the footer.
  # Could be used if you want to give credits to your hosting provider.
  [params.geekblogHostedOn]
    name = "Uberspace"
    link = "https://uberspace.de/en/"

  # (Optional, default none) Adds a "Content licensed under <license>" line to the footer.
  # Could be used if you want to define a default license for your content.
  [params.geekblogContentLicense]
    name = "CC BY-SA 4.0"
    link = "https://creativecommons.org/licenses/by-sa/4.0/"
```

{{< /tab >}}
{{< tab "YAML" >}}

```Yaml
---
# ...

theme: hugo-geekblog

# Required to get well formatted code blocks
pygmentsUseClasses: true
pygmentsCodeFences: true
disablePathToLower: true
enableGitInfo: true

markup:
  goldmark:
    renderer:
      unsafe: true
  tableOfContents:
    startLevel: 1
    endLevel: 9

taxonomies:
  author: authors
  tag: tags

mediaTypes:
  "application/atom+xml":
    suffixes:
      - "xml"

outputFormats:
  Atom:
    # https://validator.w3.org/feed/docs/atom.html#whatIsAtom
    name: "Atom"
    mediaType: "application/atom+xml"
    # generated file: <baseName>.<mediaType."application/atom+xml".suffixes[0]> = atom.xml
    baseName: "atom"
    isPlainText: false
    rel: "alternate"
    isHTML: false
    noUgly: true
    permalinkable: false

outputs:
  home:
    - HTML
    - ATOM
  page:
    - HTML
  section:
    - HTML
  taxonomy:
    - HTML
  term:
    - HTML
    - ATOM

# Required if you want to render robots.txt template
enableRobotsTXT: true

params:
  subtitle: "Blog about my favorite topics"
  description: "This is my personal blog about tech."
  keywords: []
  images: []

  # (Optional, default static/brand.svg) Set the path to a logo for the Geekblog
  # relative to your 'static/' folder.
  logo: logo.png

  # (Optional, default 6) Set how many table of contents levels to be showed on page.
  # Use false to hide ToC, note that 0 will default to 6 (https://gohugo.io/functions/default/)
  # You can also specify this parameter per page in front matter.
  geekblogToC: 3

  # (Optional, default none) Add a link to your Legal Notice page to the site footer.
  # It can be either a remote url or a local file path relative to your content directory.
  geekblogLegalNotice: https://blog.example.com/legal

  # (Optional, default none) Add a link to your Privacy Policy page to the site footer.
  # It can be either a remote url or a local file path relative to your content directory.
  geekblogPrivacyPolicy: /privacy

  # (Optional, default true) Add an anchor link to headlines.
  geekblogAnchor: true

  # (Optional, default true) Copy anchor url to clipboard on click.
  geekblogAnchorCopy: true

  # (Optional, default none) Sites main author.
  geekblogAuthor: john-doe

  # (Optional, default posts) Set the name of the default content section.
  geekblogContentSection: "my-pages"

  # (Optional, default true) Enable or disable image lazy loading for images rendered
  # by the 'img' shortcode.
  geekblogImageLazyLoading: true

  # (Optional, default false) Set HTMl <base> to .Site.BaseURL if enabled. It might be required
  # if a subdirectory is used within Hugo's BaseURL.
  # See https://developer.mozilla.org/de/docs/Web/HTML/Element/base.
  geekblogOverwriteHTMLBase: false

  # (Optional, default none) Adds a "Hosted on <provider>" line to the footer.
  # Could be used if you want to give credits to your hosting provider.
  geekblogHostedOn:
    name: Uberspace
    link: https://uberspace.de/en/

  # (Optional, default none) Adds a "Content licensed under <license>" line to the footer.
  # Could be used if you want to define a default license for your content.
  geekblogContentLicense:
    name: CC BY-SA 4.0
    link: https://creativecommons.org/licenses/by-sa/4.0/
```

{{< /tab >}}
{{< /tabs >}}

### Page configuration

{{< tabs "page-config" >}}
{{< tab "TOML" >}}

```Toml
# Title of your post. If not set, filename will be used.
title = My first post

# Set weigth to 1 to mark this post as sticky post.
weight = 1

# List of authors of the post.
authors = ["john-doe"]

# Tags for this post.
tags = ["Open Source"]

# Set how many table of contents levels to be showed on page.
geekblogToC = 3

# Set true to hide page or section from side menu (file-tree menu only).
geekblogHidden = true

# Add an anchor link to headlines.
geekblogAnchor = true
```

{{< /tab >}}
{{< tab "YAML" >}}

```Yaml
# Title of your post. If not set, filename will be used.
title: My first post

# Set weigth to 1 to mark this post as sticky post.
weight: 1

# List of authors of the post.
authors:
  - john-doe

# Tags for this post.
tags:
  - Open Source

# Set how many table of contents levels to be showed on page.
geekblogToC: 3

# Set true to hide page or section from side menu (file-tree menu only).
geekblogHidden: true

# Add an anchor link to headlines.
geekblogAnchor: true
```

{{< /tab >}}
{{< /tabs >}}

## Menus

### Extra menu

If you want to customize the menus (header and footer), this can be achieved by a data file. This file needs to be written in YAML and placed at data/menu/extra.yml.

**Example:**

```Yaml
---
header:
  - name: Github Profile
    icon: github
    ref: "https://github.com/xoxys"
    external: true

footer:
  - name: Contact
    icon: email
    ref: "/contact"
```

## Custom icons

The only supported source for custom icons are SVG sprites. Some icon frameworks provides ready to use sprites e.g. FontAwesome. If the framework don't provide sprites, you can create your own from raw SVG icons. There are a lot of tools available to create sprites, please choose one that fits your need. One solution could be [svgsprit.es](https://svgsprit.es/).

Regardless of which tool (or existing sprite) you choose, there are a few requirements that must be met:

1. The sprite must be a valid **SVG** file.
2. You have to ensure to **hide the sprite**. Apply the predefined class `svg-sprite` or `hidden` to the root element of your sprite or add a small piece of inline CSS e.g. `style="display: none;"`.
3. Save the sprite to the folder `assets/sprites` right beside your `content` folder.

The result of a valid minimal SVG sprite file could look like this:

```XML
<svg class="svg-sprite" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <symbol viewBox="-2.29 -2.29 28.57 28.57" id="arrow_back" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 10.526v2.947H5.755l8.351 8.421-2.105 2.105-12-12 12-12 2.105 2.105-8.351 8.421H24z"/>
    </symbol>
</svg>
```

**Example:**

FontAwesome provides three pre-build sprites included in the regular Web download pack, `sprites/brands.svg`, `sprites/regular.svg` and `sprites/solid.svg`. Choose your sprite to use and copy it to your projects root directory into `assets/sprites`, right beside your `content` folder. The result should look like this:

```Bash
my_projcet/
├── assets
│   └── sprites
│       └── regular.svg
├── config.yaml
├── content
│   ├── _index.md
│   ├── ...
```

That's it! The theme will auto-load all available SVG sprites provided in the assets folder. To use the icons, you need to lookup the id of the icon. An example would be `thumbs-up` {{< icon "thumbs-up" >}}. There is also a [shortcode](/posts/shortcodes/#icon) available

## Build-in icons

The theme bundles just a small set of hand crafted icons.

{{< sprites >}}

## Known Limitations

### Minify HTML results in spacing issues

Using `hugo --minify` without further configuration or using other minify tools that also minify HTML files might result in spacing issues in the theme and is **not** supported.

After some testing we decided to not spend effort to fix this issue for now as the benefit is very low. There are some parts of the theme where spaces between HTML elements matters but were stripped by minify tools. Some of these issues are related to <!-- spellchecker-disable -->[gohugoio/hugo#6892](https://github.com/gohugoio/hugo/issues/6892).<!-- spellchecker-enable --> While recommendation like "don't depend on whitespace in your layout" sounds reasonable, it seems to be not that straight forward especially for something like embedded icons into the text flow.

If you still want to use Hugo's minify flag you should at least exclude HTML file in your site [configuration](https://gohugo.io/getting-started/configuration/#configure-minify):

```toml
[minify]
  disableHTML = true
```
