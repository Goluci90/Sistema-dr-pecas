console.log("Hello world")
// variaveis, são um espaço na memoria para guardar algum valor
let pesoPeca = 50
if (pesoPeca > 100) {
    console.log("Peso maior que 100g,logo,podemos cadastrar a peça")
} else {
 console.log("Peso insuficiente,não é possivel cadastrar")    
}
let numeroPecas = 10
if (numeroPecas < 10) {
    console.log("Ainda há espaço na caixa,podemos cadastrar a peça")
} else {
  console.log("Não há espaço disponivel na caixa")  
}
let nomePeca = "Di"
console.log("O comprimento do nome da peça é:", nomePeca.length)
if (nomePeca.length < 3) {
    console.log("Nome da peça muito curto, não é possivel cadastrar")
} else {
  console.log("Nome de peça adequado, podemos cadastrar")  
}