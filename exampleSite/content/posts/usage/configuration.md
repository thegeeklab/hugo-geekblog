---
title: Configuration
date: 2021-05-23T20:00:00+01:00
authors:
  - john-doe
tags:
  - Documentation
  - Usage
---

Overview of all available site and page configuration options provided by the theme.

<!--more-->

{{< toc >}}

## Configuration

### Site configuration

{{< tabs "site-config" >}}
{{< tab "TOML" >}}

```toml
baseURL = "http://localhost"
title = "Geekblog"
theme = "hugo-geekblog"

[pagination]
pagerSize = 5

pluralizeListTitles = false

# Required to get well formatted code blocks
pygmentsUseClasses = true
pygmentsCodeFences = true
disablePathToLower = true
enableGitInfo = true

# Required if you want to render robots.txt template
enableRobotsTXT = true

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

  # (Optional, default none) Sites main author.
  geekblogAuthor = "john-doe"

  # (Optional, default posts) Set the name of the default content section.
  geekblogContentSection = "my-pages"

  # (Optional, default true) Enable or disable image lazy loading for images rendered
  # by the 'img' shortcode.
  geekblogImageLazyLoading = true

  # (Optional, default false) Set HTMl <base> to .Site.Home.Permalink if enabled. It might be required
  # if a subdirectory is used within Hugo's BaseURL.
  # See https://developer.mozilla.org/de/docs/Web/HTML/Element/base.
  geekblogOverwriteHTMLBase = false

  # (Optional, default true) Enable or disable the JavaScript based color theme toggle switch. The CSS based
  # user preference mode still works.
  geekblogDarkModeToggle = false

  # (Optional, default true) Enable or disable adding tags automatically to the main menu.
  geekblogTagsToMenu = true

  # (Optional, default false) Auto-decrease brightness of images and add a slightly grayscale to avoid
  # bright spots while using the dark mode.
  geekblogDarkModeDim = false

  # (Optional, default false) Enforce code blocks to always use the dark color theme.
  geekblogDarkModeCode = false

  # (Optional, default true) Display a "Back to top" link in the site footer.
  geekblogBackToTop = true

  # (Optional, default ["taxonomy", "section", "term", "404"])
  # Page types to exclude from the sitemap and set to noindex,nofollow.
  geekblogSeoIgnore = ["taxonomy", "section"]

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

```yaml
---
baseURL: "http://localhost"
title: "Geekblog"
theme: "hugo-geekblog"

pagination:
  pagerSize: 5

pluralizeListTitles: false

# Required to get well formatted code blocks
pygmentsUseClasses: true
pygmentsCodeFences: true
disablePathToLower: true
enableGitInfo: true

# Required if you want to render robots.txt template
enableRobotsTXT: true

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
    baseName: "feed"
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

  # (Optional, default none) Sites main author.
  geekblogAuthor: john-doe

  # (Optional, default posts) Set the name of the default content section.
  geekblogContentSection: "my-pages"

  # (Optional, default true) Enable or disable image lazy loading for images rendered
  # by the 'img' shortcode.
  geekblogImageLazyLoading: true

  # (Optional, default false) Set HTMl <base> to .Site.Home.Permalink if enabled. It might be required
  # if a subdirectory is used within Hugo's BaseURL.
  # See https://developer.mozilla.org/de/docs/Web/HTML/Element/base.
  geekblogOverwriteHTMLBase: false

  # (Optional, default true) Enable or disable the JavaScript based color theme toggle switch. The CSS based
  # user preference mode still works.
  geekblogDarkModeToggle: false

  # (Optional, default true) Enable or disable adding tags automatically to the main menu.
  geekblogTagsToMenu: true

  # (Optional, default false) Auto-decrease brightness of images and add a slightly grayscale to avoid
  # bright spots while using the dark mode.
  geekblogDarkModeDim: false

  # (Optional, default false) Enforce code blocks to always use the dark color theme.
  geekblogDarkModeCode:
    false

    # (Optional, default true) Display a "Back to top" link in the site footer.
  geekblogBackToTop: true

  # (Optional, default ["taxonomy", "section", "term", "404"])
  # Page types to exclude from the sitemap and set to noindex,nofollow.
  geekblogSeoIgnore:
    - "taxonomy"
    - "section"

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

```toml
# Title of your post. If not set, filename will be used.
title = My first post

# Hugo predefined front matter variable, to re-arrange items in file-tree menu.
# See weights section of https://gohugo.io/content-management/front-matter/#predefined
# Set weight to 1 to mark this post as sticky post.
weight = 1

# List of authors of the post.
authors = ["john-doe"]

# Tags for this post.
tags = ["Open Source"]

# Set how many table of contents levels to be showed on page.
geekblogToC = 3

# Add an anchor link to headlines.
geekblogAnchor = true
```

{{< /tab >}}
{{< tab "YAML" >}}

```yaml
# Title of your post. If not set, filename will be used.
title: My first post

# Set weight to 1 to mark this post as sticky post.
weight: 1

# List of authors of the post.
authors:
  - john-doe

# Tags for this post.
tags:
  - Open Source

# Set how many table of contents levels to be showed on page.
geekblogToC: 3

# Add an anchor link to headlines.
geekblogAnchor: true
```

{{< /tab >}}
{{< /tabs >}}
