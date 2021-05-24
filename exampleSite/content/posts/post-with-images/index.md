---
title: Post with images
date: 2020-06-22T20:00:00+02:00
authors:
  - john-doe
tags:
  - Documentation
  - Shortcodes
weight: 20
resources:
  - name: feature
    src: "images/feature.jpg"
    params:
      credits: "[Angelina Litvin](https://unsplash.com/@linalitvina) on [Unsplash](https://unsplash.com/s/photos/writing)"
  - name: forest-1
    src: "images/forest-1.jpg"
    title: Forest (1)
    params:
      credits: "[Jay Mantri](https://unsplash.com/@jaymantri) on [Unsplash](https://unsplash.com/s/photos/forest)"
  - name: forest-2
    src: "images/forest-2.jpg"
    title: Forest (2)
    params:
      credits: "[Jay Mantri](https://unsplash.com/@jaymantri) on [Unsplash](https://unsplash.com/s/photos/forest)"
  - name: forest-3
    src: "images/forest-3.jpg"
    title: Forest (3)
    params:
      credits: "[Jay Mantri](https://unsplash.com/@jaymantri) on [Unsplash](https://unsplash.com/s/photos/forest)"
  - name: forest-4
    src: "images/forest-4.jpg"
    title: Forest (4)
    params:
      credits: "[Jay Mantri](https://unsplash.com/@jaymantri) on [Unsplash](https://unsplash.com/s/photos/forest)"
  - name: forest-5
    src: "images/forest-5.jpg"
    title: Forest (5)
    params:
      credits: "[Jay Mantri](https://unsplash.com/@jaymantri) on [Unsplash](https://unsplash.com/s/photos/forest)"
  - name: forest-6
    src: "images/forest-6.jpg"
    title: Forest (6)
    params:
      credits: "[Asher Ward](https://unsplash.com/@the_asher_ward) on [Unsplash](https://unsplash.com/s/photos/forest)"
  - name: forest-7
    src: "images/forest-7.jpg"
    title: Forest (7)
    params:
      credits: "[Asher Ward](https://unsplash.com/@the_asher_ward) on [Unsplash](https://unsplash.com/s/photos/forest)"
---

If you need more flexibility for your embedded images, you could use the `img` shortcode. It is using Hugo's
[page resources](https://gohugo.io/content-management/page-resources/) and supports lazy loading of your images.

**Attributes:**

| Name          | Usage                                                                                                          | default           |
| ------------- | -------------------------------------------------------------------------------------------------------------- | ----------------- |
| name (string) | Name of the image resource defined in your front matter.                                                       | empty             |
| alt (string)  | Description for displayed image.                                                                               | resource `.Title` |
| size (string) | Thumbnail size (tiny\|small\|medium\|large).                                                                   | empty             |
| lazy (bool)   | Enable or disable image lazy loading. Can be controlled globally by site parameter `geekblogImageLazyLoading`. | true              |

**Example:**

Define your resources in the page front matter, custom parameter `params.credits` is optional.

<!-- spellchecker-disable -->

```md
---
resources:
  - name: forest-1
    src: "images/forest-1.jpg"
    title: Forest (1)
    params:
      credits: "[Jay Mantri](https://unsplash.com/@jaymantri) on [Unsplash](https://unsplash.com/s/photos/forest)"
---

{{</* img name="forest-1" size="large" lazy=false */>}}
```

<!-- spellchecker-enable -->

**Demo:**

<!-- spellchecker-disable -->

{{< img name="forest-1" lazy=false >}}

<!-- spellchecker-enable -->

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates
investiture. Ornateness bland it ex enc, est yeti am bongo detract re. Pro ad prompts
feud gait, quid exercise emeritus bis e. In pro quints consequent, denim fastidious
copious quo ad. Stet probates in duo.

<!-- spellchecker-disable -->

{{< img name="forest-2" lazy=true >}}

<!-- spellchecker-enable -->

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates
investiture. Ornateness bland it ex enc, est yeti am bongo detract re. Pro ad prompts
feud gait, quid exercise emeritus bis e. In pro quints consequent, denim fastidious
copious quo ad. Stet probates in duo.

<!-- spellchecker-disable -->

{{< img name="forest-3" lazy=true >}}

<!-- spellchecker-enable -->

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates
investiture. Ornateness bland it ex enc, est yeti am bongo detract re. Pro ad prompts
feud gait, quid exercise emeritus bis e. In pro quints consequent, denim fastidious
copious quo ad. Stet probates in duo.

<!-- spellchecker-disable -->

{{< img name="forest-4" lazy=true >}}

<!-- spellchecker-enable -->

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates
investiture. Ornateness bland it ex enc, est yeti am bongo detract re. Pro ad prompts
feud gait, quid exercise emeritus bis e. In pro quints consequent, denim fastidious
copious quo ad. Stet probates in duo.

<!-- spellchecker-disable -->

{{< img name="forest-5" lazy=true >}}

<!-- spellchecker-enable -->

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates
investiture. Ornateness bland it ex enc, est yeti am bongo detract re. Pro ad prompts
feud gait, quid exercise emeritus bis e. In pro quints consequent, denim fastidious
copious quo ad. Stet probates in duo.

<!-- spellchecker-disable -->

{{< img name="forest-6" lazy=true >}}

<!-- spellchecker-enable -->

Dolor sit, sumo unique argument um no. Gracie nominal id xiv. Romanesque acclimates
investiture. Ornateness bland it ex enc, est yeti am bongo detract re. Pro ad prompts
feud gait, quid exercise emeritus bis e. In pro quints consequent, denim fastidious
copious quo ad. Stet probates in duo.

<!-- spellchecker-disable -->

{{< img name="forest-7" lazy=true >}}

<!-- spellchecker-enable -->
