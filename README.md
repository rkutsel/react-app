### MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# [Deployed React App](https://rkutsel.github.io/react-app/home)

## Description

A simple `React` app deployed to Github Pages that can be used as a boilerplate template and further extended. I used React Router for client-side routing with some additional customization to make it work. It's a known issue and more on that can be found [here](https://github.com/rafgraph/spa-github-pages). Additionally I used [MUI](https://mui.com/) framework to apply custom styling.

## Installation Instructions

> NOTE: Before installing local dependencies, make sure you have `Node.JS ~v16.14.2` and `NPM ~8.11.0` installed. You can quickly check this by running `node -v` for Node.JS and `npm -v` for NPM in your terminal.

### Install local dependencies

Once the above is confirmed, clone the repo `git clone git@github.com:rkutsel/react-app.git` and install the dependencies by running `npm i` in your terminal. A successful installation should look somewhat similar to the one bellow:

```bash
npm WARN config production Use `--omit=dev` instead.
npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.

>npm install


up to date, audited 1504 packages in 3s

214 packages are looking for funding
  run `npm fund` for details

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
```

## Usage

To get started, form the `root` directory run `npm start` which should build all of the components and start the server. At this point you should be able to access the app in your browser at http://localhost:3000/react-app.

```bash
Compiled successfully!

You can now view app in the browser.

  Local:            http://localhost:3000/react-app

Note that the development build is not optimized.
To create a production build, use npm run build.

webpack compiled successfully
```

## Deploy to Github Pages

The functionality is provided out of the box. To deploy your own version of the app to GH pages, run the following commands:

```bash
npm run deploy

> app@0.1.0 predeploy
> npm run build


> app@0.1.0 build
> react-scripts build

Creating an optimized production build...
Compiled with warnings.

[eslint]
src/components/Hero.js
  Line 4:8:  'Stack' is defined but never used  no-unused-vars

Search for the keywords to learn more about each warning.
To ignore, add // eslint-disable-next-line to the line before.

File sizes after gzip:

  97.64 kB (-9 B)  build/static/js/main.3985124e.js
  1.78 kB          build/static/js/787.c1112931.chunk.js

The project was built assuming it is hosted at /react-app/.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.

Find out more about deployment here:

  https://cra.link/deployment


> app@0.1.0 deploy
> gh-pages -d build

Published
```
