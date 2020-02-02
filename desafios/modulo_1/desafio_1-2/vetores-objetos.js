const dados = [
    {
        nome: 'Jõao',
        idade: 32,
        tecnologia: 'C++',
        especialidade: 'Desktop'
    },
    {
        nome: 'Maria',
        idade: 20,
        tecnologia: 'Python',
        especialidade: 'Data Science',
    },
    {
        nome: 'James',
        idade: 25,
        tecnologia: 'JavaScript',
        especialidade: 'Web/Mobile'
    }

]

// Primeiro elaboradorado
// const programador = dados[0];
// console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologia} com especialidade em ${programador.especialidade}`);


// Upgrade de código
for (let i = 0; i < dados.length; i++) {
    const programador = dados[i];

    console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologia} com especialidade em ${programador.especialidade}`);
    console.log('============================ // ============================')
}

