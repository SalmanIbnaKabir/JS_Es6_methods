const person = {
  name: 'Tanvir Alom',
  age: 34
}

const user = {
  name: 'Salman Kabir',
  phone: '0182356',
  age: 34,
  address: 'bari ase',
  p: [1, 3, 4,]
}

const { name: myName, age, p:number } = user;

for (let i of number) {
  console.log(i)
}

console.log(myName, age)