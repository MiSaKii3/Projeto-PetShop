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
function esconderGameOver(){
    document.getElementById('game-over-tela').classList.add('hidden');
}
// Função para exibir a tela de win
function exibirYouWin() {
    document.getElementById('win-tela').classList.remove('hidden2');
}

function esconderYouWin(){
    document.getElementById('win-tela').classList.add('hidden2');
}


// Função para atualizar o contador de tempo
function atualizarContador() {
    

    let dinheiroTotal = document.getElementById('dinheiroTotal');

    document.getElementById('contador').textContent = formatarTempo(segundos); // Exibe em segundos
    
    localStorage.setItem("moedas", dinheiroTotal.textContent);
    localStorage.setItem("tempo", segundos);

    //se dinheiro igual a entre 0 e 50, perdemos o jogo mas apos o contador acabar
    if (segundos >= totalSegundos) {
        
        if (dinheiroTotal.textContent <= 300) {
            let ganhos = document.getElementById("ganhos-dia-lose");
            ganhos.textContent = dinheiroTotal.textContent;
            exibirGameOver();
            clearInterval(intervalo);

        } else if (dinheiroTotal.textContent > 300) {
            let ganhos = document.getElementById("ganhos-dia-win");
            ganhos.textContent = dinheiroTotal.textContent;
            exibirYouWin();
            clearInterval(intervalo);
        }
    }
    
    segundos++;

}

let segundos = 0;
if(localStorage.getItem("tempo") != 0){
    console.log("tempo não é 0");
    segundos = localStorage.getItem("tempo");
}
document.getElementById('contador').textContent = formatarTempo(segundos);

if(localStorage.getItem("moedas") != 0){
    console.log("moedas não é 0");
    let moedas = document.getElementById("dinheiroTotal");
    moedas.textContent = localStorage.getItem("moedas");
}

const totalSegundos = 360; // 6 minutos
let intervalo = setInterval(atualizarContador, 1000); // Atualiza a cada segundo

function Reset(){
    segundos = 0;
    document.getElementById('contador').textContent = formatarTempo(segundos);
    clearInterval(intervalo);
    let moedas = document.getElementById("dinheiroTotal");
    moedas.textContent = 0;
    intervalo = setInterval(atualizarContador, 1000); // Atualiza a cada segundo
    esconderGameOver();
    esconderYouWin();
    resetClientes();
}
