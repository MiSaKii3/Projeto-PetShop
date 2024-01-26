const frases = [
    "Hoje é o meu primeiro dia de trabalho, espero que tudo corra bem.",
    "Herdei esta loja de animais dos meus avós, também não os quero desiludir.",
    "Eu sempre tive o sonho de cuidar de uma Petshop, e agora que finalmente o realizei, vou dar o meu melhor!"
];

const fraseContainer = document.getElementById("frase-container");

fraseContainer.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * frases.length);
    const novaFrase = frases[randomIndex];
    
    fraseContainer.textContent = novaFrase;
});