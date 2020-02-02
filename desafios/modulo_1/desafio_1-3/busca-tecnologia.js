const user = [
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


function checaTecnologiaCSS(usuario) {

    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') {
            return true;
        }
    }
    return false;
}


// console.log(checaTecnologiaCSS(user[0]));


for (let i = 0; i < user.length; i++) {
    const resultado = checaTecnologiaCSS(user[i]);
    
    // console.log(resultado);

    if(resultado) {
        console.log(`O usuário ${user[i].nome} trabalha com CSS`);
    }
}
