class Ball {
  constructor(x, y, size) {
    this.x = x
    this.y = y
    this.size = size
  }

  draw = () => {
    noStroke()
    fill(100, 200, 120)
    ellipse(this.x, this.y, this.size)
    noFill()
    stroke(255, 0, 0)
    rect(this.x - this.size / 2, this.y - this.size / 2, this.size)
  }

  move = () => {
    if (this.x <= 300 - this.size / 2) {
      console.log(this.x)
      this.x += 2
    }
    this.draw()
  }
}
