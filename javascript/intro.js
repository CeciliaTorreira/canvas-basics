console.log("Probando")

//* CANVAS

//! Cómo crear un canvas ("lienzo")

//* HTML 
// <canvas id='canvas width="500" height="500"></canvas>

//* JS
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d"); // paintbrush
//!  ^^^ Crea la herramienta que permite modificaciones sobre el lienzo 
//! ctx = context
//* es toda nuestra paleta de acciones sobre el canvas.
//* Nos permite trazar, dibujar, cambiar colores, etc
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d") 

//* Se les da estilo en base a manipulación de DOM

canvas.style.backgroundColor = "lightgray"


// MÉTODOS Y PROPIEDADES PARA FILL => rellenos cuadriculados (cuadrados, rectángulos)

//*Dibujar un rectángulo relleno, recibe 4 argumentos
ctx.fillRect(20, 20, 50, 50)
//1. Posición en el eje x
//2. Posición en el eje Y
//3. Ancho del rectángulo
//4. Alto del rectángulo

//? Cuando creamos un canvas definimo qué tamaño tiene, en este caso 400px de ancho y 600px de alto, todos los valores en el canvas serán en píxeles. 
//? Este caso desde la parte superior izquierda x = izq a dch, y = arriba a abajo"

//* PROPIEDAD PARA CAMBIAR COLORES DE RELLENOS.

ctx.fillStyle = "green";
ctx.fillRect(40, 100, 100, 20)

ctx.fillStyle= "blue";
ctx.fillRect(45, 105, 100, 20)

//! Siempre que queramos cambiar de color expecíficamos el color y depsués hacemos el dibujo


//* BORRAR UNA SECCIÓN DEL CANVAS
//* Recibe 4 argumentos.
ctx.clearRect(55, 100, 50, 50)
//1. Posición en el eje x
//2. Posición en el eje Y
//3. Ancho del rectángulo
//4. Alto del rectángulo


//* PROPIEDADES Y MÉTODOS DE TRAZADO

// Cambiar color de trazado
ctx.strokeStyle = "red";

// Dibujar trazados cuadriculados

ctx.strokeRect(50, 130, 50, 50)
//* Una vez más recibe 4 argumentos
//1. Posición en el eje x
//2. Posición en el eje Y
//3. Ancho del rectángulo
//4. Alto del rectángulo

ctx.strokeStyle = "brown"

// Métodos de trazados complejos

ctx.beginPath( ) // Aquí empieza un trazado. No hay que pasarle ningún argumento

ctx.moveTo(50, 200 ) // Mueve el cursor a este punto, se le pasan dos argumentos (posX, posY)
ctx.lineTo(60, 220) // Desde el punto anterior traza a este punto
ctx.lineTo(40, 210)
ctx.lineTo(40, 240)
ctx.lineTo(30, 180)
ctx.stroke() //Realiza el trazado siguiendo los métodos anteriores. LLamada de acción

ctx.closePath( ) // Aquí termina el trazado

//* Propiedades y métodos de arcos (círculos y cirfunferencias, trazados curvos)

ctx.beginPath()

ctx.arc(100, 300, 40, 0, 1.5 * Math.PI, false)  //? Recibe 6 argumentos.
//1. Posición central de la cirfunferencia en el eje X
//2. Posición central de la cirfunferencia en el eje Y
//3. Radio de la circunferencia
//4. Ángulo donde empieza el trazado  //! 0 = lado derecho, 0.5 PI = abajo, 1 PI = izquierda, 1.5 PI= arriba 
//5. Ángulo donde termina el trazado
//6. Si el dibujo es a favor de las agujas del relog o contrarreloj //? En algunos casos opcional, el sistema siempre empieza en al dirección de las agujas del reloj

ctx.lineTo(100, 300)
ctx.lineTo(140, 300) // 100 + 40 del radio, mismo número después

// * Rellenar el trazado que acabo de hacer
ctx.fillStyle = "yellow"
ctx.fill()


ctx.stroke() 

ctx.closePath( )


// CLASS ACTIVITY 

ctx.fillStyle= "red";
ctx.fillRect(180, 20, 40, 80)
//1. Posición en el eje x
//2. Posición en el eje Y
//3. Ancho del rectángulo
//4. Alto del rectángulo


ctx.beginPath( ) // Aquí empieza un trazado. No hay que pasarle ningún argumento

ctx.moveTo(220, 20) // Mueve el cursor a este punto, se le pasan dos argumentos (posX, posY)
ctx.lineTo(260, 100) 
ctx.lineTo(220, 99) 
ctx.fillStyle= "yellow"
ctx.fill()
ctx.stroke() //Realiza el trazado siguiendo los métodos anteriores. LLamada de acción

ctx.closePath() // Aquí termina el trazado

//Comenzamos 
ctx.beginPath()
// Semicircunferencia
ctx.arc(300, 50, 40, 0, 1.5 * Math.PI, false) 
//Dos líneas
ctx.lineTo(300, 50)
ctx.lineTo(340, 50)
//Color
ctx.fillStyle = "green"
ctx.fill()

// Terminamos
ctx.stroke()
ctx.closePath()

ctx.fillStyle = "blue";
ctx.fillRect(300, 100, 50, 50)

// ctx.clearRect(300, 100, 0, 10)
//? Dibujar triángulo transparente en dos esquinas del cuadrado??
//? Dibujar línea por línea

//! Si comentamos stroke tendremos solo el relleno y no bordes


// * IMPLEMENTAR IMÁGENES EN CANVAS

let imagen = new Image()
imagen.src = "https://tinyurl.com/ironhack-pokemons/134.svg"


//* MÉTODO PARA DIBUJAR IMÁGENES EN CANVAS

//ctx.drawImage(imagen, 100, 400, 100, 100) // Recibe 5 argumentos //! Si no recibe los argumentos del ancho y largo usará las medidas originales, deben agregarse AMBOS o NINGUNO
//1. La imagen
//2 - 5 son los mismos que dibujar un cuadrado

// Para prevenir que la imagen no se haya recibido al momento de dibujarla:
imagen.addEventListener("load", () => {            //! load = espera a que se haya recibido/cargado completamente 
    ctx.drawImage(imagen, 100, 400, 100, 100)
})              


// Podemos agregar textos => self-guided //? Normalmente el texto lo agregamos con manipulacion de DOM


//* RECURSION & ANIMATION FRAMES 
//? En JS y en progrmación en general existe algo llamado recursion.
//? Una acción que se realiza múltiples veces 


let control = 0;

function printSomething( ) {
    console.log("Ejecutando recursion")
    control ++  // Incrementamos el valor de control uno a uno
    
    if (control < 100) {
        printSomething()  // Volver a ejecutar la misma función
    }
    
}
//printSomething()  

let controlAni = 0
let posCube = 50; // ? Creamos una variable con la posición inicial

//* EJEMPLO DE RECURSION PARA CREAR ANIMACIONES

 function animarCubo () {
 controlAni++
 console.log("Intentando animar cubo")

 //1 Tenemos que limpiar el canvas
 ctx.clearRect(0, 550, 400, 600) //? Borramos todo ese segmento, se dibuja el cubo un píxel a la derecha, se vuelve a borrar, se vuelve a dibujar y así sucesivamente

 //2 Modificamos la posición del elemento
 posCube++

 //3 Dibujamos los elementos
 ctx.fillRect(posCube, 550, 30, 30)  // Sustituimos X por su variable

// 4 Recursion
 if (controlAni < 200)         //? Este cubo se está dibujando 200 veces sobre sí mismo
{
    //animarCubo()
    //* requestAnimationFram => Método que nos permite generar recursión a una velocidad optimizada para la pantalla
    requestAnimationFrame(animarCubo); //! Hoy en día requestAnimationFrame esta muy optimizado, más que Intervals. Además analiza los FPS del monitor y ejecuta en base a ello.
}

 }

 animarCubo()