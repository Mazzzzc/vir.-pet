//Create variables here
var dog, happyDog, database, foodS, foodStock;

function preload()
{
  happyDog=loadImage("images/dogImg.png");
  dogImg=loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,400);
  dog.addImage(dogImg);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() { 
  background(46, 139, 87); 

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();

  text("food Remaining: "+foodStock,250,250);
  textSize(35);
  fill("black");
  //add styles here

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



