- ENHANCEMENT
  - add node `gulp` script to package.json
  - remove `title` and set empty `alt` tag on branding image
  - add minimal working css for printing
  - split out mobile css
  - load static css/js assets from data template:
    This way users can hash static assets and overwrite the data template
    to deliver the hashed assets. Thats helpful if you have to deal with
    long cache settings but wont to ensure your updated assets are delivered
    to clients.
- BUGFIX
  - use relative URL's for fonts
- INTERNAL
  - publish Lighthouse CI overwiew to PR's
