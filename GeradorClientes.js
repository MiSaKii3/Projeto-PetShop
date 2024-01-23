/* Array de dicionarios que guarda os clientes que podem aparecer */
const clients = [
    {url : 'Images/Clientes/tile001.png', name : 'tile001'},
    {url : 'Images/Clientes/tile002.png', name : 'tile002'},
    {url : 'Images/Clientes/tile003.png', name : 'tile003'},
    {url : 'Images/Clientes/tile004.png', name : 'tile004'},
    {url : 'Images/Clientes/tile005.png', name : 'tile005'},
    {url : 'Images/Clientes/tile006.png', name : 'tile006'},
    {url : 'Images/Clientes/tile007.png', name : 'tile007'},
    {url : 'Images/Clientes/tile008.png', name : 'tile008'},
    {url : 'Images/Clientes/tile009.png', name : 'tile009'},
    {url : 'Images/Clientes/tile010.png', name : 'tile010'},
    {url : 'Images/Clientes/tile011.png', name : 'tile011'},
    {url : 'Images/Clientes/tile012.png', name : 'tile012'},
    {url : 'Images/Clientes/tile013.png', name : 'tile013'},
    {url : 'Images/Clientes/tile014.png', name : 'tile014'},
    {url : 'Images/Clientes/tile015.png', name : 'tile015'},
];

/* pedidos possiveis que os clientes facam */
const pedidos = [
    // Animais
    {url : 'Images/acessorios/animais/gatos/gato1.png', pedido : 'gato'},
    {url : 'Images/acessorios/animais/gatos/gato2.png', pedido : 'gato'},
    {url : 'Images/acessorios/animais/gatos/gato3.png', pedido : 'gato'},
    {url : 'Images/acessorios/animais/gatos/gato4.png', pedido : 'gato'},
    {url : 'Images/acessorios/animais/gatos/gato5.png', pedido : 'gato'},
    {url : 'Images/acessorios/animais/gatos/gato6.png', pedido : 'gato'},

    {url : 'Images/acessorios/animais/caes/cao1.png', pedido : 'cao'},
    {url : 'Images/acessorios/animais/caes/cao2.png', pedido : 'cao'},
    {url : 'Images/acessorios/animais/caes/cao3.png', pedido : 'cao'},
    {url : 'Images/acessorios/animais/caes/cao4.png', pedido : 'cao'},
    {url : 'Images/acessorios/animais/caes/cao5.png', pedido : 'cao'},

    {url : 'Images/acessorios/animais/coelhos/coelho1.png', pedido : 'coelho'},
    {url : 'Images/acessorios/animais/coelhos/coelho2.png', pedido : 'coelho'},
    {url : 'Images/acessorios/animais/coelhos/coelho3.png', pedido : 'coelho'},
    {url : 'Images/acessorios/animais/coelhos/coelho4.png', pedido : 'coelho'},
    //...

    {url : 'Images/acessorios/animais/hamster/hamster1.png', pedido : 'hamster'},
    {url : 'Images/acessorios/animais/hamster/hamster2.png', pedido : 'hamster'},
    {url : 'Images/acessorios/animais/hamster/hamster3.png', pedido : 'hamster'},
    {url : 'Images/acessorios/animais/hamster/hamster4.png', pedido : 'hamster'},
    {url : 'Images/acessorios/animais/hamster/hamster5.png', pedido : 'hamster'},

    // Comidas
    {url : 'Images/acessorios/acessoriosgatos/comidagato.png', pedido : 'comida_gato'},
    {url : 'Images/acessorios/acessorioscaes/comidacao.png', pedido : 'comida_cao'},
    {url : 'Images/acessorios/acessorioscoelhos/comidacoelho.png', pedido : 'comida_coelho'},
    {url : 'Images/acessorios/acessorioshamsters/comidahamster.png', pedido : 'comida_hamster'}
    //...
]

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
    imgElement.style.left = (750 + 100*clientesInGame.length) + 'px'; 

    // Adiciona o cliente ao array de clientes gerados e a pagina
    div.appendChild(imgElement);
    clientesInGame.push(imgElement);
}

setInterval(generate, 1000); // Cria um cliente a cada 1 segundos


