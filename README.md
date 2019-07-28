# JavaScript Fundamentals by Hayden Key
 
The following is my attempt to copy, manipulate, and just mess around with the exercises in Mark Zamoyta's "JavaSciprt Fundamentals" course on PluralSight
 
I was unsure how to add multiple files and have them execute on this web server, so I just put all of the exercises in a single file.



# Webpack Frontend Starterkit

[![Greenkeeper badge](https://badges.greenkeeper.io/wbkd/webpack-starter.svg)](https://greenkeeper.io/)

A lightweight foundation for your next webpack based frontend project.


### Installation

```
npm install
```

### Start Dev Server

```
npm start
```

### Build Prod Version

```
npm run build
```

### Features:

* ES6 Support via [babel](https://babeljs.io/) (v7)
* SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
* Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
