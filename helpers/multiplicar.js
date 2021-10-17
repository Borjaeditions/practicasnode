const fs = require('fs');
const crearArchivo = async(multiplo, listar, limite) => {
    
    let salida = '';
    let consola = '';
    try {

        if (listar == true) {
            
            console.clear();
            console.log("=============".red);
            console.log(`=Tabla del ${multiplo}=`.cyan);
            console.log("=============".red);
            
        }
        
    
        for (let i = 0; i <= limite; i++) {
            
            r = multiplo*i;
    
            salida = salida + `${multiplo} x ${i} = ${r}\n`;
            consola = consola + (`${multiplo} x ${i} = ${r}\n`.yellow );
        }
        fs.writeFileSync(`./export/tabla-${multiplo}.txt`, salida, (error)=>{
    
            if(error) throw error;
            console.log(`Tabla guardada en tabla-${multiplo}.txt`);
    
        });

        if (listar == true) {
        
            console.log(consola);
            
        }
        
        console.log(`Tabla guardada en tabla-${multiplo}.txt`);
        
        return(salida);


    } catch (error) {
        throw(error);
    }


}

module.exports = {

    crearArchivo   

};