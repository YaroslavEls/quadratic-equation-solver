'use strict';

const readline = require('readline');
const util = require('util');
const fs = require("fs").promises;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = util.promisify(rl.question).bind(rl);

async function ask(num) {
    let res = await question(`${num}: `);
    if (isNaN(res)) {
        console.log(`Error. Expected a valid real number, got ${res} instead`);
        return await ask(num);
    }
    return res;
}

function solve(a, b, c) {
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

async function interactive() {
    const vars = ['a', 'b', 'c'];
    const nums = [];
    for (let i = 0; i < vars.length; i++) {
        nums.push(await ask(vars[i]));
    }
    solve(...nums);
}

async function nonInteractive() {
    const regExp = /[0-9]{1,7}(?:\.[0-9]{1,2})?\s[0-9]{1,7}(?:\.[0-9]{1,2})?\s[0-9]{1,7}(?:\.[0-9]{1,2})?\n/;
    const path = await question('Enter file path: ');
    try {
        const p = await fs.readFile(path, 'utf8');
        const nums = p.match(regExp)[0].slice(0, -1).split(' ');
        solve(...nums);
    } catch (error) {
        console.log(error);
    }
}

async function start() {
    const res = await question('Start in Interactive or Non-Interactive mode? [1/2]: ');
    switch (res) {
        case '1':
            await interactive();
            process.exit();
        case '2':
            await nonInteractive();
            process.exit();
        default:
            await start();
    }
}

(async () => {
    await start();
})();