const util = require('util');
const sleep = util.promisify(setTimeout); //convierte de callback a promesas
module.exports = {

    //generamos un tiempo de ejecución para los procesos

    async proceso1(){
        try {
            //throw new Error('Algun error')
            await sleep(4000);
            return "Proceso 1 finalizado";
        } catch (error) {
            console.log(error);
        }
    },

    async proceso2(){
        try {
            await sleep(2000);
            return "Proceso 2 finalizado";
        } catch (error) {
            console.log(error)
        }
    },

    async proceso3(){
        try {
            await sleep(1000);
            return "Proceso 3 finalizado";
        } catch (error) {
            console.log(error)
        }
    }

}