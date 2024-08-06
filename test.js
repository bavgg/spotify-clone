let someTypedFunction = () => {
  console.log("Any function could have been assigned to this variable");
};
console.log(someTypedFunction(1, 2));
someTypedFunction = (a, b) => {
  const sum = a + b;
  return sum;
};
