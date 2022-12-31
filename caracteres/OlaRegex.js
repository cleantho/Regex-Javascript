const texto = 'Casa bonita é casa amarela da esquina com a Rua ACASALAR.'

const regex = /casa/gi
console.log(texto.match(regex))

const regex2 = /casa bonita/gi
console.log(texto.match(regex2))

const regex3 = /casa/g
console.log(texto.match(regex3))

const regex4 = /casa/
console.log(texto.match(regex4))

console.log(texto.match(/a b/))