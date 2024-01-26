
let dados = { //Dicionário com os dados dos dois elementos do grupo

    "angelsofy23": "Morganaisthebestchamp",
    "Camila": "123"
}


if (localStorage.getItem("dados") == null) {
    localStorage.setItem("dados", JSON.stringify(dados));
}

function Login() {
    dados = JSON.parse(localStorage.getItem("dados"));
    let user = document.getElementById("caixatextouser");
    let pass = document.getElementById("caixatextopass");

    //Para os dados das caixas de texto coincidirem com os dados do dicionário
    if (dados[user.value] === pass.value) {
        window.location.href = "jogo.html";
        localStorage.setItem("jogador", user.value);
        return true;
    }

    //Verificar se as caixas de texto estão vazias
    if (user.value == "" || pass.value == "") {
        alert("Preencha os campos");
        return false;
    }
    //Se não coincidirem, manda uma mensagem
    alert("Username ou Password incorretas");
    return false;
}

//Voltar à página de login (ou homepage)
function Home() {
    window.location.href = "index.html";
}

function atualizarDados() {

    dados = JSON.parse(localStorage.getItem("dados"));
    let user = document.getElementById("caixatextouser2").value;
    let pass = document.getElementById("caixatextopass2").value;

    let newUser = document.getElementById("caixatextouserform").value;
    let newPass = document.getElementById("caixatextopassform").value;

    //Verificar user e pass
    if (dados[user] === pass) {
        if (newPass != "") {
            dados[user] = newPass;
        }
        if (newUser != "") {
            dados[newUser] = dados[user];
            delete dados[user];
        }

        localStorage.setItem("dados", JSON.stringify(dados));

        alert("Dados atualizados com sucesso!");
    } else {
        console.log(user.value);
        console.log(pass.value);
        console.log(newUser.value);
        console.log(newPass.value);
        console.log(dados);
        alert("Username ou Password incorretas");
    }
}
function VoltarFormulario() {
    window.location.href = "formulario.html";
}
