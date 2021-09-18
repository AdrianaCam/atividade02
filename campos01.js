const readline = require('readline');

const rl = readline.createrInterface({
    input:process.stdin,
    output:process.studout

});

rl.question("quantidade de alunos: ", (quantidade) =>{

console.log(`quantidade de alunos é: ${quantidade}`);
console.log("o numero 0 não pode ser par e nem ímpa")
for (var x = 1; x <= quantidade; x++) {
    if('x % 2 == 0') {

    }
        console.log(x +" número é par");
        console.log(x +" número é ímpa");

    }
}


)
