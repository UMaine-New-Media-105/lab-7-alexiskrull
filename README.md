Exercise 1 
Prompt: Create a sketch in which you draw a shape that diagonally stretches across the canvas. Create an array of colors and then use the random function to randomize the color of each shape in the diagonal. Make sure to use at drawing at least 15 shapes.
I chose to make an ellipse that makes 15 ellipses at a diagonal with:
```
drawShape(15 + offset * i, 15 + offset * i, randColor);
```
where "15" pushes the ellipse so it's not intersecting with the edge of the canvas, offset adds ```offset = width / numshapes;``` which calculates the appropriate interval when width or numshapes are changed, and ```offset * i``` makes it so that the offset increases with each round of the for loop. With both the x and y parts of the drawShape function being the same (15 + offset * i), the adjustments are always in a square placement (like 60, 60), making a diagonal. The randColor variable uses an array:
```
color = ["red", "purple", "indigo", "cyan", "chartreuse", "plum"];
```
and randomizes the selection from that array with ```random(color)``` to assign each iteration of the shape a random color.
LINK: https://editor.p5js.org/alexis.krull/sketches/OARhdlO-w

Exercise 2
Prompt: Remember the first assignment of creating a grid of squares/circles? Great! Draw that but just draw a grid of shapes, no need to have your initial in the grid. Also, be sure to apply a gradient. Hint: Use nested loops.
My nested loops are:
```
  for (let i = 0; i < numSquares; i++) {
    for (let j = 0; j < numSquares; j++) {
      drawSquare(squareSize * i, squareSize * j, 25 * j);
    }
  }
```
where numSquares is changeable by the user and squareSize is computed by dividing the width by numSquares. Then 25 * j applies a gradient using ```fill("hsl(" + color + ", 100%, 50%)");``` where 25 * j is in the color position. This variable being controlled by the j value means the gradient is applied so that colors change from top to bottom.
LINK: https://editor.p5js.org/alexis.krull/sketches/T6r9V7erV

Exercise 3
Prompt: Duplicate your previous sketch and modify it to add mouse interactivity. It could be something like changing gradient based on mouse's coordinate, changing shape on mouse click, or dropping a random row of icons on top of already present rows.
I duplicated my previous sketch as instructed, then modified the color input from ```25 * j``` to ```5*j+mouseY```, which means the color's hue (as in exercise 2 using HSL) is determined with the mouseY position, while also applying a color gradient top-down by depending on the j column variable. The 5 is only there to make the gradient more obvious.
LINK: https://editor.p5js.org/alexis.krull/sketches/4Bw_RY-bS
