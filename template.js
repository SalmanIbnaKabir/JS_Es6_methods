const Name = 'Salman';
const age = 43;
const job = 'bekar';

/**
 * template literal;
 * dynamic string;
 * template string;
 * bactic: ``;
 * * */

//  amar name salman, amy boyos 43, ami bekar.... ;


// const sentence = 'amar name ' + Name  + ' amar boyos ' + age + ' ami ' + job;
// const sentence = 'amar name ' + Name + '\n' + 'amar boyos ' + age + '\n' + 'ami ' + job;

const sentence = `amar name ${Name} amar boyos ${age} ami ${job}`;


console.log(sentence);