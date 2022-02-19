const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;


function setup(){
    var canvas = createCanvas(1000,300);
    engine = Engine.create();
    world = engine.world;
    box1= new Box(500,200,50,50);


}

function draw(){
    background(180);
    Engine.update(engine);
    box1.display();
    
}

function mouseDragged(){
    
}


