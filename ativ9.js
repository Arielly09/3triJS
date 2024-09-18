let numeros = [12, 5, 8, 21, 3, 14];

let maiorNumero = Math.max(...numeros);
let menorNumero = Math.min(...numeros);

console.log("Maior número:", maiorNumero);
console.log("Menor número:", menorNumero);

let numerosPares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", numerosPares);
