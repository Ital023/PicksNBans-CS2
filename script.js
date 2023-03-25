// config dos times
const team1 = "Imperial"
const team2 = "00nation"
var turn = team1;

// 0 - criar o mapPool dentro de um array / lista
var mapPool = ["Train","Mirage","Vertigo","Dust II","Cobblestone"];

// pega o elemento na tela que vai receber a msg
var turnText = document.querySelector(".match-titulo");
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


    // 1 - dar a resposta visual que o card foi clicado
    event.currentTarget.classList.add("selected");

    // 2 - remover o click para nao poder clicar novamente
    event.currentTarget.removeEventListener("click",chooseMap);
    // 3 - mudar o texto para Banned
    var textoTitulo = event.currentTarget.querySelector(".accept");
    textoTitulo.textContent = "vetado";

    // 4 - pegar o nome do mapa que foi clicado
    var nomeMapa = event.currentTarget.querySelector(".map-name").innerText;

    // 5 - filtrar e retirar o mapa que foi clicado do mapPool
    mapPool = mapPool.filter(map=> map != nomeMapa);
    console.log(mapPool);
    // 6 - quando sobrar apenas 1 mapa na lista, destacar esse card
    if(mapPool.length == 1){
        var mapaDecidido = document.querySelector(".card:not(.selected)");
        mapaDecidido.classList.add("picked");
        mapaDecidido.removeEventListener("click",chooseMap);
        mapaDecidido.classList.add("disable-hover");
        mapaDecidido.classList.remove("accept");
        turnText.textContent = `O mapa da partida será ${mapPool[0]}`;      
    }
}

// estrutura de repetição para "vincular" a função criada com o click de cada card(maps)
maps.forEach(map=>{
    map.addEventListener("click",chooseMap);
})