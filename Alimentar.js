// Make an onclick for the element class "zonaanimais"
var elements = document.getElementsByClassName("zonaanimais")


for(e in elements){
    elements[e].onclick = function() {
        if(confirm("Queres alimentar?"))
            alert("yey")
        else
            alert(":(")
    }
}
