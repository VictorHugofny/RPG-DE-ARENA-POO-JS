function criarPersonagem (nome = "",raca){
    var selecionado = racas[raca]
    if(selecionado == undefined) throw "erro"

    this.vida = selecionado.vidaMax
    this.nome = nome
    this.raca = selecionado

    this.lutar = function lutar (inimigo){
        const playerForca = this.raca.forca
        const inimigoForca = inimigo.raca.forca
    
        inimigo.vida -= playerForca
        
        return `${inimigo.nome} recebeu ${playerForca} de dano`
    }
}


//raças dos bonecos
var racas = {
    humano : {
        vidaMax : 100,
        forca:20,
        agilidade:40,
        inteligencia:30
    },
    elfo : {
        vidaMax : 100,
        forca:10,
        agilidade:60,
        inteligencia:50
    },
    ogro : {
        vidaMax : 100,
        forca:60,
        agilidade:40,
        inteligencia:30
    }
}

const player = new criarPersonagem('hugo','ogro')
const inimigo = new criarPersonagem('victor','elfo')
console.log(player,inimigo)

console.log(inimigo.lutar(player))
