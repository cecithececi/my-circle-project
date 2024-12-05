let circleVisible = false; // A boolean to track whether the circle is visible
let canvas; // To store the canvas element

function setup() {
  canvas = createCanvas(640, 640); // Create the canvas
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2); // Center the canvas
  colorMode(RGB, 640, 640, 255); // Set the color mode
}

function draw() {
  // Dynamic background color based on mouse position
  background(mouseX, mouseY, 0);

  // Dynamic fill color for the shapes
  fill(mouseY, mouseX, 0, mouseX);

  // Draw static shapes
  triangle(320, 140, 260, 200, 380, 200);
  triangle(320, 200, 240, 260, 400, 260);
  triangle(320, 260, 200, 320, 440, 320);
  rect(280, 320, 80, 20);

  // Draw the circle if it is visible
  if (circleVisible) {
    fill(640, 640, 0, mouseX); // Circle's fill color
    circle(320, 130, 20); // Draw the circle
  }
}

function mousePressed() {
  // Toggle the visibility of the circle
  circleVisible = !circleVisible;
}

// Adjust canvas position when the window is resized
function windowResized() {
  canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
