/* Array de dicionarios que guarda os clientes que podem aparecer */
const clients = [
    {url : 'Images/Clientes/tile001.png', name : 'tile001'},
    {url : 'Images/Clientes/tile002.png', name : 'tile002'},
    {url : 'Images/Clientes/tile003.png', name : 'tile003'},
    {url : 'Images/Clientes/tile004.png', name : 'tile004'},
];

/* Pega o div que contem os clientes */
const div = document.getElementById('clientes');

/* Array que guarda os clientes que ja foram gerados */
let clientesInGame = [];

/* Funcao de gerar um cliente */
function generate(){
    if(clientesInGame.length >= 5) return; // Nao cria mais que 5 clientes)
    
    /* Escolhe um cliente aleatoriamente */
    const random = clients[Math.floor(Math.random() * clients.length)];

    /* Cria o elemento de imagem e adiciona a pagina */
    const imgElement = document.createElement('img');
    imgElement.src = random.url;
    imgElement.alt = random.name;
    imgElement.style.zIndex = '3'; // Para nao ficar atras do cenario
    imgElement.id = "cliente"; // Para ser aplicado os efeitos do css com este id

    // Posiciona o cliente na tela dependendo de quantos clientes ja existem
    imgElement.style.left = (700 + 100*clientesInGame.length) + 'px'; 

    // Adiciona o cliente ao array de clientes gerados e a pagina
    div.appendChild(imgElement);
    clientesInGame.push(imgElement);
}

setInterval(generate, 1000); // Cria um cliente a cada 5 segundos


