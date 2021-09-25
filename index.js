import {Personagem}  from "./classe.js"

function novoElemento (tagName, classname){ //criar elemento com tag e definir sua classe
    const elem = document.createElement(tagName)
    elem.className = classname;
    return elem
}
function criandopersonagem (nome,classe,arma){ //criando os players
    const player = new Personagem(nome,classe,arma)
    const inimigo = new Personagem(nome,classe,arma)
    document.querySelector('div').console.log()

}



var vidas = player.vida > 0 && inimigo.vida > 0

while(vidas){
    console.log(inimigo.lutar(player))
    if(player.vida <= 0){
        break
    }
    console.log(player.lutar(inimigo))   
    if(inimigo.vida <= 0){
        break
    } 
    vidas = player.vida > 0 && inimigo.vida > 0
}
var morto = ""
var vivo = ""

if(player.vida <= 0){
    morto = player;
    vivo = inimigo
}else {
    morto = inimigo
    vivo = player
}
console.log("(morreu " + morto.nome + ")-<-\n>-(" +  vivo.nome + " ficou vivo)")

