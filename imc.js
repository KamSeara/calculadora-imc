
const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        let classi = '';

        if (valorIMC < 18.5) {
            classi = 'abaixo do peso. Tenha atenção e procure orientação médica!';
        } else if (valorIMC < 25){
            classi = 'com peso ideal. Parabéns, continue assim!';
        } else if (valorIMC < 30){
            classi = 'levemente acima do peso. Tenha mais atenção!';
        } else if (valorIMC < 35){
            classi = 'com Obesidade grau I. Procure orientação médica!';
        } else if (valorIMC < 40){
            classi = 'com Obesidade grau II. Procure orientação médica urgente!';
        } else {
            classi = 'com Obesidade grau III. Tratar com urgência!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classi}`;

    } else {
        resultado.textContent = 'Preencha todos os campos!'
    }
}

calcular.addEventListener('click', imc);
