
var pagina1=""//pagina 1;
var pagina2=""//pagina 2;
var pagina3=""//pagina 3;
var pagina4=""//pagina 4;
var pagina5=""//pagina 5;
var livro=document.querySelector(".livro"); //variavel que armazena o livro
var botoes=document.querySelectorAll(".botoes"); //variavel que armazena os botoes de escolha

function darkMode(){ //mudar pro modo noturno
    document.querySelector("body").classList.toggle(".dark-mode"); 
}

function mudarPagina(num_pagina){ //mudar de pagina
livro.innerHTML=num_pagina;
}

for(var i=0; i<botoes.length; i++){ //adiciona a funçao pra cada botao
    botoes[i].addEventListener("click", function(){ ///adiciona evento "click" em cada botao
    switch(botoes.id){ //pega o id do botao
        case "escolha 1":
            mudarPagina("pagina"); //muda pagina de acordo com a escolha 
            break;
            case "escolha 2":
            mudarPagina("pagina"); //muda pagina de acordo com a escolha 
            break;
            case "escolha 3":
            mudarPagina("pagina"); //muda pagina de acordo com a escolha 
            break;
            case "escolha 4":
            mudarPagina("pagina"); //muda pagina de acordo com a escolha 
            break;
    }
})
}