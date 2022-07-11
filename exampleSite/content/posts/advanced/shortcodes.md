---
title: Shortcodes
date: 2021-05-23T20:00:00+01:00
authors:
  - john-doe
tags:
  - Documentation
  - Shortcodes
geekblogToC: 1
---

<!-- markdownlint-disable MD024 -->

The theme bundles some handy shortcodes that tries to cover common situations.

<!--more-->

{{< toc >}}

## Buttons

Buttons are styled links that can lead to local page or external link.

<!-- prettier-ignore -->
```tpl
{{</* button relref="/" [class="...", size="large|regular"] */>}}Get Home{{</* /button */>}}
{{</* button href="https://github.com/thegeeklab/hugo-geekblog" */>}}Contribute{{</* /button */>}}
```

### Example

{{< button relref="/" >}}Get Home{{< /button >}}
{{< button href="https://github.com/thegeeklab/hugo-geekblog" >}}Contribute{{< /button >}}

## Columns

The Columns shortcode can be used to organize content side-by-side (horizontally) for better readability.

<!-- prettier-ignore -->
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

The [Emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet) is a useful reference for emoji shorthand codes.

{{< hint type=note >}}
**Info**\
The above steps enable Unicode Standard emoji characters and sequences in Hugo, however the rendering of these glyphs depends on the browser and the platform. To style the emoji you can either use a third party emoji font or a font stack.
{{< /hint >}}

**Styling:**

<!-- spellchecker-disable -->
<!-- prettier-ignore -->
{{< highlight html "linenos=table" >}}
.emoji {
  font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
}
{{< /highlight >}}

<!-- spellchecker-enable -->

## Expand

Expand shortcode can help to decrease clutter on screen by hiding part of text. Expand content by clicking on it.

### Example

#### Default

<!-- prettier-ignore -->
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

<!-- prettier-ignore -->
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

Attributes:

| Name             | Usage                                                                                   | default               |
| ---------------- | --------------------------------------------------------------------------------------- | --------------------- |
| type             | color types to choose from                                                              | note                  |
| icon (optional)  | custom icon to use                                                                      | undefined (type name) |
| title (optional) | custom icon to use, need to be an icon from an [SVG sprite](/posts/features/icon-sets/) | undefined (type name) |

Syntax:

<!-- prettier-ignore-start -->
```tpl
{{</* hint type=[note|tip|important|caution|warning] (icon=gblog_github) (title=GitHub) */>}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
 Ornateness bland it ex enc, est yeti am bongo detract re.
{{</* /hint */>}}
```
<!-- prettier-ignore-end -->

### Example

{{< hint type=note >}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint type=tip >}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint type=important >}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint type=caution >}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint type=warning >}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

Example with a custom icon and title:

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< hint type=note icon=gblog_github title=GitHub >}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

## Icon

Simple shortcode to include icons from SVG sprites outside of menus.

<!-- prettier-ignore -->
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

<!-- prettier-ignore -->
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

## Boxes

Boxes can be used to create a simple grid.

### Attributes

| Name             | Description                                                                         | default   |
| ---------------- | ----------------------------------------------------------------------------------- | --------- |
| size             | size of each box (regular\|large)                                                   | regular   |
| icon (optional)  | title bar icon, need to be an icon from an [SVG sprite](/posts/features/icon-sets/) | undefined |
| title (optional) | title bar text                                                                      | undefined |

### Usage

<!-- prettier-ignore -->
```tpl
{{</* boxes "contact" */>}}
{{</* box size=large [title=E-Mail icon=gblog_email] */>}}mail@example.com{{</* /box */>}}
{{</* box size=large title=Matrix icon=gblog_matrix */>}}@john:example.com{{</* /box */>}}
{{</* box size=large title=XMPP icon=gblog_xmpp */>}}john@example.com{{</* /box */>}}
{{</* box size=large title=Others */>}}You can also find us on the Fediverse.{{</* /box */>}}
{{</* /boxes */>}}
```

### Example

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< boxes "contact" >}}
{{< box size=large title=E-Mail icon=gblog_email >}}mail@example.com{{< /box >}}
{{< box size=large title=Matrix icon=gblog_matrix >}}@john:example.com{{< /box >}}
{{< box size=large title=XMPP icon=gblog_xmpp >}}john@example.com{{< /box >}}
{{< box size=large title=Others >}}You can also find us on the Fediverse.{{< /box >}}
{{< /boxes >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

## Mermaid

[Mermaid](https://mermaidjs.github.io/) is library for generating SVG charts and diagrams from text.

<!--more-->

### Example

{{< columns >}}

<!-- prettier-ignore -->
```tpl
{{</* mermaid class="text-center"*/>}}
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end
{{</* /mermaid */>}}
```

<--->

<!-- spellchecker-disable -->
<!-- prettier-ignore -->
{{< mermaid class="text-center" >}}
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end
{{< /mermaid >}}

<!-- spellchecker-enable -->

{{< /columns >}}

## KaTeX

[KaTeX](https://katex.org/) shortcode let you render math typesetting in markdown document.

### Example

{{< columns >}}

```latex
{{</* katex [display] [class="text-center"] */>}}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
{{</* /katex */>}}
```

<--->

<!-- spellchecker-disable -->
<!-- prettier-ignore -->
{{< katex display >}}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
{{< /katex >}}

<!-- spellchecker-enable -->

{{< /columns >}}

KaTeX can also be used inline, for example {{< katex >}}\pi(x){{< /katex >}} or used with the `display` parameter (e.g. `display: block`):

<!-- spellchecker-disable -->
<!-- prettier-ignore -->
{{< katex display >}}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
{{< /katex >}}

<!-- spellchecker-enable -->

Text continues here.
