
class Personagem{
    constructor (nome = "",raca,arma){
        var armaSelecionada = armas.find(e => e.nome == arma)
        var racaSelecionada = racas.find(e => e.nome == raca)
        
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


console.log(novoElemento('div','teste'))
//raças dos bonecos
var racas = [
    {
        nome: 'Humano',
        vidaMax : 1000,
        forca:20,
        destreza:40,
        inteligencia:30
    },
     {
        nome: 'Elfo',
        vidaMax : 1000,
        forca:10,
        destreza:60,
        inteligencia:50
    },
    {
        nome: 'Ogro',
        vidaMax : 1000,
        forca:50,
        destreza:40,
        inteligencia:30
    }
]
//armas
var armas = [
    {
        nome: 'Katana',
        dano:100,
        escala: 'destreza'
    },
    {
        nome: 'Machado',
        dano:50,
        escala: 'forca'
    }
]

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

/* var vidas = player.vida > 0 && inimigo.vida > 0

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
 */

const PersonagemElement = document.querySelectorAll('.personagem img') 
const nameInput = document.querySelector('#name')
const racaInput = document.querySelector('#raca')
const armaInput = document.querySelector('#arma')

const seletor = document.querySelector('.personagem')
const selecionar = seletor.querySelector('.selecionado')

const sutmitbottom = document.querySelector('#submit-button')
const combatbottom = document.querySelector('#combat-button')

const combatmsg = document.querySelector('.msg')

console.log(nameInput)
console.log(sutmitbottom)
console.log(armaInput)

console.log(racaInput)


console.log(PersonagemElement)



sutmitbottom.addEventListener('click',(e) => {
    e.preventDefault()

    const nameValue = nameInput.value
    const racaValue = racaInput.value
    const armaValue = armaInput.value

    if (nameValue === ""){
        alert('Erro por favor coloque o seu nickname')
        
        setTimeout(() => { // dps de 3 segundos
            errorMessage.remove();
        }, 3000);
        
        return
    }

    console.log(nameValue)
    console.log(racaValue)
    console.log(armaValue)

    const hugo = new Personagem(nameValue, racaValue, armaValue)
    const inimigo = new Personagem('inimigo', 'Ogro', 'Machado')
    alert('personagem criado')

    combatbottom.addEventListener('click',(e) => {
        e.preventDefault()
        console.log(hugo.lutar(inimigo))

        combatmsg.style.color = "white";
        combatmsg.textContent = hugo.lutar(inimigo)
        combatmsg.classList = 'error' //adicionando uma classe
        
    })
})
    