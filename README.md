# expanse-names
[![Travis](https://img.shields.io/travis/emilkloeden/expanse-names.svg?style=flat-square)](https://travis-ci.org/emilkloeden/expanse-names)[![Codecov](https://img.shields.io/codecov/c/github/emilkloeden/expanse-names.svg?style=flat-square)](https://codecov.io/gh/emilkloeden/expanse-names)[![Github All Releases](https://img.shields.io/github/downloads/emilkloeden/expanse-names/total.svg?style=flat-square)](https://github.com/emilkloeden/expanse-names#readme)[![npm](https://img.shields.io/npm/v/expanse-names.svg?style=flat-square)](https://www.npmjs.com/package/expanse-names)[![npm](https://img.shields.io/npm/dt/expanse-names.svg?style=flat-square)](https://www.npmjs.com/package/expanse-names)

## There is no good reason to use this...
...unless you *really* like The Expanse series by James S.A. Corey and you want to use his characters's names for something.
A silly library for learning things based off of https://github.com/kentcdodds/starwars-names
from https://egghead.io/courses/how-to-write-an-open-source-javascript-library

# API
## Install
```npm install --save expanse-names```
## Require
```javascript
const expanseNames = require('expanse-names);
```
## 'all' property
```javascript
console.log(expanseNames.all)
/*
    "Adolphus Murtry",
    "Anderson Dawes",
    "Antony Dresden",
    ...
*/
```

## 'random(number=1)' method
If used without passing a value or passing one, will return the name of a single character from the book series:

```javascript
console.log(expanseNames.random())
//    "Antony Dresden"
console.log(expanseNames.random(1))
//    "Sematimba"
```

If number is > 1, it returns an array of series character names

```javascript
console.log(expanseNames.random(3))
// ["Julie Mao","Josephus Miller","Monica Stuart",]

```