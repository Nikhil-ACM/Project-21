var canvas;
var music;
var S1,S2,S3,S4;
var movingB;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
S1 = createSprite(30,590,200,20);
S2 = createSprite(260,590,200,20);
S3 = createSprite(490,590,200,20);
S4 = createSprite(710,590,200,20);


S1.shapeColor=rgb(0,0,255);
S2.shapeColor=rgb(253,0,0);
S3.shapeColor=rgb(3,255,28);
S4.shapeColor=rgb(0,0,0);



    //create box sprite and give velocity
    movingB = createSprite(random(20,750),100,30,30);
    movingB.shapeColor=rgb(255,255,255);
    movingB.velocityX = 5;
    movingB.velocityY = 7;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges = createEdgeSprites();
movingB.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(S1.isTouching(movingB)&& movingB.bounceOff(S1)){
     movingB.shapeColor=S1.shapeColor 
    }
    if(S2.isTouching(movingB)&& movingB.bounceOff(S2)){
        movingB.shapeColor=S2.shapeColor 
        music.play();
       }
       if(S3.isTouching(movingB)&& movingB.bounceOff(S3)){
        movingB.shapeColor=S3.shapeColor 
       }
       if(S4.isTouching(movingB)&& movingB.bounceOff(S4)){
        movingB.shapeColor=S4.shapeColor 
        music.stop();
        movingB.velocityX = 0;
        movingB.velocityY = 0;
       }
    drawSprites();
}
