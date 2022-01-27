/*Esto es para el desafío correspondiente a la clase 7*/
const {data} = require('./itemlist');
let isOk = true;
const Customfetch = () => {
/*Esta promesa va realizar una consulta a una API*/
    return new Promise((resolve,reject) => {
        if (isOk) {
            resolve(data[0]);
        }
        else {
            reject("KO");
        }
    })
}
export default Customfetch;