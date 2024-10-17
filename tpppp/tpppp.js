let fotos = [];
let estado;

function preload() {

  for (let i=0; i<9; i++) {
    fotos[i] = loadImage("data/foto"+i+".png");
  }
}

function setup() {
  createCanvas(640, 480);
  for (let i=0; i<8; i++) {
    fotos[i].resize(640, 480);
  }
  estado = "inicio";
 
}
 function cargarFotos(imag, index, x, y, ancho, alto) {
    image(imag[index], x, y, ancho, alto);
  }
function draw() {
  background(0);

  if (estado==="inicio") {
    cargarFotos(fotos, 0, 0, 0, 640, 480);
    dibujarBoton(50, 50, 100, 50); // Botón para ir a primera
  } else if (estado==="primera") {
    cargarFotos(fotos, 1, 0, 0, 640, 480);
    dibujarBoton(50, 50, 100, 50); // Botón para ir a segunda
    dibujarBoton(200, 50, 100, 50); // botón para ir a segunda_alt
    //cuadroTexto(0, 370, 640, 200, 255, 255, 0, 150);
  } else if (estado==="segunda") {
    cargarFotos(fotos, 2, 0, 0, 640, 480);
    dibujarBoton(50, 50, 100, 50); // Botón para ir a tercera
  } else if (estado === "segunda_alt") {
    cargarFotos(fotos, 3, 0, 0, 640, 480); // Imagen del camino alterno
  } else if (estado==="tercera") {
    cargarFotos(fotos, 4, 0, 0, 640, 480);
    dibujarBoton(50, 50, 100, 50);   //Botón para ir a cuarta
    dibujarBoton(200, 50, 100, 50); // botón para ir a cuarta_alt
  } else if (estado==="cuarta") {
    cargarFotos(fotos, 5, 0, 0, 640, 480);
    dibujarBoton(50, 50, 100, 50);  //Botón para ir a quinta
  } else if (estado === "cuarta_alt") {
    cargarFotos(fotos, 6, 0, 0, 640, 480); // Imagen del camino alterno de la tercera
  } else if (estado==="quinta") {
    cargarFotos(fotos, 7, 0, 0, 640, 480);
    dibujarBoton(50, 50, 100, 50); //Botón para ir a sexta
  } else if (estado==="sexta") {
    cargarFotos(fotos, 8, 0, 0, 640, 480);
  }
}
function mousePressed() {

  //esto es para especificar qa que pantalla se mueve si sucede algo

  if (estado === "inicio") {
    if (areaBoton(50, 50, 100, 50)) {
      estado = "primera";  // Va a la primera imagen
    }
  } else if (estado==="primera") {
    if (areaBoton(50, 50, 100, 50)) {
      estado="segunda"; // Continúa al camino normal
    } else if (areaBoton(200, 50, 100, 50)) {
      estado = "segunda_alt";  // Va al camino alterno
    }
  } else if (estado==="segunda") {
    if (areaBoton(50, 50, 100, 50)) {
      estado="tercera";
    }
  } else if (estado==="tercera") {
    if (areaBoton(50, 50, 100, 50)) {
      estado="cuarta";
    } else if (areaBoton(200, 50, 100, 50)) {
      estado = "cuarta_alt";  // Va al camino alterno
    }
  } else if (estado==="cuarta") {
    if (areaBoton(50, 50, 100, 50)) {
      estado="quinta";
    }
  } else if (estado==="quinta") {
    if (areaBoton(50, 50, 100, 50)) {
      estado="sexta";
    }
  }
}
function dibujarBoton (px,py,an,al){
 
 if (areaBoton(px,py,an,al)){
   fill(0,255,255);
}else { 
  fill(255, 0, 255);
}
rect(px,py,an,al,al/4);

}

function areaBoton(x,y,an,al){

  return mouseX > x &&  mouseX < x+an && mouseY > y && mouseY < y+al;
}
