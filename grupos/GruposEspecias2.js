const texto = 'supermercado superação hiperMERCADO Mercado'

console.log(texto.match(/(?:super)[\wÀ-ú]+/gi));

// Positive Lookbehind
console.log(texto.match(/(?<=super)[\wÀ-ú]+/gi));

// Negative Lookbehind
console.log(texto.match(/(?<!super)mercado/gi));