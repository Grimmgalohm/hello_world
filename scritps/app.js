//Me lleva :v aqui va a ir mi primer programa de JS//
/*todo meco este vato
*siono raza
*:v
*/

var num1= 3
var num2= 5
console.log("Sumas con JS")
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)

var nombre="César"
var apellido="Luna"
var BE=" "
console.log("Nombre con espacio en JS")
console.log(nombre+BE+apellido)

var encendido = true;
console.log("Verdadero y falso en JS")
console.log(encendido)
encendido = false;
console.log(encendido)

var primerapellido = "Pérez";
var segundoapellido = "Pérez";
console.log("Estrictamente igual en JS");
console.log(primerapellido===segundoapellido);
console.log(primerapellido!==segundoapellido);

var alumnos = 14;
var asistencia = 12;
console.log("Mayor que; menor que, en JS");
console.log(alumnos < asistencia);
console.log (alumnos > asistencia);

var edad = 18;
console.log("Mayor o igual en JS");
console.log("es mayor de edad?", edad >= 18);

var limpiarcuarto = false;
var dinero = true;
console.log("puedo salir?", limpiarcuarto && dinero);
var limpiarcuarto = true;
var dinero = false;
console.log("puedo salir?", limpiarcuarto && dinero);
var limpiarcuarto = false;
var dinero = false;
console.log("puedo salir?", limpiarcuarto && dinero);
var limpiarcuarto = true;
var dinero = true;
console.log("puedo salir?", limpiarcuarto && dinero);
console.log("Esto y Esto en JS")

var limpiarcuarto = false;
var dinero = true;
console.log("puedo salir?", limpiarcuarto || dinero);
var limpiarcuarto = true;
var dinero = false;
console.log("puedo salir?", limpiarcuarto || dinero);
var limpiarcuarto = false;
var dinero = false;
console.log("puedo salir?", limpiarcuarto || dinero);
var limpiarcuarto = true;
var dinero = true;
console.log("puedo salir?", limpiarcuarto || dinero);
console.log("O y O en JS")

console.log("Declaración con funciones")
function nombrecompleto (nombre, apellido){console.log(nombre+" "+apellido)}
nombrecompleto ("César", "Luna");
nombrecompleto ("Luis", "Ugambo");
nombrecompleto ("Gustavo", "Luna");

console.log("Declaración con funciones; Ej1")
function direccioncompleta (calle, numero, colonia){console.log(calle+","+" "+"#"+numero+","+" "+"Col."+colonia)}
direccioncompleta ("Victoriano Zepeda","13","Observatorio");

function KmAmillas (km, millas){ console.log("Resultado; ej2", km/millas)}
KmAmillas (1000,1.6);

function año(añodenac, añoact){console.log("Año; ej3", añoact-añodenac)}
año (1987,2018)

function fahcel (F){console.log("Resultado, ej4", (F-32)*5/9) }
fahcel(100)

function beber(an, aa){console.log("resultado, ej5", (aa-an)>=18)}
beber(1987,2018)

function promedio(c1,c2,c3){console.log("Resultado, ej6", (c1+c2+c3)/3)}
promedio(8,9,7)

var lista = [
    [1, "Jabón"],
    [2, "Papas"],
    [3, "Kg de Guayaba"],
    [1, "Escoba"],
    [2, "Llantas"],
    [3, "Kg de mango"]
];
console.log("Descripción del segundo item de la lista: ", lista [1][1]);
console.log("Kilos de Guayaba: ", lista [2][0]);
console.log("Cantidad de escobas: ", lista [3][0]);
console.log("Cantidad de llantas: ", lista [4][0]);
console.log("Cantidad del ultimo item de la lista: ", lista[lista.length - 1][0]);

for (var i = 0; i <= lista.length-1 ; i++){
    console.log(lista [i][0]+" "+"x"+" "+lista [i][1]);

if (lista[i][0] >=2){
    console.log("vende");
    }
else{
    console.log ("compra")
    }
}

function tinmarin(lista, primernumero, segundonumero, primerpalabra, segundapalabra){
    for (var i=1; i< lista.length; i++){
        var numero=lista[i];
        console.log(numero);
    }
}
tinmarin([10,12,13,15,105],3,5,"tin","marin")

var properties = [10, 2];

function ej(n1,n2){
  console.log(`Largo: ${n1}, Ancho:${n2}, Área:${n1 * n2}`);
}ej(properties[0], properties[1])


function contador(){
    for(var i = 0; i >= contador.length; i++)

    var item = contador[i];

    console.log(item)
}