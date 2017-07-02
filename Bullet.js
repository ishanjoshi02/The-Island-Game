function Bullet() {
    this.x = width / 2
    this.y = height / 2
    this.xspeed = floor(random(-1, 1))
    this.yspeed = floor(random(-1, 1))
    this.radius = 10

    this.show = function() {
        fill(211, 0, 0)
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2)
    }

    this.update = function() {
        this.x += this.xspeed
        this.y += this.yspeed
    }

}