
const calcular = document.getElementById('Calcular');


const imc = () => {
    const nome = document.getElementById('Nome').value;
    const altura = document.getElementById('Altura').value;
    const peso = document.getElementById('Peso').value;
    const resultado = document.getElementById('Resultado');

    if(nome.value ==="") {
        alert("Preencha o campo Nome");
    } if (altura.value ==="") {
        alert("Preencha o campo Altura");
    } if (peso.value ==="") {
        alert("Preencha o campo Peso")
    } else {
        const ValorIMC = (peso / (altura * altura)).toFixed(2);
        
        let classificacao = "";

        if (ValorIMC < 18.5){
            classificacao = "abaixo do peso!";
        } else if (ValorIMC < 25) {
            classificacao = "com o peso ideal!";
        } else if (ValorIMC < 30) {
            classificacao = "levemente acima do peso!";
        } else if (ValorIMC < 35) {
            classificacao = "com obesidade grau I!";
        } else if (ValorIMC < 40) {
            classificacao = "com obesidade grau II!";
        } else {
            classificacao = "com obesidade grau III! Cuidado!";
        }
        resultado.textContent = `${nome} seu IMC é ${ValorIMC} e você está ${classificacao}`;
    }
}

calcular.addEventListener('click', imc);
