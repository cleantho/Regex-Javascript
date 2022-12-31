const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g))
console.log(texto.match(/[^0-9]/g)) // igual ao anterior
console.log(texto.match(/[^\d]/g)) // igual ao anterior

console.log(texto.match(/[^\d!\?\[\s,\.]/g))
console.log('----------------------')
console.log(texto.match(/\W/g))
console.log(texto.match(/[^A-Za-z0-9]/g))// igual ao anterior
console.log(texto.match(/\S/g))
console.log('----------------------')

const texto2 = '1:\ !"#$%&\'()*+,-./ 2: :;<=>?@'
console.log(texto2.match(/[^!-/:-@\s]/g)) // dois ranges
console.log(texto2.match(/\//g))
console.log(texto2.match(/'/g))
console.log(texto2.match(/"/g))
