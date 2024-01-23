function primeiraFrase() {
    var startBox = document.querySelector('.frase-1');
    var secondBox = document.querySelector('.frase-2');
    var thirdBox = document.querySelector('.frase-3');

    startBox.style.display = 'block';
    secondBox.style.display = 'none';
    thirdBox.style.display = 'none';
  }
function segundaFrase() {
    var secondBox = document.querySelector('.frase-2');
    var thirdBox = document.querySelector('.frase-3');
  
    secondBox.style.display = 'none';
    thirdBox.style.display = 'block';
  }
 