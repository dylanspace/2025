namespace SpriteKind {
    export const map = SpriteKind.create()
    export const bullet = SpriteKind.create()
    export const end = SpriteKind.create()
    export const background = SpriteKind.create()
    export const end2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.map, SpriteKind.end, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
function explan () {
    gameover = textsprite.create("2025", 0, 9)
    gameover.setPosition(32, 25)
    gameover.setMaxFontHeight(40)
    BKey = textsprite.create("[ B ] SHOOT", 0, 5)
    BKey.setPosition(80, 70)
    BKey.setMaxFontHeight(8)
    Joystick = textsprite.create("[ JOYSTICK ] MOVE", 0, 5)
    Joystick.setPosition(80, 85)
    Joystick.setMaxFontHeight(8)
    restart = textsprite.create("PRESS A KEY TO START", 0, 1)
    restart.setPosition(80, 105)
    restart.setMaxFontHeight(8)
}
function Start () {
    infoSprite = textsprite.create("SCORE    BEST", 0, 5)
    infoSprite.setPosition(41, 8)
    ShowScore(score, 20, 16)
    ShowBest(best, 73, 16)
    END = sprites.create(img`
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
        `, SpriteKind.end)
    END.setPosition(-10, END.y)
    END2 = sprites.create(img`
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
        `, SpriteKind.end2)
    END2.setPosition(170, END2.y)
    roket = sprites.create(img`
        . 4 . f f 
        . 2 2 2 9 
        . . 4 c 2 
        `, SpriteKind.Player)
    roket.setBounceOnWall(true)
    listx = 0
    score = 0
    listy = 0
    speed = 20
    stage = 0
    roketspeed = 40
    time = game.runtime()
    cooltime = game.runtime()
    background1 = sprites.create(assets.image`myImage0`, SpriteKind.background)
    background2 = sprites.create(assets.image`myImage0`, SpriteKind.background)
    IsStart = 1
}
function RandomMapCreate () {
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
        if (stage == 4) {
            mySprite = sprites.create(img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                `, SpriteKind.map)
        } else if (stage == 3) {
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
        } else if (stage == 2) {
            mySprite = sprites.create(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                `, SpriteKind.map)
        } else if (stage == 1) {
            mySprite = sprites.create(img`
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                `, SpriteKind.map)
        } else {
            mySprite = sprites.create(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                `, SpriteKind.map)
        }
        mySprite.setPosition(160, y)
        mySprite.setVelocity(speed * -1, 0)
        y += 10
    }
    y = 120
    for (let index = 0; index < m; index++) {
        if (stage == 4) {
            mySprite = sprites.create(img`
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                1 1 1 1 1 1 1 1 1 1 1 1 1 
                `, SpriteKind.map)
        } else if (stage == 3) {
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
        } else if (stage == 2) {
            mySprite = sprites.create(img`
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                5 5 5 5 5 5 5 5 5 5 5 5 5 
                `, SpriteKind.map)
        } else if (stage == 1) {
            mySprite = sprites.create(img`
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                8 8 8 8 8 8 8 8 8 8 8 8 8 
                `, SpriteKind.map)
        } else {
            mySprite = sprites.create(img`
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                7 7 7 7 7 7 7 7 7 7 7 7 7 
                `, SpriteKind.map)
        }
        mySprite.setPosition(160, y)
        mySprite.setVelocity(speed * -1, 0)
        y += -10
    }
}
function ShowBest (num: number, x: number, y: number) {
    sprites.destroy(bestSprite)
    bestSprite = textsprite.create("" + "000000".substr(0, 6 - convertToText(num).length) + convertToText(num))
    bestSprite.setMaxFontHeight(8)
    bestSprite.setPosition(x, y)
}
sprites.onOverlap(SpriteKind.bullet, SpriteKind.map, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
})
function shoot () {
    if (game.runtime() - cooltime >= 4096) {
        music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
        bullet = sprites.create(img`
            . . . . 
            5 5 5 5 
            . . . . 
            `, SpriteKind.bullet)
        bullet.setPosition(roket.x, roket.y)
        bullet.setVelocity(100, 0)
        cooltime = game.runtime()
    }
}
function PlayerMove () {
    if (controller.left.isPressed()) {
        roket.setVelocity(roketspeed * -1, roket.vy)
    } else if (controller.right.isPressed()) {
        roket.setVelocity(roketspeed, roket.vy)
    } else {
        roket.setVelocity(0, roket.vy)
    }
    if (controller.up.isPressed()) {
        roket.setVelocity(roket.vx, roketspeed * -1)
    } else if (controller.down.isPressed()) {
        roket.setVelocity(roket.vx, roketspeed)
    } else {
        roket.setVelocity(roket.vx, 0)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.map, function (sprite, otherSprite) {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
    IsStart = 0
    if (best < score) {
        best = score
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.map)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    sprites.destroyAllSpritesOfKind(SpriteKind.background)
    infoSprite = textsprite.create("SCORE    BEST", 0, 5)
    infoSprite.setPosition(41, 8)
    ShowScore(score, 20, 16)
    ShowBest(best, 73, 16)
    gameover = textsprite.create("GAME OVER", 0, 2)
    gameover.setMaxFontHeight(10)
    gameover.setPosition(60, 40)
    restart = textsprite.create("PRESS A KEY TO RESTART")
    restart.setPosition(80, 60)
})
sprites.onOverlap(SpriteKind.bullet, SpriteKind.end2, function (sprite, otherSprite) {
    sprites.destroy(sprite)
})
function SetStage () {
    if (25600 <= score && stage != 4) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 500), music.PlaybackMode.InBackground)
        speed = 40
        time += 8000
        stage = 4
    } else if (12800 <= score && stage != 3) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 500), music.PlaybackMode.InBackground)
        speed = 35
        time += 8000
        stage = 3
    } else if (6400 <= score && stage != 2) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 500), music.PlaybackMode.InBackground)
        speed = 30
        time += 6000
        stage = 2
    } else if (1600 <= score && stage != 1) {
        music.play(music.stringPlayable("C D E F G A B C5 ", 500), music.PlaybackMode.InBackground)
        speed = 25
        time += 6000
        stage = 1
    }
}
function BackgroundMove () {
    background1.setPosition(background1.x - speed / 128, background1.y)
    if (background1.x == -80) {
        background1.setPosition(80, background1.y)
    }
    background2.setPosition(background1.x + 160, background2.y)
}
function ShowScore (num: number, x: number, y: number) {
    sprites.destroy(scoreSprite)
    scoreSprite = textsprite.create("" + "000000".substr(0, 6 - convertToText(num).length) + convertToText(num))
    scoreSprite.setMaxFontHeight(8)
    scoreSprite.setPosition(x, y)
}
let scoreSprite: TextSprite = null
let bullet: Sprite = null
let bestSprite: TextSprite = null
let mySprite: Sprite = null
let y = 0
let m = 0
let n = 0
let IsStart = 0
let background2: Sprite = null
let background1: Sprite = null
let cooltime = 0
let time = 0
let roketspeed = 0
let stage = 0
let speed = 0
let listy = 0
let listx = 0
let roket: Sprite = null
let END2: Sprite = null
let END: Sprite = null
let score = 0
let infoSprite: TextSprite = null
let restart: TextSprite = null
let Joystick: TextSprite = null
let BKey: TextSprite = null
let gameover: TextSprite = null
let best = 0
best = 0
explan()
game.onUpdate(function () {
    if (IsStart == 1) {
        if (controller.B.isPressed()) {
            shoot()
        }
        PlayerMove()
        BackgroundMove()
        score += 1
        ShowScore(score, 20, 16)
        if ((game.runtime() - time) * speed >= 12000) {
            RandomMapCreate()
            ShowBest(best, 73, 16)
            sprites.destroy(infoSprite)
            infoSprite = textsprite.create("SCORE    BEST", 0, 5)
            infoSprite.setPosition(41, 8)
            time = game.runtime()
            SetStage()
        }
    } else {
        if (controller.A.isPressed()) {
            sprites.destroy(gameover)
            sprites.destroy(restart)
            sprites.destroy(BKey)
            sprites.destroy(Joystick)
            Start()
        }
    }
})
