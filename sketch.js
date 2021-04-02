var h, s, m, d, y, mo;
var backgroundz, backgroundzIMG;
var backgroundy, backgroundyIMG;
var backgroundx, backgroundxIMG;
var backgroundw, backgroundwIMG;
var backgroundv, backgroundvIMG;
var backgrounda, backgroundaIMG;
var font;
var buttona, buttonaIMG;
var buttonb, buttonbIMG;
var buttonc, buttoncIMG;
var bird,birdIMG;

function preload(){
 backgroundzIMG = loadImage("clock.png");
 backgroundyIMG = loadImage("b1.png");
 backgroundxIMG = loadImage("b2.png");
 backgroundwIMG = loadImage("b3.png");
 backgroundvIMG = loadImage("b4.png");
 backgroundaIMG = loadImage("b5.png");
 font = loadFont("digital-7.ttf");
 buttonaIMG = loadImage("button1.png");
 buttonbIMG = loadImage("button2.png");
 buttoncIMG = loadImage("button3.png");
}

function setup() {
  createCanvas(1000,500);
  backgroundz = createSprite(width/2,height/2,1000,500);
  backgroundz.addImage(backgroundzIMG);
  backgroundz.scale = 1.2;

  backgroundy = createSprite(width/2+5,height/2+5,1000,500);
  backgroundy.addImage(backgroundyIMG);
  backgroundy.scale = 3.5;
  backgroundy.visible = false;

  backgroundx = createSprite(width/2,height/2,1000,500);
  backgroundx.addImage(backgroundxIMG);
  backgroundx.scale = 1.5;
  backgroundx.visible = false;

  backgroundw = createSprite(width/2,height/2,1000,500);
  backgroundw.addImage(backgroundwIMG);
  backgroundw.scale = 1.1;
  backgroundw.visible = false;

  backgroundv = createSprite(width/2,height/2,1000,500);
  backgroundv.addImage(backgroundvIMG);
  backgroundv.scale = 2.5;
  backgroundv.visible = false;

  backgrounda = createSprite(width/2,height/2,1000,500);
  backgrounda.addImage(backgroundaIMG);
  backgrounda.scale = 1.5;
  backgrounda.visible = false;

  buttona = createSprite(950,50,10,10);
  buttona.addImage(buttonaIMG);
  buttona.scale = 0.2;
  buttona.visible = false;

  buttonb = createSprite(50,450,10,10);
  buttonb.addImage(buttonbIMG);
  buttonb.scale = 0.2;
  buttonb.visible = false;

  buttonc = createSprite(50,50,10,10);
  buttonc.addImage(buttonbIMG);
  buttonc.scale = 0.2;
  buttonc.visible = false;
}

function draw() {
  background("black"); 
  if(keyDown("space")){
    backgroundz.visible = false;
    backgroundy.visible = true;
  }
  h = hour();
  m = minute();
  s = second();
  d = day();
  mo = month();
  y = year();
  angleMode(DEGREES);
  sAngle = map(s,0,60,0,360);
  mAngle = map(m,0,60,0,360);
  hAngle = map(h,0,12,0,360); 

  drawSprites();
  if(backgroundy.visible == true){
    push();
    translate(width / 2, height/2);
    rotate(sAngle);
    stroke("lime");
    strokeWeight(7);
    line(0,0,0,-200);
    pop();
  
    push();
    translate(width/2, height/2);
    rotate(mAngle);
    stroke("black");
    strokeWeight(7);
    line(0,0,0,-150);
    pop();
  
    push();
    translate(width/2,height/2);
    rotate(hAngle);
    stroke("yellow");
    strokeWeight(7);
    line(0,0,0,-90);
    pop();
  }
  if(mousePressedOver(backgroundy)){
    backgroundy.visible = false;
    backgroundx.visible = true;
    buttona.visible = true;
  }
  if(backgroundx.visible == true){
    textFont(font);
    textAlign(CENTER,CENTER);
    textSize(170);
    fill("black");
    text(h + " : " + m + " : " + s,500,250);
  }
  if(mousePressedOver(buttona)){
    backgroundw.visible = true;
    backgroundx.visible = false;
    buttonb.visible = true;
  }
  if(backgroundw.visible == true){
    buttona.destroy();
    push();
    translate(width / 2, height/2);
    rotate(sAngle);
    stroke("goldenrod");
    strokeWeight(5);
    line(0,0,0,-150);
    pop();
  
    push();
    translate(width/2, height/2);
    rotate(mAngle);
    stroke("goldenrod");
    strokeWeight(5);
    line(0,0,0,-110);
    pop();
  
    push();
    translate(width/2,height/2);
    rotate(hAngle);
    stroke("goldenrod");
    strokeWeight(5);
    line(0,0,0,-70);
    pop();
  }
  if(mousePressedOver(buttonb)){
    backgroundw.visible = false;
    backgroundv.visible = true;
    buttonc.visible = true;
  }
  if(backgroundv.visible ==  true){
    buttonb.destroy();
  }
  if(mousePressedOver(buttonc)){
    backgroundv.visible = false;
    backgrounda.visible = true;
  }
  if(backgrounda.visible == true){
    buttonc.destroy();
    push();
    textFont(font);
    textAlign(CENTER,CENTER);
    textSize(170);
    fill("black");
    text(h + " : " + m + " : " + s,500,250);
    pop();
    push();
    textFont(font);
    textSize(50);
    fill("black");
    text(d + " / " + mo + " / " + y, 410,350);
    pop();
  }
}