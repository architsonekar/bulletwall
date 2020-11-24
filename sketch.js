var speed,weight,bullet,wall,thickness;

function setup(){
  createCanvas(1000,400)
  speed = random(223, 321);
  weight = random(30,52);
  thickness= random(22,83);
  bullet = createSprite(50,200,50,20);
  wall = createSprite(800, 200,60, height/2);
  bullet.velocityX = speed;

}
function draw(){
  background(0);
  drawSprites();
  if(collided(bullet,wall)){
    bullet.velocityX= 0;
    var damage = 0.5*weight*speed *speed /(thickness * thickness * thickness);
    if(damage>0){
      wall.shapeColor = "red";
    }
    if(damage<10){
      wall.shapeColor = "green";
    }

  }
  function collided(lbullet, lwall){
    bulletedge = lbullet.x +lbullet.width;
    walledge = lwall.x;
    if(bulletedge>=walledge){
      return true;
    }
    return false;
  }
}
