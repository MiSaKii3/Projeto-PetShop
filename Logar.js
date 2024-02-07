
let dados = { //Dicionário com os dados dos dois elementos do grupo

    "angelsofy23": "Morganaisthebestchamp",
    "Camila": "123"
}

// Guarda os dados, caso estes ainda nao tenham sido guardados
if (localStorage.getItem("dados") == null) {
    localStorage.setItem("dados", JSON.stringify(dados)); 
    //Se o localstorage for nulo, vai guardar os dados do dicionário acima. Se não, fica com os dados que estiver.
}

//função de logar, quando se clica no botão de logar
function Login() {
    dados = JSON.parse(localStorage.getItem("dados")); //Obter os dados de login do locastorage
    let user = document.getElementById("caixatextouser"); //Valores da caixa de texto user (o que o utilizador digitar)
    let pass = document.getElementById("caixatextopass"); //Valores da caixa de texto password (o que o utilizador digitar)

    //Verifica se os dados das caixas de texto coincidirem com os dados do dicionário
    if (dados[user.value] === pass.value) {
        window.location.href = "jogo.html"; //O jogo abre se os dados estiverem certos
        localStorage.setItem("jogador", user.value); //Guarda o nome do utilizador ativo, que depois é mostrado no jogo
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

//funcao no formulário, ao clicar o botao atualizar dados
function atualizarDados() {

    dados = JSON.parse(localStorage.getItem("dados")); //Obtem os dados do localstorage atuais
    let user = document.getElementById("caixatextouser2").value; //User atual, digitado na caixa de texto
    let pass = document.getElementById("caixatextopass2").value; //Password atual, digitado na caixa de texto

    let newUser = document.getElementById("caixatextouserform").value; //Novo username, digitado na caixa de texto
    let newPass = document.getElementById("caixatextopassform").value; //Nova password, digitado na caixa de texto

    //Verificar user e pass
    if (dados[user] === pass) { //Verificar se a password está certa antes de mudar os dados
        if (newPass != "") { //Verificar se a nova password não é vazia
            dados[user] = newPass; //Se não for vazia, guarda a nova password
        }
        if (newUser != "") { //Mesma coisa, mas para o user
            dados[newUser] = dados[user]; //Cria um novo user com um novo nome e a password atual ou nova (se tiver mudado)
            delete dados[user]; //Deleta o usuário antigo
        }

        localStorage.setItem("dados", JSON.stringify(dados)); //Atualiza o localstorage com os novos dados

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

//Ir para o formulário, clicando no botão do formulário
function VoltarFormulario() {
    window.location.href = "formulario.html";
}

//função para determinar o user que está atualmente logado no jogo
function UserLogado()
{
    let loguser = document.getElementById("userlogado"); //Obtem o elemento do texto onde fica esse tal user
    loguser.textContent = localStorage.getItem("jogador"); //O texto, ou seja o textcontent, mostra o user logado (segundo o que está guardado no localstorage)
}
