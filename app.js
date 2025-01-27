//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function contemNumero(nome){
    return /\d/.test(nome);
}

function listaAmigos(){
    let lista = document.getElementById('listaAmigos');
    
    lista.innerHTML = '';

    for(i=0;i<amigos.length;i++){
        const li = document.createElement('li');
        li.append(amigos[i]);
        lista.append(li)         
    }
}

function adicionarAmigo(){
    let inputNome = document.getElementById('amigo');
    let nome = inputNome.value;
    
    if(nome == '' || contemNumero(nome)){
        alert('Por favor, insira um nome valido.');
    }else if(nome.length>1){
        // alert('Cadastrado com sucesso.');
        amigos.push(nome);
        inputNome.value = '';
        listaAmigos();
    }else{
        alert('Por favor, insira um nome.');
    }
}

function sortearAmigo(){
    if(amigos.length>0){
        let resultado = document.getElementById('resultado')
        let indiceAleatorio = parseInt(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        resultado.innerHTML = amigoSorteado;
    }
}