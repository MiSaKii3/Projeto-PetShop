// Make an onclick for the element class "tacas"
var tacinhas = document.getElementsByClassName("tacas");


for(e in tacinhas){
    tacinhas[e].onclick = function() {
        if(confirm("Alimentar animais?"))
            alert("Animais alimentados com sucesso!");
        else
            alert("No food? :c");
    }
}
