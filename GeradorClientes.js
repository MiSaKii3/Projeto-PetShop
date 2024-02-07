
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
    // Gatos
    { url: 'Images/acessorios/animais/gatos/gato1.png', pedido: 'gato1' },
    { url: 'Images/acessorios/animais/gatos/gato2.png', pedido: 'gato2' },
    { url: 'Images/acessorios/animais/gatos/gato3.png', pedido: 'gato3' },
    { url: 'Images/acessorios/animais/gatos/gato4.png', pedido: 'gato4' },
    { url: 'Images/acessorios/animais/gatos/gato5.png', pedido: 'gato5' },
    { url: 'Images/acessorios/animais/gatos/gato6.png', pedido: 'gato6' },
    // Caes
    { url: 'Images/acessorios/animais/caes/cao1.png', pedido: 'cao1' },
    { url: 'Images/acessorios/animais/caes/cao2.png', pedido: 'cao2' },
    { url: 'Images/acessorios/animais/caes/cao3.png', pedido: 'cao3' },
    { url: 'Images/acessorios/animais/caes/cao4.png', pedido: 'cao4' },
    { url: 'Images/acessorios/animais/caes/cao5.png', pedido: 'cao5' },
    // Coelhos
    { url: 'Images/acessorios/animais/coelhos/coelho1.png', pedido: 'coelho1' },
    { url: 'Images/acessorios/animais/coelhos/coelho2.png', pedido: 'coelho2' },
    { url: 'Images/acessorios/animais/coelhos/coelho3.png', pedido: 'coelho3' },
    { url: 'Images/acessorios/animais/coelhos/coelho4.png', pedido: 'coelho4' },
    // Hamsters
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
 
]

/* Pega o div que contem os clientes */
const allClients = document.getElementById('clientes');

/* Array que guarda os clientes que ja foram gerados */
let clientesInGame = [null, null, null, null, null]; // Nao cria mais que 5 clientes)

/* Funcao de gerar um cliente */
function generate() {
    // Variavel segundos do ContadorTempo.js para verificar se o jogo acabou
    if (segundos >= 360) return; // Jogo acabou
    
    // Verifica se ha lugar para o cliente ficar
    let lugar = procuraLugarParaCliente();

    // Se lugar for -1, significa que não há lugar
    if (lugar == -1) return;  // Nao havia lugar :(

    // Se nada impedir de criar o cliente, entao:
    
    // Cria um div cliente onde de seguida se vai juntar as informaçoes do mesmo
    const clientDiv = document.createElement('div');
    // Muda o id do cliente dependendo do lugar onde está
    clientDiv.id = 'cliente_' + lugar;

    // Cria o cliente
    const cliente = createCliente();
    // Cria o Pedido do cliente
    const pedido = createPedido();
    // Cria o balao de fala onde o pedido vai estar presente
    const balao_de_fala = createBalaoDeFala();
    // Cria o temporizador do cliente até ele ir embora
    const temporizador = CriarTemp();

    // Posiciona o cliente na tela dependendo do seu lugar na fila
    balao_de_fala.style.left = (700 + 100 * lugar) + 'px';
    // Posiciona o cliente na tela dependendo do seu lugar na fila
    pedido.style.left = (700 + 100 * lugar) + 'px';
    // Posiciona o cliente na tela dependendo do seu lugar na fila
    cliente.style.left = (750 + 100 * lugar) + 'px';
    // Posiciona o temporizador na tela dependendo do seu lugar na fila
    temporizador.style.left = (775 + 100 * lugar) + 'px';

    // Junta tudo no div do cliente inicialmente criado
    clientDiv.appendChild(cliente);
    clientDiv.appendChild(pedido);
    clientDiv.appendChild(balao_de_fala);
    clientDiv.appendChild(temporizador);

    // Adiciona este novo cliente, na div de clientes geral do jogo.html
    allClients.appendChild(clientDiv);
    // E adiciona o cliente no lugar que estava null da lista clientesInGame
    clientesInGame[lugar] = clientDiv;

    // Funcao para fazer o timer do cliente descer a cada segundo
    var timer = setInterval(function () {
        // Verifica primeiro se o jogo ainda nao acabou
        if (segundos >= 360){
            // Se sim, cancela tudo
            clearInterval(timer); 
            return;
        }
        // Quando o temporizador chegar ao fim
        if (temporizador.textContent == 1) {
            // Remove o cliente da tela
            allClients.removeChild(clientDiv);
            // Remove o cliente da lista clientesInGame
            clientesInGame[lugar] = null; // Meter igual a null => Agora este lugar esta livre
            // Remove dinheiro (Visto que o tempo acabou, nao atendemos este cliente)
            const money = document.getElementById('dinheiroTotal');
            var dinheiroAtual = parseInt(money.textContent);
            money.textContent = dinheiroAtual - 5; // Redução do dinheiro
            //Para o dinheiro não ser negativo..
            if (money.textContent < 0) {
                money.textContent = 0;
            }
            // E finalmente para este timer para nao dar erro no futuro, visto que eliminamos o cliente
            clearInterval(timer);

        } else {
            // Se o timer nao acabou ainda, então reduz em 1 segundo o seu valor
            temporizador.textContent = parseInt(temporizador.textContent) - 1;
        }
    // E obviamente este timer vai ser atualizado a cada segundo (1000 ms)
    }, 1000);

    // Funcoes para que o cliente aceite que a gente arraste coisas para cima dele
    clientDiv.ondrop = function (event) {
        // Funcao para aceitar ou rejeitar um pedido
        onDrop(event, timer, pedido);
    }
    clientDiv.ondragover = function (event) {
        // Funcao standard que tecnicamente nao precisava tar aqui
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

// Verifica se ha lugar para o cliente ficar
function procuraLugarParaCliente() {
    for (let lugar_n = 0; lugar_n < clientesInGame.length; lugar_n++) {
        // Se nao estiver nenhum cliente la, retorna o numero do lugar
        if (clientesInGame[lugar_n] == null) { // se o lugar = null => lugar livre
            // Entao retorna o numero de lugar livre (indice da lista de clientesInGame)
            return lugar_n; 
        }
    }
    return -1; // Se não houver lugares a null (livres) então retorna -1
}

setInterval(generate, 1000); // Cria um cliente a cada 1 segundos

// Funcoes para os clientes quando lhes dropam comida

function allowDrop(event) {
    event.preventDefault();
}

/* onDrop vai receber: 
    o objeto que esta a ser dropado
    o timer do cliente
    o pedido do cliente (Para comparar com o objeto dropado)
*/
function onDrop(event, timer, pedido) {
    event.preventDefault();
    
    // Variavel segundos do ContadorTempo.js para verificar se o jogo acabou
    if (segundos >= 360) return; // Jogo acabou

    // Um monte de funcoezinhas pra descobrir o nome do objeto recebido / dropado

    // Aqui recebemos algo tipo: 
    // http://127.0.0.1:5500/Images/acessorios/acessorioshamsters/comidahamster.png
    var recebidoURL = event.dataTransfer.getData("text");

    // Depois, transformamos numa lista separando elementos por barra '/' : 
    // ['http:', '', '127.0.0.1:5500', 'Images', 'acessorios', 'acessorioshamsters', 'comidahamster.png']
    var recebidoArgs = recebidoURL.split("/");

    // Pegamos no ultimo elemento da lista: 
    // comidahamster.png
    var recebidoPNG = recebidoArgs[recebidoArgs.length - 1];

    // E finalmente, criamos uma lista por split do ponto '.', ficando: ['comidahamster', 'png']
    // E pegamos no primeiro elemento da lista: comidahamster
    var recebido = recebidoPNG.split(".")[0];

    // Confirmações em logs (Deviamos ter apagado isto antes de entregar)
    console.log(recebido);
    console.log(pedido.alt);

    // Verificamos se o objeto recebido/dropado é o que o cliente pediu
    if(recebido != pedido.alt) 
        return; // Se nao for o pedido do cliente, nao faz nada e acabada a funcao

    // Se for o que o cliente pediu, cancela o timer do cliente (visto que o vamos remover o cliente)
    clearInterval(timer);

    // Adiciona dinheiro
    const money = document.getElementById('dinheiroTotal');
    money.textContent = parseInt(money.textContent) + 10;


    // Pega no div do cliente em questão
    let divParent = event.target.parentElement;

    // Pega no seu id (exemplo: cliente_2)
    let id = divParent.id;

    // split no _ para pegar apenas o id que é o lugar na fila
    // exemplo: 'cliente_2' tiramos 2
    let lugar = parseInt(id.split('_')[1]);

    // Finalmente removemos o cliente
    allClients.removeChild(divParent);
    // E metemos o lugar na lista livre
    clientesInGame[lugar] = null;
}

// Funcao chamada quando se resetar o jogo
function resetClientes(){
    // Pega o id do Interval mais alto (de todos os Intervals)
    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

    // Cancela todos os Intervals, isto inclui timers de clientes, timer do jogo,...
    for (let i = 1; i < interval_id; i++) {
        window.clearInterval(i);
    }

    // Remove todos os clientes da pagina e da lista
    for (let lugar_n = 0; lugar_n < clientesInGame.length; lugar_n++) {
        // Se já nao estiver livre o lugar
        if (clientesInGame[lugar_n] != null) { 
            allClients.removeChild(clientesInGame[lugar_n]);
            clientesInGame[lugar_n] = null;
        }
    }
    // Volta a gerar clientes a cada segundo (Visto que eliminamos todos os Intervals)
    setInterval(generate, 1000); 
}