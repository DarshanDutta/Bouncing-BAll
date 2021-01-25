const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var mengine;
var mworld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
mengine=Engine.create();
mworld=mengine.world;

var options={

  isStatic:true

}

ground=Bodies.rectangle(200,390,400,20,options);
World.add(mworld,ground);
console.log(ground);

var ballOptions={

  restitution:1.0

}

ball=Bodies.circle(200,100,20,ballOptions);
World.add(mworld,ball);
}

function draw() {
  background("black");
  Engine.update(mengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}