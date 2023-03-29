// 3. Duplicate your previous sketch and modify it to add mouse interactivity. It could be something like changing gradient based on mouse's coordinate, changing shape on mouse click, or dropping a random row of icons on top of already present rows.

function setup() {
  createCanvas(400, 400);
  numSquares = 10;
  squareSize = width / numSquares;
}

function draw() {
  background("midnightblue");
  for (let i = 0; i < numSquares; i++) {
    for (let j = 0; j < numSquares; j++) {
      //5*j+mouseY applies gradient as mouse moves up and down along Y-axis
      drawSquare(squareSize * i, squareSize * j, 5*j+mouseY);
    }
  }
}

function drawSquare(x, y, color) {
  push();
  fill("hsl(" + color + ", 100%, 50%)");
  rect(x, y, squareSize);
  pop();
}
