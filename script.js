function validarForm(){
    let msg="";

    let name = document.getElementById("name").value
    let cpf = document.getElementById("cpf").value
    let email = document.getElementById("email").value
    let senha = document.getElementById("senha").value
    let endereco = document.getElementById("endereco").value

    if (name == ""){
        msg += "O campo nome é obrigatório"
    };
    if (cpf == ""){
        msg += "O campo cpf é obrigatório"
    };
    if (email == ""){
        msg += "O campo email é obrigatório"   
    };
    if (senha == ""){
        msg += "O campo senha é obrigatório"
    }
    if (endereco == ""){
        msg += "O campo endereco é obrigatório"
    };

    if (msg != ""){
        alert(msg)
        return false
    }

    return true
}