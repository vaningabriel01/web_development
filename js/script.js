async function carregarPagina(pagina){
    const resposta = await fetch(pagina);
    const conteudo = await resposta.text();

    document.getElementById('principal').innerHTML = conteudo;
}

function validarForm(){

    let msg = "";

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if (nome == ""){
        msg += "O campo nome é obrigatório";
    }

    if (email == ""){
        msg += "O campo email é obrigatório";
    }

    if (senha == ""){
        msg += "O campo senha é obrigatório";
    }

    if (msg != ""){
        alert(msg);
        return false;
    }

    return true;
}