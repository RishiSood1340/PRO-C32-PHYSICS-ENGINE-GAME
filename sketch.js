function preload(){
  roadImage = loadImage("road.jpg");
  road2Image = loadImage("road2.jpg");
  road3Image = loadImage("road3.jpg");
  carImage = loadImage("car.jpg");
  treeImage = loadImage("tree.png");
  tree2Image = loadImage("tree2.png");
  tree3Image = loadImage("tree3.png");
  tree4Image = loadImage("tree4.png");
}
function setup() {
  createCanvas(1800, 400);
  
  road = createSprite(200,380,400,20);
  road.addImage("road",roadImage);

  road2 = createSprite(650,380,400,20);
  road2.addImage("road2",road2Image);

  road3 = createSprite(1050,380,400,20);
  road3.addImage("road3",road3Image);

  car = createSprite(40,295,3,10);
  car.addImage("car",carImage);

  tree = createSprite(300,295,3,10);
  tree.addImage("tree",treeImage);

  tree2 = createSprite(600,295,3,10);
  tree2.addImage("tree2",tree2Image);

  tree3 = createSprite(900,295,3,10);
  tree3.addImage("tree3",tree3Image);

  tree4 = createSprite(1200,295,3,10);
  tree4.addImage("tree4",tree4Image);

  function keyPressed(){
    if(keyCode === 32){
      car.jump();
    }
}
  
}

function draw() {
  background(255,255,255);  
  car.velocityX = 3
  
  drawSprites();
}