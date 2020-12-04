//Create variables here
var dog, happyDog, foodS, foodStock, dogHappy, dogSitting;
var database;

function preload()
{
  //load images here
  dogSitting = loadImage("Dog.png"); 
  dogHappy = loadImage("happydog.png");

}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();
  
  dog = createSprite(250, 250, 20, 20);
  dog.addImage("sitting", dogSitting);
  dog.scale = 0.15;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
}


function draw() {  

  background(46, 139, 87);

  if (keyWentDown(UP_ARROW))
  {

    //writeStock(foodS);
    dog.changeImage("happyDog",dogHappy);
  }

  drawSprites();

  fill("white");
  text("Press UP_ARROW Key to Feed the Drago Milk", 120, 20);
  //add styles here

}

function readStock(data)
{
  foodS = data.val();
}

function writeStock(x)
{
    if (x<=0)
    {
      x=0;
    }  
    else{
      x = x-1
    }
    

    database.ref('/').update({
    Food: x
  })
}


