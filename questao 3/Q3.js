var capturando = "";
var entrada ='';
var span = document.getElementById("elemento1");
var li = document.getElementById("elemento2");
var button = document.getElementById("elemento3");


function adicionar() {
    capturando = document.getElementById('item').value;
    document.getElementById('valorDigitado').innerHTML = capturando;
    document.getElementById('item').value=entrada;
    document.getElementById('elemento1').value=capturando;
    focus('item')
}

li.appendChild(span);
li.appendChild(button);
li.appendChild(li);

function exluir(){
  document.getElementById('elemento1') = null
  document.getElementById('filho')= null
  document.getElementById('elemento3') = null
  }
 
  