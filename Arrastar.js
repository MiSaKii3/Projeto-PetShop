
var arrastaveis = document.getElementsByClassName("arrastaveis");
// Para todos os arrastaveis, "set attribute" para draggable
for (let i = 0; i < arrastaveis.length; i++) {
    arrastaveis[i].ondragstart = function(event) {
        
        // Esconde a imagem durante o arrasto
        arrastaveis[i].style.opacity = "0";

        // Define o efeito permitido (move neste caso)
        event.dataTransfer.effectAllowed = "move";
    }

    arrastaveis[i].ondragover = function(event) {
        // Evita o comportamento padrão de arrastar sobre elementos, que inclui o sinal de proibido
        event.preventDefault();
    }

    arrastaveis[i].ondragend = function(event) {
        // Torna a imagem visível novamente ao terminar o arrasto
        arrastaveis[i].style.opacity = "1";
    }
}



