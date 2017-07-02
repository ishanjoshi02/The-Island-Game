var bullets = []
var ship
var scoreCard
var score = 0

function setup() {
    createCanvas(600, 600)
    ship = new Ship()
    scoreCard = document.getElementById("myP")
}

function draw() {

    scoreCard.innerHTML = score

    if (frameCount % 30 == 0) {
        bullets.push(new Bullet())
        score += 1
    }

    background(51)
    noStroke()
    fill(255)
    ellipse(width / 2, height / 2, 100, 100)

    bullets.forEach(function(bullet) {
        bullet.show()
        bullet.update()
        if (ship.hitsBullet(bullet)) {
            console.log('Hit' + bullet)
            score = 0
        }

    }, this);

    ship.show()
    ship.update()

}

function keyPressed() {
    if (key == ' ') {
        ship.orbitSpeed *= -1
    }
}
