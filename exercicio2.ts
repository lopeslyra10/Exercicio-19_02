interface Multiplicacao {
    (a: number, b: number): number;
}

const multiplicar: Multiplicacao = (x, y) => x * y;

console.log(multiplicar(4, 5)); // 20
console.log(multiplicar(7, 3)); // 21
