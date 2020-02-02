const usuario = {
    nome: 'Mariana',
    transacoes: [],
    saldo: 0
}

const operacoes = [
    {
        tipo: 'credito',
        valor: 20
    },
    {
        tipo: 'credito',
        valor: 100
    },
    {
        tipo: 'debito',
        valor: 15
    },
    {
        tipo: 'debito',
        valor: 80.5
    },
]

function criarTransacao(obj) {

    usuario.transacoes.push(obj);

    if (obj.tipo == 'credito') {
        usuario.saldo = obj.valor;
    } else {
        usuario.saldo -= obj.valor;
    }

    console.log(usuario);
}

function maiorValor(tipoTransacao) {

    let alto = 0

    for (let i = 0; i < usuario.transacoes.length; i++) {
        if (usuario.transacoes[i].tipo == tipoTransacao ) {
            if(usuario.transacoes[i].valor > alto){
                alto = usuario.transacoes[i].valor
            }
        }
    }

    console.log(`Maior operação realizada de ${tipoTransacao} é no valor de R$${alto}`)
}

function mediaPorTransacao(tipoTransacao) {

    const usuarioTransacao = usuario.transacoes

    let media = 0

    let resultado = 0

    let x = 0

    for (let i = 0; i < usuarioTransacao.length; i++) {
        if (usuarioTransacao[i].tipo == tipoTransacao) {

            resultado += usuarioTransacao[i].valor

            x ++
        }        
    }

    media = resultado / x 
    
    console.log(`Media de transações do tipo ${tipoTransacao} é de R$${media}`)
}

function contaTransacao() {

    const debito = 'debito'

    let contDebito = 0

    let contCredito = 0

    for (let i = 0; i < usuario.transacoes.length; i++) {
        if (usuario.transacoes[i].tipo == debito) {

            contDebito++

        }else {

            contCredito++

        }

    }

    console.log(`Operações de debitos => ${contDebito}`)
    console.log(`Operações de credito => ${contCredito}`)
}


//criando transacoes
for(x of operacoes) {
    criarTransacao(x)
}


maiorValor('credito')
maiorValor('debito')

mediaPorTransacao('credito')
mediaPorTransacao('debito')

contaTransacao()


