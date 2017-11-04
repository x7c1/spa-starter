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
│   ├── index.html
│   ├── media
│   │   └── owl.[hash].png
│   ├── scripts
│   │   ├── app.[hash].js
│   │   ├── app.[hash].js.map
│   │   ├── lazy-content.[hash].js
│   │   ├── lazy-content.[hash].js.map
│   │   ├── manifest.[hash].js
│   │   ├── manifest.[hash].js.map
│   │   ├── vendor.[hash].js
│   │   └── vendor.[hash].js.map
│   └── styles
│       ├── app.[hash].css
│       └── app.[hash].css.map
├── scripts
│   └── dev-server
│       └── index.js
└── src
    ├── index.html
    ├── index.js
    ├── index.scss
    ├── layouts
    │   ├── ReactRoot
    │   │   ├── ReactRoot.scss
    │   │   ├── index.js
    │   │   └── main.js
    │   └── sample
    │       ├── ImageArea
    │       │   ├── ImageArea.html
    │       │   ├── ImageArea.scss
    │       │   ├── assets
    │       │   │   └── owl.png
    │       │   ├── copyright.html
    │       │   └── index.js
    │       ├── LazyArea
    │       │   ├── LazyArea.html
    │       │   ├── LazyArea.scss
    │       │   ├── LazyContent.js
    │       │   └── index.js
    │       ├── SampleArea.js
    │       ├── index.js
    │       └── index.scss
    └── styles
        ├── card-like.scss
        └── palette.scss
```

## Running the Project

```
# start the develompent server
$ npm run start
```

## Building for Production

```
# generate `./dist` directory
$ npm run build
```

## Logging

run following on browser console.

```
> localStorage.debug = 'spa-starter:*';
```
