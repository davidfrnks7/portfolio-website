[![Node.js CI](https://github.com/davidfrnks7/portfolio-website/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/davidfrnks7/portfolio-website/actions/workflows/main.yml)

# David Franks Portfolio Website

## About

This app was made to showcase David Franks's personal portfolio and isn't mean to be used for anything else.

While it **is not** meant to be a template, I do encourage taking inspiration from the layout for your own site and the codebase for guidance and help.

# Technologies

## TypeScript

[<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" height="100px">](https://www.typescriptlang.org/)

> [TypeScript](https://www.typescriptlang.org/) is a strongly typed programming language which builds on JavaScript giving you better tooling at any scale.

## Next.js

[![Next.js](https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg)](https://nextjs.org/)

> The React Framework for Production

[Next.js](https://nextjs.org/) is a serverless, zero config React framework.

## Chakra UI

[![Chakra UI](https://gist.githubusercontent.com/navin-moorthy/d4c5fe7f384a106ba8171eee77b45623/raw/3e4d37340270a38367bfe94dd2f7daea2a0537a2/chakra-ui-logo.svg)](https://chakra-ui.com/)

> [Chakra UI](https://chakra-ui.com/) is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

## Formik

[![Formik](https://raw.githubusercontent.com/formium/formik/master/website/public/images/formik.svg)](https://formik.org/)

> Build forms in React, without the tears.

> [Formik](https://formik.org/) is a small library that helps you with the 3 most annoying parts:
>
> - Getting values in and out of form state
> - Validation and error messages
> - Handling form submission
>
> By colocating all of the above in one place, Formik will keep things organized--making testing, refactoring, and reasoning about your forms a breeze.

## hCaptcha

[<img src="https://assets-global.website-files.com/5c73e7ea3f8bb2a85d2781db/5c73e7ea3f8bb23b4c278261_hcaptcha-logo-landscape.svg" height=75px alt="hCaptcha" >](https://www.hcaptcha.com/)

> [hCaptcha](https://www.hcaptcha.com/) is an anti-bot solution that protects user privacy and rewards websites. It is the most popular reCAPTCHA alternative.

## Axios

[![Axios http](https://axios-http.com/assets/logo.svg)](https://axios-http.com/)

> [Axios](https://axios-http.com/) is a simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.

## Nodemailer

[![Nodemailer](https://raw.githubusercontent.com/nodemailer/nodemailer/master/assets/nm_logo_200x136.png)](https://nodemailer.com/about/)

> [Nodemailer](https://nodemailer.com/about/) is a module for Node.js applications to allow easy as cake email sending.

# Getting Started

## Requirements

The app was built on and is tested for:

- Ubuntu 20.04
- Node.js 14.x
- Node.js 16.x

I cannot guarantee functionality or stability if used on other OSs Ubuntu versions or Node.js versions.

## Installation

After cloning the app you will need to install the dependencies and packages. The app uses Yarn v2. Run this command to install using Yarn v2:

```
Yarn install
```

### Upgrading Packages

The `upgrade-interactive` plugin has been included in this app. To ungrade packages and dependencies run the following command:

```
yarn upgrade-interactive
```

The plugin `upgrade-interactive` is a combination of the `yarn outdated` and `yarn upgrade [package...]` commands. Where `yarn outdated` displays the list of outdated packages and `yarn upgrade [package...]` can then be used to upgrade desired packages, `yarn upgrade-interactive` displays the same outdated package list and lets you immediately chose which to upgrade.

To learn more about the `upgrade-interactive` plugin please read the [official docs](https://classic.yarnpkg.com/lang/en/docs/cli/upgrade-interactive/).

## Development Server

To start the development server run the command

```
yarn dev
```

## Deployment Server

To deploy the app it must first be built.

_The build script will automatically check for linting and typescript type errors._

If any errors are present the build is aborted.

To run the build command use:

```
yarn build
```

If the build is successful then the deployed server needs to be started.

_This will not work if the build did not complete or a build was never done._

To start the app run:

```
yarn run
```

##### It is recommended that the app is deployed using the [Vercel Platform](https://vercel.com/new). Vercel is optimized to dynamically serve static, dynamic, and hybrid pages based on the needs of each individual page that is built. It deploys in less than a minute and can be linked to a Github repo to keep the production server up do date with the most recent pushes to your main or production branch. It automatically provides SSL and CDN to each app and scales automatically. Vercel also monitors all branched and deploys preview builds for those branches to test fixes, refactors, and new content live.

# Development Features

## Prettier

This app has the prettier code formatter built in. Run `yarn pretty` to have all code update to follow the same structure and format. [More about Prettier](https://prettier.io/)

To have Prettier update the structure of the codebase run the following command:

```
yarn pretty
```

## ESLint

This app has ESLIne built in to check for errors within the code.

**The A11y plugin in installed to help check for and meet accessibility standards.**

To lint the codebase run the following command:

```
yarn lint
```

Automatic fixing of code with ESLint has not been setup for the app.
