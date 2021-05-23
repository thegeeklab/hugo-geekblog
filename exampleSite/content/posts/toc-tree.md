---
title: ToC Tree
date: 2021-05-23T20:00:00+01:00
authors:
  - john-doe
tags:
  - Documentation
  - Shortcodes
weight: 10
---

The `toc-tree` shortcode will generate a Table of Content from a section file tree of your content directory. The root of the resulting ToC will be the page on which you define the shortcode.

```tpl
{{</* toc-tree */>}}
```

## Example

As said, the root will be the site on which the shortcode was used, you can see a demo including nesting in the [ToC Tree](/toc-tree/) section.
