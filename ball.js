class Ball {
  constructor(radius, id, infection = false) {
    this.x = Math.ceil(Math.random() * (300 - radius))
    this.y = Math.ceil(Math.random() * (300 - radius))
    this.id = id

    this.xVelocity = 0.15 * this.randomDirection()
    this.yVelocity = 0.15 * this.randomDirection()

    this.moves = 0

    this.radius = radius

    this.isInfected = infection
    this.infectionRate = 25
  }

  draw = () => {
    this.person()
    // this.range(3 * this.radius)
  }

  person = () => {
    noStroke()

    if (this.isInfected) {
      fill(255, 120, 120)
    } else {
      fill(90, 90, 200)
    }
    ellipse(this.x, this.y, this.radius * 2)
  }

  range = () => {
    noFill()
    stroke(255, 0, 0, 120)
    ellipse(this.x, this.y, (this.radius + this.radius * 1.2) * 2)
  }

  move = () => {
    if (this.x >= 300 - this.radius) {
      this.x = 300 - this.radius
      this.xVelocity *= -1
    } else if (this.x <= 0 + this.radius) {
      this.x = 0 + this.radius
      this.xVelocity *= -1
    }

    if (this.y >= 300 - this.radius) {
      this.y = 300 - this.radius
      this.yVelocity *= -1
    } else if (this.y < 0 + this.radius) {
      this.y = 0 + this.radius
      this.yVelocity *= -1
    }

    this.x += this.xVelocity
    this.y += this.yVelocity

    if (this.moves > 40) {
      if (this.randomDirection() === 1) {
        this.xVelocity *= this.randomDirection()
      } else {
        this.yVelocity *= this.randomDirection()
      }
      this.moves = 0
    }

    this.moves++

    this.draw()
  }

  infect = (persons) => {
    for (const person of persons) {
      if (!person.isInfected) {
        if (
          person.x < this.x + this.radius * 2 &&
          person.x > this.x - this.radius * 2 &&
          this.id !== person.id
        ) {
          if (
            person.y < this.y + this.radius * 2 &&
            person.y > this.y - this.radius * 2
          ) {
            person.isInfected =
              Math.ceil(Math.random() * 100) < this.infectionRate
          }
        }
      }
    }
  }

  randomDirection = () => {
    return (-1) ** Math.ceil(Math.random() * 2)
  }
}
