---
title: Simple sticky posts
date: 2020-06-13T00:06:00+02:00
authors:
  - john-doe
tags:
  - Documentation
  - Features
weight: 1
---

Sticky (or pinned) posts can be used to permanently pin important posts to the top of the post list. The implementation is pretty simple and handled by `weight: 1` in a post front matter. As there is no other logic to identify sticky posts you should not use negative values for weight as this will result in posts listed earlier.

<!--more-->

**Example:**

```YAML
---
title: Simple sticky posts
weight: 1
date: 2020-06-13T00:06:00+02:00
authors:
  - john-doe
---
```
