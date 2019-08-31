const { proceso1, proceso2 } = require('./procesos');

async function main() {
    console.time('Tiempo total de ejecución')
    const valor1 = await proceso1(); //un solo hilo de ejecución, de forma secuencial
    const valor2 = await proceso2();
    console.timeEnd('Tiempo total de ejecución')

    console.log(valor1);
    console.log(valor2);
}

main();