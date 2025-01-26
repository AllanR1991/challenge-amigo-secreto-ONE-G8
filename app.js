//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function contemNumero(nome){
    return /\d/.test(nome);
}

function adicionarAmigo(){
    let inputNome = document.getElementById('amigo');
    let nome = inputNome.value;
    
    if(nome == '' || contemNumero(nome)){
        alert('Por favor, insira um nome valido.');
    }else if(nome.length>1){
        alert('Cadastrado com sucesso.');
        amigos.push();
        inputNome.value = '';
    }else{
        alert('Por favor, insira um nome.');
    }
}
