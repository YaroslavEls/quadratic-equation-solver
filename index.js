'use strict';

function solve(arr) {
    const [a, b, c] = arr;
    console.log(`Equation is: ${a} * x^2 + ${b} * x + ${c} = 0`);
    const D = b * b - 4 * a * c;
    if (a == 0 || D < 0) {
        return(console.log('There are 0 roots'));
    }
    if (D == 0) {
        const res = (-b + Math.sqrt(D)) / (2 * a);
        return(console.log(`There is 1 root:\nx1 = ${res}`));
    }
    const res1 = ((-b + Math.sqrt(D)) / (2 * a));
    const res2 = ((-b - Math.sqrt(D)) / (2 * a));
    console.log(`There are 2 roots:\nx1 = ${res1}\nx2 = ${res2}`);
}
