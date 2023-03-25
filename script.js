// config dos times
const team1 = "Imperial"
const team2 = "00nation"
var turn = team1;

// 0 - criar o mapPool dentro de um array / lista
var mapPool = ["train","mirage","vertigo","dust II","cobblestone"];

// pega o elemento na tela que vai receber a msg
var turnText = document.querySelector(".match-titulo");
console.log(turnText);
var texto = `É a vez da equipe ${turn} banir o mapa`;
turnText.textContent = texto;

// pega todos os elementos na tela que tem a class card e coloca numa lista chamada maps
var maps = document.querySelectorAll(".card");

// cria uma função que será atribuida a cada card
function chooseMap(event){
    if(turn == team1){
        turn = team2;
    }else{
        turn = team1;
    }
    turnText.textContent = `É a vez da equipe ${turn} banir o mapa`;
}



// 1 - dar a resposta visual que o card foi clicado

// 2 - remover o click para nao poder clicar novamente

// 3 - mudar o texto para Banned

// 4 - pegar o nome do mapa que foi clicado

// 5 - filtrar e retirar o mapa que foi clicado do mapPool

// 6 - quando sobrar apenas 1 mapa na lista, destacar esse card

// estrutura de repetição para "vincular" a função criada com o click de cada card(maps)
maps.forEach(map=>{
    map.addEventListener("click",chooseMap);
})