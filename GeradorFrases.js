// Lista das frases da história do jogo

//Contentor de frases
const frases = [
    "Hoje é o meu primeiro dia de trabalho, espero que tudo corra bem.",
    "Herdei esta loja de animais dos meus avós, também não os quero desiludir.",
    "Eu sempre tive o sonho de cuidar de uma Petshop, e agora que finalmente o realizei, vou dar o meu melhor!"
];

const fraseContainer = document.getElementById("frase-container"); // Vai buscar o container onde vão estar as frases
let indiceAtual = 0;

fraseContainer.addEventListener("click", () => {
    if (indiceAtual < frases.length) {  // Percorre a lista de frases, mostrando-as
        const novaFrase = frases[indiceAtual]; 
        fraseContainer.textContent = novaFrase;
        indiceAtual++;
    } else {
        // Se todas as frases foram exibidas, oculta o contêiner
        fraseContainer.style.display = "none";
    }
});