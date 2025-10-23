
var lista = ["Tehtävä 1", "Tehtävä2"];

function paivitaLista() {
  var ul = document.getElementById('tehtavalista');
  
  ul.innerHTML = "";

  for (var tehtava of lista) {
    var li = document.createElement('li');
    li.innerHTML = tehtava;
    ul.append(li);
  }
}

function lisaa() {
  var input = document.getElementById('uusiTehtava');
  var arvo = input.value;

  lista.push(arvo);
  input.value = "";
  input.focus();
  paivitaLista();
}

document.addEventListener('DOMContentLoaded', paivitaLista);