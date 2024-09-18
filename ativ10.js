def filtrar_pares(arr):
    pares = []
    for num in arr;
        if num % 2 == 0;
            pares.append(num)
    return pares

def contar_vogais(string):
    vogais = "aeiouAEIOU"
    contagem = 0
    for char in string:
        if char in vogais:
            contagem += 1
    return contagem

numeros = [1, 2, 3, 4, 5, 6]
pares = filtrar_pares(numeros)
texto = "Olá, como você?"
contagem_vogais = contar_vogais(texto)

print(f"Números pares: {pares}") [2, 4, 6];
print(f"Contagem de vogais: {contagem_vogais}"): 7;
