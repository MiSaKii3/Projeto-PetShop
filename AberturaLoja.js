let contador = 0;

function abrirLoja() {
    // Esconder a caixa de texto
    document.getElementById('loja').style.display = 'none';

    // Mostrar o contador
    document.getElementById('contador').style.display = 'block';

    // Reiniciar o contador
    contador = 0;

    // Incrementar o contador
    contador++;

    // Atualizar o conteúdo do contador
    document.getElementById('contador').textContent = contador;

}