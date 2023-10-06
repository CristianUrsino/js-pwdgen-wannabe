
const nome = prompt('inserire nome: ');
const cognome = prompt('inserisci cognome: ');
const colore = prompt('inserire colore preferito: ');
const fixedNumber = "21";
const saluto = `${nome + cognome + colore + fixedNumber}`;

document.getElementById('testo').innerHTML = saluto;

function copia(_testo) {
    var input = document.createElement('input');
    var area = document.getElementById(_testo).value;
    input.setAttribute('value', area);
    document.body.appendChild(input);
    input.select();
    var risultato = document.execCommand('copy');
    document.body.removeChild(input);
    return risultato;
 }

