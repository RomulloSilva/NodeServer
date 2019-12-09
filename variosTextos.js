/*MINHA RESOLUÇÃO*/
function texto() {
    var sequencia = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sequencia[_i] = arguments[_i];
    }
    var identidade = 0;
    var pagina = ""; //sempre definir um valor inicial a variálvel para que a concatenação aconteça.
    for (var i = 0; i < sequencia.length; i++) {
        identidade++;
        pagina += '<div id="id' + identidade + '"> ' + sequencia[i] + '</div>\n'; //O + ao lado do = concatenar o conteúdo ja admitido na variavel pagina. O \n é para pular linha.
    }
    return pagina;
}
console.log(texto("VALOR1", "VALOR2", "VALOR3", "VALOR4", "VALOR5", "VALOR6", "VALOR7", "VALOR8", "VALOR9", "VALOR10"));
/*

/*RESOLUÇÃO DO PROFESSOR

/*PRIMEIRA VERSÃO
function geraDivs(...itens:string[]):void{
    for(let i=0; i<itens.length;i++){
        console.log("<div id='div"+(i+1)+"'>"+itens[i]+"</div>");
    }
}
geraDivs( "VALOR1","VALOR2","VALOR3","VALOR4","VALOR5","VALOR6","VALOR7","VALOR8","VALOR9","VALOR10")

/*SEGUNDA VERSÃO
function geraDivs2(...itens:string[]):string{
    let result:string="";
    for(let i=0;i<itens.length;i++){
        result += "<div id='div"+(i+1)+"'>"+itens[i]+"</div>";
    }
    return result;
}
geraDivs2( "VALOR1","VALOR2","VALOR3","VALOR4","VALOR5","VALOR6","VALOR7","VALOR8","VALOR9","VALOR10")

/*TERCEIRA VERSÃO
function geraDivs3(...itens:string[]):string{
    let result:string="";
    for(let i=0;i<itens.length;i++){
        result += `<div id='div${i+1}`'>`${itens[i]}`</div>`
    }
   return result
}
geraDivs3( "VALOR1","VALOR2","VALOR3","VALOR4","VALOR5","VALOR6","VALOR7","VALOR8","VALOR9","VALOR10")
*/ 
