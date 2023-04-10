
var trex ,trex_running;~

//imagem e animação
function preload(){
trex_running = loadAnimation("./images/trex1.png", "./images/trex3.png", "./images/trex4.png")
}

//configurações e objetos
function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
 trex = createSprite(50,100,50,50);
trex.addAnimation("trexR", trex_running);
}

//renderização
function draw(){
  background("white")
  
drawSprites()
}
