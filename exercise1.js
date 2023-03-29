// 1. Create a sketch in which you draw a shape that diagonally stretches across the canvas. Create an array of colors and then use the random function to randomize the color of each shape in the diagonal. Make sure to use at drawing at least 15 shapes.

function setup() {
  createCanvas(400, 400);
  noLoop();
  numshapes = 15;
  offset = width / numshapes;
  color = ["red", "purple", "indigo", "cyan", "chartreuse", "plum"];
  
}

function draw() {
  background(220);
  for (let i = 0; i < numshapes; i++) {
    randColor = random(color);
    drawShape(15 + offset * i, 15 + offset * i, randColor);
  }
}

function drawShape(x, y, color) {
  push();
  fill(color);
  ellipse(x, y, 30);
  pop();
}
