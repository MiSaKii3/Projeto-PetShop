let user = document.getElementById("caixatextouser");
let pass = document.getElementById("caixatextopass");
let dados = [

    {"username": "angelsofy23", "password": "Morganaisthebestchamp"}
]

function Login()
{
    for(i = 0; i < dados.length; i++)
    {
        if(dados[i].username && dados[i].password === user.value && pass.value)
        {
            window.location.href = "jogo.html";
        }
    }
}