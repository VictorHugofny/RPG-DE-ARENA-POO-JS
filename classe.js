export class Personagem{
    constructor (nome = "",raca,arma){
        var armaSelecionada = armas[arma]
        var racaSelecionada = racas[raca]
        
        if(racaSelecionada == undefined) throw "erro"
    
        this.vida = racaSelecionada.vidaMax
        this.nome = nome
        this.raca = racaSelecionada
        this.arma = armaSelecionada
    } 

    lutar (inimigo){
        var danoArma = this.arma.dano + (this.arma.dano * this.raca[this.arma.escala] / 100)
        var dano = this.raca.forca + danoArma
        inimigo.vida -= dano
        
        return `${inimigo.nome} recebeu ${dano} de dano, sua vida é = ${inimigo.vida}`
    
    }
}
//raças dos bonecos
var racas = {
    humano : {
        vidaMax : 1000,
        forca:20,
        destreza:40,
        inteligencia:30
    },
    elfo : {
        vidaMax : 1000,
        forca:10,
        destreza:60,
        inteligencia:50
    },
    ogro : {
        vidaMax : 1000,
        forca:50,
        destreza:40,
        inteligencia:30
    }
}
//armas
var armas = {
katana : {
    nome: 'Katana',
    dano:100,
    escala: 'destreza'
},
machado : {
    nome: 'Machado de duas mãos',
    dano:50,
    escala: 'forca'
}}