// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaNumerosSorteados = [];
let numLimite = 10;
let numSecreto = gerarNum();
let numTentativas = 1;

function exibirNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2}); //comando para que seja falado na tela
}

function exibirMsgInicial(){
    exibirNaTela('h1', 'Jogo do número secreto');
    exibirNaTela('p', 'Escolha um número entre 1 e 10.');
}


function gerarNum(){
    let numeroEscolhido = parseInt(Math.random() * numLimite + 1);
    let quantidadeElementosNaLista = listaNumerosSorteados.length;

    if (quantidadeElementosNaLista == numLimite){
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNum();
    } else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparNum(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numSecreto = gerarNum();
    limparNum();
    exibirMsgInicial();
    numTentativas = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

exibirMsgInicial();



function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numSecreto){
        exibirNaTela('h1', 'Acertou!');
        let wordTentativas = numTentativas > 1 ? 'tentativas' : 'tentativas';
        let msgTentativas = `Meus parabéns, você acertou o número secreto (${numSecreto}) com ${numTentativas} ${wordTentativas}.;`
        exibirNaTela('p', msgTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }   else{
            exibirNaTela('h1', 'Você errou!');
            if (numSecreto < chute){
                exibirNaTela('p', `O número secreto é menor que ${chute}, tente novamente.`);
            } else{
                exibirNaTela('p', `O número secreto é maior que ${chute}, tente novamente.`);
            }
            //numTentativas = numTentativas + 1;
            numTentativas++;
            limparNum();
    }
}


let cores = [ 'azul', 'amarelo', 'verde', 'branco'];
console.log(cores[cores.length -1]);
console.log(cores[2])