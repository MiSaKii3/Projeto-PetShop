// Quando clicamos nas taças, ele pergunta se queremos alimentar os animais (não funciona :c)
var tacinhas = document.getElementsByClassName("tacas");


for(e in tacinhas){
    tacinhas[e].onclick = function() {
        if(confirm("Alimentar animais?"))
            alert("Animais alimentados com sucesso!");
        else
            alert("No food? :c");
    }
}
