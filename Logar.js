let dados = { 

        "angelsofy23" : "Morganaisthebestchamp",
        "Camila" : "123"
    }

function Login() {

    let user = document.getElementById("caixatextouser");
    let pass = document.getElementById("caixatextopass");

    if (dados[user.value] === pass.value) {

        window.location.href = "jogo.html";
        return true;
    }

    if(user.value == "" || pass.value == "")
    {
        alert("Todos os campos não estão preenchidos");
        return false;
    }

    alert("Username ou Password incorretas");
    return false;
}