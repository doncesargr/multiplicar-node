
const fs = require('fs');
const { resolve } = require('path');
var colors = require('colors');

let listarTabla = (base, limite ) => {

    let data = '';

    console.log('==================');
    console.log(`Tabla: `.white, `BASE : ${base} LIMITE : ${limite}`.green);
    console.log("==================");
   
    for (let i=1;i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }
    console.log(data);

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        console.log(`BASE : ${base} LIMITE : ${limite}`);

        if (!Number(base)) {
            reject('No es un número');
            return;
        }

        if (!Number(limite)) {
            reject('Limite no es un número');
            return;
        }
        
        let data = '';

        for (let i=1;i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tablas/tabla-${base}-al-${limite}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}