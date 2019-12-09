import biblioteca = require("readline-sync");//faz a importação da biblioteca no typescript.
let titulo: string = biblioteca.question("Digite o titulo da pagina");
let produto: string = biblioteca.question("Digite a descricao do produto");
let pagina = `<html><head><title>Meu Site</title></head><body><h1> ${titulo} </h1><hr/><p> ${produto}</p></body></html>"`;//usamos a crase(``) e o ${} para subtituir "" e +.

console.log(pagina);


/*"<html><head><title>Meu Site</title></head><body><h1> "+titulo+" </h1><hr/><p> "+produto+" </p></body></html>"*/

/*function (){
    document.getElementById("titulo").innerHTML
}
function (){
    document.getElementById("produto")
}*/

