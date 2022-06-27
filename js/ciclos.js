//1-INGRESAR DOS NUMEROS
/* FOR
let numero = parseInt(prompt("ingresar un numero para multipilcar hasta 10"));
let suma = parseInt(prompt("ingresar otro numero para sumar cada resultado"));
for(let i = 1; i <= 10; i++){
    console.log(`${numero} x ${i} + ${suma} = ${numero * i + suma}`);
}
*/
//2-PARTICIPAR EN UNA ENCUESTA
/*
let ingreso = prompt("llenar encuesta o EXIT para no partisipar");
while (ingreso != "EXIT"){
    console.log("El usuario ingresó "+ ingreso);
    ingreso = prompt("Ingresar un dato o EXIT para salir");
    if( ingreso == "EXIT"){
        let salida = prompt("por que sale ?"); 
        console.log(`el usuario respondio: ${salida} ,salio con exito`);
        alert( "usted salio con exito");
    }
}
*/
// 3-INGRESANDO UN DATO
let entrada = "EXIT";
let salio = "SALIO CON EXITO"
do{
    if(entrada != "EXIT"){
       (console.log("el usuario esta ingresando datos"))
    } 
    entrada = prompt("ingresar un dato o EXIT para salir");
    console.log("El usuario ingresó "+ entrada);
// 
}while(entrada != "EXIT" ){
    console.log(`el usuario: ${salio}`)
    alert(salio)
}




