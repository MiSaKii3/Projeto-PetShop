
/* Array de dicionarios que guarda os clientes que podem aparecer */
const clients = [
    { url: 'Images/Clientes/tile001.png', name: 'tile001' },
    { url: 'Images/Clientes/tile002.png', name: 'tile002' },
    { url: 'Images/Clientes/tile003.png', name: 'tile003' },
    { url: 'Images/Clientes/tile004.png', name: 'tile004' },
    { url: 'Images/Clientes/tile005.png', name: 'tile005' },
    { url: 'Images/Clientes/tile006.png', name: 'tile006' },
    { url: 'Images/Clientes/tile007.png', name: 'tile007' },
    { url: 'Images/Clientes/tile008.png', name: 'tile008' },
    { url: 'Images/Clientes/tile009.png', name: 'tile009' },
    { url: 'Images/Clientes/tile010.png', name: 'tile010' },
    { url: 'Images/Clientes/tile011.png', name: 'tile011' },
    { url: 'Images/Clientes/tile012.png', name: 'tile012' },
    { url: 'Images/Clientes/tile013.png', name: 'tile013' },
    { url: 'Images/Clientes/tile014.png', name: 'tile014' },
    { url: 'Images/Clientes/tile015.png', name: 'tile015' },
];

/* pedidos possiveis que os clientes facam */
const pedidos = [
    // Animais
    { url: 'Images/acessorios/animais/gatos/gato1.png', pedido: 'gato1' },
    { url: 'Images/acessorios/animais/gatos/gato2.png', pedido: 'gato2' },
    { url: 'Images/acessorios/animais/gatos/gato3.png', pedido: 'gato3' },
    { url: 'Images/acessorios/animais/gatos/gato4.png', pedido: 'gato4' },
    { url: 'Images/acessorios/animais/gatos/gato5.png', pedido: 'gato5' },
    { url: 'Images/acessorios/animais/gatos/gato6.png', pedido: 'gato6' },

    { url: 'Images/acessorios/animais/caes/cao1.png', pedido: 'cao1' },
    { url: 'Images/acessorios/animais/caes/cao2.png', pedido: 'cao2' },
    { url: 'Images/acessorios/animais/caes/cao3.png', pedido: 'cao3' },
    { url: 'Images/acessorios/animais/caes/cao4.png', pedido: 'cao4' },
    { url: 'Images/acessorios/animais/caes/cao5.png', pedido: 'cao5' },

    { url: 'Images/acessorios/animais/coelhos/coelho1.png', pedido: 'coelho1' },
    { url: 'Images/acessorios/animais/coelhos/coelho2.png', pedido: 'coelho2' },
    { url: 'Images/acessorios/animais/coelhos/coelho3.png', pedido: 'coelho3' },
    { url: 'Images/acessorios/animais/coelhos/coelho4.png', pedido: 'coelho4' },
    //...

    { url: 'Images/acessorios/animais/hamster/hamster1.png', pedido: 'hamster1' },
    { url: 'Images/acessorios/animais/hamster/hamster2.png', pedido: 'hamster2' },
    { url: 'Images/acessorios/animais/hamster/hamster3.png', pedido: 'hamster3' },
    { url: 'Images/acessorios/animais/hamster/hamster4.png', pedido: 'hamster4' },
    { url: 'Images/acessorios/animais/hamster/hamster5.png', pedido: 'hamster5' },

    // Comidas
    { url: 'Images/acessorios/acessoriosgatos/comidagato.png', pedido: 'comidagato' },
    { url: 'Images/acessorios/acessorioscaes/comidacao.png', pedido: 'comidacao' },
    { url: 'Images/acessorios/acessorioscoelhos/comidacoelho.png', pedido: 'comidacoelho' },
    { url: 'Images/acessorios/acessorioshamsters/comidahamster.png', pedido: 'comidahamster' }
    //...
]

/* Pega o div que contem os clientes */
const div = document.getElementById('clientes');

/* Array que guarda os clientes que ja foram gerados */
let clientesInGame = [null, null, null, null, null]; // Nao cria mais que 5 clientes)

/* Funcao de gerar um cliente */
function generate() {

    if (segundos >= 360) return; // Jogo acabou
    
    let lugar = procuraLugarParaCliente();
    if (lugar == -1) return;  // Nao havia lugar :(

    const clientDiv = document.createElement('div');
    clientDiv.id = 'cliente_' + lugar;


    /* Escolhe um cliente aleatoriamente */
    const randomC = clients[Math.floor(Math.random() * clients.length)];

    /* Cria o elemento de imagem e adiciona a pagina */
    const cliente = createCliente();

    const pedido = createPedido();

    const balao_de_fala = createBalaoDeFala();

    const temporizador = CriarTemp();

    // Posiciona o cliente na tela dependendo de quantos clientes ja existem
    balao_de_fala.style.left = (700 + 100 * lugar) + 'px';
    // Posiciona o cliente na tela dependendo de quantos clientes ja existem
    pedido.style.left = (700 + 100 * lugar) + 'px';
    // Posiciona o cliente na tela dependendo de quantos clientes ja existem
    cliente.style.left = (750 + 100 * lugar) + 'px';
    // Posiciona o temporizador na tela dependendo de quantos clientes ja existem
    temporizador.style.left = (775 + 100 * lugar) + 'px';

    // Adiciona o cliente ao array de clientes gerados e a pagina
    clientDiv.appendChild(cliente);
    clientDiv.appendChild(pedido);
    clientDiv.appendChild(balao_de_fala);
    clientDiv.appendChild(temporizador);
    div.appendChild(clientDiv);
    clientesInGame[lugar] = clientDiv;

    // Se o tempo acabar, remove-se o cliente
    var timer = setInterval(function () {
        if (segundos >= 360){ // Jogo acabou
            clearInterval(timer); 
            return;
        }
        if (temporizador.textContent == 1) {
            div.removeChild(clientDiv);
            clientesInGame[lugar] = null;
            // Remove dinheiro
            const money = document.getElementById('dinheiroTotal');
            var dinheiroAtual = parseInt(money.textContent);

            money.textContent = dinheiroAtual - 5;

            //Para o dinheiro não ser negativo
            if (money.textContent < 0) {
                money.textContent = 0;
            }

            clearInterval(timer);

        } else {
            temporizador.textContent = parseInt(temporizador.textContent) - 1;
        }
    }, 1000);

    clientDiv.ondrop = function (event) {
        onDrop(event, timer, pedido);
    }
    clientDiv.ondragover = function (event) {
        allowDrop(event);
    }

}

function createCliente() {

    const randomC = clients[Math.floor(Math.random() * clients.length)];
    const cliente = document.createElement('img');
    cliente.src = randomC.url;
    cliente.alt = randomC.name;
    cliente.style.zIndex = '5'; // Para nao ficar atras do cenario
    cliente.id = "cliente"; // Para ser aplicado os efeitos do css com este id
    return cliente;
}

function createPedido() {

    const pedido = document.createElement('img');
    const randomPedido = pedidos[Math.floor(Math.random() * pedidos.length)];
    pedido.src = randomPedido.url;
    pedido.alt = randomPedido.pedido;
    pedido.style.zIndex = '3'; // Para nao ficar atras do cenario
    pedido.id = "pedido"; // Para ser aplicado os efeitos do css com este id
    return pedido;
}

function createBalaoDeFala() {
    const balao_de_fala = document.createElement('img');
    balao_de_fala.src = 'Images/Clientes/bolha-de-texto.png';
    balao_de_fala.alt = 'bolha de texto';
    balao_de_fala.id = "balao"; // Para ser aplicado os efeitos do css com este id 
    balao_de_fala.style.zIndex = '2'; // Para nao ficar atras do cenario mas atras do pedido
    return balao_de_fala;
}

function CriarTemp() {
    const temporizador = document.createElement('div');
    temporizador.textContent = '15';
    temporizador.id = 'temporizador';
    temporizador.style.zIndex = '6';
    temporizador.style.fontSize = '16px';
    temporizador.style.fontWeight = 'bold';

    return temporizador;
}

function procuraLugarParaCliente() {
    for (let lugar_n = 0; lugar_n < clientesInGame.length; lugar_n++) {
        // Se nao estiver nenhum cliente la, retorna o numero do lugar
        if (clientesInGame[lugar_n] == null) {
            return lugar_n;
        }
    }
    return -1;
}

setInterval(generate, 1000); // Cria um cliente a cada 1 segundos

// Funcoes para os clientes quando lhes dropam comida

function allowDrop(event) {
    event.preventDefault();
}

function onDrop(event, timer, pedido) {
    event.preventDefault();

    if (segundos >= 360) return; // Jogo acabou

    var recebidoURL = event.dataTransfer.getData("text");
    var recebidoArgs = recebidoURL.split("/");
    var recebidoPNG = recebidoArgs[recebidoArgs.length - 1];
    var recebido = recebidoPNG.split(".")[0];
    console.log(recebido);
    console.log(pedido.alt);
    if(recebido != pedido.alt) 
        return; // Se nao for o pedido do cliente, nao faz nada

    clearInterval(timer);

    // Adiciona dinheiro
    const money = document.getElementById('dinheiroTotal');
    money.textContent = parseInt(money.textContent) + 10;


    //Find the div where this target is in
    let divParent = event.target.parentElement;

    let id = divParent.id;

    // split no _ para pegar apenas o id que é o lugar na fila
    // exemplo: cliente_1, cliente_2, cliente_3, etc... e queremos apenas o nmr
    let lugar = parseInt(id.split('_')[1]);

    // Remover o cliente da lista e do ecra
    let div = document.getElementById('clientes');
    div.removeChild(divParent);
    clientesInGame[lugar] = null;
}

function resetClientes(){
    // Pega a referencia do ultimo id de interval + 1
    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

    // Limpa todos os timers dos clientes (Todos os Intervals na verdade)
    for (let i = 1; i < interval_id; i++) {
        window.clearInterval(i);
    }

    // Remove todos os clientes da pagina e da lista
    for (let lugar_n = 0; lugar_n < clientesInGame.length; lugar_n++) {
        if (clientesInGame[lugar_n] != null) {
            div.removeChild(clientesInGame[lugar_n]);
            clientesInGame[lugar_n] = null;
        }
    }
    setInterval(generate, 1000); // Volta a gerar clientes a cada segundo (Visto que eliminamos todos os Intervals)
}