function Ship() {
    this.x = 150
    this.y = 140
    this.radius = 10
    this.angle = 0
    this.distance = 200
    this.orbitSpeed = 0.01
    this.originX = width / 2
    this.originY = height / 2

    this.show = function() {

        fill(255)
        ellipse(this.x, this.y, this.radius * 2, this.radius * 2)
    }

    this.hitsBullet = function(bullet) {
        return (dist(this.x, this.y, bullet.x, bullet.y)) <
            this.radius + bullet.radius
    }

    this.update = function() {
        this.angle += this.orbitSpeed
        this.x = this.originX + this.distance * cos(this.angle)
        this.y = this.originY + this.distance * sin(this.angle)
    }

}
