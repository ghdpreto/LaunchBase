const usuarios = [
    {
        nome: 'James',
        receitas: [115.8, 48.7, 100, 15.2], // 279,7
        despesas: [85.3, 12.5, 132.2] // 230
        // RES = 49,69

    },
    {
        nome: 'Silvana',
        receitas: [1000.2, 10.3, 55.1], // 1065,6
        despesas: [2000] // 2000
        // RES = 934,4

    },
    {
        nome: 'Caloteiro',
        receitas: [100.2, 10.3, 10.4], // 120,9
        despesas: [100.2, 1032.2, 1234254.2] // 1235386,6
        // RES = -1235265,7
    }
];



//função para somar os valores
function somaNumero(numeros) {
    let resultado = 0;

    for (let i = 0; i < numeros.length; i++) {

        resultado += numeros[i];
    }
    return resultado;
}

//função para calcular o saldo em conta
function calculaSaldo(receitas, despesas) {
    
    const receita = somaNumero(receitas);

    const despesa = somaNumero(despesas);

    const saldo = receita - despesa

    return saldo.toFixed(2); //exibir 2 casas após a virgula
}

for (let i = 0; i < usuarios.length; i++) {
    const nome = usuarios[i].nome;

    //armazena os valores
    const despesa = usuarios[i].despesas;
    const receita = usuarios[i].receitas

    //calcula o saldo em conta
    const saldo = calculaSaldo(receita, despesa);

    if (saldo < 0 ) {
        console.log(`${nome} possui saldo NEGATIVO de ${saldo}`);
        console.log('=================== // ===================')
    } else{
        console.log(`${nome} possui saldo POSITIVO de ${saldo}`);
        console.log('=================== // ===================')
    }
}
