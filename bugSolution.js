function myFunc() {
  // Convert arguments to a real array
  const argsArray = Array.from(arguments);
  argsArray.forEach(arg => {
    console.log(arg);
  });
}

myFunc(1, 2, 3); // Correctly outputs 1, 2, 3