# jest-Practice

### Getting Started
Install Jest using yarn:

> yarn add --dev jest

Or npm
> npm install --save-dev jest

Note: Jest documentation uses yarn commands, but npm will also work. You can compare yarn and npm commands in the [yarn docs, here](https://classic.yarnpkg.com/en/docs/migrating-from-npm#toc-cli-commands-comparison).

Let's get started by writing a test for a hypothetical function that adds two numbers. First, create a sum.js file:

> function sum(a, b) {
>
>  return a + b;
>  
> }
> 
> module.exports = sum;

Then, create a file named sum.test.js. This will contain our actual test:

> const sum = require('./sum');
>
> test('adds 1 + 2 to equal 3', () => {
> 
>  expect(sum(1, 2)).toBe(3);
>  
> });

Add the following section to your package.json:


> {
> 
>  "scripts": {
>  
>    "test": "jest"
>    
>  }
> 
>}

Finally, run yarn test or npm run test and Jest will print this message:
> PASS  ./sum.test.js
> 
> ✓ adds 1 + 2 to equal 3 (5ms)

You just successfully wrote your first test using Jest!

This test used expect and toBe to test that two values were exactly identical. To learn about the other things that Jest can test, see [Using Matchers](https://jestjs.io/docs/using-matchers).

# Running from command line
You can run Jest directly from the CLI (if it's globally available in your PATH, e.g. by yarn global add jest or npm install jest --global) with a variety of useful options.

Here's how to run Jest on files matching my-test, using config.json as a configuration file and display a native OS notification after the run:
> jest my-test --notify --config=config.json

If you'd like to learn more about running jest through the command line, take a look at the [Jest CLI Options](https://jestjs.io/docs/cli) page.

# Additional Configuration
### Generate a basic configuration file
Based on your project, Jest will ask you a few questions and will create a basic configuration file with a short description for each option:
> jest --init

# Using Babel
To use [Babel](https://babeljs.io/), install required dependencies via yarn:
> yarn add --dev babel-jest @babel/core @babel/preset-env

Configure Babel to target your current version of Node by creating a babel.config.js file in the root of your project:
#### babel.config.js
> module.exports = {
> 
>  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
>  
> };

The ideal configuration for Babel will depend on your project. See [Babel's docs](https://babeljs.io/docs/en/) for more details.
