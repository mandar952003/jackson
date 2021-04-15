var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces 
    //x,y,height,width
    surf1=createSprite(770,570,200,20)
    surf1.shapeColor="purple"
    surf2=createSprite(550,570,200,20)
    surf2.shapeColor="green"
    surf3=createSprite(330,570,200,20)
    surf3.shapeColor="orange"
    surf4=createSprite(110,570,200,20)
    surf4.shapeColor="red"

    //create box sprite and give velocity
    box=createSprite(random(20,750,box_options))
   box.scale=0.3
   box.shapeColor="blue"
  
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
   

  if(surf1.isTouching(box) && box.bounceOff(surf1))

 
    //add condition to check if box touching surface and make it box
    
    
    
    drawSprites()
}
