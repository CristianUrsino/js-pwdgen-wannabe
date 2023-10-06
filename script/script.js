//MODO 1
/*let nome = prompt('inserire nome: ');
let cognome = prompt('inserisci cognome: ');
let colore = prompt('inserire colore preferito: ');
const fixedNumber = 21;
let saluto = `
    <h2>
        `+ nome + cognome + colore + fixedNumber.toString() +`
    </h2>
`;

document.getElementById('testo').innerHTML = saluto;*/

//MODO 2
/*let nome = prompt('inserire nome: ');
let cognome = prompt('inserisci cognome: ');
let colore = prompt('inserire colore preferito: ');
const fixedNumber = 21;
const password = nome + cognome + colore + fixedNumber;
let saluto = `
    <h2>
        `+ password +`
    </h2>
`;

document.getElementById('testo').innerHTML = saluto;*/

//MODO 3 
let password = prompt('inserire nome: ');
password += prompt('inserisci cognome: ');
password += prompt('inserisci colore: ');
password += '21';

let saluto = `
    <h2>
        `+ password +`
    </h2>
`;

document.getElementById('testo').innerHTML = saluto;