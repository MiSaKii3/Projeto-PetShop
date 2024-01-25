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

        // Load das coisas
        // localStorage para load das moedas, tempo, ...

        let moedas = document.getElementById("dinheiroTotal");
        let guardarmoedas = localStorage.getItem("moedas");
        moedas.textContent = guardarmoedas;

        let tempo = document.getElementById("contador");
        let guardartempo = localStorage.getItem("tempo");
        tempo.textContent = guardartempo;

        return true;
    }

    //Verificar se as caixas de texto estão vazias

    if(user.value == "" || pass.value == "")
    {
        alert("Preencha os campos");
        return false;
    }
    //Se não coincidirem, manda uma mensagem
    alert("Username ou Password incorretas");
    return false;
}

//Voltar à página de login (ou homepage)
function Home(){
    window.location.href = "index.html";
}