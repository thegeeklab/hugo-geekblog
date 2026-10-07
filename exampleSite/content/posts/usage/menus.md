---
title: Menus
date: 2021-05-23T20:00:00+01:00
authors:
  - john-doe
tags:
  - Documentation
  - Usage
---

The theme supports different kinds of menus.

<!--more-->

## Extra menu

If you want to customize the header and footer menu, this can be achieved by using a data file written in YAML and placed at `data/menu/extra.yaml`.

**Example:**

```yaml
---
header:
  - name: Github Profile
    icon: gblog_github
    ref: "https://github.com/xoxys"
    external: true

footer:
  - name: About
    icon: gblog_email
    ref: "/about"
```
