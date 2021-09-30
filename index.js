
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
        
        if(inimigo.vida <= 0){
            return "inimigo morto"
        }

        return `${inimigo.nome} recebeu ${dano} de dano`

    }
    usarcura(){
        return this.vida += 50
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
        forca:80,
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


const PersonagemElement = document.querySelectorAll('.personagem img') 
const nameInput = document.querySelector('#name')
const racaInput = document.querySelector('#raca')
const armaInput = document.querySelector('#arma')

const sutmitbottom = document.querySelector('#submit-button')
const combatbottom = document.querySelector('#combat-button')
const curamsg = document.querySelector('#cura-button')

const combatmsg = document.querySelector('.msg')
const combatmsg1 = document.querySelector('.msg1')
const statusmsg = document.querySelector('.status')
const inimigomsg = document.querySelector('.inimigo')


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
    



    const hugo = new Personagem(nameValue, racaValue, armaValue)
    const inimigo = new Personagem('inimigo', 'Ogro', 'Machado')
    

    statusmsg.innerHTML = `<h3> Nome:</h3> <h4>${nameValue}</h4> <h3>Raça:</h3> <h4>${racaValue}</h4> <h3>Arma equipada:</h3> <h4>${armaValue}</h4> <h3>Vida:</h3> <h4>${hugo.vida}</h4> `
    inimigomsg.innerHTML = `<h3> Nome:</h3> <h4>${inimigo.nome}</h4> <h3>Vida:</h3> <h4>${inimigo.vida}</h4> `

    combatbottom.addEventListener('click',(e) => {
        e.preventDefault()
        
        if(inimigo.vida >= 0){
            combatmsg.innerHTML = `<h5>${hugo.lutar(inimigo)}</h5>`
            combatmsg1.innerHTML = `<h5>${inimigo.lutar(hugo)}</h5>`
        } else {
            combatmsg.innerHTML = '<h4>GANHOU FIM DE JOGO</h4>'
            combatmsg1.innerHTML = `<a>https://victorhugofny.github.io/</a>`
        } 
        
        combatmsg.classList = 'error' //adicionando uma classe

        statusmsg.innerHTML = `<h3> Nome:</h3> <h4>${nameValue}</h4> <h3>Raça:</h3> <h4>${racaValue}</h4> <h3>Arma equipada:</h3> <h4>${armaValue}</h4> <h3>Vida:</h3> <h4>${hugo.vida}</h4> `
        inimigomsg.innerHTML = `<h3> Nome:</h3> <h4>${inimigo.nome}</h4> <h3>Vida:</h3> <h4>${inimigo.vida}</h4> `
        
    })
    curamsg.addEventListener('click',(e) => {
        e.preventDefault()
        curamsg.innerHTML = `<h5>${hugo.usarcura()}</h5>`
        console.log(hugo.usarcura())
        statusmsg.innerHTML = `<h3> Nome:</h3> <h4>${nameValue}</h4> <h3>Raça:</h3> <h4>${racaValue}</h4> <h3>Arma equipada:</h3> <h4>${armaValue}</h4> <h3>Vida:</h3> <h4>${hugo.vida}</h4> `
})})
    