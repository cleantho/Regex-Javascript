const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ inicio da linha/String
console.log(texto.match(/r$/gi)) // $ fim da linha/String

console.log(texto.match(/^r.*r$/gi)) // problema do dotall

const texto2 = 'Romário era um excelente jogador, mas hoje é um político questionador'
console.log(texto2.match(/^r.*r$/gi)) // diferença