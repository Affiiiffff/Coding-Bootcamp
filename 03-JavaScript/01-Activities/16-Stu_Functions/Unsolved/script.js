// isEqual using function declaration
// function isEqual(x, y) {
//   if (x === y) {
//     console.log('They are equal in type and value');
//   } else if (x == y) {
//     console.log('They are equal in value');
//   } else {
//     console.log('They are not equal');
//   }
//   return;
// }

// var isEqual = function (x, y) {
//   if (x === y) {
//     console.log("equal in type and value");
//   } else if (x == y) {
//     console.log("equal in value");
//   } else {
//     console.log("not equal");
//   }
// };

// isEqual(11, 10);

var x = function (x, y) {
  if (x === y) {
    console.log("same in type and value");
  } else if (x == y) {
    console.log("same in value");
  } else {
    console.log("not equal");
  }
};

x("3", 3);
