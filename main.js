function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  var h = hour(),
      m = minute(),
      s = second();
  background(0);
  noFill();
  translate(width / 2, height / 2);
  angleMode(DEGREES);
  rotate(-90);
  stroke(255, 0, 200, 255);
  strokeWeight(6);
  if(h <= 12) arc(0, 0, height / 1.75, height / 1.75, 0, 360 / 12 * ((h === 0)?12:h));
  else arc(0, 0, height / 1.25, height / 1.25, 0, 360 / 12 * (h - 12));
  stroke(0, 200, 255, 255);
  strokeWeight(4);
  arc(0, 0, height / 1.5, height / 1.5, 0, 360 / 60 * ((m === 0)?60:m));
  strokeWeight(2);
  stroke(0, 255, 100, 255);
  arc(0, 0, height / 1.25, height / 1.25, 0, 360 / 60 * ((s === 0)?60:s))
}