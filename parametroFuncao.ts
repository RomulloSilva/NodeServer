function minhaFuncao(X: Number, Y?:Number): void {// O (?) na variável Y é para informar que é opcional.
    console.log(X);
    console.log(Y);
}
minhaFuncao(2);
minhaFuncao(2,9);

function somavarios(...parametros:number[]):number{
    let result : number =0;
    for(let i=0;i<parametros.length; i++){
        result = result + parametros[i];
    }
    return result;
}
console.log("Somando lista vazia "+ somavarios());
console.log("Somando lista com uma pessoa "+ somavarios(10));
console.log("Somando lista com varios "+ somavarios(10,12,32,35,12));
