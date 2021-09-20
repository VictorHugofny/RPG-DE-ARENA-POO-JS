import {Personagem}  from "./classe.js"


const player = new Personagem('hugo','ogro','katana')
const inimigo = new Personagem('victor','elfo','katana')
console.log(player,inimigo)

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
console.log("(morreu " + morto.nome + ")-<->-(" +  vivo.nome + " ficou vivo)")