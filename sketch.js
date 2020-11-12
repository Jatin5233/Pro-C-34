//Create variables here
var pikachu,pika_1,pika_2;
var bg;
var foodS,foodStock;
var database;
function preload()
{
pika_1=loadImage("pika2.png");
pika_2=loadImage("happyPika.png");
bg=loadImage("jungle2.jpg");
}

function setup() {
  createCanvas(800, 700);
  database=firebase.database();
  pikachu=createSprite(400,500);
  pikachu.addImage(pika_1);
  pikachu.scale=0.2;
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(bg);
if(keyIsDown(UP_ARROW)){
  pikachu.scale=0.6;
  foodS--;
  if(foodS<1){
    foodS=0
    pikachu.changeImage(pika_1);
  }
  else{
foodS=foodS;
pikachu.addImage(pika_2);
  }
  writeStock(foodS);


}

  drawSprites();
  textSize(50);
  fill(255);
  text("Food:"+foodS,400,300);
  //add styles here

}
function readStock(data){

  foodS=data.val();
}
function writeStock(x){
  
  database.ref('/').update({
    Food:x
    
  })
}



