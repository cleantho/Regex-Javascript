const texto = '.$+*?-'
//não precisa de escape dentro do conjunto na sua maioria
console.log(texto.match(/[+.?*$]/g))
console.log(texto.match(/[.]/g))
console.log(texto.match(/[+.?*$]./g))

console.log(texto.match(/[$-?]/g)) // isso é um intervalo

// Não é um interalo (range)....
console.log(texto.match(/[$\-?]/g)) //escape da excessão
console.log(texto.match(/[-?]/g))
console.log(texto.match(/[-$?]/g))

//pode precisar de escape dentro do conjunto: - [ ] ^