const balls = []
let days = 0

function setup() {
  createCanvas(300, 300)
  for (let i = 0; i < 500; i++) {
    if (i === 1) {
      balls.push(new Ball(3, i, true))
    } else {
      balls.push(new Ball(3, i))
    }
  }
}

function draw() {
  background(240)
  for (const ball of balls) {
    ball.move()
    ball.draw()
    if (ball.isInfected) {
      ball.infect(balls)
    }
  }

  if (frameCount % 30 === 0) {
    days++
    console.log(balls.filter((it) => it.isInfected).length + ' days: ' + days)
  }
}
