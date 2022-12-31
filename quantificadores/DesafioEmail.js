const texto = `
Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maria_silva@registro.br
    - rafa.sampaio@yahoo.com
    - jose.34_link_rede@yaho33.com.us
`

console.log(texto.match(/[\w.]+@[\w.]+/g))