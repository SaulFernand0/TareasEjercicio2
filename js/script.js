var sumarpares = 0;
var contrapares = 0;

var sumarimpares = 0;
var contarimpares = 0;

var sumarpositivos = 0;
var contarpositivos = 0;

var sumarnegativos = 0;
var contarnegativos = 0;

var contamet = 0;
var media = 0;

var respuesta = "s";

do{
    var num = Number(prompt("Introducir valor"));

    media += num;
    contamet++;

    if(num<0){
        alert("Su numero es negativo");
        sumarnegativos += num;
        contarnegativos++;
    }else{
        alert("Su numero es positivo");
        contarpositivos++;
        sumarpositivos+= num;
    }

    if(num%2 == 0){
        alert("El numero es par");
        contrapares++;
        sumarpares+= num;
    }else{
        alert("El numero es impar");
        sumarimpares= num;
        contarimpares ++;
    }

    respuesta = prompt("Desea agregar otro valor? [s/n]").toUpperCase();

}while(respuesta == ("s"));
    media = media/contamet;

    document.write("La suma de los negativos es: " + sumarnegativos + "<br>"); 
    document.write("La suma de los positivos es: " + sumarpositivos + "<br>");
    document.write("La suma de los pares es: " + sumarpares + "<br>");
    document.write("La suma de los impares es: " + sumarimpares + "<br>");
    document.write("La cantidad de negativos es: " + contarnegativos + "<br>");
    document.write("La cantidad de positivos es: " + contarpositivos + "<br>");
    document.write("La cantidad de pares es: " + contrapares + "<br>");
    document.write("La cantidad de impares es: " + contarimpares + "<br>");
    document.write("La media de los numeros es: " + media + "<br>");


