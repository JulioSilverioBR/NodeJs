const pessoa = [{name: "Alex", age: 30 }]

pessoa.push({name:"Eduardinho" , age:24})
pessoa.push({name:"Fernando" , age:20})
pessoa.push({name:"Paulo" , age:32})


const checarIdade = (pessoa) => pessoa.age >= 20 && pessoa.age <= 30 ? pessoa : null
const retornarPessoas = (pessoa) => pessoa

let pessoasArray = []
pessoasArray.push(pessoa.map(retornarPessoas).filter(checarIdade))
console.log(pessoasArray);
