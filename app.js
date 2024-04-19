const monstros = [
    {
        id:1,
        nome: 'val',
        altura: 2,
        habilidade: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores blanditiis expedita vel. Vel at optio reprehenderit culpa minima iure mollitia. Commodi tempore molestiae unde nihil accusantium autem, similique amet dignissimos?',
        foto:'https://robohash.org/val'
    },

    {
        id:2,
        nome: 'liu',
        altura: 3,
        habilidade: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores blanditiis expedita vel. Vel at optio reprehenderit culpa minima iure mollitia. Commodi tempore molestiae unde nihil accusantium autem, similique amet dignissimos?',
        foto:'https://robohash.org/liu'
    },

    {
        id:3,
        nome: 'dyl',
        altura: 1,
        habilidade: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores blanditiis expedita vel. Vel at optio reprehenderit culpa minima iure mollitia. Commodi tempore molestiae unde nihil accusantium autem, similique amet dignissimos?',
        foto:'https://robohash.org/dyl'
    },

    {
        id:4,
        nome: 'marcio',
        altura: 4,
        habilidade: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores blanditiis expedita vel. Vel at optio reprehenderit culpa minima iure mollitia. Commodi tempore molestiae unde nihil accusantium autem, similique amet dignissimos?',
        foto:'https://robohash.org/marcio'
    }
]

const secao = document.querySelector('.monstros')
const botao = document.querySelector('.btn')

botao.addEventListener('click', ()=> {
    document.documentElement.classList.toggle('dark')
})

const todosOsMonstros = monstros.map(monstro => {
    return `<div>
    <p>Nome: ${monstro.nome}</p>
    <p>Altura: ${monstro.altura}</p>
    <p class="habilidades">Habilidades: ${monstro.habilidade}</p>
    <img src="${monstro.foto}">
</div>`
} )

secao.innerHTML = todosOsMonstros

