# Geekblog

[![Build Status](https://img.shields.io/drone/build/thegeeklab/hugo-geekblog?logo=drone&server=https%3A%2F%2Fdrone.thegeeklab.de)](https://drone.thegeeklab.de/thegeeklab/hugo-geekblog)
[![Hugo Version](https://img.shields.io/badge/hugo-0.93-blue.svg)](https://gohugo.io)
[![GitHub release](https://img.shields.io/github/v/release/thegeeklab/hugo-geekblog)](https://github.com/thegeeklab/hugo-geekblog/releases/latest)
[![GitHub contributors](https://img.shields.io/github/contributors/thegeeklab/hugo-geekblog)](https://github.com/thegeeklab/hugo-geekblog/graphs/contributors)
[![License: MIT](https://img.shields.io/github/license/thegeeklab/hugo-geekblog)](https://github.com/thegeeklab/hugo-geekblog/blob/main/LICENSE)

Geekblog is a simple Hugo theme for personal blogs. It is intentionally designed as a fast and lean theme and may not fit the requirements of complex projects. If a more feature-complete theme is required there are a lot of got alternatives out there. You can find a demo and the full documentation at [https://hugo-geekblog.geekdocs.de](https://hugo-geekblog.geekdocs.de).

![Desktop and mobile preview](https://github.com/thegeeklab/hugo-geekblog/blob/main/images/readme.png)

## Build and release process

This theme is subject to a CI driven build and release process common for software development. During the release build, all necessary assets are automatically built by [webpack](https://webpack.js.org/) and bundled in a release tarball. You can download the latest release from the GitHub [release page](https://github.com/thegeeklab/hugo-geekblog/releases).

Due to the fact that `webpack` and `npm scripts` are used as pre-processors, the theme cannot be used from the main branch by default. If you want to use the theme from a cloned branch instead of a release tarball you'll need to install `webpack` locally and run the build script once to create all required assets.

```Shell
# install required packages from package.json
npm install

# run the build script to build required assets
npm run build

# build release tarball
npm run pack
```

See the [Getting Started Guide](https://hugo-geekblog.geekdocs.de/posts/usage/getting-started/) for details about the different setup options.

## Contributors

Special thanks to all [contributors](https://github.com/thegeeklab/hugo-geekblog/graphs/contributors). If you would like to contribute, please see the [instructions](https://github.com/thegeeklab/hugo-geekblog/blob/main/CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/thegeeklab/hugo-geekblog/blob/main/LICENSE) file for details.

The used SVG icons and generated icon fonts are licensed under the license of the respective icon pack:

- Font Awesome: [CC BY 4.0 License](https://github.com/FortAwesome/Font-Awesome#license)
- IcoMoon Free Pack: [GPL/CC BY 4.0](https://icomoon.io/#icons-icomoon)
- Material Icons: [Apache License 2.0](https://github.com/google/material-design-icons/blob/main/LICENSE)
