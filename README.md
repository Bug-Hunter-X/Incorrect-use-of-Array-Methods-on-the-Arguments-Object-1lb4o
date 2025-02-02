# Incorrect use of Array Methods on the Arguments Object

This repository demonstrates a common error in JavaScript related to the `arguments` object and the incorrect use of array methods on it. The `arguments` object in JavaScript is array-like, but not a true array.  Therefore, you cannot directly apply array methods like `map`, `filter`, or `forEach` to it.

## Bug
The `bug.js` file contains a function that attempts to use `forEach` on the `arguments` object. This results in a `TypeError` because `forEach` is not a method of the `arguments` object. 

## Solution
The `bugSolution.js` file demonstrates the correct way to handle the `arguments` object either by converting it to an array using `Array.from()` or by iterating through it using a `for` loop. This prevents the `TypeError` and allows the desired functionality. 