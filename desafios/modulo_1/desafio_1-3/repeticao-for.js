const usuarios = [
    {
        nome: 'Carol',
        tecnologias: [
            'HTML', 'CSS'
        ],
        empresa: 'Rocketseat'
    },
    {
        nome: 'James',
        tecnologias: [
            'JavaScript', 'HTML'
        ],
        empresa: 'Uol'
    },
    {
        nome: 'Tuane',
        tecnologias: [
            'Node.js', 'Python'
        ],
        empresa: 'Youtube'
    }
];


for (let i = 0; i < usuarios.length; i++) {
    
    const usuario = usuarios [i];

    console.log(`${usuario.nome} trabalha com  ${usuario.tecnologias} na empresa ${usuario.empresa}`);  
}