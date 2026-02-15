namespace SpriteKind {
    export const point1 = SpriteKind.create()
}
info.onCountdownEnd(function () {
    game.gameOver(true)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
})
let crystal: Sprite = null
let asteroid: Sprite = null
scene.setBackgroundImage(assets.image`myImage1`)
let mySprite = sprites.create(assets.image`myImage2`, SpriteKind.Player)
mySprite.setPosition(7, 69)
controller.moveSprite(mySprite, 100, 0)
mySprite.setStayInScreen(true)
game.splash("Quick precautions")
game.splash("change the ms for difficulty low=hard high=easy")
game.splash("controls are (a) and (d)")
game.splash("catch the crystals and dodge the asteroids")
game.splash("Press A (button) to start game:}")
info.startCountdown(30)
info.setLife(3)
music.play(music.createSong(hex`0078000408060300001c00010a006400f4016400000400000000000000000000000000050000048a0000000400011d08000c00011d10001400011d18001c00011d1c002000011d20002400012028002c00012030003400012038003c0001203c004000012040004400012448004c00012450005400012458005c0001245c006000012460006400012264006800012068006c0001226c007000012070007400012274007800012078007c00011d7c008000012002001c000c960064006d019001000478002c010000640032000000000a0600055a0060006400012264006800012068006c0001226c007000012070007400012274007800012078007c00011d7c0080000120900094000124a000a4000122ac00b0000120b000b4000122b400b8000120b800bc00011dbc00c000012004001c00100500640000041e000004000000000000000000000000000a040004d80000000400011d08000c00011d10001400011d18001c00011d1c002000011d20002400012028002c00012030003400012038003c0001203c004000012040004400012448004c00012450005400012458005c0001245c006000012460006400012264006800012068006c0001226c007000012070007400012274007800012078007c00011d7c008000012080008400011d88008c00011d8c009000011d90009400012498009c0001249c00a0000124a000a4000122a800ac000122ac00b0000120b000b4000122b400b8000120b800bc00011dbc00c0000120`), music.PlaybackMode.LoopingInBackground)
forever(function () {
    asteroid = sprites.create(img`
        . . . . . . . . . c c 8 . . . . 
        . . . . . . 8 c c c f 8 c c . . 
        . . . c c 8 8 f c a f f f c c . 
        . . c c c f f f c a a f f c c c 
        8 c c c f f f f c c a a c 8 c c 
        c c c b f f f 8 a c c a a a c c 
        c a a b b 8 a b c c c c c c c c 
        a f c a a b b a c c c c c f f c 
        a 8 f c a a c c a c a c f f f c 
        c a 8 a a c c c c a a f f f 8 a 
        . a c a a c f f a a b 8 f f c a 
        . . c c b a f f f a b b c c 6 c 
        . . . c b b a f f 6 6 a b 6 c . 
        . . . c c b b b 6 6 a c c c c . 
        . . . . c c a b b c c c . . . . 
        . . . . . c c c c c c . . . . . 
        `, SpriteKind.Enemy)
    asteroid.x = randint(0, scene.screenWidth())
    asteroid.y = 0
    asteroid.vy = 50
    pause(1000)
})
forever(function () {
    crystal = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . f 1 f . . . . . . 
        . . . . . . . f d f . . . . . . 
        . . . . . . . f 3 f . . . . . . 
        . . . . . . f 1 3 1 f . . . . . 
        . . . f f f 1 3 3 3 1 f f f . . 
        . . f 1 d 3 3 3 d 3 3 3 d 1 f . 
        . . . f f f 1 3 3 3 1 f f f . . 
        . . . . . . f 1 3 1 f . . . . . 
        . . . . . . . f 3 f . . . . . . 
        . . . . . . . f d f . . . . . . 
        . . . . . . . f 1 f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    crystal.x = randint(0, scene.screenWidth())
    crystal.y = 0
    crystal.vy = 30
    pause(1000)
})
