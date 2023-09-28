function preload() {}

function setup() {
  Canvas = createCanvas(640, 480);
  Canvas.position(150, 150);
  Video = createCapture(VIDEO);
  Video.hide();
}

function draw() {
  image(Video, 230, 150, 220, 200);
  fill("red");
  stroke("red");
  circle(50, 50, 80);
  circle(50, 430, 80);
  circle(590, 50, 80);
  circle(590, 430, 80);
  fill("lime");
  stroke("blue");
  rect(90, 40, 460, 20);
  rect(90, 420, 460, 20);
  rect(40, 90, 20, 300);
  rect(580, 90, 20, 300);
}

function take_snapshot() {
  save("me.png");
}