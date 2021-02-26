var car,wall
var speed,thiccness
//a very very sweet to hear sound
var veryVerySoothingSound

function setup() {
  speed=math.random(50,500);
  thiccness = math.random(1000,10000);
  /*i think i tricked you??
  meh why bother
  */
  veryVerySoothingSound.loadSound(Explosion1.ogg);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);



  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  car.velocityX = speed;

  if (wall.x - car.x<(car.width+wall.width)/2){
    car.velocityX = 0
    veryVerySoothingSound.play()
    var explosionRadius= 0.5* thiccness* speed *speed/22500

    if(explosionRadius>180){
      car.shapeColor =color(255,0,0)
      text("a perfect explosion,thus lethal,this is more better for the millitary", 800 , 500);
    }
    if(explosionRadius<100 && explosionRadius>180){
      car.shapeColor = color(230,230,0)
      text("an ok explosion,we need less lethality,this is more for mining",800,500)

    }
    if(explosionRadius>100){
      car.shapeColor = color(0,255,0)
      text("perfect,no explosion , we got it for driving",800,200)
    }



  }
  drawSprites();
}