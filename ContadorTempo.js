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
// Função para exibir a tela de win
function exibirYouWin() {
    document.getElementById('win-tela').classList.remove('hidden2');
}

// Função para atualizar o contador de tempo
function atualizarContador() {
    const totalSegundos = 360; // 6 minutos
    dinheiroTotal = document.getElementById('dinheiroTotal')

    if (segundos >= totalSegundos) {
        if (dinheiroTotal < 0) {
            exibirGameOver("Game Over");
        } else if (dinheiroTotal > 0) {
            exibirYouWin("You Win");
        }
        clearInterval(intervalo);
    }
    
}

let segundos = 0;
const intervalo = setInterval(atualizarContador, 1000); // Atualiza a cada segundo