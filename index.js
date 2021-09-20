import {Personagem}  from "./classe.js"

//criando os players
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
console.log("(morreu " + morto.nome + ")-<-\n>-(" +  vivo.nome + " ficou vivo)")


    const body = document.querySelector('body')

    const h2 = document.createElement('h2')
    h2.innerHTML = player.nome
    const div2 = document.createElement('div')
    div2.appendChild(h2) //colocar no ultimo elemento da div

    body.appendChild(div2) //adicionar divs

  