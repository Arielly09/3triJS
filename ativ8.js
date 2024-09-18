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

let numeros = [1, 2, 3, 4, 5];

numeros.push(6);
console.log("Após adicionar 6:", numeros);

numeros.pop();
console.log("Após remover o último elemento:", numeros);

let pares = numeros.filter(num => num % 2 === 0);
console.log("Números pares:", pares);

let quadrados = numeros.map(num => num * num);
console.log("Números ao quadrado:", quadrados);
