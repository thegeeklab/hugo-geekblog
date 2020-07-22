---
title: "How to use the theme"
date: 2020-07-15T20:00:00+02:00
authors:
  - john-doe
tags:
  - Documentation
weight: 1
---

This post works as a documentation for the features of the theme.

<!--more-->

[![Build Status](https://img.shields.io/drone/build/xoxys/hugo-geekblog?logo=drone)](https://cloud.drone.io/xoxys/hugo-geekblog)
[![Hugo Version](https://img.shields.io/badge/hugo-0.65-blue.svg)](https://gohugo.io)
[![GitHub release](https://img.shields.io/github/v/release/xoxys/hugo-geekblog)](https://github.com/xoxys/hugo-geekblog/releases/latest)
[![License: MIT](https://img.shields.io/github/license/xoxys/hugo-geekblog)](https://github.com/xoxys/hugo-geekblog/blob/master/LICENSE)

<!-- spellchecker-disable -->
{{< toc >}}
<!-- spellchecker-enable -->

## Features

- Clean and simple design
- Light and mobile-friendly
- Easy customization
- Zero initial configuration
- Handy shortcodes
- Simple sticky posts
- Content tags
- Multiple authors

## Configuration

### Site configuration

{{< tabs "site-config" >}}
{{< tab "TOML" >}}

```Toml
# ...

theme = "hugo-geekblog"

# Required to get well formatted code blocks
pygmentsUseClasses = true
pygmentsCodeFences = true

disablePathToLower = true
enableGitInfo = true

[markup]
  [goldmark]
    [renderer]
      unsafe = true
  [tableOfContents]
    startLevel = 1
    endLevel = 9

[taxonomies]
  author = authors
  tag = tags

[mediaTypes]
  ["application/atom+xml"]
    suffixes = ["xml"]

[outputFormats]
  [Atom]
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
  # (Optional, default 6) Set how many table of contents levels to be showed on page.
  # Use false to hide ToC, note that 0 will default to 6 (https://gohugo.io/functions/default/)
  # You can also specify this parameter per page in front matter.
  geekblogToC = 3

  # (Optional, default static/brand.svg) Set the path to a logo for the Geekblog
  # relative to your 'static/' folder.
  geekblogLogo = logo.png

  # (Optional, default none) Add a link to your Legal Notice page to the site footer.
  # It can be either a remote url or a local file path relative to your content directory.
  geekblogLegalNotice = "https://blog.example.com/legal"

  # (Optional, default none) Add a link to your Privacy Policy page to the site footer.
  # It can be either a remote url or a local file path relative to your content directory.
  geekblogPrivacyPolicy = "/privacy"

  # (Optional, default true) Add an anchor link to headlines.
  geekblogAnchor = true

  # (Optional, default false) Move anchor link to the left side of headlines.
  geekblogAnchorLeft = false

  # (Optional, default true) Copy anchor url to clipboard on click.
  geekblogAnchorCopy = true

  # (Optional, default none) Sites main author, used for the site author filed in Atom feeds.
  geekblogAuthor = "john-doe"

  # (Optional, default none) Adds a "Hosted on <provider>" line to the footer.
  # Could be used if you want to give credits to your hosting provider.
  [geekblogHostedOn]
    name = Uberspace
    link = "https://uberspace.de/en/"

  # (Optional, default none) Adds a "Content licensed under <license>" line to the footer.
  # Could be used if you want to define a default license for your content.
  [geekblogContentLicense]
    name = "CC BY-SA 4.0"
    link = "https://creativecommons.org/licenses/by-sa/4.0/"

  # (Optional, default none) Default meta description used for the start page and as a fallback for
  # every site without an own description.
  geekblogDescription = "This is my personal blog about tech."

  # (Optional, default none) Default meta keywords used for the start page and as a fallback for
  # every site without own keywords. Note: Meta keywords seems to be ignored by most modern search engines.
  geekblogKeywords =
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

params:
  # (Optional, default 6) Set how many table of contents levels to be showed on page.
  # Use false to hide ToC, note that 0 will default to 6 (https://gohugo.io/functions/default/)
  # You can also specify this parameter per page in front matter.
  geekblogToC: 3

  # (Optional, default static/brand.svg) Set the path to a logo for the Geekblog
  # relative to your 'static/' folder.
  geekblogLogo: logo.png

  # (Optional, default none) Add a link to your Legal Notice page to the site footer.
  # It can be either a remote url or a local file path relative to your content directory.
  geekblogLegalNotice: https://blog.example.com/legal

  # (Optional, default none) Add a link to your Privacy Policy page to the site footer.
  # It can be either a remote url or a local file path relative to your content directory.
  geekblogPrivacyPolicy: /privacy

  # (Optional, default true) Add an anchor link to headlines.
  geekblogAnchor: true

  # (Optional, default false) Move anchor link to the left side of headlines.
  geekblogAnchorLeft: false

  # (Optional, default true) Copy anchor url to clipboard on click.
  geekblogAnchorCopy: true

  # (Optional, default none) Sites main author, used for the site author filed in Atom feeds.
  geekblogAuthor: john-doe

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

  # (Optional, default none) Default meta description used for the start page and as a fallback for
  # every site without an own description.
  geekblogDescription: "This is my personal blog about tech."

  # (Optional, default none) Default meta keywords used for the start page and as a fallback for
  # every site without own keywords. Note: Meta keywords seems to be ignored by most modern search engines.
  geekblogKeywords: []
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
tags = ["Open Source", "DevOps"]

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
  - DevOps

# Set how many table of contents levels to be showed on page.
geekblogToC: 3

# Set true to hide page or section from side menu (file-tree menu only).
geekblogHidden: true

# Add an anchor link to headlines.
geekblogAnchor: true
```

{{< /tab >}}
{{< /tabs >}}
