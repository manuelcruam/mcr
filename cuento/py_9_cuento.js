var img, img1, img3, img4, img5, img6, estado, cuento;
var boton1, boton2, boton3, boton4, boton5, cual;

// Esto es un array, se abrio con los corchetes, a cada uno le corresponde un número, se activa con la variable cuento
var frases = ["Jugar al cazador es divertido", "Siempre estamos juntos, jugando...", "Hubbes es mi amigo fiel", "Un logro más, una aventura", "¿Qué haremos para no aburrirnos?", "Hubbes y yo somos felices", "Un ratito de descanso, siempre juntos...", "Nos apoyamos en todo", "Dos cabezas piensan mejor que una", "¡Vamos a vivir aventuras!", "¡En busca del tesoro!", "No te preocupes... ¡Vamos a jugar!", "Es difícil aprender a leer", "A toda velocidad, pero siempre juntos", "¡Somos los mejores!, ¡somos campeones!", "Debes estudiar más o te irá mal en la escuela", "¡Qué miedo! Me comen...", "Oye... ¡No soy burro!", "Tengo miedo, que bueno que estás conmigo", "No te preocupes, estoy contigo... ¡Siempre juntos!", "Atrapado por tragón", "Jugar caras y gestos me hace reír", "Practicamos para espantar", "Listos para actuar en el circo", "Hasta caminar lo hacemos una aventura", "Serenata para Mamá", "Córrele porque te alcanzamos y somos zombis", "Somos el mejor equipo", "¡Vamos equipo, listos para ganar!", "El peligro no nos espanta, ¡somos los mejores!", "Vamos de cacería juntos...", "¡Oye cantas muy feo!", "El tesoro de Indiana Jones"];

function preload(){
    img = loadImage("portada.jpg");
    img1 = loadImage("1.jpg");
    img2 = loadImage("2.jpg");
    img3 = loadImage("3.jpg");
    img4 = loadImage("4.jpg");
    img5 = loadImage("5.jpg");
    img6 = loadImage("6.jpg");
    img7 = loadImage("7.jpg");
    img8 = loadImage("8.jpg");
    img9 = loadImage("9.jpg");
    img10 = loadImage("10.jpg");
    img11 = loadImage("11.jpg");
    img12 = loadImage("12.jpg");
    img13 = loadImage("13.jpg");
    img14 = loadImage("14.jpg");
    img15 = loadImage("15.jpg");
    img16 = loadImage("final.jpg");
}

function setup() {
createCanvas(windowWidth,windowHeight);
background(0);
estado=0;
cuento=0;
}

function draw() {

//pantalla de inicio
if(estado==0){
fill(255);
rect(0,0,width,400);
imageMode(CENTER);
  image(img,width/2,200);
  fill(255);
  textAlign(CENTER);
  textSize(35);
  text ("Bienvenido al mundo de Calvin y Hobbes", width/2, 470);
    textSize(28);
    fill(240, 153, 12);
  text ("Hagamos un cuento imágenes aleatorias y con los textos que tu escojas.", width/2, 550);
  text ("Presiona la tecla enter o entrar para iniciar.", width/2, 585);
}

// estado 1. subiendo al árbol
if(estado==1){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img1,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550);
  rect ();
  text ("cuando encuentres uno que te guste da clic en el botón.", width/2, 585);
  boton1 = createButton("siguiente");
  boton1.position(width/2,610);
  boton1.mousePressed(cambio1);

}

// estado 2. tigre rascando
if(estado==2){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img2,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550); 
  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);
  boton1 = createButton("siguiente");
  boton1.position(width/2,610);
  boton1.mousePressed(cambio1);

}

// estado 3. los dos pensando
if(estado==3){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img3,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550); 
  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);
  boton1 = createButton("siguiente");
  boton1.position(width/2,610);
  boton1.mousePressed(cambio1);

}

// estado 4. en la selva
if(estado == 4){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img4,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550); 
  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);
  boton2 = createButton("siguiente");
  boton2.position(width/2,610);
  boton2.mousePressed(cambio2);
      boton1.hide();

}

// estado 5. leyendo el periodico
if(estado == 5){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img5,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550); 
  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);
  boton2 = createButton("siguiente");
  boton2.position(width/2,610);
  boton2.mousePressed(cambio2);
     boton1.hide();

}

// estado 6. avalancha
if(estado == 6){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img6,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550); 
  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);  
  boton2 = createButton("siguiente");
  boton2.position(width/2,610);
  boton2.mousePressed(cambio2);
        boton1.hide();

}

// estado 7. regaña al niño
if(estado == 7){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img7,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550); 
  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);  
  boton3 = createButton("siguiente");
  boton3.position(width/2,610);
  boton3.mousePressed(cambio3);
     boton2.hide();

}

// estado 8. en la cama
if(estado == 8){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img8,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550); 
  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);  
  boton3 = createButton("siguiente");
  boton3.position(width/2,610);
  boton3.mousePressed(cambio3);
       boton2.hide();

}

// estado 9. colgado de un árbol
if(estado == 9){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img9,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550); 
  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);  
  boton3 = createButton("siguiente");
  boton3.position(width/2,610);
  boton3.mousePressed(cambio3);
       boton2.hide();

}


// estado 10. espantandose
if(estado == 10){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img10,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550); 
  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);  
  boton4 = createButton("siguiente");
  boton4.position(width/2,610);
  boton4.mousePressed(cambio4);
    boton3.hide();

}

// estado 11. equilibrio en el arbol
if(estado == 11){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img11,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550); 
  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);  
  boton4 = createButton("siguiente");
  boton4.position(width/2,610);
  boton4.mousePressed(cambio4);
      boton3.hide();

}

// estado 12. berreando
if(estado == 12){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img12,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550); 
  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);  
  boton4 = createButton("siguiente");
  boton4.position(width/2,610);
  boton4.mousePressed(cambio4);
      boton3.hide();

}

// estado 13. zombies
if(estado == 13){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img13,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550); 
  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);  
  boton5 = createButton("siguiente");
  boton5.position(width/2,610);
  boton5.mousePressed(cambio5);
    boton4.hide();

}

// estado 14. americano
if(estado == 14){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img14,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550); 
  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);  
  boton5 = createButton("siguiente");
  boton5.position(width/2,610);
  boton5.mousePressed(cambio5);
      boton4.hide();

}

// estado 15. buscando tesoros
if(estado == 15){
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img15,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text(frases[cuento],width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Aprieta la tecla flecha derecha o izquierda para cambiar el texto,", width/2, 550); 
  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);  
  boton5 = createButton("siguiente");
  boton5.position(width/2,610);
  boton5.mousePressed(cambio5);
      boton4.hide();

}
  
// estado 16. final
  if(estado == 16){
  boton5.hide();
  background (0);
  fill(255);
  rect(0,0,width,400);
  imageMode(CENTER);
  image(img16,width/2,200);
  textAlign(CENTER);
  textSize(35);
  text("Hemos terminado",width/2, 470);
  textSize(25);
  fill(240, 153, 12);
  text ("Espero que te halla gustado. Si quieres crear otro aprieta F5", width/2, 550); 

//  text ("cuando encuentres uno que te guste da clic en este botón", width/2, 585);  
//  boton2 = createButton("siguiente");
//  boton2.position(width/2,610);
//  boton2.mousePressed(cambio5);
}

}


function keyPressed(){
// funciones primer cuadro
if (keyCode == ENTER && estado == 0)
{
  var cual = round(random(0.51,3.49));
    if(cual==1) {estado=1;}
    if(cual==2) {estado=2;}
    if(cual==3) {estado=3;}
}

// función flecha derecha
if (keyCode == RIGHT_ARROW)
{cuento=cuento+1;
if (cuento == 33){cuento=0;}
}

// función flecha izquierda
if (keyCode == LEFT_ARROW)
{cuento=cuento-1;
if (cuento == -1){cuento=32;}
}
}

function cambio1(){
  cual = round(random(3.51,6.49));
    if(cual==4) {estado=4;}
    if(cual==5) {estado=5;}
    if(cual==6) {estado=6;}
}

function cambio2(){
  cual = round(random(6.51,9.49));
    if(cual==7) {estado=7;}
    if(cual==8) {estado=8;}
    if(cual==9) {estado=9;}
}

function cambio3(){
  cual = round(random(9.51,12.49));
    if(cual==10) {estado=10;}
    if(cual==11) {estado=11;}
    if(cual==12) {estado=12;}
}

function cambio4(){
  cual = round(random(12.51,15.49));
    if(cual==13) {estado=13;}
    if(cual==14) {estado=14;}
    if(cual==15) {estado=15;}
}

function cambio5(){
  boton5.hide();
  background (255);
  estado = 16;
}