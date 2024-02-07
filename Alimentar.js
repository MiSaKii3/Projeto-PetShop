// Quando clicamos nas taças, ele pergunta se queremos alimentar os animais (não funciona :c)
var tacinhas = document.getElementsByClassName("tacas");

// Em todas as taças, dá um onclick para alimentar os animais 
//(Apenas a logica basica foi feita, não chegamos mesmo a alimentar animais)
for(e in tacinhas){
    tacinhas[e].onclick = function() {
        if(confirm("Alimentar animais?"))
            alert("Animais alimentados com sucesso!");
        else
            alert("No food? :c");
    }
}
