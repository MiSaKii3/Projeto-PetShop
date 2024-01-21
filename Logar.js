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

    alert("Username or Password are incorrect!");
    return false;
}