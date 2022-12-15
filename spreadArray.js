const number = [1, 3, 5, 7, 3, 89, 55];
// console.log(...number);
const number2 = [43, 6, 66, 76];

const newArray = [999, ...number, 98, ...number2, 56];
// console.log(newArray);



// console.log(Math.min(1, 3, 5, 7, 3, 89, 55))
// console.log(Math.min(...number));

// const [a, b, ...rest] = number;
// console.log( rest);

const a = [1, 2, 3];
// const b = a;
const b = [];
// const b = [...a];
for (let item of a) {
  b.push(item)
}

a.push(44);
a.push(88);

b.push(99);

console.log('a:', a)
console.log('b:', b)