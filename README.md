# Quadratic Equation Solver

A small script for solving quadratic equations

## Installation
1. You need [NodeJs](https://nodejs.org/) installed for the program to work
2. Clone the repository to your machine
```
git clone https://github.com/YaroslavEls/quadratic-equation-solver
```
3. In the project directory run command
```bash
node index.js
```

## Usage
The program can work in 2 modes:
1. Interactive mode
2. Non Interactive mode

In interactive mode you need to manually enter 3 arguments
```
Start in Interactive or Non-Interactive mode? [1/2]: 1
a: 1
b: 12
c: 35
Equation is: 1 * x^2 + 12 * x + 35 = 0
There are 2 roots:
x1 = -5
x2 = -7
```

In non interactive mode you need to specify path for the file with 3 arguments
```
Start in Interactive or Non-Interactive mode? [1/2]: 2
Enter file path: /home/yaroslav_els/2.txt
Equation is: 1 * x^2 + 12 * x + 35.5 = 0
There are 2 roots:
x1 = -5.292893218813452
x2 = -6.707106781186548
```

The numbers in the file must be written in such format
```
1 0 0

```
With character classes it should look like this
```
1\s0\s0\n
```
*(\s - single white space, \n - linefeed)

<br><br>

### [Revert commit](https://github.com/YaroslavEls/quadratic-equation-solver/commit/66b594bafaf0b70c2863fb44b6f39c49118f54e6)