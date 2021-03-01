# My Application

A basic structure of a web application for web developers to develop upon and show their skills.

### Please DO NOT mention any Company or Individual names in code, when forking, committing, branching, developing or completing the exercise. 

# Dependancies
> node ^10.15.3

> grunt-cli ```npm install -g grunt-cli```

# Get Started

```
npm run start
```

## Install dependancies
```
npm i
``` 

## Build the app & watch
```
grunt dev
```

## Start application and server
```
npm start
```

## Creative assets  
Look in ```./design-assets```

### Fonts
All free to download or include from [https://fonts.google.com/specimen/Libre+Franklin](https://fonts.google.com/specimen/Libre+Franklin) (Regular and ExtraLight)

## Which Browsers/Devices or Virtualisation services did you check the application in?
- Browsers:
    - Google Chrome
    - Mozilla Firefox
    - Safari
- Type of Devices
    - Mobile
    - Tablet
    - Desktop


## Anything you want to tell us?
- Assumptions?
    - The checkout page available on the /cart route assumes that the user has already added products to his/ her cart. At the checkout page, the user only finalizes the products and their quantities and submits them.
- Decisions?
- What you used to develop and test?
    - Extensive use of 'Flexbox' for layout purposes
    - The orders submitted from the checkout form are submitted to this endpoint: https://apps-web-developer-test-default-rtdb.firebaseio.com/orders.json using the POST http request
    - Use of media queries for making the application responsive

- List of tools to develop and debug the application
    - Visual Studio Code
    - Google Chrome browser

- Libraries used
    - The 'react-router-dom' for navigating from one route to another
    - The 'axios' package to make http requests
    - Fontawesome packages for icons such as shopping cart, delete and so on
    - Babel for compilation purpose
    - Webpack for bundling my resources

- Time spent
    - About 3 weeks

## What did you think of this test/exercise?
### What did you like?
1. It was fun and challenging. Wiring up Webpack and Babel with React took some time. But, I learnt a lot over the course of this test
2. Working on the Checkout form was fun as well. Writing down the equations for incrementer, decrementer and thinking of all the validations that could be added was pretty cool.
3.

### What could be improved?
1.
2.
3.

### What didn't you like?
1.
2.
3.
