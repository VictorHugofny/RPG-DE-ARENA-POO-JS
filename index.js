function criarPersonagem (nome = "",raca){
    var selecionado = racas[raca]
    if(selecionado == undefined) throw "erro"
    this.nome = nome
    this.raca = selecionado

    this.lutar = function lutar (inimigo){
        const playerForca = this.raca.forca
        const inimigoForca = inimigo.raca.forca
        var ganhador = ''
    
        if (playerForca > inimigoForca){
            ganhador = this.nome
        } else if (inimigoForca > playerForca){
            ganhador = inimigo.nome
        } else {
            ganhador = 'nenhum foi empate'
        }
        return 'vencedor é ' + ganhador
    }
}


//raças dos bonecos
var racas = {
    humano : {
        forca:20,
        agilidade:40,
        inteligencia:30
    },
    elfo : {
        forca:10,
        agilidade:60,
        inteligencia:50
    },
    ogro : {
        forca:60,
        agilidade:40,
        inteligencia:30
    }
}

const player = new criarPersonagem('hugo','ogro')
const inimigo = new criarPersonagem('victor','elfo')
console.log(player,inimigo)

console.log(inimigo.lutar(player))
