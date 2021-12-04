var board, boardImg;
var angle =0;
var engine, world;
var ball1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


function preload(){
  boardImg = loadImage("images/boardImg.jpg");
}
function setup() {
  
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  board = createSprite(400, 200, 50, 50);
  board.addImage(boardImg);

  ball1 = new Ball(400,0);
  
}

function draw() {
  background(255,255,255); 

  

  Engine.update(engine);


    // imageMode(CENTER);
    // image(boardImg, 400, 200, 50, 50);


  // if(keyDown(RIGHT_ARROW)){
    
  //   push();

  //   translate(400, 200);

  //   rotate(angle = angle + 0.05);
  //   // imageMode(CENTER);
  //   // image(boardImg, 0, 0, 50, 50);
  //   board.addImage(boardImg);
  //   pop();
  // }
  // if(keyDown(LEFT_ARROW)){
  //   rotate(angle = angle-0.5);
  // }
  drawSprites();
  ball1.display1();
  
}