const texto = 'Você precisa responder sim, não ou nao sei!'
console.log(texto.match(/sim|n.o|sei/g)) // alternativa (ou)
console.log(texto.match(/sim|n.o|n.o sei/g)) // alternativa (ou)
console.log(texto.match(/sim|n.o sei|n.o/g)) // alternativa (ou)