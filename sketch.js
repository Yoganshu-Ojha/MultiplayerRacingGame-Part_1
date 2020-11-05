var hypnoticBall, database;
var position;
var gameState = 0;
var playerCount = 0;
var game;
var player;
var form;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
}
function draw(){
  background("white");
  game = new GameObject();
  game.getstate();
  game.Start();
    drawSprites();
  
}