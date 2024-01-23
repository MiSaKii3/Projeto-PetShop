let dados = { 

        "angelsofy23" : "Morganaisthebestchamp",
        "Camila" : "123"
    }

function Login() {

    let user = document.getElementById("caixatextouser");
    let pass = document.getElementById("caixatextopass");

    //Para os dados das caixas de texto coincidirem com os dados do dicionário
    if (dados[user.value] === pass.value) {

        window.location.href = "jogo.html";
        return true;
    }

    //Verificar se as caixas de texto estão vazias

    if(user.value == "" || pass.value == "")
    {
        alert("Preencha os campos");
        return false;
    }

    alert("Username ou Password incorretas");
    return false;
}

function Home(){
    window.location.href = "index.html";
}