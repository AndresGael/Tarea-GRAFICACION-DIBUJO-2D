function setup() {
  let cnv = createCanvas(600, 400);
  cnv.parent(document.body);
  noLoop();
}

function draw() {
  background(135, 206, 235);

  fill(34, 139, 34);
  rect(0, 300, 600, 100);

  fill(255, 255, 0);
  ellipse(70, 70, 80, 80);

  stroke(0);
  strokeWeight(4);

  noFill();
  ellipse(300, 220, 40, 40);

  fill(0);
  ellipse(292, 215, 6, 6);
  ellipse(308, 215, 6, 6);

  line(300, 240, 300, 300);

  line(270, 260, 330, 260);

  line(300, 300, 280, 340);
  line(300, 300, 320, 340);

  noStroke();

  fill(255);
  ellipse(350, 345, 30, 30);

  fill(0);
  arc(350, 345, 30, 30, PI / 2, 3 * PI / 2);


  fill(255, 0, 0);
  ellipse(80, 330, 30, 30);
  fill(255, 255, 0);
  ellipse(80, 330, 15, 15);
  stroke(128, 0, 128);
  strokeWeight(4);
  line(80, 345, 80, 390);
  noStroke();

  fill(255, 0, 0);
  ellipse(120, 330, 30, 30);
  fill(255, 255, 0);
  ellipse(120, 330, 15, 15);
  stroke(128, 0, 128);
  strokeWeight(4);
  line(120, 345, 120, 390);
  noStroke();

  fill(255, 0, 0);
  ellipse(160, 330, 30, 30);
  fill(255, 255, 0);
  ellipse(160, 330, 15, 15);
  stroke(128, 0, 128);
  strokeWeight(4);
  line(160, 345, 160, 390);
  noStroke();
}
