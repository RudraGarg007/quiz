var gameState = "quiz";
var levelState = "one";
var q, wrong, right;
 right = 0;
 wrong = 0;
function preload() {
  
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  q = new scieasy();
}

function draw() {
   q.display();
}

