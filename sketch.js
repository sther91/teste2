var obstaclesGroup,fantasmaImg,loboImg,esqueletoImg,dragaoImg;

//var loboImg;
//var endige,world;
//var esqueletoImg;
//var dragaoImg;

var PLAY = 1;
var END = 0;
var gameState = "play"


var caveImg;
var tela_morteImg;
var tela_vitoriaImg;
var score;

var canW;
var canH;

var inimigos;
var x;
var y;
var a;
var b;
var c;
var d;

var tamanhox;
var tamanhoy;

function preload() {
fantasmaImg = loadImage("fantasma.png");
loboImg = loadImage("lobisomen.png");
caveImg = loadImage("cave.png");
dragaoImg = loadImage("dragao.png");
esqueletoImg = loadImage("esqueleto.png");
spookySound = loadSound("spooky.wav");
tela_morteImg = loadImage("tela_morte.png");
tela_vitoriaImg = loadImage("tela_vitoria.png");



}

function setup() {
    createCanvas(1355,622);

x = random (200, 1200);
y = random (100, 500);
a= random (200, 1200);
b = random (100, 500);
c= random (200, 1200);
d= random (100, 500);
tamanhox= 100;
tamanhoy=100;

    //spookySound.play();
    //spookySound.setVolume(0.5);

//fantasma = createSprite(150,250);
//fantasma.addImage("fantasma",fantasmaImg);
//fantasma.scale = 0.2;


//lobo = createSprite(1100,510);
//lobo.addImage("lobo",loboImg);
//lobo.scale = 0.5;

dragao = createSprite(750,400);
dragao.addImage("dragao",dragaoImg);
dragao.scale = 1.5;
dragao.visible=false;

//esqueleto = createSprite(1000,350);
//esqueleto.addImage("esqueleto",esqueletoImg);
//esqueleto.scale = 0.2;

}

function draw() {
    background(caveImg);
image(fantasmaImg,x,y,tamanhox,tamanhoy);
image(loboImg,a,b,tamanhox,tamanhoy);
image(esqueletoImg,c,d,tamanhox,tamanhoy);








    drawSprites();

}

    