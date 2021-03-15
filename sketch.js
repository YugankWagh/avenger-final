var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var score =0;
var player, form,game;
var player1,player2;
var player1Img,player2Img;
var players;
var enemy, enemyImg;
var player1score =0;
var player2score =0;
var player3score =0;
var player3score =0;
var thanos, thanosImg;
var laser,laserImg;
var enemyGroup,laserGroup,flag=true;

function preload(){
  back_img=loadImage("New_Avengers_Facility_AM.png")
  player1Img= loadImage("70b822cf889586d5493934dfec0824d1.png")
  //player2Img= loadImage()
  enemyImg= loadImage("thanos_army1.png") 
  thanosImg= loadImage("thanos.png") 
  player2Img= loadImage("spider.png")
  laserImg = loadImage("lazar.jpg")
}
function setup() {
  createCanvas(1500, 800);
  enemyGroup= new Group();
  
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(back_img);
back_img.scale= 1.5
  // Add conditions for gameStates and playerCount
  if (playerCount === 1 ) {
    game.update(1);
  }
  if (gameState === 1) {
    clear(); 
    game.play();
  }
  if (gameState === 2) {
   
    game.end();
  }
}