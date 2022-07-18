// WRITE YOUR CODE HERE

var names = ["Afif", "baer", "john", "abdul", "isa"];

names[0] = "Tom";

console.log(names);
console.log(names.length);

console.log("welcome to the class " + names[0]);
console.log("welcome to the class " + names[1]);
console.log("welcome to the class " + names[2]);
console.log("welcome to the class " + names[3]);
console.log("welcome to the class " + names[4]);

if (names[0] === "Tom") {
  console.log(names[0] + " is in class ");

  if (names[2] === "john") {
    console.log(names[2] + " is in class");
  }
}
