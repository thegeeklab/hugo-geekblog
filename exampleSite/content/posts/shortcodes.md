---
title: Shortcodes
date: 2021-05-23T20:00:00+01:00
authors:
  - john-doe
tags:
  - Documentation
  - Shortcodes
geekblogToC: 1
weight: 5
---

<!-- markdownlint-disable MD024 -->

The theme bundles some handy shortcodes that tries to cover common situations.

<!--more-->

{{< toc >}}

## Buttons

Buttons are styled links that can lead to local page or external link.

```tpl
{{</* button relref="/" [class="...", size="large|regular"] */>}}Get Home{{</* /button */>}}
{{</* button href="https://github.com/thegeeklab/hugo-geekblog" */>}}Contribute{{</* /button */>}}
```

### Example

{{< button relref="/" >}}Get Home{{< /button >}}
{{< button href="https://github.com/thegeeklab/hugo-geekblog" >}}Contribute{{< /button >}}

## Columns

The Columns shortcode can be used to organize content side-by-side (horizontally) for better readability.

```html
{{</* columns */>}} <!-- begin columns block -->
# Left Content
Dolor sit, sumo unique argument um no ...

<---> <!-- magic sparator, between columns -->

# Mid Content
Dolor sit, sumo unique argument um no ...

<---> <!-- magic sparator, between columns -->

# Right Content
Dolor sit, sumo unique argument um no ...
{{</* /columns */>}}
```

### Example

{{< columns >}}

#### Left

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates
investiture. Ornateness bland it ex enc, est yeti am bongo detract re. Pro ad prompts
feud gait, quid exercise emeritus bis e. In pro quints consequent, denim fastidious
copious quo ad. Stet probates in duo.

<--->

#### Mid Content

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates
investiture. Ornateness bland it ex enc, est yeti am bongo detract re.

<--->

#### Right Content

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates
investiture. Ornateness bland it ex enc, est yeti am bongo detract re. Pro ad prompts
feud gait, quid exercise emeritus bis e. In pro quints consequent, denim fastidious
copious quo ad. Stet probates in duo.
{{< /columns >}}

## Emojify

Emoji can be enabled in a Hugo project in a number of ways.

The [emojify](https://gohugo.io/functions/emojify/) function can be called directly in templates or [Inline Shortcodes](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes). To enable emoji globally, set `enableEmoji` to `true` in your site's [configuration](https://gohugo.io/getting-started/configuration/) and then you can type emoji shorthand codes directly in content files:

| Result                            | Inline            | Shortcode                               |
| --------------------------------- | ----------------- | --------------------------------------- |
| {{< emojify ":see_no_evil:" >}}   | `:see_no_evil:`   | `{{</* emojify ":see_no_evil:" */>}}`   |
| {{< emojify ":hear_no_evil:" >}}  | `:hear_no_evil:`  | `{{</* emojify ":hear_no_evil:" */>}}`  |
| {{< emojify ":speak_no_evil:" >}} | `:speak_no_evil:` | `{{</* emojify ":speak_no_evil:" */>}}` |

The [Emoji cheat sheet](http://www.emoji-cheat-sheet.com/) is a useful reference for emoji shorthand codes.

{{< hint info >}}
**Info**\
The above steps enable Unicode Standard emoji characters and sequences in Hugo, however the rendering of these glyphs depends on the browser and the platform. To style the emoji you can either use a third party emoji font or a font stack.
{{< /hint >}}

**Styling:**

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< highlight html "linenos=table" >}}
.emoji {
  font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
}
{{< /highlight >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

## Expand

Expand shortcode can help to decrease clutter on screen by hiding part of text. Expand content by clicking on it.

### Example

#### Default

```tpl
{{</* expand */>}}
## Markdown content
Dolor sit, sumo unique ...
{{</* /expand */>}}
```

{{< expand >}}

##### Markdown content

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture. Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /expand >}}

#### With Custom Label

```tpl
{{</* expand "Custom Label" "..." */>}}
## Markdown content
Dolor sit, sumo unique ...
{{</* /expand */>}}
```

{{< expand "Custom Label" "..." >}}

##### More markdown

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates
investiture. Ornateness bland it ex enc, est yeti am bongo detract re. Pro ad prompts
feud gait, quid exercise emeritus bis e. In pro quints consequent, denim fastidious
copious quo ad. Stet probates in duo.
{{< /expand >}}

## Hint

Hint shortcode can be used as hint/alerts/notification block.
There are four colors to choose: `info`, `ok`, `warning` and `danger`.

```tpl
{{</* hint [info|warning|danger] */>}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
 Ornateness bland it ex enc, est yeti am bongo detract re.
{{</* /hint */>}}
```

### Example

{{< hint info >}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint ok >}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint warning >}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint danger >}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

## Icon

Simple shortcode to include icons from SVG sprites outside of menus.

```tpl
{{</* icon "thumbs-up" */>}}
```

### Example

| Result                     | Usage                            |
| -------------------------- | -------------------------------- |
| {{< icon "thumbs-up" >}}   | `{{</* icon "thumbs-up" */>}}`   |
| {{< icon "thumbs-down" >}} | `{{</* icon "thumbs-down" */>}}` |
| {{< icon "laugh" >}}       | `{{</* icon "laugh" */>}}`       |
| {{< icon "lemon" >}}       | `{{</* icon "lemon" */>}}`       |
| {{< icon "moon" >}}        | `{{</* icon "moon" */>}}`        |

## Tabs

Tabs let you organize content by context, for example installation instructions for each supported platform.

```tpl
{{</* tabs "uniqueid" */>}}
{{</* tab "macOS" */>}} # macOS Content {{</* /tab */>}}
{{</* tab "Linux" */>}} # Linux Content {{</* /tab */>}}
{{</* tab "Windows" */>}} # Windows Content {{</* /tab */>}}
{{</* /tabs */>}}
```

### Example

{{< tabs "uniqueid" >}}
{{< tab "macOS" >}}

#### macOS

This is tab **macOS** content.

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates
investiture. Ornateness bland it ex enc, est yeti am bongo detract re. Pro ad
prompts feud gait, quid exercise emeritus bis e. In pro quints consequent, denim
fastidious copious quo ad. Stet probates in duo.
{{< /tab >}}

{{< tab "Linux" >}}

#### Linux

This is tab **Linux** content.

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates
investiture. Ornateness bland it ex enc, est yeti am bongo detract re. Pro ad
prompts feud gait, quid exercise emeritus bis e. In pro quints consequent, denim
fastidious copious quo ad. Stet probates in duo.
{{< /tab >}}

{{< tab "Windows" >}}

#### Windows

This is tab **Windows** content.

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates
investiture. Ornateness bland it ex enc, est yeti am bongo detract re. Pro ad
prompts feud gait, quid exercise emeritus bis e. In pro quints consequent.
{{< /tab >}}
{{< /tabs >}}
