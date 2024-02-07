
// Pega todos os elementos com a classe "arrastaveis"
var arrastaveis = document.getElementsByClassName("arrastaveis");

// Para todos os arrastaveis, adiciona eventos de arrastar 
// e soltar para definir o comportamento de arrastar e soltar
for (let i = 0; i < arrastaveis.length; i++) {
    // Quando se começa a arrastar um "arrastavel":
    arrastaveis[i].ondragstart = function(event) {
        // Esconde a imagem durante o arrasto
        arrastaveis[i].style.opacity = "0";

        // Define o efeito permitido (move neste caso) que vai mudar a aparencia do rato
        event.dataTransfer.effectAllowed = "move";
    }
    // Enquanto se esta arrastando um "arrastavel":
    arrastaveis[i].ondragover = function(event) {
        // Evita o comportamento padrão de arrastar sobre elementos, que inclui o sinal de proibido
        event.preventDefault();
    }
    // Quando se termina de arrastar um "arrastavel":
    arrastaveis[i].ondragend = function(event) {
        // Torna a imagem visível novamente ao terminar o arrasto
        arrastaveis[i].style.opacity = "1";
    }
    // NOTA: A imagem não se vai mover, 
    // quando largamos o "arrastavel" a imagem original volta ao inicio
    // Visto que nunca foi mudada as coordenadas da imagem
}



