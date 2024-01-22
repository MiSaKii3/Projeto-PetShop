// Make an onclick for the element class "zonaanimais"
var elements = document.getElementsByClassName("zonaanimais")


for(e in elements){
    elements[e].onclick = function() {
        confirm("Queres alimentar?");
    }
}
