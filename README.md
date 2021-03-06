# Previous Prime Number Frontend

[![CircleCI](https://circleci.com/gh/catrius/prime-number-finder.svg?style=svg)](https://app.circleci.com/pipelines/github/catrius/prime-number-finder)
[![codecov](https://codecov.io/gh/catrius/prime-number-finder/branch/master/graph/badge.svg?token=DHE0UM81GU)](https://codecov.io/gh/catrius/prime-number-finder)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Stack

- Node >= 12.8
- CircleCI
- CodeCov
- S3

## Websites
    - Backend: https://api-previous-prime-number.catri.us/
    - Frontend: https://previous-prime-number.catri.us/

## Deployment

- The deploy runs automatically on Master branch after it passes all tests or CircleCI. Or it can be done it manually by running `yarn deploy`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn lint`

Runs linter to check for syntax errors.

### `yarn test:ci`

Runs the test without watching, colors and outputs a coverage report.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn deploy`

Deploys the app. 
