# SPA Starter Kit

Sample application to learn modern SPA development.

## Current Structure

```
.
├── config
│   ├── postcss.config.js
│   ├── project.dev.js
│   ├── project.paths.js
│   ├── webpack.common.js
│   ├── webpack.dev.js
│   └── webpack.prod.js
├── dist
│   ├── bundle.js
│   ├── bundle.js.map
│   ├── index.html
│   ├── media
│   │   └── owl.[hash].png
│   └── styles
│       ├── app.[hash].css
│       └── app.[hash].css.map
└── src
    ├── assets
    │   └── owl.png
    ├── content.js
    ├── index.css
    ├── index.html
    ├── index.js
    ├── index.scss
    └── palette.scss
```

## Building

To generate `./dist` directory, run following:

```
npm run build
```
