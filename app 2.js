let listaDeNomesSorteados = [];
let nomeLimite = 10
let nomeSecreto = gerarNomeAleatório();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    }

    function exibirMensagemInicial() {
        exibirTextoNaTela ('h1', 'Amigo Secreto');
        exibirTextoNaTela ('p', 'Digite o nome de seus amigos');
    }



function gerarNomeAleatorio() {
    let nomeEscolhido = parseInt(Math.random() * nomeLimite);
    let quantidadeDeElementosNaLista = listaDeNomesSorteados.length;

    if (quantidadeDeElementosNaLista == nomeLimite) {
        listaDeNomesSorteados = []; 
    }
    if (listaDeNomesSorteados.includes(nomeEscolhido)) {
        return gerarNomeAleatorio();
    } else {
        listaDeNomesSorteados.push(nomeEscolhido);
        console.log(listaDeNomesSorteados)
        return nomeEscolhido;
    }
    }




function adicionarAmigo() {
    nomeSecreto = gerarNomeAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('amigo'). setAttribute('disabled', true)
}




