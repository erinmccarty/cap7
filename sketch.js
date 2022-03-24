let angle = 0;
let value = 0;

let cam;
let blob;
let blob2;
let blob3;
let blob4;

let me;



function preload(){
  //skin=loadImage('0919txt.png')
  blob=loadModel('p5jsunwrapped2.obj');
  blob2=loadModel('p5jsunwrap3.obj');
  blob3=loadModel('scan3obj.obj');
  blob4=loadModel('scan4obj.obj');
  
  
  me=loadModel('blobtest3.obj');

}

function setup(){
  
  //cnv = createCanvas(600,400, WEBGL);
  //cnv.mouseClicked(changeGray);
  
  createCanvas(1920,1080, WEBGL);
  
  cam=createCapture(VIDEO);
  cam.size(1920, 1080);
  cam.hide();
 
  
}



function normalSelf(){
  //ME BLOB
  push();
  noStroke();
  translate(-40, 0, 0);
  scale(50);
  
    //rotateX(angle/4);
  rotateX(angle* 0.7);
  rotateZ(angle * 0.01);
  texture(cam);
  //sphere(100, 100, 100);
  model(me);
  pop();
  
  
  //SCAN 1
  push();
  translate(-250, 0, 0);
  ambientLight(255);
  scale(860);
  
  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle);
  
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob);

  pop();
  
  
  //SCAN 2
  push();
  translate(300, 0, 0);
  //ambientLight(255);
  scale(570);

  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle);
  
  //rotateZ(270);
  //rotateX(270);
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob2);
  
  pop();
  
  
  
  
  /*
  //ME BLOB
  push();
  noStroke();
  translate(-40, 0, 0);
  scale(50);
  
    //rotateX(angle/4);
  rotateX(angle* 0.7);
  rotateZ(angle * 0.01);
  texture(cam);
  //sphere(100, 100, 100);
  model(me);
  pop();
  */
  
  
  //SCAN 3
  push();
  translate(0, 250, 0);
  //ambientLight(255);
  scale(350);

  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle/-1);
  
  //rotateZ(270);
  //rotateX(270);
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob3);
  
  pop();
  
  
  
  
  //SCAN 4
  push();
  translate(0, -200, 0);
  //ambientLight(255);
  scale(350);

  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle/-1);
  
  //rotateZ(270);
  //rotateX(270);
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob4);
  
  pop();
  
}

function growSelf(){
  //ME BLOB
  push();
  noStroke();
  translate(-200, 0, 0);
  scale(150);
  
    //rotateX(angle/4);
  rotateX(angle* 0.7);
  rotateZ(angle * 0.01);
  texture(cam);
  //sphere(100, 100, 100);
  model(me);
  pop();
  
  
  
  //SCAN 1
  push();
  translate(-250, 0, 0);
  ambientLight(255);
  scale(660);
  
  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle);
  
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob);

  pop();
  
  
  //SCAN 2
  push();
  translate(300, 0, 0);
  //ambientLight(255);
  scale(370);

  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle);
  
  //rotateZ(270);
  //rotateX(270);
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob2);
  
  pop();

  
  //SCAN 3
  push();
  translate(0, 250, 0);
  //ambientLight(255);
  scale(150);

  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle/-1);
  
  //rotateZ(270);
  //rotateX(270);
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob3);
  
  pop();
  
  
  
  
  //SCAN 4
  push();
  translate(0, -200, 0);
  //ambientLight(255);
  scale(150);

  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle/-1);
  
  //rotateZ(270);
  //rotateX(270);
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob4);
  
  pop();
  
  
}



function draw() {
  //background(0,255,255);
  
  //push();
  //fill(value);
  //translate(-200, -50, 0);
  //rect(25, 25, 50, 50);
  //pop();

  
  if (mouseIsPressed === true) {
    growSelf();
    
  } else {
    normalSelf();
  }
  
  
  
  
  
  
  
  
  /*
  //SCAN 1
  push();
  translate(-250, 0, 0);
  ambientLight(255);
  scale(860);
  
  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle);
  
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob);

  pop();
  
  
  //SCAN 2
  push();
  translate(300, 0, 0);
  //ambientLight(255);
  scale(570);

  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle);
  
  //rotateZ(270);
  //rotateX(270);
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob2);
  
  pop();
  
  
  
  
  
  //ME BLOB
  push();
  noStroke();
  translate(-40, 0, 0);
  scale(50);
  
    //rotateX(angle/4);
  rotateX(angle* 0.7);
  rotateZ(angle * 0.01);
  texture(cam);
  //sphere(100, 100, 100);
  model(me);
  pop();
  */
  
  /*
  //SCAN 3
  push();
  translate(0, 250, 0);
  //ambientLight(255);
  scale(350);

  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle/-1);
  
  //rotateZ(270);
  //rotateX(270);
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob3);
  
  pop();
  
  
  
  
  //SCAN 4
  push();
  translate(0, -200, 0);
  //ambientLight(255);
  scale(350);

  angleMode(DEGREES);
  rotateZ(180);
  rotateY(angle/-1);
  
  //rotateZ(270);
  //rotateX(270);
  noStroke();
  //ambientMaterial(255, 0, 255);
  texture(cam);
  textureMode(NORMAL);
  model(blob4);
  
  pop();
  
  */
  
  
  
  
  
  
  
  
  
  angle += 0.6;
}


