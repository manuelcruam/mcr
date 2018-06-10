//variables de color y trazos
var rojo = 255;
var verde = 150;
var azul = 30;
var linea = 8;
var punto1;
var punto2;
var punto3;
var punto4;
var punto5;
var punto6;


//variables estados
var activo = 0;
var xrom;
var yrom;
var anchrom;
var rotar;
var acumulado;
var modulo;

function setup() {
createCanvas (windowWidth,windowHeight);
  background (255);
}

function draw() {
noStroke ();
  fill (32, 152, 213);
  rect(0, 0, 136, windowHeight);

//rectangulos blancos
fill ('white');
rect (17,19,103,370,6);
rect (25,293,86,86,6);
rect (25,400,86,86,6);
rect (25,495,86,86,6);
rect (25,593,86,86,6);
rect (25,690,86,86,6);

// boton lapiz
if (activo == 1) {fill ('orange');} else {fill (150);} 

  beginShape();
    vertex (47,29);
    vertex (56,29);
    vertex (68,41);
    vertex (92,101);
    vertex (31,80);
    vertex (24,73);
    vertex (24,65);
    vertex (31,71);
    vertex (36,61);
    vertex (24,51);
    vertex (24,45);
    vertex (38,58);
    vertex (47,57);
    vertex (46,47);
    vertex (27,29);
    vertex (32,29);
    vertex (49,45);
    vertex (55,46);
    vertex (59,50);
    vertex (52,49);
    vertex (51,62);
    vertex (39,62);
    vertex (36,76);
    vertex (69,88);
    vertex (69,86);
    vertex (69,83);
    vertex (70,80);
    vertex (72,78);
    vertex (75,77);
    vertex (79,77);
    vertex (64,45);
  endShape(CLOSE);
 
 //lineas crecientes
 fill (0);
 rect(56,134,24,7); 
 rect(56,142,24,4);
 rect(56,148,24,3);
 rect(56,152,24,2);
 
 //ctrl lineas
fill(50);
 ellipse(36,144,23,23);
 ellipse(100,144,23,23);
 fill(255)
 rect(29,142,15,3);
 rect(92,142,15,3);
 rect(98,136,3,16);
 
 //ctrl rojo
 fill(255,0,0)
 ellipse(36,179,23,23);
 ellipse(100,179,23,23);
        //cuadrito indicador
          rect(54,171,28,16);
 fill(255)
 rect(29,177,15,3);
 rect(92,177,15,3);
 rect(98,171,3,16);
    
 
 //ctrl verde
 fill(0,200,0)
 ellipse(36,209,23,23);
 ellipse(100,209,23,23);
        //cuadrito indicador
          rect(54,201,28,16);
 fill(255)
 rect(29,207,15,3);
 rect(92,207,15,3);
 rect(98,201,3,16);
 
  //ctrl azul
 fill(0,0,255)
 ellipse(36,239,23,23);
 ellipse(100,239,23,23);
        //cuadrito indicador
          rect(54,231,28,16);
 fill(255)
 rect(29,237,15,3);
 rect(92,237,15,3);
 rect(98,231,3,16);
 
 //INDICADOR************
   fill(rojo,verde,azul);
   rect(30,259,75,21);
   
  //boton brocha
  if (activo == 10) {fill ('orange');} else {fill (150);} 
  
      beginShape ();
      vertex (26,293);
      vertex (30,291);
      vertex (49,313);
      vertex (55,313);
      vertex (62,314);
      vertex (68,317);
      vertex (75,318);
      vertex (80,327);
      vertex (84,333);
      vertex (90,349);
      vertex (94,355);
      vertex (101,360);
      vertex (94,362);
      vertex (83,363);
      vertex (72,361);
      vertex (61,355);
      vertex (50,347);
      vertex (44,339);
      vertex (39,324);
      vertex (26,313);
      vertex (26,304);
      vertex (43,320);
      vertex (55,326);
      vertex (64,332);
      vertex (69,340);
      vertex (74,345);
      vertex (79,350);
      vertex (84,354);
      vertex (75,351);
      vertex (61,342);
      vertex (50,328);
      vertex (51,340);
      vertex (64,352);
      vertex (78,358);
      vertex (90,360);
      vertex (95,359);
      vertex (80,346);
      vertex (69,324);
      vertex (55,317);
      vertex (50,317);
      vertex (61,321);
      vertex (65,328);
      vertex (54,323);
      vertex (47,319);
      vertex (44,317);
      vertex (43,314);
      vertex (44,312);
      endShape (CLOSE);
  
  //boton goma
  if (activo == 11) {fill ('orange');} else {fill (150);} 
   beginShape ();
      vertex (24,405);
      vertex (26,401);
      vertex (30,400);
      vertex (54,400);
      vertex (96,426);
      vertex (98,431);
      vertex (99,435);
      vertex (98,440);
      vertex (96,445);
      vertex (92,450);
      vertex (76,465);
      vertex (71,467);
      vertex (67,468);
      vertex (64,468);
      vertex (58,466);
      vertex (52,464);
      vertex (24,443);
    endShape (CLOSE);
    
       // rallon borrado 1
        beginShape ();
            vertex (94,453);
            vertex (100,452);
            vertex (111,452);
            vertex (111,457);
            vertex (107,455);
            vertex (98,455);
            vertex (89,458);
           endShape (CLOSE);
       
     // rallon borrado 2
        beginShape ();
            vertex (83,464);
            vertex (105,462);
            vertex (95,471);
            vertex (111,466);
            vertex (111,472);
            vertex (99,474);
            vertex (78,479);
            vertex (85,474);
            vertex (88,471);
            vertex (93,466);
            vertex (77,468);
           endShape ();   
 
      //parte blanca goma
        fill('white');
           beginShape ();
            vertex (68,413);
            vertex (90,426);
            vertex (92,431);
            vertex (93,434);
            vertex (93,438);
            vertex (91,442);
            vertex (88,446);
            vertex (74,458);
            vertex (70,460);
            vertex (66,461);
            vertex (63,460);
            vertex (58,459);
            vertex (52,457);
            vertex (38,446);
          endShape (CLOSE);
          
  //boton relleno random
  if (activo == 12) {fill ('orange');} else {fill (150);} 

  //flecha entera
   beginShape ();
  vertex (25,526);
  vertex (34,526);
  vertex (45,547);
  vertex (51,547);
  vertex (51,542);
  vertex (66,550);
  vertex (51,559);
  vertex (51,554);
  vertex (42,554);
  vertex (30,532);
  vertex (25,532);
  endShape (CLOSE);
  
         //inicio flecha truncada
        beginShape (25,547);
            vertex (30,547);
            vertex (33,542);
            vertex (37,548);
            vertex (34,553);
            vertex (25,553);
           endShape (CLOSE);
       
     //flecha truncada
        beginShape ();
            vertex (40,531);
            vertex (42,526);
            vertex (51,526);
            vertex (51,521);
            vertex (66,529);
            vertex (51,538);
            vertex (51,532);
            vertex (46,532);
            vertex (42,538);
            endShape ();   

  // rombo
  quad (79,505,91,517,79,530,67,517);
  
 // estrella
  beginShape ();
            vertex (79,536);
            vertex (88,536);
            vertex (92,527);
            vertex (94,536);
            vertex (104,536);
            vertex (96,542);
            vertex (99,551);
            vertex (92,545);
            vertex (84,551);
            vertex (87,542);
            endShape ();   

//triangulo
    triangle (79,552,90,572,67,572);
  
  
  //boton spray
  if (activo == 13) {fill ('orange');} else {fill (150);} 

   beginShape ();
  vertex (25,620);
  vertex (37,607);
  vertex (36,606);
  vertex (41,600);
  vertex (53,612);
  vertex (55,610);
  vertex (52,607);
  vertex (62,597);
  vertex (76,612);
  vertex (67,621);
  vertex (64,618);
  vertex (62,620);
  vertex (74,632);
  vertex (68,638);
  vertex (66,636);
  vertex (25,677);
  endShape (CLOSE);
  
  //primera capa blanco spray
  fill ('white');
  quad(25,625,39,610,61,631,25,668);
  quad(38,606,41,602,67,628,64,631);
  quad(56,611,60,615,58,617,54,613);
  quad(54,607,62,600,72,609,64,617);
  
  //circulos spray
  fill(150);
  ellipse(75,622,6,6);
  ellipse(91,618,8,8);
  ellipse(83,631,5,5);
  ellipse(73,640,6,6);
  ellipse(89,638,4,4);
  ellipse(99,635,5,5);
  ellipse(86,645,3,3);
  ellipse(92,648,4,4);
  ellipse(97,654,3,3);
  ellipse(76,657,3,3);
  ellipse(85,656,7,7);
  ellipse(92,667,4,4);
 
 //eliminar dibujo
 stroke(150);
 strokeWeight(4);
 noFill();
         beginShape ();
          vertex (76,705);
          vertex (88,716);
          vertex (88,762);
          vertex (52,762);
          vertex (52,705);
          vertex (76,705);
          vertex (76,716);
          vertex (88,716);
         endShape ();
  
      //tache
  stroke(200,0,100);
  line(41,708,98,759);
  line(41,759,98,708); 
 
  //recuadros de encima
  noFill();
  stroke(100);
  strokeWeight(3);
rect (17,19,103,370,6);
rect (25,29,86,86,6);
rect (25,293,86,86,6);
rect (25,400,86,86,6);
rect (25,495,86,86,6);
rect (25,593,86,86,6);
rect (25,690,86,86,6);


//FUNCIONALIDAD********************************

//lapiz
if (activo==1 && mouseIsPressed && mouseX > 136)
{
  strokeWeight(linea);
  stroke(rojo,verde,azul);
  line(mouseX, mouseY, pmouseX, pmouseY); 
} 

//brocha
if (activo==10 && mouseIsPressed && mouseX > 136)
{
  noStroke();
  fill (rojo,verde,azul,15);
beginShape ();
  vertex (mouseX,mouseY);
  vertex (mouseX+11,mouseY-4);
  vertex (mouseX+19,mouseY+2);
  vertex (mouseX+27,mouseY);
  vertex (mouseX+33,mouseY+5);
  vertex (mouseX+24,mouseY+11);
  vertex (mouseX+23,mouseY+20);
  vertex (mouseX+19,mouseY+23);
  vertex (mouseX+15,mouseY+20);
  vertex (mouseX+8,mouseY+23);
  vertex (mouseX+10,mouseY+16);
  vertex (mouseX+1,mouseY+16);
  vertex (mouseX-2,mouseY+10);
  vertex (mouseX+8,mouseY+6);
  endShape (CLOSE);
}

//goma
if (activo==11 && mouseIsPressed && mouseX > 136)
{fill(255);
noStroke();
ellipse(mouseX,mouseY,25,25);}

//FONDO RANDOM
    if (activo==12 && acumulado < 20)
    {
    // rombito
      noStroke();
      fill (random(60,255),random(60,255),random(60,255),30);
      xrom = random(136,width);
      yrom = random(height);
      anchrom = random(8,30);
      rotar = random(1,70);
      push();
      angleMode(DEGREES);
      rotate(rotar);
      rect(xrom,yrom,anchrom,anchrom);
      acumulado=acumulado+1
      pop();
      
    // estrella
      noStroke();
      fill (random(60,255),random(60,255),random(60,255),30);
      xrom = random(136,width);
      yrom = random(height);
      push();
      angleMode(DEGREES);
      rotar = random(80);
      //translate (xrom-200,yrom-100);
      rotate(rotar);
      beginShape()
      vertex(xrom,yrom);
      vertex(xrom+29,yrom);
      vertex(xrom+39,yrom-28);
      vertex(xrom+48,yrom);
      vertex(xrom+77,yrom);
      vertex(xrom+53,yrom+17);
      vertex(xrom+63,yrom+45);
      vertex(xrom+39,yrom+28);
      vertex(xrom+15,yrom+45);
      vertex(xrom+24,yrom+17);
      endShape(CLOSE);
      pop();
      
    // triangulo
      noStroke();
      fill (random(60,255),random(60,255),random(60,255),30);
      modulo = random(60);
      xrom = random(136,width);
      yrom = random(height);
      push();
      angleMode(DEGREES);
      rotar = random(90);
      rotate(rotar);
      triangle(xrom,yrom,xrom+modulo,yrom+(modulo*1.7),xrom+(2*modulo),yrom);
      pop();
      
      if (acumulado == 19) {activo = 0}
    }

//spray
if (activo==13 && mouseIsPressed && mouseX > 136)
{
  noStroke();
  fill(rojo,verde,azul,20);
  punto1 = random(9,27);
  punto2 = random(9,27);
  punto3 = random(9,27);
  punto4 = random(9,27);
  punto5 = random(9,27);
  punto6 = random(9,27);

  ellipse(mouseX, mouseY, punto1,punto1);
  ellipse(mouseX, mouseY-30, punto2,punto2); 
  ellipse(mouseX+28, mouseY-9, punto3,punto3); 
  ellipse(mouseX+17, mouseY+23, punto4,punto4); 
  ellipse(mouseX-17, mouseY+23, punto5,punto5); 
  ellipse(mouseX-28, mouseY-9, punto6,punto6); 


} 

}


function mouseClicked()
{
//lapiz
if (mouseX > 24 && mouseX < 112 && mouseY > 28 && mouseY < 116)
{activo=1;}
//reduce linea
if (mouseX > 24 && mouseX < 48 && mouseY > 132 && mouseY < 156 && linea > 1)
{linea=linea-1;}
//aumenta linea
if (mouseX > 88 && mouseX < 112 && mouseY > 132 && mouseY < 156 && linea < 11)
{linea=linea+1;}
// reduce rojo
if (mouseX > 24 && mouseX < 48 && mouseY > 167 && mouseY < 191 && rojo > -1)
{rojo=rojo-30;}
// aumenta rojo
if (mouseX > 88 && mouseX < 112 && mouseY > 167 && mouseY < 191 && rojo < 254)
{rojo=rojo+30;}
// reduce verde
if (mouseX > 24 && mouseX < 48 && mouseY > 197 && mouseY < 221 && verde > -1)
{verde=verde-30;}
// aumenta verde
if (mouseX > 88 && mouseX < 112 && mouseY > 197 && mouseY < 221 && verde < 254)
{verde=verde+30;}
// reduce azul
if (mouseX > 24 && mouseX < 48 && mouseY > 227 && mouseY < 251 && azul > -1)
{azul=azul-30;}
// aumenta azul
if (mouseX > 88 && mouseX < 112 && mouseY > 227 && mouseY < 251 && azul < 254)
{azul=azul+30;}
//brocha
if (mouseX > 24 && mouseX < 112 && mouseY > 292 && mouseY < 380)
{activo=10;}
//borra
if (mouseX > 24 && mouseX < 112 && mouseY > 399 && mouseY < 487)
{activo=11;}
//fondo random
if (mouseX > 24 && mouseX < 112 && mouseY > 494 && mouseY < 582)
{activo=12;
acumulado=1;}
//spray mouse
if (mouseX > 24 && mouseX < 112 && mouseY > 592 && mouseY < 680)
{activo=13;}

//borra todo
if (mouseX > 24 && mouseX < 112 && mouseY > 689 && mouseY < 777)
{background(255);}
}