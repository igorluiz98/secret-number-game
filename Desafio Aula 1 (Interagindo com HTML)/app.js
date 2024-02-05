// 1 - Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let h1 = document.querySelector('h1');
h1.innerHTML = 'Hora do desafio';



// 2 - Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verifClickCons(){
    console.log('O botão "console" foi clicado.');

}



// 3 - Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function verifClickAlert(){
    alert('Eu amo JS');
}



// 4 - Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function verifClickPrompt(){
    let cidade = prompt('Digite o nome de uma cidade:');
    alert(`Estive em ${cidade} e lembrei de você.`)
}



// 5 - Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
function verifClickSoma(){
    let num1 = parseInt(prompt('Digite um número:'));
    let num2 = parseInt(prompt('Digite outro número:'));
    let soma = num1 + num2;
    alert(`A soma entre ${num1} e ${num2} é: ${soma}.`)
}
//Exemplo abaixo cria uma outra função que recebe os números como parâmetro.

// function somaNumeros(num1, num2) {
//     let soma = num1 + num2;
//     return soma;
// }

// function verifClickSoma() {
//     let num1 = parseInt(prompt('Digite um número:'));
//     let num2 = parseInt(prompt('Digite outro número:'));
//     let resultadoSoma = somaNumeros(num1, num2);
//     alert(`A soma entre ${num1} e ${num2} é: ${resultadoSoma}.`);
// }

// // Exemplo de uso
// verifClickSoma();