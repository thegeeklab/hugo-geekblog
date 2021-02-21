---
title: "Post with images"
date: 2020-06-22T20:00:00+02:00
authors:
  - richard-roe
  - john-doe
tags:
  - Open Source
  - Development
resources:
  - name: feature
    src: "images/feature.jpg"
    params:
      credits: "[Angelina Litvin](https://unsplash.com/@linalitvina) on [Unsplash](https://unsplash.com/s/photos/writing)"
  - name: testimage
    src: "images/testimage.jpg"
    title: This is a test image
    params:
      credits: "[David Pennington](https://unsplash.com/@dtpennington) on [Unsplash](https://unsplash.com/s/photos/test)"
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
  - name: testimage
    src: "images/testimage.jpg"
    title: This is a test image
    params:
      credits: "[David Pennington](https://unsplash.com/@dtpennington) on [Unsplash](https://unsplash.com/s/photos/test)"
---

{{</* img name="testimage" size="small" lazy=true */>}}
```

<!-- spellchecker-enable -->

{{< img name="testimage" size="small" lazy=true >}}
