const texto = 'Bom\ndia amigo'
console.log(texto.match(/./gi))
console.log(texto.match(/../gi))
console.log(texto.match(/.../gi))
console.log(texto.match(/..../gi))// o ponto não engloba o \n


// dotall - algumas linguagens tem um flag /exp/s, mas JS não!
// agora tem?
console.log(texto.match(/...\s/gi))