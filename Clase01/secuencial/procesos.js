const util = require('util');
const sleep = util.promisify(setTimeout);
module.exports = {

    //asignamos tiempo de ejecución a los procesos
    
    async proceso1(){
        try {
            //throw new Error('Algun error') //generamos un error
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
    }

}