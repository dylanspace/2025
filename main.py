namespace SpriteKind {
    export const map = SpriteKind.create()
    export const ends = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.map, SpriteKind.ends, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
let textSprite: TextSprite = null
let mySprite2: Sprite = null
let score = ""
let mySprite: Sprite = null
let y = 0
let m = 0
let n = 0
let END = sprites.create(img`
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    1111111111111111
    `, SpriteKind.ends)
END.setPosition(-10, 60)
let roket = sprites.create(img`
    . 4 c . f c f . 
    . 2 c 2 2 2 4 c 
    c 2 2 2 2 b 9 b 
    . . 2 4 c 2 2 f 
    . c 2 f c f . . 
    `, SpriteKind.Player)
let listx = 0
let listy = 0
let speed = 20
let stage = 0
let roketspeed = 50
let time = game.runtime()
game.onUpdate(function () {
    if (game.runtime() - time >= 12000 / speed) {
        time = game.runtime()
        n = randint(1, 12 - listy - 2)
        m = randint(1, 12 - listx - 2)
        while (n + m > 10) {
            n = randint(1, 12 - listy - 2)
            m = randint(1, 12 - listx - 2)
        }
        listx = n
        listy = m
        y = 0
        for (let index = 0; index < n; index++) {
            mySprite = sprites.create(img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                `, SpriteKind.map)
            mySprite.setPosition(160, y)
            mySprite.setVelocity(speed * -1, 0)
            y += 10
        }
        y = 120
        for (let index = 0; index < m; index++) {
            mySprite = sprites.create(img`
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                2 2 2 2 2 2 2 2 2 2 2 2 2 
                `, SpriteKind.map)
            mySprite.setPosition(160, y)
            mySprite.setVelocity(speed * -1, 0)
            y += -10
        }
        score += 1
        if (1000 <= score && stage != 4) {
            speed = 50
            time += 5000
            stage = 4
        } else if (500 <= score && stage != 3) {
            speed = 40
            time += 5000
            stage = 3
        } else if (250 <= score && stage != 2) {
            speed = 35
            time += 5000
            stage = 2
        } else if (100 <= score && stage != 1) {
            speed = 30
            time += 5000
            stage = 1
        }
        roket.sayText(score)
    }
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    textSprite = textsprite.create(score)
})
game.onUpdateInterval(125, function () {
    if (controller.left.isPressed()) {
        roket.setVelocity(roketspeed * -1, 0)
    } else if (controller.up.isPressed()) {
        roket.setVelocity(0, roketspeed * -1)
    } else if (controller.right.isPressed()) {
        roket.setVelocity(roketspeed, 0)
    } else if (controller.down.isPressed()) {
        roket.setVelocity(0, roketspeed)
    } else {
        roket.setVelocity(0, 0)
    }
})
