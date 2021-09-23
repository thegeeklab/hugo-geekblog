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

### Extra menu

If you want to customize the menus (header and footer), this can be achieved by a data file. This file needs to be written in YAML and placed at data/menu/extra.yml.

**Example:**

```Yaml
---
header:
  - name: Github Profile
    icon: gblog_github
    ref: "https://github.com/xoxys"
    external: true

footer:
  - name: Contact
    icon: gblog_email
    ref: "/contact"
```
