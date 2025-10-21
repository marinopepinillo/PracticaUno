class Pieza{
    constructor(){
        this.nombre=nombre;
        this.codigo=generarNumerosCodigo();
        this.fechaFabricacion = new Date().toLocaleString();
    }
    
    generarNumerosCodigo(){
        let numeros = "";
        for (let i = 0; i < 10; i++) {
            numeros += Math.floor(Math.random() * 10); 
        }
        return numeros;
    }


}
    
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

class PiezaElectrica extends Pieza{
        constructor(nombre, potencia, voltaje){
        super(nombre);
        this.potencia = potencia;
        this.voltaje = voltaje;
        this.codigo = this.codigo + "E"; 
    }
}



        const listaNombres = ["Placa ABS", "Centralita Encendida", "Bornes cableado", "Alternador", "Encendido"];
        const potencia = [1, 5, 10, 20];
        const voltaje = [3.3, 5, 12, 240];

        //atos de e

        //metodos
        //constructor





