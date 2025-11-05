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

<!-- cSpell:disable -->

```md
---
resources:
  - name: avatar
    src: "images/avatar.jpg"
    title: "Avatar"
---

{{</* avatar name="avatar" */>}}
```

<!-- cSpell:enable -->

## Attributes

<!-- prettier-ignore-start -->
<!-- cSpell:disable -->
{{< propertylist name=shortcode-avatar sort=name order=asc >}}
<!-- cSpell:enable -->
<!-- prettier-ignore-end -->

## Example

<!-- cSpell:disable -->

{{< avatar name=avatar size="small" >}}

<!-- cSpell:enable -->
