---
title: Avatar Images
date: 2024-04-27T21:00:00+02:00
authors:
  - john-doe
tags:
  - Documentation
  - Shortcodes
resources:
  - name: avatar
    src: "images/avatar.jpg"
    title: "Avatar"
---

The avatar shortcode is another custom image shortcode.

<!--more-->

## Usage

Define a resource in the page front matter.

<!-- spellchecker-disable -->

```md
---
resources:
  - name: avatar
    src: "images/avatar.jpg"
    title: "Avatar"
---

{{</* avatar name="avatar" */>}}
```

<!-- spellchecker-enable -->

## Attributes

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< propertylist name=shortcode-avatar sort=name order=asc >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

## Example

<!-- spellchecker-disable -->

{{< avatar name=avatar size="small" >}}

<!-- spellchecker-enable -->
