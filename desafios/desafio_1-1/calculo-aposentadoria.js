/* const nome = 'Maria';
const sexo = 'F';
const idade = 55;
const contribuicao = 30; */

const nome = 'João';
const sexo = 'H';
const idade = 70;
const contribuicao = 35;

const tempoContribuicao = idade + contribuicao;


if (sexo == 'H') {
    if (tempoContribuicao >= 95 && contribuicao >= 35) {
        console.log(`${nome},
            Contribuição: ${contribuicao} \n\
            Fator (idade + contribuição): ${tempoContribuicao} \n\
            Você PODE se aposentar! :)`);
    } else {
        console.log(`${nome},
            Contribuição: ${contribuicao} \n\
            Fator (idade + contribuição): ${tempoContribuicao} \n\
            Você NÃO pode se aposentar! :(`);
    }
} else {
    if (sexo == 'F') {
        if (tempoContribuicao >= 85 && contribuicao >= 30) {
            console.log(`${nome},
                Contribuição: ${contribuicao} \n\
                Fator (idade + contribuição): ${tempoContribuicao} \n\
                Você PODE se aposentar! :)`);
        } else {
            console.log(`${nome},
                Contribuição: ${contribuicao} \n\
                Fator (idade + contribuição): ${tempoContribuicao} \n\
                Você NÃO pode se aposentar! :(`);
        }
    }
}