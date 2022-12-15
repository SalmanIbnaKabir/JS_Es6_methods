// Global scope;
// local scope . functional Scope;
// Block scope;

// let x = 5;

// {
// x = 9;
//   let x = 10;
//   console.log('inside block:', x)
// }

// console.log('outside block:', x);


function add() {
  // const total = 3 + 5;
  // let total = 3 + 5;
  var total = 3 + 5;
  console.log('inside function:', total);
}

add();

console.log('outside function:', total)