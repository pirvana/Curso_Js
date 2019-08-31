const util = require('util');
const sleep = util.promisify(setTimeout);
module.exports = {

    //se generan los tiempos de ejecución para cada procesos

    async LECTURA_RECETA(){
        try {
            await sleep(1000);
            return "LECTURA_RECETA FINALIZADO";
        } catch (error) {
            console.log(error);
        }
    },

    async VIAJE_IDA(){
        try {
            await sleep(2000);
            return "VIAJE_IDA FINALIZADO";
        } catch (error) {
            console.log(error)
        }
    },

    async VIAJE_VUELTA(){
        try {
            await sleep(2000);
            return "IAJE_VUELTA FINALIZADO";
        } catch (error) {
            console.log(error)
        }
    },

    async TOTAL_PREPARACION(){
        try {
            await sleep(7000);
            return "TOTAL_PREPARACION FINALIZADO";
        } catch (error) {
            console.log(error)
        }
    }

}