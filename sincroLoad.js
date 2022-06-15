const fs = require('fs');

const leerArchivo = () => {
    try {

        const archivo = fs.readFileSync('./data.txt');
        let data = JSON.parse(archivo.toString());
        console.log("data");
        console.log(data);
        console.log('successfully read');

        return data.map((obj,index)=>{
            return Object.assign({id:index},obj);
        });
    } catch (err) {
        // handle the error
        console.error(err);
    }
}

let arch = leerArchivo();

console.log(arch);