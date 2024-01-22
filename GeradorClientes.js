const clients = [
    {url : 'Images/Clientes/tile001.png', name : 'tile001'},
    {url : 'Images/Clientes/tile002.png', name : 'tile002'},
    {url : 'Images/Clientes/tile003.png', name : 'tile003'},
    {url : 'Images/Clientes/tile004.png', name : 'tile004'},
]

function generate(){
    const random = clients[Math.floor(Math.random() * clients.length)];
    const imgElement = document.createElement('img');
    imgElement.src = random.url;
    imgElement.alt = random.name;
    imgElement.style.zIndex = '3';
    document.body.appendChild(imgElement);
}
generate();generate();generate();

