const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var obj, eng, world, body;
var ball;
function setup() {
  createCanvas(400,400);
  eng = Engine.create();
  world = eng.world;
  var obj_option = {
    isStatic:true
  }
  obj = Bodies.rectangle(200,390,200,20,obj_option);
  World.add(world,obj);
  var ball_option = {
    restitution: 1.0
  }
  ball = Bodies.circle(200,100,20,ball_option);
  World.add(world,ball);
  console.log(obj);
}

function draw() {
  background(0);  
  Engine.update(eng);
  rectMode(CENTER);
  rect(obj.position.x,obj.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}