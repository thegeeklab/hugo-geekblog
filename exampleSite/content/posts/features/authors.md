---
title: Authors
date: 2021-05-23T20:00:00+01:00
authors:
  - john-doe
tags:
  - Documentation
  - Features
---

The theme supports multiple authors. The required information for each author need to be stored in a single [Hugo data template](https://gohugo.io/templates/data-templates/) per author.These files need to be stored in the `data/authors/` directory in your projects root.

<!--more-->

```shell
data/
└── authors
   ├── john-doe.yml
   ├── richard-roe.yml
   └── Special User.yml
```

The name of the file will be used as the reference later, so if you prefer some kind of naming convention this need to covered by the file names. Example authors file:

```yaml
name: John Doe
email: john@example.com
```

With the defined files, you can add as many authors as you want to the front matter of your posts:

```markdown
---
title: Demo Posts
authors:
  - john-doe
  - Special User
---

My first demo post.
```
