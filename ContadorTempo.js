// Função para formatar o tempo
function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosFormatados = segundos % 60;
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundosFormatados).padStart(2, '0')}`;
}

// Função para exibir a tela de game over
function exibirGameOver() {
    document.getElementById('game-over-tela').classList.remove('hidden');
}
// Função para esconder a tela de game over
function esconderGameOver(){
    document.getElementById('game-over-tela').classList.add('hidden');
}
// Função para exibir a tela de win
function exibirYouWin() {
    document.getElementById('win-tela').classList.remove('hidden2');
}
// Função para esconder a tela de win
function esconderYouWin(){
    document.getElementById('win-tela').classList.add('hidden2');
}


// Função para atualizar o contador de tempo
function atualizarContador() {

    // Função que vem do Logar.js para atualizar constantemente o nome da pessoa logada
    UserLogado();

    // Formata o numero de segundos para Horas : Minutos : Segundos
    document.getElementById('contador').textContent = formatarTempo(segundos);

    // Guarda o dinheiro e o tempo no localStorage, para quando se der refresh ou voltar a logar
    // esta tudo guardado
    let dinheiroTotal = document.getElementById('dinheiroTotal');
    localStorage.setItem("moedas", dinheiroTotal.textContent);
    localStorage.setItem("tempo", segundos);

    //Se o tempo for maior que o total de segundos, o jogo é encerrado.
    if (segundos >= totalSegundos) {
        // Se o dinheiro for menor ou igual que 300, mostra game over        
        if (dinheiroTotal.textContent <= 300) {
            let ganhos = document.getElementById("ganhos-dia-lose");
            ganhos.textContent = dinheiroTotal.textContent;
            exibirGameOver();
            clearInterval(intervalo);
        //Se o dinheiro for maior que 300, mostra o You win
        } else if (dinheiroTotal.textContent > 300) {
            let ganhos = document.getElementById("ganhos-dia-win");
            ganhos.textContent = dinheiroTotal.textContent;
            exibirYouWin();
            clearInterval(intervalo);
        }
    }
    
    // Aumenta os segundos, visto que esta funcao e executada a cada segundo...
    segundos++;

}

// Uma das funcoes usadas quando se clica no botao Reset
function Reset(){
    // Para a funcao de atualizar o contador de tempo
    clearInterval(intervalo);
    // Desaparece com os clientes
    resetClientes();
    // Reseta o tempo
    segundos = 0;
    document.getElementById('contador').textContent = formatarTempo(segundos);
    
    // Reseta o dinheiro
    let moedas = document.getElementById("dinheiroTotal");
    moedas.textContent = 0;

    // Volta-se a executar a funcao de atualizar o contador de tempo.
    intervalo = setInterval(atualizarContador, 1000); // Atualiza a cada segundo

    // Esconde a tela de game over e You win (Caso estejam a mostra).
    esconderGameOver();
    esconderYouWin();
}

// Tudo o que vai ser executado quando se carrega a pagina.

// Reseta o tempo
let segundos = 0;
// Atualiza o tempo se houver algum guardado (independente da conta logada)
if(localStorage.getItem("tempo") != 0){
    console.log("tempo não é 0");
    segundos = localStorage.getItem("tempo"); //Usa o tempo que está guardado para colocar na variável segundos
}
document.getElementById('contador').textContent = formatarTempo(segundos);

// Atualiza o dinheiro se houver algum guardado (independente da conta logada)
if(localStorage.getItem("moedas") != 0){
    console.log("moedas não é 0");
    let moedas = document.getElementById("dinheiroTotal");
    //Se as moedas não forem nulas
    if(localStorage.getItem("moedas") != null)
    {
        moedas.textContent = localStorage.getItem("moedas"); //Mostra as moedas atuais (guardadas no localstorage)
    } else{
        // Se nao, mete 0 moedas
        moedas.textContent = 0;
    }
}

// Constante do numero total de segundos que o jogo deve ter
const totalSegundos = 360; // 6 minutos

// Começa a atualizar o Contador a cada segundo
let intervalo = setInterval(atualizarContador, 1000); // Atualiza a cada segundo


