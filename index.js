'use strict';

const readline = require('readline');
const util = require('util');
const fs = require("fs").promises;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = util.promisify(rl.question).bind(rl);

async function interactive() {
    const vars = ['a', 'b', 'c'];
    const nums = [];
    for (let i = 0; i < vars.length; i++) {
        nums.push(await ask(vars[i]));
    }
    solve(nums);
}

async function nonInteractive() {
    const regExp = /[0-9]{1,7}(?:\.[0-9]{1,2})?\s[0-9]{1,7}(?:\.[0-9]{1,2})?\s[0-9]{1,7}(?:\.[0-9]{1,2})?\n/;
    const path = await question('Enter file path: ');
    try {
        const p = await fs.readFile(path, 'utf8');
        const nums = p.match(regExp)[0].slice(0, -1).split(' ');
        solve(nums);
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

start();