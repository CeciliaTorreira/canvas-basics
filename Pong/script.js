console.log("Probando PONG")


const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 600;
canvas.height = 800;
canvas.style.backgroundColor = "black"
//* VARIABLES GLOBALES
 let ballX = 50;
 let ballY = 50;
 let isBallMovingRight = true; // Cuando esto sea true se moverá a la derecha, cuando sea false se moverá a la izquierda
 let isBallMovingDown = true; // Cuando sea true se moverá hacia abajo, cuando cambie a false se moverá hacia arriba

  //* Paleta
 let paddleX = 200; // ? La paleta únicamente se moverá de izquierda a derecha
 let paddleY = 700;
 let paddleW = 150;
 let paddleH = 30;
 let isPaddleRight = true;
 let isPaddleLeft = true;

 //* JUEGO OPERATIVO
 let isGameOn = true;

//* IMAGEN 
let picture = new Image()
picture.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg" //" Usare un Voltorb como pelota o Electrode si cambio el # a 101"

//* SECCIÓN DE FUNCIONES 



//! Ball
const ballDraw = () => {
    ctx.drawImage(picture, ballX, ballY, 30, 30)
    ctx.beginPath();
 ctx.fillStyle = "white";
//  ctx.arc(ballX, ballY, 10, 0, 2 * Math.PI )
//  ctx.fill()
    ctx.closePath()
}

//! Ball movement
const ballMovement = () => {
    if (isBallMovingRight === true) {
    ballX += 2 ; // Se moverá hacia la derecha
    }
    else {
    ballX -= 2; // Se moverá hacia a la izquierda
    }
    if (isBallMovingDown === true) {
    ballY += 2; // Se moverá hacia abajo
    }
    else {
        ballY -= 2 // Se mueve hacia arriba   
    }
}
//! Borrado del canvas
const deleteCanvas = () => {
 ctx.clearRect(0, 0, 600, 800) // (canvas.width, canvas.height) 
}

//! COLISIÓN
const ballWallCollision = () => {
    //Quiero que esta verificación se haga siempre
 if (ballX > canvas.width-30) { //* 15 configuracion inicial
//console.log("La pelota chocó a la derecha") 
    //? Cómo hacer que en este punto la pelota se mueva a la izquierda?
    //? Determinar que la pelota ha cambiado su dirección y el movimiento normal de la pelota es lo que tenemos que condicionar.
    isBallMovingRight = false; 
 }
 else if (ballY > canvas.height-30) { //* 15 configuracion inicial
   // console.log("La pelota chocó abajo")
   isBallMovingDown = false //? Comentamos esto
    //!! Aquí vamos a detener el juego 
    isGameOn === false;
    alert("Has perdido!")
 }
 else if (ballX < 0) { //*15 configuracion inicial
   // console.log("La pelota chocó a la izquierda")
    isBallMovingRight = true
 }
 else if (ballY < 0) { //*15 configuracion inicial
   // console.log("La pelota chocó arriba")
    isBallMovingDown = true
 }

 }


 //! PALETA
 const paddleDraw = () => { 
    ctx.fillRect(paddleX, paddleY, paddleW, paddleH);
 }

 
 const paddleMove = (event)=> {
 console.log("Presionando una tecla", event.code)
 if (isPaddleLeft === true || isPaddleRight === true) {  //! borrar condicional
        if (event.code === "ArrowLeft"){
            
          paddleX -= 10  //Quiero mover la paleta hacia la izquierda.
        }
        else if (event.code === "ArrowRight") {
        
            paddleX += 10  //Quiero mover la paleta hacia la derecha.
        }
    }
     }
    
 const ballPaddleCollision = () => {
  // Necesitamos saber ballX y ballY junto a paddleX, paddleY y el ancho de la paleta (variables ya creadas)
   if (ballY+30 > paddleY && ballX+30 > paddleX && ballX+30 < (paddleX + paddleW))     //! Para colisión perfecta con la paddle añado el radio del la pelota a ball Y para evitar
  {console.log("La pelota colisiona con la paleta")                              //! que se "fusionen"
  isBallMovingDown = false; // La pelota se mueve hacia arriba
}

 }  
 
 const paddleCanvasCollision = () => {
  if (canvas.width - paddleW === paddleX){
    console.log("No puedes moverte más a la derecha")
    isPaddleRight === false;
  }
  else if (paddleX === 0)
  {
    console.log("No puedes moverte más a la izquierda")
    isPaddleLeft === false
  }
    
  /* (paddleX + paddleW >= canvas.width){
    console.log("No puedes moverte más a la derecha")
    isPaddleRight === false;
  }
  else if(paddleX = 0)
  { 
    console.log("No puedes moverte más a la izquierda")
    isPaddleLeft === false
  } */
  
 }
 

//* FUNCIÓN DE RECURSIÓN

const gameLoop = () => {
   // console.log("Ejecutando recursión")
    // 1. Limpieza del canvas.
    deleteCanvas()

    // 2. Movimientos y acciones de los elementos.
    ballMovement()
    ballWallCollision() // * Siempre verificamos si esto ocurre
    ballPaddleCollision() //* También verificaremos si la pelota colisiona con la paleta
    paddleCanvasCollision()  //!
    // 3. Dibujado de los elementos.
     ballDraw()
     paddleDraw()
    // 4. Recursion

    if (isGameOn === true) {
   requestAnimationFrame(gameLoop) 
   } 
   // Si es falso se detiene la recursión

}

//* ADDEVENTLISTENERS
 window.addEventListener("keydown", paddleMove)

//Cuando inicie la página se iniciará el juego
gameLoop()


//MVP = MINIMUM VIABLE PRODUCT


//? EXTRAS 
//? Colisión perfecta: hecha
//! Pasado cierto tiempo la pelota subiese de velocidad se podría hacer un intervalo 
//! o una condición de que cada vez que la pelota colisione se creará una función para subir la velocidad o que la paleta disminuya su tamaño 
//! cada vez que choque o cuando pase cierto tiempo

//? BONUS
//! Pausar el juego con addEventListener con tecla de espacio
//! Reiniciar el juego
//! Que la paleta cambie ambas direcciones de la pelota según donde choque
//! Agregar/crear texto sobre la paleta
//! Configurar para jugar con el ratón con el addeventlistener
//! Tabla de puntuacion con manipulacion de DOM


//? MEGA BONUS

//! Segunda paleta arriba para incluir segundo jugador
//! Mejorar la movilidad de la paleta
//! Que la paleta se mueva de forma automática hacia un lado u hacia otro y rebote y nosotros la forcemos
//! Obstáculos que desaparezcan al colisionar la pelota con ellos