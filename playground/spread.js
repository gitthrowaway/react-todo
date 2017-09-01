// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
//
// console.log(add(...toAdd));

// var groupA = ['Ted', 'Bob'];
// var groupB = ['Ned'];
//
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);


var person = ['Ted', 25];
var personTwo = ['Ned', 21];

function greet(name, age) {
  return 'Hi ' + name + ' you are ' + age;
}

console.log(greet(...person));


var names = ['Mike', 'Ben' ];
var final = ['Ted', ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});
