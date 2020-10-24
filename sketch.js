var database;
var form;
var playerCount;
var gamestate;
var player;

function setup() {
  createCanvas(800,400);

  database = firebase.database();
  database.ref("playerCount").on("value",function(data){
    playerCount = data.val()
  })

  database.ref("gameState").on("value",function(data){
    gamestate = data.val()
  })

}

function draw() {
  background(255,255,255);  
}