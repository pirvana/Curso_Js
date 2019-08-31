const { proceso1, proceso2, proceso3 } = require('./procesos');

async function main() {
    console.time('Tiempo total de ejecución')
    const results = await Promise.all([proceso1(), proceso2(), proceso3()]); //hilo de ejecución en paralelo
    console.timeEnd('Tiempo total de ejecución')

    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
}

main();