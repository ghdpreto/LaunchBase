const nome = 'João'
const peso = 84;
const altura = 1.88;

const imc = peso /(altura * altura);


if (imc >= 30) {
    console.log(`${nome}, seu IMC é ${imc},  você está acima do peso.`);
} else {
    if (imc > 0 && imc <= 29.9) {
        console.log(`${nome}, seu IMC é ${imc}, você não está acima do peso.`);
    }else {
        console.log('IMC Inválido, reveja os valores informados!');
    }
}