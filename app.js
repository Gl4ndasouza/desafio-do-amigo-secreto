// criar lista zerada
let amigos = [];

function adicionarAmigo(){
    let amigoInput = document.getElementById('amigo');
    let amigo = amigoInput.value;

    //validação da entrada do valor no campo 
    if (amigo.trim() === ""){
        alert("Por favor, insira um nome.");
        return;
    }

    if (amigos.includes(amigo)) {
        alert('Este nome já foi adicionado!');
        amigoInput.value = "";
        return;
    }

    //atualiza lista
    amigos.push(amigo);
    console.log(`O amigo ${amigo} foi adicionado na lista`, amigos);

    //limpar
    amigoInput.value = "";
    atualizarListaDeAmigos();
}

function atualizarListaDeAmigos(){
    //obter elemento
    let lista = document.getElementById("listaAmigos");

    //limpar a lista
    lista.innerHTML = "";

    //loop para percorrer a lista
    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        // adiciona elementos a lista amigos
        lista.appendChild(li);
    }
}

//verificar se a lista amigos não está vazia
function sortearAmigo(){
    if(amigos.length == 0){
        console.log('A lista está vazia');
    } else {
        //índice aleatório
        let random = Math.floor(Math.random() * amigos.length);

        //mostra o sorteado
        exibirNaTela("resultado", `O amigo secreto sorteado foi: ${amigos[random]}`);

        //zera a lista
        amigos = [];
        atualizarListaDeAmigos();
    }
}

//mostra o resultado
function exibirNaTela(tag, text){
    let campo = document.getElementById(tag);
    campo.innerHTML = text;
}