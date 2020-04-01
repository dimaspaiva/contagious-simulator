function setup() {
  createCanvas(300, 300)
  ball = new Ball(150, 150, 9)
}

function draw() {
  background(240)
  ball.move()
}
