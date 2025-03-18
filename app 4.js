let amigos = [];

function adicionarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nomeAmigo = inputAmigo.value;

    if(nomeAmigo) {
        alert ("Digite o nome de seus amigos");
    return;
    }

    amigos.push(nomeAmigo);
    inputAmigo.value = "";
    inputAmigo.select();
    atualizarListaAmigos();
}

amigos.push(nomeAmigo);
inputAmigo.value ="";
inputAmigo.select();
atualizarlista();


 function atualizarListaAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for(let 1 = 0; 1 <amigos.length; 1++){
        let item = document.createElement("li");
        item.textContent = amigos [1];
        listaAmigos.appendChild(item);
        if (nomeAmigo.lengt == 0)
      }
}
function sortearAmigo() {
if (amigos.length <2) {
    alert ("Adicione mais amiogos para sortear!");
    let amigosSorteados = amigos [Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo secreto sorteado é: $(amigoSorteado)`;
}
}

    function reiniciarSorteio() {
        let resultado = document.getElementById("resultado");
        resultado.textContent = "";
        amigos = [];
        atualizarListaAmigos();
        alert("Novo sorteio!");

    }
