function anoBissexto(ano:number):boolean{
    let bissexto: boolean;
        if(ano % 4 == 0 && ano % 100 != 0){//verifica se o ano é divisivel por 4 e divisivel por 100.
            bissexto = true;
    }
    else {
        if(ano % 400 == 0) {// Se o ano for apenas divisivel pos 4 ele vem para verificar se é divisivel por 400
            bissexto = true;
        }
        else{
            bissexto = false;// aqui tem de estar dentro de um else para que não haja substituição de valores apos as condições e que apenas seja falso quano as condições não forem obedecidas.
        }
       
} return bissexto;  
}



console.log(anoBissexto(2000))
console.log(anoBissexto(1900))
console.log(anoBissexto(2016))
console.log(anoBissexto(2007))