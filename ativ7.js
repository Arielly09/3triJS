function ehPalindromo(str) {
    let strLimpa = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); 
    let strReversa = strLimpa.split('').reverse().join(''); 
    return strLimpa === strReversa; 
}

let palavra = "Arara";
console.log(`"${palavra}" é palíndromo?`, ehPalindromo(palavra));


function fatorial(n) {
    if (n < 0) return "Número inválido"; 
    if (n === 0 || n === 1) return 1; 
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
        resultado *= i; 
    }
    return resultado;
}

let numero = 5;
console.log(`O fatorial de ${numero} é:`, fatorial(numero));
