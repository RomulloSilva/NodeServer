function minhaFuncao(X, Y) {
    console.log(X);
    console.log(Y);
}
minhaFuncao(2);
minhaFuncao(2, 9);
function somavarios() {
    var parametros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        parametros[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < parametros.length; i++) {
        result = result + parametros[i];
    }
    return result;
}
console.log("Somando lista vazia " + somavarios());
console.log("Somando lista com uma pessoa " + somavarios(10));
console.log("Somando lista com varios " + somavarios(10, 12, 32, 35, 12));
