
const nome = prompt('inserire nome: ');
const cognome = prompt('inserisci cognome: ');
const colore = prompt('inserire colore preferito: ');
const fixedNumber = "21";
const saluto = `
    <h2>
        ${nome + cognome + colore + fixedNumber}
    </h2>
`;

document.getElementById('testo').innerHTML = saluto;



