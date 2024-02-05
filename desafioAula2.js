//Desafio Aula 2 (Funções)Criar uma função que exibe "Olá, mundo!" no console.

// 1 - Criar uma função que exibe "Olá, mundo!" no console.
function exibirOla(){
    console.log('Olá, mundo!');
}
exibirOla();


// 2 - Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
  }
  
exibirOlaNome("Igor");


// 3 - Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero * 2;
  }
  let num = parseInt(prompt('Digite um número:'))
  let resultadoDobro = calcularDobro(num);
  console.log(resultadoDobro);


// 4 - Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}
let mediaFinal = calcularMedia(10, 7, 7);
alert(`Sua média é: ${mediaFinal}`)


// 5 - Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorNum(a, b){
    if (a > b){
        return a;
    } 
    else if (a == b){
        return alert('Os números são iguais.');
    }
    else {
        return b;
    }
}
let numeros = maiorNum(10, 5);
console.log(`O maior número é: ${numeros}`);

//OUTRO MODO

function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = encontrarMaior(15, 9);
  console.log(maiorNumero);


// 6 - Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function multiNum(num){
    return num * num;
}
let numero = parseInt(prompt('Digite um número:'));
let resultado = multiNum(numero);
alert(`O número ${numero} ao quadrado é ${resultado}`);