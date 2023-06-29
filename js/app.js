let opcion;
const arrayCertificados=[];
let packDeCertificados;
let pack=opcion;
let arrayPacksCertificados=['PACK DE 10 CERTIFICADOS','PACK DE 100 CERTIFICADOS','PACK DE 250 CERTIFICADOS'];
const arrayTiposDeCertificado=[' de Graduación',' de Reconocimiento',' de Participación'];
const arrayFirmas=[' Un Firmante',' Dos Firmantes',' Tres Firmantes'];
let cantidadDestinatarios=0;
let continuar;
let stock=0;

//------CLASE NUEVOCERTIFICADO------------//
class nuevoCertificado{

    constructor (certificado, motivo, destinatario, institucion, firmante1, firmante2,firmante3){

    this.certificado=certificado;
    this.motivo=motivo;
    this.destinatario=destinatario;
    this.institucion=institucion;
    this.firmante1=firmante1;
    this.firmante2=firmante2;
    this.firmante3=firmante3; 
}
}


//------VALIDACION NUMÉRICA------------//

const validacionNumerica = (array) =>{

    do {
        if (opcion >=1 && opcion < 4 ) {

            return opcion;
        } 
       else{
                opcion = Number(prompt('No ha seleccionado correctamente, vuelva a intentarlo:'+ '\n' + '\n' +
                '1 - '+ array[0] + '\n' +
                '2 - '+ array[1] + '\n' +
                '3 - '+ array[2] + '\n')); 

        }
        opcion= validacionNumerica(array);  
        return opcion;

       }while (opcion > 3);   

    }

//------VALIDACION DE STRINGS------------//

const validacionString = (valor) =>{
    do {
        if (valor !='' && isNaN(valor) != false ) {
            return valor;
        } 
       else{
        valor = prompt('No ha ingresado correctamente los datos'+ '\n' + '\n' +'vuelva a intentarlo: ' );
        valor= validacionString(valor);
       }

        return valor;

    } while (valor == ''); 
}

//------VALIDACION solo números------------//
const validacionSoloNumeros = (valor) =>{
    do {
        if (valor != '' && isNaN(valor)== false) {
                 
            return cantidadDestinatarios= valor;;
        } 
       else{
        valor= validacionSoloNumeros( Number (prompt('No ha ingresado correctamente los datos, vuelva a intentarlo: ' + '\n' + '\n' + 'Ingrese la cantidad de destinatarios que van a recibir éste certificado:')));
       }
        return valor;

    } while (valor == ''); 
 }

//------VALIDACION stock------------//
 const comprobandoStock = (valor) =>{

    do {

        if (valor < pack && valor < stock ) {
            
            return cantidadDestinatarios= valor;;
        } 
       else{
        
        alert('La cantidad de destinatarios supera su stock de certificados.');
        valor=validacionSoloNumeros( Number (prompt('Ingrese la cantidad de destinatarios que van a recibir éste certificado')));
       }
        return valor;

    } while (valor > pack); 
 }

/* selección de PACK  */


 alert('¡ TE DAMOS LA BIENVENIDA !')
    opcion = parseInt(prompt('Seleccione el PACK que quiera obtener:'+ '\n' + '\n' +
    '1 - PACK DE 10 CERTIFICADOS' + '\n' +
    '2 - PACK DE 100 CERTIFICADOS' + '\n' +
    '3 - PACK DE 250 CERTIFICADOS' + '\n'));
    
    opcion=validacionNumerica(arrayPacksCertificados);
    stock=10;
    switch(opcion) {
    
        case 1:
                pack = 10;
                stock=10;
                break; 
        case 2:
                pack = 100;
                stock=100;
                break; 
        case 3:
                pack = 250;
                stock=250;
                break;
        default:
                console.log('No ha seleccionado ninguna opción.');
    }
    
    alert('Su selección de PACK es: ' + pack + ' \n' + ' \n' + ' Ya puedes comenzar a crear tus certificados.');


/* termina selección de PACK */

do {

//creación de CERTIFICADOS//

    opcion = parseInt(prompt('Seleccione el tipo de certificado que desea crear:'+ '\n' + '\n' +
    '1 - de Graduación' + '\n' +
    '2 - de Reconocimiento' + '\n' +
    '3 - de Participación' + '\n'));

   opcion= validacionNumerica(arrayTiposDeCertificado);
    switch(opcion) {
    
        case 1:
                certificado= 'CERTIFICADO DE GRADUACIÓN';
                break; 
        case 2:
                certificado= 'CERTIFICADO DE RECONOCIMIENTO';
                break; 
        case 3:
                certificado= 'CERTIFICADO DE PARTICIPACIÓN';
                break;
        default:
                console.log('No ha seleccionado ninguna opción de certificados. Tendrá un certificado sin categoría');
    }

    motivo = validacionString(prompt('Ingrese motivo específico del certificado' + '\n' + '\n' + 'Por:'));

    institucion = validacionString(prompt('Ingrese Nombre de la Institución: '));

    destinatario = '';
    
    opcion = parseInt(prompt('Seleccione la cantidad de firmantes que necesita el certificado:'+ '\n' + '\n' +
    '1 - Un firmante' + '\n' +
    '2 - Dos firmantes' + '\n' +
    '3 - Tres firmantes' + '\n'));

    opcion= validacionNumerica(arrayFirmas);
    switch(opcion) {
    
        case 1:
                firmante1 = validacionString(prompt('Ingrese Nombre y apellido del FIRMANTE del certificado: '));
                firmante2=0;
                firmante3=0;
                break; 
        case 2:
                firmante1 = validacionString(prompt('Ingrese Nombre y apellido del PRIMER FIRMANTE del certificado: '));
                firmante2 = validacionString(prompt('Ingrese Nombre y apellido del SEGUNDO FIRMANTE del certificado: '));
                firmante3=0;
                break; 
        case 3:
                firmante1 = validacionString(prompt('Ingrese Nombre y apellido del PRIMER FIRMANTE del certificado: '));
                firmante2 = validacionString(prompt('Ingrese Nombre y apellido del SEGUNDO FIRMANTE del certificado: '));
                firmante3 = validacionString(prompt('Ingrese Nombre y apellido del TERCER FIRMANTE del certificado: '));
                break;
        default:
                console.log('No ha seleccionado ninguna opción. Tendrá un certificado sin firmas');
    }


 alert('Los certificados que estará generando son de: '+ '\n' + '\n' + certificado + '\n' + ' Motivo: por '+ motivo +  '\n' + ' Institución: '+ institucion);
   
 cantidadDestinatarios=validacionSoloNumeros( Number (prompt('Ingrese la cantidad de destinatarios que van a recibir éste certificado')));
 
 comprobandoStock(cantidadDestinatarios);
 generandoDestinatarios(cantidadDestinatarios);

 stock= pack - cantidadDestinatarios;

//------FUNCIÓN PARA DESTINATARIOS------------//
 function generandoDestinatarios(valor){

    for (let index = 0; index < valor; index++) {
        
        numero=index+1;

        destinatario = validacionString(prompt('Ingrese Nombre y Apellido del destinatario '+ numero +': '));
    
        arrayCertificados.push(new nuevoCertificado(certificado,motivo,destinatario,institucion,firmante1,firmante2,firmante3));
         
        } 
    }

//------FUNCIÓN PARA MOSTRAR------------//

function mostrarCertificado(){

        arrayCertificados.forEach((item) =>{
    
            console.log ('---------------------------------' );
            console.log (item.certificado);
            console.log ('La ' + item.institucion.toUpperCase() );
            console.log ('le otorga el presente certificado a ' );
            console.log (item.destinatario.toUpperCase());
            console.log ('por ' + item.motivo);
    
            if (item.firmante1 !=0 && item.firmante2===0 ) {
            
                console.log ('__________________' );
                console.log ('Firma: '+ item.firmante1.toUpperCase());  
        
                } else {
        
                    if (item.firmante2 !=0 && item.firmante3===0 ) {
        
                        console.log ('__________________' );
                        console.log ('Firma: '+ item.firmante1.toUpperCase());
                        console.log ('__________________' );
                        console.log ('Firma: '+ item.firmante2.toUpperCase());    
                    } else {
                
                    console.log ('__________________' );
                    console.log ('Firma: '+ item.firmante1.toUpperCase());
                    console.log ('__________________' );
                    console.log ('Firma: '+ item.firmante2.toUpperCase());
                    console.log ('__________________' );
                    console.log ('Firma: '+ item.firmante3.toUpperCase());
        
                    }
                }
        })
    }
    continuar = prompt('Si desea generar un nuevo certificado ingrese "si"');

} while (continuar.toUpperCase() == 'SI');
   

// TERMINA MOSTRAR//

console.log ('Terminaste de crear! '+ '\n' );

function Quedan(pack){

        return function (cantidad){
 
            total= pack - cantidad;
    
            console.log(`Los certificados que generaste son: ${cantidad} \n \n¡Te quedan ${total} de tu PACK DE ${pack} para usar!`)
    
        }
    }
    packDeCertificados= Quedan(pack);

packDeCertificados (arrayCertificados.length);

mostrarCertificado();

/* fin */