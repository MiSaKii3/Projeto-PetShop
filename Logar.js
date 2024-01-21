
let dados = [
    {"username": "angelsofy23", "password": "Morganaisthebestchamp"}
]


function Login()
{
    let user = document.getElementById("caixatextouser");
    let pass = document.getElementById("caixatextopass");
    for(i = 0; i < dados.length; i++)
    {
        if(dados[i].username === user.value && dados[i].password === pass.value)
        {
            document.location.href = "jogo.html";
            return true;
        }
    }

    return false;
}