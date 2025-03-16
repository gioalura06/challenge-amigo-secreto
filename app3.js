function adicionarAmigo() {
    // Pega o valor do input var nome = document.getElementById('amigo').value;
    // let amigo = document.getElementById('amigo').textContent = lista;

    document.getElementById('amigo'). setAttribute('disabled',true)

    let amigo = document.getElementById("amigo")
    // Pega o valor do input
    let amigos = amigo.value
    document.getElementById('amigo').textContent = amigos;
// Busca o elemento por id 
    let listaAmigos = document.getElementById('listaAmigos')
    let novoAmigo = document.createElement("li");

    novoAmigo.textContent = amigos

    listaAmigos.appendChild(novoAmigo);
    
    amigo.value = ""
   
}



const amigos = [];
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function sortearAmigo() {

const listaAmigos = document.getElementById('listaAmigos').value;
const varResultado = document.getElementById('resultado').value;

if(amigos.length > 2 ){
    amigos.push({listaAmigos,resultado});

    const listarNome = document.createElement('li');
    listarNome.className = 'name-list';
    listarNome.textContent = `${nome} - ${resultado}`;
    listaAmigos.appendChild(listarNome);

    if(amigoslength == 2){
        sortearAmigo.disabled = false;
    }

    addamigos.reset();
}

// Sortear amigo aleatório
sortearAmigo.onclick('click', function(){
    const resultadoIndex = Math.floor(Math.random() * amigos.length);
    const resultado = amigos[resultadoIndex],

    //mostrar o amigo secreto sorteado
    verResultado.textContent = `O amigo secreto sorteado é ${resultado.nome} - ${resultado}`;
});

