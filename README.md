<p align="center">
  <a href="https://github.com/davidfrnks7/portfolio-website/actions/workflows/main.yml"><img alt="Node.js CI status" src="https://github.com/davidfrnks7/portfolio-website/actions/workflows/main.yml/badge.svg" /></a>
  <a href="https://github.com/davidfrnks7/portfolio-website/actions/workflows/codeql-analysis.yml"><img alt="CodeQL Analysis status" src="https://github.com/davidfrnks7/portfolio-website/actions/workflows/codeql-analysis.yml/badge.svg?branch=main" /></a>
  <a href="https://github.com/davidfrnks7/portfolio-website/actions/workflows/njsscan-analysis.yml"><img alt="njsscan sarif status" src="https://github.com/davidfrnks7/portfolio-website/actions/workflows/njsscan-analysis.yml/badge.svg?branch=main" /></a>
</p>

# [David Franks Portfolio Website](https://davidfrnks7.dev/)

## About

This app is meant to not only showcase a list of skills and projects David "Leo" Franks is proficient in and have worked on, but also to be a live and interactive demonstration of these skills within as real, live app that potential clients and employers can explore.

More information to be added:

- Certifications

## **Your Use of This App and it's Codebase**

While this app **is not** meant to be used as a template, I do encourage taking inspiration from the layout for your own site and using the codebase for guidance and help in learning the technologies used within it.

# Technologies

## TypeScript

[<img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" height="100px">](https://www.typescriptlang.org/)

> [TypeScript](https://www.typescriptlang.org/) is a strongly typed programming language which builds on JavaScript giving you better tooling at any scale.

## Next.js

[![Next.js](https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg)](https://nextjs.org/)

> [Next.js](https://nextjs.org/) is a serverless, zero config React framework.

The React Framework for Production

## Chakra UI

[<img src="https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true" height=75px >](https://chakra-ui.com/)

> [Chakra UI](https://chakra-ui.com/) is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

# Getting Started

## Requirements

The app was built on and is tested for:

- Ubuntu 20.04
- Node.js 14.x
- Node.js 16.x
- Node.js 18.x

I cannot guarantee functionality or stability if used on other OSs, Ubuntu versions, or Node.js versions.

## Installation

After cloning the app you will need to install the dependencies and packages. The app uses Yarn v2. Run this command to install using Yarn v2:

```bash
yarn install
```

### Upgrading Packages

The `upgrade-interactive` plugin has been included in this app. To upgrade packages and dependencies run the following command:

```bash
yarn upgrade-interactive
```

You might need to install this plugin on your machine before it will work.

The plugin `upgrade-interactive` is a combination of the `yarn outdated` and `yarn upgrade [package...]` commands. Where `yarn outdated` displays the list of outdated packages and `yarn upgrade [package...]` can then be used to upgrade desired packages, `yarn upgrade-interactive` displays the same outdated package list and lets you immediately chose which to upgrade.

To learn more about the `upgrade-interactive` plugin please read the [official docs](https://classic.yarnpkg.com/lang/en/docs/cli/upgrade-interactive/).

## Environment Variables

_[Learn more about environment variables in Next.js and why it appears I am listing some twice](https://nextjs.org/docs/basic-features/environment-variables)_

This app has no environment variables that need to be set up.

Development and production variables overwrite the main env variables. Development keys can be kept in the main env file to be overridden when `yarn start` is used.

## Typegen Theme

Before starting the dev server, attempt to build, or attempt to start the app you will need to use the following command to generate and add the types from the Chakra theme config to the project.

```bash
yarn typegen-theme
```

## Development Server

To start the development server run the command

```bash
yarn dev
```

## Deploy The Server

To deploy the app it must first be built.

_The build script will automatically check for linting and typescript type errors._

If any errors are present the build is aborted.

To run the build command use:

```bash
yarn build
```

If the build is successful then the compiled code needs to be started.

_This will not work if the build did not complete or a build was never done._

To start the app run:

```bash
yarn run
```

##### It is recommended that the app is deployed using the [Vercel Platform](https://vercel.com/new). Vercel is optimized to dynamically serve static, dynamic, and hybrid pages based on the needs of each individual page that is built. It deploys in less than a minute and can be linked to a Github repo to keep the production server up do date with the most recent pushes to your main or production branch. It automatically provides SSL and CDN to each app and scales automatically. Vercel also monitors all branched and deploys preview builds for those branches to test fixes, refactors, and new features as they are made and implamented.

# Development Features

## Prettier

This app has the prettier code formatter built in. [More about Prettier](https://prettier.io/)

To have Prettier update the structure of the codebase run the following command:

```bash
yarn pretty
```

## ESLint

This app has ESLine built in to check for errors within the code.

**The A11y plugin in installed to help check for and meet accessibility standards.**

To lint the codebase run the following command:

```bash
yarn lint
```
