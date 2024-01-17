
// Ingresa tu nombre.
// hora:
// si es entre 6am y 12: Buenos días! 
// si es entre 12pm y 6pm: Buenas tardes! 
// si es entre 6pm y 00:00 : Buenas noches! 
// si es entre 00 y 6am : ¿No es un poco tarde?

let nombre = prompt("ingresa tu nombre, por favor.");
let hora = prompt("ingresa la hora (de 00.00 a 23.59)");

saludar(nombre);

function saludar(nombre) {
  if (hora >= 6 && hora < 12) {
    console.log("Buenos días, " + nombre + "!");
  } else if (hora >= 12 && hora < 18) {
    console.log("Buenas tardes, " + nombre + "!");
  } else if (hora >= 18 && hora < 24) {
    console.log("buenas noches, " + nombre + "!");
  } else console.log("¿No es un poco tarde, " + nombre + "?");
}

// Ingresa la edad: si es mayor a 14 puedes entrar, si es menor necesitas a un adulto e ingresar sus datos.

let edad = prompt("Ingresa tu edad acá!");

let edadAdulto; // Declare edadAdulto outside of the if-else block

datos(edad);

function datos(edad) {
  if (edad >= 14) {
    alert("Bienvenido/a, puedes comenzar tu cosecha");
  } else if (edad < 14) {
    alert("Perdón, llama a un adulto");

    // Acá ingresa la edad del adulto en caso de ser menor de 14.
    edadAdulto = prompt("Ingresa la edad de tu tutor acá");

    datos2(edadAdulto);
  }
}

function datos2(edadAdulto) {
  if (edadAdulto >= 18) {
    alert(
      "Bienvenido/a, pueden comenzar su cosecha, no olvides andar siempre acompañado/a"
    );
  } else {
    alert("Lo siento, el tutor debe ser mayor de 18 años.");
    // dejar de ejecutar si el tutor es menor de 18
    return;
  }
}

// dejamos la edad para asegurarnos de que no hubo by-pass
if (edad >= 14 || edadAdulto >= 18) 

//avisamos los precios de cada uno
alert ("Cada set cuesta $10000.")
alert ("y se suma 3000 por cada diseño complejo que agregues")

let selProd= (10000);
let selCant= prompt ("elige la cantidad de diseños complejos que quieres, puede ser entre 0 y 10");

//uso parseInt para obligar a selCant a ser un número.
selCant = parseInt(selCant)

// y uso isNaN para asegurarme de que es un número, luego aseguro que sea entre 0 y 10 (la tienda es de uñas, el máximo de cada set es 10)
if (isNaN(selCant) || selCant < 0 || selCant > 10) {
  alert("Por favor, ingresa un número válido entre 0 y 10.");
} else {
  let total = selProd + selCant * 3000;
  alert("El costo total es: $" + total);
  alert("Recuerda usar tu código de descuento para que tu total sea $" + (total * 0.8));

  // agrego un for if para que haga correr una pass, si corresponde, se lleva el descuento al carrito.
  const descs = ["frutillatriste22", "frutillatriste23", "frutillatriste24"];
  let codigoCorrecto = false;

  for (let idesc = 1; idesc <= 3; idesc++) {
    let codigo2 = prompt("Intento " + idesc + ": Ingrese un código:");

    for (const desc of descs) {
      if (desc === codigo2) {
        codigoCorrecto = true;
        alert("El costo total luego del descuento es $" + (total * 0.8));
        break;
      }
    }

    if (codigoCorrecto) {
      break; 
    } else {
      console.log("Ese código no es válido. Intento " + idesc + " de 3.");
    }
  }

  if (!codigoCorrecto) {
    console.log("Se agotaron los intentos. Código no válido.");
  }
}