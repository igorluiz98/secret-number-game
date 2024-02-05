// // 1 - Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function resultados(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

}

function calcImc(){
    let peso = document.querySelector('#pesoInput').value;
    let altura = document.querySelector('#alturaInput').value;
    let imc = peso / (altura * altura);
    if(imc > 24.9){
        resultados('#resultadoIMC', `O cálculo IMC deu ${imc.toFixed(1)}, com isso você está acima do peso.` )
    }
    else if(imc < 18.6){
        resultados('#resultadoIMC', `O cálculo IMC deu ${imc.toFixed(1)}, com isso você está abaixo do peso.`)
    }
    else{
        resultados('#resultadoIMC', `O cálculo IMC deu ${imc.toFixed(1)}, com isso você está com peso ideal.`)
    }
}



// // 2 - Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

// function calcularFatorial(numero) {
//     if (numero === 0 || numero === 1) {
//       return 1;
//     }
  
//     let fatorial = 1;
//     for (let i = 2; i <= numero; i++) {
//       fatorial *= i;
//     }
  
//     return fatorial;
//   }
  
//   // Exemplo de uso
//   let numero = 5;
//   let resultado = calcularFatorial(numero);
//   console.log(`O fatorial de ${numero} é ${resultado}`);




// 3 - Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.


// function passDolar(valorReais){
//     let dolarAtual = 4.95;
//     let valorDolar = valorReais / dolarAtual;
//     alert(`O valor inserido em reais (R$ ${valorReais}) é igual a US$ ${valorDolar.toFixed(2)} baseado na cotação atual (1 Dólar americano igual à ${dolarAtual} Real brasileiro).`);

// }

// let valorReais = parseFloat(prompt('Digite um valor em reais:'));
// passDolar(valorReais);



// function passDolar(){
//     let dolarAtual = 4.95;
//     let valorReais = document.querySelector('#valorImput').value;
//     let valorDolar = valorReais / dolarAtual;
//     resultados('#resultadoEmDolar', `O valor inserido em reais (R$ ${valorReais}) é igual a US$ ${valorDolar.toFixed(2)} baseado na cotação atual (1 Dólar americano igual à ${dolarAtual} Real brasileiro).`);

// }


function passReais(valorDolar){
    let dolarAtual = 4.95;
    let valorReais = valorDolar * dolarAtual;
    resultados('#resultadoEmReais', `O valor inserido em Dolar (US$ ${valorDolar}) é igual a RS$ ${valorReais.toFixed(2)} baseado na cotação atual (1 Dólar americano igual à ${dolarAtual} Real brasileiro).`);


}




// 4 - Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

// function calcAreaPerim(){
//     let altura = parseFloat(document.querySelector('#valorAltura').value);
//     let largura = parseFloat(document.querySelector('#valorLargura').value);
//     let area = altura * largura;
//     let perimetro = (altura + largura) * 2;
//     resultados('#resultadoRetangular', `Com base nas informações dadas sobre altura(${altura}cm) e largura(${largura}cm), a área do retângulo é igual à ${area}cm e o perimêtro é igual à ${perimetro}cm`);
// }

function calcRetangular(altura, largura){
    let area = altura * largura;
    let perimetro = (altura + largura) * 2;
    resultados('#resultadoRetangular', `Com base nas informações dadas sobre altura(${altura}cm) e largura(${largura}cm), a área do retângulo é igual à ${area}cm e o perimêtro é igual à ${perimetro}cm`);
}


// 5 - Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.


function calcCircular(valorRaio){
    let Pi = 3.14;
    let area = Pi * (valorRaio * valorRaio);
    let perimetro = 2 * Pi * valorRaio;
    resultados('#resultadoCircular', `Com base no raio fornecido (${valorRaio}cm), segue dados abaixo em relação ao circulo: <br> Àrea: ${area} <br> Perímetro: ${perimetro}`);
}

//  let area = Math.PI * raio * raio;
//  let perimetro = 2 * Math.PI * raio;



// 6 - Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.


function criarTabuada(numero) {
    let tabuada = ""; // Inicializa uma string vazia para armazenar as multiplicações

    for (let i = 1; i <= 10; i++) {
        let resultadoTabuada = numero * i;
        tabuada += `${numero} x ${i} = ${resultadoTabuada}<br>`;
    }

    resultados('#resultadoTabuada', tabuada); // Atualiza o conteúdo no elemento HTML
}

