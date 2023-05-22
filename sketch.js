var image1;
var image2;
var image3;
var image4;
var image5;
var image6;
var image7;
var image8;
var image9;
var image10;
var image11;
var image12;
var image13;
var image14;
var image15;
var image16;


let CodigoDeColor=1;
let obraVerificacion = false;

//crear una variable
//cada vez que un color se dibuja esta variable cambie de valoe

function preload() {
  image1= loadImage( 'fondo1.png');  
  image2= loadImage( 'rojo3.png'); 
  image3= loadImage( 'amarillo1.png');  
  image4= loadImage( 'azul1.png');
  image5= loadImage( 'azul4.png'); 
  image6= loadImage( 'fondo2.png');  
  image7= loadImage( 'rojo2.png'); 
  image8= loadImage( 'amarillo4.png');  
  image9= loadImage( 'azul2.png');
  image10=loadImage( 'naranja2.png'); 
  image11=loadImage(' azul3.png');
  image12=loadImage('naranja3.png');
  image13=loadImage('fondo3.png');
  image14=loadImage('rojo4.png');
  image15=loadImage('amarillo3.png');
  image16=loadImage('naranja4.png');
 }
 
function setup() 
{
	createCanvas(430,600);
  background(2400);        
        
 }

function draw()
{
  
   if (key == '1'){ 
    CodigoDeColor=1;
    //tint(255,15);
    image(image1,0,0,430,600);
    key='a';
   }
//IMAGEN QUE SERIA EL FONDO QUE CORRESPONDE AL CODIGO DE COLOR 2
   if (key == '2'){
    CodigoDeColor=2;
    //tint(255,75);
    image(image6,0,0,430,600);
    key='a';
   }
   if (key == '3'){
    CodigoDeColor=3;
    tint(255,85);
    image(image13,0,0,430,600);
    key='a';
   }

   if (key==' '){
    background(255,255,255);
    //key=='A'; 
    obraVerificacion=false;
  }


  if (mouseIsPressed && mouseX<50 && CodigoDeColor==1){ 
    tint(255,55);
   image(image2,0,0,190,680);
   obraVerificacion=true;
  }   

  if (mouseIsPressed && mouseX > 350 && CodigoDeColor==1){
    tint(255,35);
    image(image3,230,0, 200,600);
    
  }

  if (mouseIsPressed && mouseX > 50 && mouseX<350 && CodigoDeColor==1){
    //tint(255,60);
    image(image4,150,0, 110,500);
  
  }
  

 if (mouseIsPressed && mouseX > 300 && CodigoDeColor==2){
    tint(255,30);
    image(image7,250,0, 180,600);
    
  }
  
  if (mouseIsPressed && mouseX<50 && CodigoDeColor==2){ 
    tint(255,75);
   image(image10,0,0,280,600);
   obraVerificacion=true;2
     }  

  if (mouseIsPressed && mouseX > 50 && mouseX<320 && CodigoDeColor==2){
    tint(255,55);
    image(image9,140,0, 120,600);
   
  
  }
  
  if (mouseIsPressed && mouseX > 50 && mouseX<320 && CodigoDeColor==3){
  tint(255,20);
  image(image15,290,0, 70,480);
  
}

if (mouseIsPressed && mouseX>390 && CodigoDeColor==3){ 
  tint(255,65);
 image(image14,280,0,180,610);
 obraVerificacion=true;3
   }  

if (mouseIsPressed && mouseX < 50  && CodigoDeColor==3){
  tint(255,45);
  image(image16,0,0, 200,700);
 

}
  if (keyIsPressed) {
    if ( keyCode == LEFT_ARROW){
      tint(255,65)
      image(image11,70,0,210,680);
      key='a';
    }
  }

  if (keyIsPressed) {
    if ( keyCode == DOWN_ARROW){
      tint(255,25)
      image(image12,150,0,130,700);
      key='a';
    }
  }
  if (keyIsPressed) {
    if ( keyCode == UP_ARROW){
      tint(255,60)
      image(image5,210,0,110,500);
      key='a';
    }
  }

  if (keyIsPressed) {
    if ( keyCode == RIGHT_ARROW){
      tint(255,20)
      image(image8,0 ,0,150,680);
      key='a';
    }
  }
}

