// 2. Remember the first assignment of creating a grid of squares/circles? Great! Draw that but just draw a grid of shapes, no need to have your initial in the grid. Also, be sure to apply a gradient. Hint: Use nested loops.

function setup() {
  createCanvas(400, 400);
  numSquares = 10;
  squareSize = width / numSquares;
}

function draw() {
  background(220);
  for (let i = 0; i < numSquares; i++) {
    for (let j = 0; j < numSquares; j++) {
      drawSquare(squareSize * i, squareSize * j, 25 * j);
    }
  }
}

function drawSquare(x, y, color) {
  push();
  fill("hsl(" + color + ", 100%, 50%)");
  rect(x, y, squareSize);
  pop();
}
