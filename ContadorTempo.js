 // Função para formatar o tempo
 function formatarTempo(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosFormatados = segundos % 60;
    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundosFormatados).padStart(2, '0')}`;
}

// Função para atualizar o contador de tempo
function atualizarContador() {
    //save
    //...
    segundos++;
    document.getElementById('contador').textContent = formatarTempo(segundos);
}
let segundos = 0;
const intervalo = setInterval(atualizarContador, 1000); // Atualiza a cada segundo