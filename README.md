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
