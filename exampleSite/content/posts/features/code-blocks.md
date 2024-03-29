---
title: Code Blocks
date: 2021-11-21T15:00:00+01:00
authors:
  - john-doe
tags:
  - Documentation
  - Features
---

There are several ways to add code blocks. Most of them work out of the box, only the Hugo short code `<highlight>` needs to be configured to work properly. The theme also provides some additional features like a copy button and an option to set the maximum length of code blocks. Both of these functions and the dependent formatting rely on the `.highlight` CSS class. You must ensure that you always assign a language to your code blocks if you want to use these functions. If you do not want to apply syntax highlighting, you can also specify `plain` or `text` as the language.

{{< toc >}}

## Inline code

To display an inline shortcode use single quotes:

```plain
`some code`
```

**Example:** `some code` with a [`link`](#)

## Code blocks

Code blocks can be uses without language specification:

````markdown
```plain
some code
```
````

**Example:**

```plain
some code
```

... or if you need language specific syntax highlighting:

````markdown
```shell
# some code
echo "Hello world"
```
````

**Example:**

```shell
# some code
echo "Hello World"
```

## Highlight shortcode

Hugo has a build-in shortcode for syntax highlighting. To work properly with this theme, you have to set following options in your site configuration:

{{< tabs "uniqueid" >}}
{{< tab "TOML" >}}

```toml
pygmentsUseClasses=true
pygmentsCodeFences=true
```

{{< /tab >}}
{{< tab "YAML" >}}

```yaml
pygmentsUseClasses: true
pygmentsCodeFences: true
```

{{< /tab >}}
{{< /tabs >}}

You can use it like every other shortcode:

<!-- prettier-ignore -->
```markdown
{{</* highlight Shell "linenos=table" */>}}
# some code
echo "Hello World"
{{</* /highlight */>}}
```

**Example:**

<!-- prettier-ignore-start -->
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
{{< highlight Shell "linenos=table" >}}
# some code
echo "Hello World"
{{< /highlight >}}
<!-- markdownlint-restore -->
<!-- prettier-ignore-end-->
