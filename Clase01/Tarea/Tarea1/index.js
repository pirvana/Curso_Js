const { proceso1, proceso2, proceso3 } = require('./procesos');

async function main() {

    console.time('Tiempo total de ejecución')
    const results = await Promise.all([VIAJE_IDA(), LECTURA_RECETA()]); //hilo de ejecución en paralelo
    console.timeEnd('Tiempo total de ejecución')

    console.time('Tiempo total de ejecución')
    const VIAJE_IDA = await VIAJE_IDA();           //Aqui realizamos el viaje, mas la lectura de la receta
    const VIAJE_VUELTA = await VIAJE_VUELTA();
    const TOTAL_PREPARACION = await TOTAL_PREPARACION();
    console.timeEnd('Tiempo total de ejecución')

    console.log(VIAJE_IDA);
    console.log(VIAJE_VUELTA);
    console.log(TOTAL_PREPARACION);

    console.log(results[0]);
    console.log(results[1]);
}

main();