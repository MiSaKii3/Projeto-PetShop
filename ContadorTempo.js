// Função para formatar o tempo
function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosFormatados = segundos % 60;
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundosFormatados).padStart(2, '0')}`;
}

// Função para exibir a tela de game over
function exibirGameOver() {
    let janelalose = document.getElementById('game-over-tela').classList.remove('hidden');
}
// Função para exibir a tela de win
function exibirYouWin() {
    let janelawin = document.getElementById('win-tela').classList.remove('hidden2');
}

// Função para atualizar o contador de tempo
function atualizarContador() {

    let dinheiroTotal = document.getElementById('dinheiroTotal');
    localStorage.setItem("moedas", dinheiroTotal.textContent);

    if (segundos < totalSegundos) {

        segundos++;
        document.getElementById('contador').textContent = formatarTempo(segundos); // Exibe em segundos
        localStorage.setItem("tempo", document.getElementById('contador').textContent);

        //se dinheiro igual a entre 0 e 50, perdemos o jogo mas apos o contador acabar
        if (segundos == 360) {
            if (dinheiroTotal.textContent >= 0 && dinheiroTotal.textContent <= 300) {
                exibirGameOver();
                clearInterval(intervalo);

            } else if (dinheiroTotal.textContent > 300) {
                exibirYouWin();
                clearInterval(intervalo);
            }
        }
    }

}

let segundos = 0;
const totalSegundos = 360; // 6 minutos
const intervalo = setInterval(atualizarContador, 1000); // Atualiza a cada segundo