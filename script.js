class Pieza{
    constructor(nombre, codigo, fechaFab){
        this.nombre=nombre;
        this.codigo=codigo;
        this.fechaFabricacion = fechaFab;
    }


}


//esta funcion selecciona un elemento aleatorio de un array
const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];


//creamos las subclases de Pieza y les hacemos los métodos constructores
class PiezaElectrica extends Pieza{
    constructor(nombre, codigo, fechaFab, potencia, voltaje){
        super(nombre, codigo, fechaFab);
        this.potencia = potencia;
        this.voltaje = voltaje;
    }
}


class PiezaMecanica extends Pieza {
    constructor(nombre, codigo, fechaFab, material) {
        super(nombre, codigo, fechaFab);
        this.material = material;
    }
}




class Factoria{
    constructor(){
        this.contadorE = 0;
        this.contadorM = 0;


        //ELECTRICAS
        this.listaNombresE = ["Placa ABS", "Centralita Encendida", "Bornes cableado", "Alternador", "Encendido"];
        this.potencia = [1, 5, 10, 20];
        this.voltaje = [3.3, 5, 12, 240];


        //MECANICAS
        this.listaNombresM = ["Larguero inferior", "Guardabarros", "Larguero superior", "Subchasis", "Puerta"];
        this.materiales = ["Acero", "Titanio", "Carbono"];
    }


    generarNumerosCodigo(){
        let numeros = "";
        for (let i = 0; i < 10; i++) {
            numeros += Math.floor(Math.random() * 10);
        }
        return numeros;
    }


    //método para elegir si la pieza va a ser eléctrica o mecánica
    //el promedio al generar 100 piezas no será siempre 30 piezasE y 70 piezasM, pero se acercará bastante
    generarTipoPieza(numeroPiezas){
        const piezas = [];
        this.contadorE = 0;
        this.contadorM = 0;


        for(let i = 0; i < numeroPiezas; i++){
            //genero un numero random entre 0 y 1 que represente que si es menor que 0.3 la pieza sea eléctrica.
            const prob = Math.random();
            //Elige el tipo de pieza a generar
            if(prob < 0.3){
                //Elige el subtipo
                const nombreE = getRandomElement(this.listaNombresE);
                //crea el codigo y le añade el identificador
                const codigoE = this.generarNumerosCodigo() + "E";
                //crea la fecha de fabricación
                const fechaFab = new Date().toLocaleString();
                //elige el voltaje y la potencia
                const potencia = getRandomElement(this.potencia);
                const voltaje = getRandomElement(this.voltaje);
                //le atribuye los valores y la crea, metiendola en el array piezas
                const piezaE = new PiezaElectrica(nombreE, codigoE, fechaFab, potencia, voltaje);
                piezas.push(piezaE);
                //aumento el contador de piezas eléctricas
                this.contadorE++;
            } else {
                const nombreM = getRandomElement(this.listaNombresM);
                //crea el codigo y le añade el identificador
                const codigoM = this.generarNumerosCodigo() + "M";
                //crea la fecha de fabricación
                const fechaFab = new Date().toLocaleString();
                //elige el material
                const material = getRandomElement(this.materiales);
                const piezaM = new PiezaMecanica(nombreM, codigoM, fechaFab, material);
                piezas.push(piezaM);
                this.contadorM++;
            }
        }
        return piezas;
    }
}

class estacionTratamiento{
    constructor(){ 
       //para las piezas electricas
       this.barnizNormal = 0;
       this.barnizEspecial = 0;

       //para las piezas mecánicas
       this.galvanizadas =0;
       this.pulida = 0;
       this.pintada = 0;
    }

    procesarPieza(pieza){
        //comprobamos el tipo de pieza
        if(piezas[i].codigo.endsWith("E")){ //si es eléctrica
            if(pieza.potencia === 1 || pieza.potencia === 5){ //si la potencia de la pieza es 1 o 5
                pieza.procesamiento = "Barnizada normal"; // añadimos el tipo de procesamiento
                this.barnizNormal++; 
            }else{
                pieza.procesamiento = "Barnizada especial";
                this.barnizEspecial++;
            }

        }else{ //si es mecánica
            if(pieza.material === "Acero"){
                pieza.procesamiento = "Galvanizada";
                this.galvanizadas++;
            }else if(pieza.material === "Titanio"){
                pieza.procesamiento = "Pulida";
                this.pulida++;
            }else{
                pieza.procesamiento = "Pintada";
                this.pintada++;
            }
        }
    }

    /*creamos un bucle que rellene cada pieza del array de piezas de la factoria con su tratamiento que ha
     recibido en el metodo anterior de la clase estacionTratamiento */
    procesarPiezasFac(piezas){
        for(let i = 0; i < piezas.length; i++){
            this.procesarPieza(piezas[i]);
        }
    }
}

class Fabrica {
    constructor(){
        
    }
}













