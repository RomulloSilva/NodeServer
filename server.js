//Carreguei a biblioteca Express(que baixei atraves do npm) na variável "express"(poderia ter qualquer outro nome).
var express = require("express");

//Criei um servidor(var server) para invocar a bilioteca.
var server = express();


var listaDeAlunos;
listaDeAlunos=[{"id":1,
               "nome":"Romulo",
                "salário":10500,
                "número": 333
            },
                {"id":2,
               "nome":"Rodrigo",
                "salário":9500,
                "número": 313
            },
            {"id":3,
            "nome":"Olivia",
             "salário":5500,
             "número": 363
            },
            {"id":4,
               "nome":"Midas",
                "salário":6500,
                "número": 333
            }];


server.get("/funcionarios/:id",function(req,res){
    var id = req.params.id;
    if(id <= 0 || id > 4){
        res.json({"resultado":"funcionarios não encontrado"});
    }
    else{
        res.json(listaDeAlunos);
    }
})

server.get("/funcionarios",function(req,res){
    console.log("Browser vai recuperar lista inteira");
    res.json(listaDeAlunos);
}
)

server.get("/hello", function(req,res){
    console.log("Browser acessou o caminho /hello");
    var newString = "<html><body><marquee>TESTE DE DESIGN</marquee></body></html>";
    res.send(newString);
})

server.listen(3000,inicializou());

function inicializou(){
    console.log("Servidor rodando na porta 3000");
}