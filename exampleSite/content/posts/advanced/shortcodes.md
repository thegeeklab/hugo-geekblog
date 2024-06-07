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

### Usage

<!-- prettier-ignore -->
```tpl
{{</* button relref="/" [class="...", size="large|regular"] */>}}Get Home{{</* /button */>}}
{{</* button href="https://github.com/thegeeklab/hugo-geekblog" */>}}Contribute{{</* /button */>}}
```

#### Attributes

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< propertylist name=shortcode-buttons sort=name order=asc >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

### Example

<!-- prettier-ignore-start -->
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
{{< button relref="/" >}}Get Home{{< /button >}}
{{< button href="https://github.com/thegeeklab/hugo-geekblog" >}}Contribute{{< /button >}}
<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

## Columns

The Columns shortcode can be used to organize content side-by-side (horizontally) for better readability.

### Usage

<!-- prettier-ignore -->
```html
{{</* columns [size="small|regular|large"] */>}} <!-- begin columns block -->
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

#### Attributes

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< propertylist name=shortcode-columns sort=name order=asc >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

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

The [emojify](https://gohugo.io/functions/emojify/) function can be called directly in templates or [Inline Shortcodes](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes). To enable emoji globally, set `enableEmoji` to `true` in your site's [configuration](https://gohugo.io/getting-started/configuration/) and then you can type emoji shorthand codes directly in content files.

### Example

| Output                            | Inline            | Shortcode                               |
| --------------------------------- | ----------------- | --------------------------------------- |
| {{< emojify ":see_no_evil:" >}}   | `:see_no_evil:`   | `{{</* emojify ":see_no_evil:" */>}}`   |
| {{< emojify ":hear_no_evil:" >}}  | `:hear_no_evil:`  | `{{</* emojify ":hear_no_evil:" */>}}`  |
| {{< emojify ":speak_no_evil:" >}} | `:speak_no_evil:` | `{{</* emojify ":speak_no_evil:" */>}}` |

The [Emoji cheat sheet](https://github.com/ikatyang/emoji-cheat-sheet) is a useful reference for emoji shorthand codes.

{{< hint type=note >}}
The above steps enable Unicode Standard emoji characters and sequences in Hugo, however the rendering of these glyphs depends on the browser and the platform. To style the emoji you can either use a third party emoji font or a font stack.
{{< /hint >}}

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

### Usage

```tpl
{{</* expand */>}}
### Markdown content
Dolor sit, sumo unique ...
{{</* /expand */>}}
```

It is also possible to use a custom label and symbol.

<!-- prettier-ignore-start -->

```tpl
{{</* expand "Custom Label" "..." */>}}
### More markdown
Dolor sit, sumo unique ...
{{</* /expand */>}}
```

### Example

{{< expand >}}

#### Markdown content

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture. Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /expand >}}

{{< expand "Custom Label" "..." >}}

#### More markdown

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates
investiture. Ornateness bland it ex enc, est yeti am bongo detract re. Pro ad prompts
feud gait, quid exercise emeritus bis e. In pro quints consequent, denim fastidious
copious quo ad. Stet probates in duo.
{{< /expand >}}

## Hint

Hint shortcode can be used as hint/alerts/notification block.

### Usage

<!-- prettier-ignore-start -->
```tpl
{{</* hint type=[note|tip|important|caution|warning] (icon=gblog_github) (title=GitHub) */>}}
**Markdown content**\
Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates investiture.
 Ornateness bland it ex enc, est yeti am bongo detract re.
{{</* /hint */>}}
```
<!-- prettier-ignore-end -->

#### Attributes

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< propertylist name=shortcode-hints sort=name order=asc >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

### Example

{{< hint type=note >}}
**Markdown content**\
Dolor sit, sumo unique `argument um no`. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint type=tip >}}
**Markdown content**\
Dolor sit, sumo unique `argument um no`. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint type=important >}}
**Markdown content**\
Dolor sit, sumo unique `argument um no`. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint type=caution >}}
**Markdown content**\
Dolor sit, sumo unique `argument um no`. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.
{{< /hint >}}

{{< hint type=warning >}}
**Markdown content**\
Dolor sit, sumo unique `argument um no`. Gracie nominal id xiv. Romanesque acclimates investiture.
Ornateness bland it ex enc, est yeti am bongo detract re.

Romanesque acclimates investiture.
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

### Usage

<!-- prettier-ignore-start -->
```tpl
{{</* icon "thumbs-up" */>}}
```
<!-- prettier-ignore-end -->

### Example

| Output                     | Code                             |
| -------------------------- | -------------------------------- |
| {{< icon "thumbs-up" >}}   | `{{</* icon "thumbs-up" */>}}`   |
| {{< icon "thumbs-down" >}} | `{{</* icon "thumbs-down" */>}}` |
| {{< icon "laugh" >}}       | `{{</* icon "laugh" */>}}`       |
| {{< icon "lemon" >}}       | `{{</* icon "lemon" */>}}`       |
| {{< icon "moon" >}}        | `{{</* icon "moon" */>}}`        |

## Tabs

Tabs let you organize content by context, for example installation instructions for each supported platform.

### Usage

<!-- prettier-ignore-start -->
```tpl
{{</* tabs "uniqueid" */>}}
{{</* tab "macOS" */>}} # macOS Content {{</* /tab */>}}
{{</* tab "Linux" */>}} # Linux Content {{</* /tab */>}}
{{</* tab "Windows" */>}} # Windows Content {{</* /tab */>}}
{{</* /tabs */>}}
```
<!-- prettier-ignore-end -->

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

#### Attributes

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< propertylist name=shortcode-boxes sort=name order=asc >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

### Example

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
<!-- markdownlint-capture -->
<!-- markdownlint-disable -->
{{< boxes "contact" >}}
{{< box size=large title=E-Mail icon=gblog_email >}}mail@example.com{{< /box >}}
{{< box size=large title=Matrix icon=gblog_matrix >}}@john:example.com{{< /box >}}
{{< box size=large title=XMPP icon=gblog_xmpp >}}john@example.com{{< /box >}}
{{< box size=large title=Others >}}You can also find us on the Fediverse.{{< /box >}}
{{< /boxes >}}
<!-- markdownlint-restore -->
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

## Mermaid

[Mermaid](https://mermaidjs.github.io/) is library for generating SVG charts and diagrams from text.

### Usage

<!-- prettier-ignore -->
```tpl
{{</* mermaid class="text-center" */>}}
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

#### Attributes

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< propertylist name=shortcode-mermaid sort=name order=asc >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

### Example

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

As an alternative to shortcodes, code blocks can be used for markdown as well.

{{< columns >}}

<!-- prettier-ignore -->
````tpl
```mermaid
flowchart LR
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```
````

<--->

<!-- spellchecker-disable -->
<!-- prettier-ignore -->
```mermaid
flowchart LR
A[Hard] -->|Text| B(Round)
B --> C{Decision}
C -->|One| D[Result 1]
C -->|Two| E[Result 2]
```

<!-- spellchecker-enable -->

{{< /columns >}}

## KaTeX

[KaTeX](https://katex.org/) shortcode let you render math typesetting in markdown document.

### Usage

```latex
{{</* katex [display] [class="text-center"] */>}}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
{{</* /katex */>}}
```

#### Attributes

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< propertylist name=shortcode-katex sort=name order=asc >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

### Example

<!-- spellchecker-disable -->
<!-- prettier-ignore -->
{{< katex display >}}
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
{{< /katex >}}

<!-- spellchecker-enable -->

KaTeX can be used inline, for example {{< katex >}}\pi(x){{< /katex >}} or used with the `display` parameter as above.

## Progress

### Usage

<!-- prettier-ignore -->
```tpl
{{</* progress title=Eating value=65 icon=gblog_heart */>}}
```

#### Attributes

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< propertylist name=shortcode-progress sort=name order=asc >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

### Example

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< progress title=Eating value=65 icon=gblog_heart >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

## Properties

The property list shortcode creates a custom HTML description list that can be used to display properties or variables and general dependent information. The shortcode requires a data file in `data/properties/`, e.g. `data/properties/demo.yaml`.

### Usage

<!-- prettier-ignore-start -->
```tpl
{{</* propertylist name=demo (sort=name) (order=[asc|desc]) */>}}
```
<!-- prettier-ignore-end -->

The supported attributes can be taken from the following example:

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< include file="/data/properties/demo.yaml" language="Yaml" options="linenos=table" >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

#### Attributes

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< propertylist name=shortcode-propertylist sort=name order=asc >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->

### Example

<!-- prettier-ignore-start -->
<!-- spellchecker-disable -->
{{< propertylist name=demo sort=name order=asc >}}
<!-- spellchecker-enable -->
<!-- prettier-ignore-end -->
