namespace SpriteKind {
    export const asteroide = SpriteKind.create()
    export const f = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const enemy3 = SpriteKind.create()
    export const navedisparo = SpriteKind.create()
    export const projectilnavr = SpriteKind.create()
    export const asteroid = SpriteKind.create()
    export const boss = SpriteKind.create()
    export const artilleria = SpriteKind.create()
    export const disparoartilleria = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.navedisparo, function (sprite, otherSprite) {
    nave_disparo.destroy(effects.fire, 500)
    info.changeLifeBy(-1)
    scene.cameraShake(8, 5000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.navedisparo, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 500)
    otherSprite.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.asteroid, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.asteroide, SpriteKind.boss, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.asteroide)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.artilleria, function (sprite, otherSprite) {
    info.changeLifeBy(-10)
})
sprites.onOverlap(SpriteKind.enemy2, SpriteKind.boss, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy2, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    pause(1000)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ....................
        ....................
        ......99999999999999
        .5555966666666666669
        5444496664446666999.
        54222966444446669...
        542229664444466692..
        542229664444466692..
        542229664444466692..
        542229664444466692..
        54222966444446669...
        5444496664446666999.
        .5555966666666666669
        ......99999999999999
        ....................
        ....................
        `,img`
        ....................
        ....................
        ......99999999999999
        .....966666666666669
        .555596664446666999.
        .5444966444446669...
        .54229664444466692..
        .54229664444466692..
        .54229664444466692..
        .54229664444466692..
        .5444966444446669...
        .555596664446666999.
        .....966666666666669
        ......99999999999999
        ....................
        ....................
        `,img`
        ....................
        ....................
        ......99999999999999
        .....966666666666669
        .....96664446666999.
        ..555966444446669...
        ..5449664444466692..
        ..5429664444466692..
        ..5429664444466692..
        ..5449664444466692..
        ..555966444446669...
        .....96664446666999.
        .....966666666666669
        ......99999999999999
        ....................
        ....................
        `,img`
        ....................
        ....................
        ......99999999999999
        .....966666666666669
        .555596664446666999.
        .5444966444446669...
        .54229664444466692..
        .54229664444466692..
        .54229664444466692..
        .54229664444466692..
        .5444966444446669...
        .555596664446666999.
        .....966666666666669
        ......99999999999999
        ....................
        ....................
        `],
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        ....................
        ....................
        ......99999999999999
        .6666966666666666669
        6888896664446666999.
        68999966444446669...
        689999664444466692..
        689999664444466692..
        689999664444466692..
        689999664444466692..
        68999966444446669...
        6888896664446666999.
        .6666966666666666669
        ......99999999999999
        ....................
        ....................
        `,img`
        ....................
        ....................
        ......99999999999999
        .....966666666666669
        .666696664446666999.
        .6888966444446669...
        .68999664444466692..
        .68999664444466692..
        .68999664444466692..
        .68999664444466692..
        .6888966444446669...
        .666696664446666999.
        .....966666666666669
        ......99999999999999
        ....................
        ....................
        `,img`
        ....................
        ....................
        ......99999999999999
        .....966666666666669
        .....96664446666999.
        ..666966444446669...
        ..6889664444466692..
        ..6899664444466692..
        ..6899664444466692..
        ..6889664444466692..
        ..666966444446669...
        .....96664446666999.
        .....966666666666669
        ......99999999999999
        ....................
        ....................
        `,img`
        ....................
        ....................
        ......99999999999999
        .....966666666666669
        .666696664446666999.
        .6888966444446669...
        .68999664444466692..
        .68999664444466692..
        .68999664444466692..
        .68999664444466692..
        .6888966444446669...
        .666696664446666999.
        .....966666666666669
        ......99999999999999
        ....................
        ....................
        `],
    500,
    false
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playTone(131, music.beat(BeatFraction.Eighth))
    music.playTone(932, music.beat(BeatFraction.Eighth))
    music.playTone(165, music.beat(BeatFraction.Eighth))
    music.playTone(349, music.beat(BeatFraction.Eighth))
    music.playTone(659, music.beat(BeatFraction.Eighth))
    proyectil_destruye_asteroides = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 100, 0)
    pause(500)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.playTone(131, music.beat(BeatFraction.Sixteenth))
    music.playTone(932, music.beat(BeatFraction.Sixteenth))
    music.playTone(165, music.beat(BeatFraction.Sixteenth))
    music.playTone(349, music.beat(BeatFraction.Sixteenth))
    music.playTone(131, music.beat(BeatFraction.Sixteenth))
    music.playTone(659, music.beat(BeatFraction.Sixteenth))
    music.playTone(932, music.beat(BeatFraction.Sixteenth))
    music.playTone(165, music.beat(BeatFraction.Sixteenth))
    music.playTone(349, music.beat(BeatFraction.Sixteenth))
    music.playTone(659, music.beat(BeatFraction.Sixteenth))
    proyectil_destruye_asteroides = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        2 4 5 5 4 4 4 2 . 2 4 5 5 5 5 4 
        4 . . 5 5 5 5 5 5 5 5 5 4 4 . 4 
        2 2 2 2 4 4 4 5 5 2 2 2 5 5 5 4 
        . . . . . . . . . 5 5 5 . 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, 100)
    proyectil_destruye_asteroides = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 2 2 2 . . . . . 
        2 4 5 5 4 4 4 2 . 2 4 5 5 5 5 4 
        4 . . 5 5 5 5 5 5 5 5 5 4 4 . 4 
        2 2 2 2 4 4 4 5 5 2 2 2 5 5 5 4 
        . . . . . . . . . 5 5 5 . 2 2 . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, -100)
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.enemy3, SpriteKind.boss, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.enemy3)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy3, function (sprite, otherSprite) {
    info.changeScoreBy(3)
    otherSprite.setVelocity(0, 0)
    proyectil_destruye_asteroides.destroy()
    nave_enemiga_2 = sprites.create(img`
        . 1 1 9 7 7 7 7 7 7 7 7 7 7 . . 
        1 d a 9 9 7 7 7 7 7 7 7 7 7 7 . 
        1 d a 9 9 7 7 7 7 7 7 7 7 7 7 . 
        1 d a 9 9 7 7 7 7 7 7 7 7 7 7 . 
        . 1 1 9 7 7 7 7 7 7 7 7 7 7 7 . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 4 2 2 4 7 9 . . . . 
        . . a 1 7 7 2 2 2 2 7 9 9 . . . 
        . . a 1 7 7 2 2 2 2 7 9 9 . . . 
        . . . . . 7 4 2 2 4 7 9 . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . 1 1 9 7 7 7 7 7 7 7 7 7 7 7 . 
        1 d a 9 9 7 7 7 7 7 7 7 7 7 7 . 
        1 d a 9 9 7 7 7 7 7 7 7 7 7 7 . 
        1 d a 9 9 7 7 7 7 7 7 7 7 7 7 . 
        . 1 1 9 7 7 7 7 7 7 7 7 7 7 . . 
        `, SpriteKind.enemy2)
    nave_enemiga_2.setVelocity(-55, 0)
    nave_enemiga_3.destroy()
})
sprites.onOverlap(SpriteKind.navedisparo, SpriteKind.boss, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.navedisparo)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy2, function (sprite, otherSprite) {
    info.changeScoreBy(2)
    nave_enemiga_2.setVelocity(0, 0)
    otherSprite.destroy(effects.fire, 500)
    proyectil_destruye_asteroides.destroy(effects.disintegrate, 500)
    nave_enemiga_1 = sprites.createProjectileFromSprite(img`
        . 5 5 f 4 4 4 4 4 4 4 4 4 4 . . 
        5 4 2 f f 4 4 4 4 4 4 4 4 4 4 . 
        5 4 2 f f 4 4 4 4 4 4 4 4 4 4 . 
        5 4 2 f f 4 4 4 4 4 4 4 4 4 4 . 
        . 5 5 f 4 4 4 4 4 4 4 4 4 4 4 . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . . . . . 4 6 8 8 6 4 f . . . . 
        . . 2 5 4 4 8 8 8 8 4 f f . . . 
        . . 2 5 4 4 8 8 8 8 4 f f . . . 
        . . . . . 4 6 8 8 6 4 f . . . . 
        . . . . . 4 4 4 4 4 4 . . . . . 
        . 5 5 f 4 4 4 4 4 4 4 4 4 4 4 . 
        5 4 2 f f 4 4 4 4 4 4 4 4 4 4 . 
        5 4 2 f f 4 4 4 4 4 4 4 4 4 4 . 
        5 4 2 f f 4 4 4 4 4 4 4 4 4 4 . 
        . 5 5 f 4 4 4 4 4 4 4 4 4 4 . . 
        `, mySprite, -76, 0)
    nave_enemiga_2.setVelocity(0, 0)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemy3, function (sprite, otherSprite) {
    info.changeLifeBy(-3)
    pause(5000)
})
sprites.onOverlap(SpriteKind.f, SpriteKind.boss, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.f)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.boss, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
sprites.onOverlap(SpriteKind.asteroid, SpriteKind.boss, function (sprite, otherSprite) {
    sprites.destroyAllSpritesOfKind(SpriteKind.asteroid)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    proyectil_destruye_asteroides.destroy(effects.disintegrate, 500)
    otherSprite.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.asteroid, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    proyectil_destruye_asteroides.destroy(effects.fire, 500)
    fasteroide.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    mySprite.startEffect(effects.warmRadial)
    info.changeLifeBy(-1)
    pause(500)
})
let disparoartilleria: Sprite = null
let defensas: Sprite = null
let projectile: Sprite = null
let fasteroide: Sprite = null
let nave_enemiga_1: Sprite = null
let nave_enemiga_3: Sprite = null
let nave_enemiga_2: Sprite = null
let proyectil_destruye_asteroides: Sprite = null
let nave_disparo: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbbcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99ddbdd66168bcccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999ddbbbd66888111ccccccb99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966ddbbbb6688811818ccccccbbc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd69dddbbb66618881888818818cccccbe9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd96dd6b6dbd68888888888888888cccccc99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbd9666666dbb668886888888cccccccccccccc9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb99666966d68866888888cccccccccccccccccc69ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666888888888ccccbbbcc8bcccccccccc9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999666666666888888888cbbcbe8bbbcbcccccbbcccb9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff9bbb999666666666688888888bccb888888bbbbb88888bcccccfffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffdbbb999669666666866888868bbbbb8888888ccc888b88bbc8cccffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffdbbb9d99ddd666668868888688bbcb888888888bc888bcc8bc886c9fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffbbbbbbddd966666888688888888888888b88888888888cc8ccc886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffdbbbbbbdd6966666666868888888888bbdbbebb8888888888bcc8c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff9bbdbddd6666666666888688868888ddddddddde8888888888bccbbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff9dbb9dd666666666668868888888bddddddbdbbddcccccd88b8ebccbbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffdd99999666666666668868888888bdddddbbbbbdbbbccccccb8bbbccc8bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9dd99996696966666666668888bbbdddddbbbddbbbbbbbbbcccc8bcccbb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9d999996666966666668688888bbdddbbbbdbbbbbbbbbbbcccccc8bbccc88bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff99999999666996696668868868bbdddddbbbdbbbbbbbbbbbbcbccc88bcccc88c6ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff999996696669666966d8868666bddbbbddbbdbbbbbbbbbbbbcccccc88bbccc8869fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999996699669666666d6688668bddbbdbbbbbbbbbbbbbbbbbccccccc88bcccc866fffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9dd999669966666666666688668bdddbbbbbbbbbbbbbbbbbbbccccccc888bbccc669ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff999999669d69666666666688868bddbbbdbbbbbbbbbbbbbbbbcccccccc888bbcc869ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999996ddd69666666688888868ddbddbbbbbbbbbbbbbbbbbbccccccccc888888866ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999999969ddd6669666688688888bbbbbbbbbbbbbbbbbbbbbbbbccbccccc8888888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99999966ddddd669666688888888bbbbbbbbbbbbbbbbbbbbbbbcbccccccccc88888869fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff999bb99666dddd6666666668886888bbbbbbbbbbbbbbbbbbbbbbcccccccccccc8888889fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbb966696666666666888886888bbbbbbbbbbbbbbbbbbbbbbcbccccccccccc888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbdbb666969666666668888868888bbbbbbbbbbbbbbbbbbbbccbccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99dbbbbb6696966666666668886868888bbbbeb888bbbbbbbbbcccccccccccccc8888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbe6969666666666888888888888888888888bbbbbbbbccccccccccccc88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccbc66966666666688888688888888888d888ebbbbbbbcccccccccccbb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbcc69996666688668886888888dd88dbbd88bbbbbbbccccccccccceb88888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbbccc999966668868888888888ddddbbbbd88cbbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9ebbbbcccccccc9966666688888888888888ddbbbb888bbbbbbbbccccccccc8888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbccccccccc666666888866888888888dddddbdd88bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffbbbbbbcccccccccc6666688888888888888888d8888888bbbbbbccccccccc88888888bb9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbccbbccccccb666688868888888888888888888888bbbbbccccccccc888888888b9ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9dbbbbbbbbcccccbb66666688888888888888888888888bbbbccccccccccc88888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbcccccccb666666688888888888888888888888bbbbcccccccccc888888888869ffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff9bbbbbbbccccccbb666666688888888888888888888888bbbbcccccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff99bbbbbbbbccccb6666668888888888888888888888888bbbbcbcccccccc88888888886fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcbbccccb6666668888888888888888888888888bbbbbccccccccc888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff99dbbbcccccccc6666668688688888888888888888888bbbbccccccccc8888cc888869fffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff999bbbbbccccbc6666666688688888888888888888888bbbbcccccccc88888dd88886ffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffff969bbbbbbcccc69666666668688868888888888888888bbbbccccccc88888bd888886ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff99bbbbcccccc696bb668888888868888888888888888bbbcccccccc8888bbd888869ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff9999bbbcccc9666dbbb8888888888888888888888888ccbcccccccc8888bc888886fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff699bbbbccc966966bbb8888888888888888888888888bbbbccccc88888bcc88869fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9999bbcccc666666dbbdd88888888688888888888888bbcccccc88888888888669fffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffff9699dbcccc66666666bb6d8888888688888888888888bbcccccc8888888888869ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff9696bbbcc66666666dbbd6886868888888888888888bbcbccc8888888888d669ffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff999ebbccc666666666dbb8868888688888888888888bbbccc8888888889b69fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffff969ccbcc66996666666bbb868888888888888888888bbbc888888888888b6ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffff96ccccc966966666666bb8688666888888888888888b8888888888888699ffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff99ccbc996666666666dbb6888668888888888888888888888888888869fffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffff969ccb9666666666666dbb88866888888888888888888888888888869ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff969ccc6696666666666dd8888668888888888888888888888888866fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff969cc9669666966d66dd8888868888888888888888888bb8888669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffff96ccc66699669dddd888868888888888888888888888be888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff96c66669966666dd88886666668888888888888888dd888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffff96966669966ddd686886868888888888888888888d888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffff969666696666666688686888888888888888888888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffff9966966966666666886888888888888886888888669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9699996666666888888888888888888118888699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff969996666668888881188888888881888669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff996999666688881818888888881886669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9961161186618811188886116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99161111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
info.setScore(0)
info.setLife(30)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    9 6 6 6 6 6 6 6 6 6 6 6 6 6 9 . 
    9 6 6 6 4 4 4 6 6 6 6 6 9 9 . . 
    9 6 6 4 4 4 4 4 6 6 6 6 9 . . . 
    9 6 6 4 4 4 4 4 6 6 6 6 9 2 . . 
    9 6 6 4 4 4 4 4 6 6 6 6 9 2 . . 
    9 6 6 4 4 4 4 4 6 6 6 6 9 2 . . 
    9 6 6 4 4 4 4 4 6 6 6 6 9 2 . . 
    9 6 6 4 4 4 4 4 6 6 6 6 9 . . . 
    9 6 6 6 4 4 4 6 6 6 6 6 9 9 . . 
    9 6 6 6 6 6 6 6 6 6 6 6 6 6 9 . 
    . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
forever(function () {
	
})
forever(function () {
    if (info.score() > 30) {
        info.setScore(29)
    }
})
forever(function () {
    if (info.score() == 16) {
        for (let index = 0; index < 1e+24; index++) {
            pause(randint(1000, 2000))
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 2 2 2 2 . . . . . . . . . 
                . . 2 1 1 1 1 2 2 . . . . . . . 
                . . 1 1 1 1 1 1 3 3 2 2 . . . . 
                . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
                . . 2 1 1 1 1 3 2 2 . . . . . . 
                . . . 2 2 2 2 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, defensas, -200, 0)
        }
    }
})
forever(function () {
    if (info.score() == 16) {
        for (let index = 0; index < 1e+24; index++) {
            pause(randint(1000, 2000))
            disparoartilleria = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 2 2 2 2 . . . . . . . . . 
                . . 2 1 1 1 1 2 2 . . . . . . . 
                . . 1 1 1 1 1 1 3 3 2 2 . . . . 
                . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
                . . 2 1 1 1 1 3 2 2 . . . . . . 
                . . . 2 2 2 2 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, defensas, -200, 0)
        }
    }
})
forever(function () {
    if (info.score() == 15) {
        mySprite.sayText("prepárate vienen la artilleria pesada")
        pause(5000)
        mySprite.sayText("solo sobrevive nos ocuparemos de ellos facil ")
        pause(5000)
        mySprite.sayText("por cierto son indestructibles", 5000, false)
        info.changeScoreBy(1)
    }
})
forever(function () {
    if (info.score() == 16) {
        for (let index = 0; index < 90; index++) {
            info.startCountdown(160)
            defensas = sprites.create(img`
                . . 2 2 2 2 2 2 2 2 2 2 . . . . 
                . a a a a a a a a a a a a . . . 
                . a . . . . . . . . . . a . . . 
                . . a . . . . . . . . a . . . . 
                4 . a . . . . . . . . a . . . 4 
                c c c c c c c c c c c c c c c c 
                c c 5 c c c c c c c c c c 5 c c 
                c c 9 9 9 9 9 9 9 9 9 9 9 9 c c 
                c c 9 9 9 9 9 9 9 9 9 9 9 9 c c 
                c c 5 c c c c c c c c c c 5 c c 
                c c c c c c c c c c c c c c c c 
                c . a . . . . . . . . a . . . 4 
                . . a . . . . . . . . a . . . . 
                . a . . . . . . . . . . a . . . 
                . a a a a a a a a a a a a . . . 
                . . 2 2 2 2 2 2 2 2 2 2 . . . . 
                `, SpriteKind.artilleria)
            defensas.setPosition(166, randint(-120, 120))
            defensas.setVelocity(randint(-30, -40), 0)
            pause(randint(500, 1000))
            pause(5000)
        }
        info.changeScoreBy(1)
    }
})
forever(function () {
    if (info.score() == 16) {
        for (let index = 0; index < 1e+24; index++) {
            pause(randint(1000, 2000))
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 2 2 2 2 . . . . . . . . . 
                . . 2 1 1 1 1 2 2 . . . . . . . 
                . . 1 1 1 1 1 1 3 3 2 2 . . . . 
                . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
                . . 2 1 1 1 1 3 2 2 . . . . . . 
                . . . 2 2 2 2 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, defensas, -200, 0)
        }
    }
})
forever(function () {
    if (info.score() == 16) {
        for (let index = 0; index < 1e+24; index++) {
            pause(randint(1000, 2000))
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . 2 2 2 2 . . . . . . . . . 
                . . 2 1 1 1 1 2 2 . . . . . . . 
                . . 1 1 1 1 1 1 3 3 2 2 . . . . 
                . . 1 1 1 1 1 1 1 1 3 3 3 3 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 3 2 2 3 3 . . 
                . . 2 1 1 1 1 3 2 2 . . . . . . 
                . . . 2 2 2 2 . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, defensas, -200, 0)
        }
    }
})
forever(function () {
    if (info.score() == 10) {
        info.setScore(13)
    }
})
forever(function () {
    if (info.score() < 11) {
        fasteroide = sprites.create(img`
            . . . . . . c c c . . . . . . . 
            . . . . . a a a c c c . . . . . 
            . . . c a c f a a a a c . . . . 
            . . c a c f f f a f f a c . . . 
            . c c a c c f a a c f f a c . . 
            . a b a a c 6 a a c c f a c c c 
            . a b b b 6 a b b a a c a f f c 
            . . a b b a f f b b a a c f f c 
            c . a a a c c f c b a a c f a c 
            c c a a a c c a a a b b a c a c 
            a c a b b a a 6 a b b 6 b b c . 
            b a c b b b 6 b c . c c a c . . 
            b a c c a b b a c . . . . . . . 
            b b a c a b a a . . . . . . . . 
            a b 6 b b a c . . . . . . . . . 
            . a a b c . . . . . . . . . . . 
            `, SpriteKind.asteroid)
        fasteroide.setPosition(160, randint(0, 160))
        fasteroide.follow(mySprite, 50)
        pause(5000)
    }
})
forever(function () {
    if (info.score() > 10 && info.score() < 15) {
        info.setScore(13)
    }
})
forever(function () {
	
})
forever(function () {
    if (info.score() == 13) {
        mySprite.sayText("Aquí ministerio de defensa", 5000, false)
        pause(2000)
        mySprite.sayText("viene su artillerisa pesada", 5000, false)
        info.changeScoreBy(1)
        info.setScore(15)
    }
})
forever(function () {
    if (info.score() < 11) {
        nave_enemiga_1 = sprites.create(img`
            . 5 5 f 4 4 4 4 4 4 4 4 4 4 . . 
            5 4 2 f f 4 4 4 4 4 4 4 4 4 4 . 
            5 4 2 f f 4 4 4 4 4 4 4 4 4 4 . 
            5 4 2 f f 4 4 4 4 4 4 4 4 4 4 . 
            . 5 5 f 4 4 4 4 4 4 4 4 4 4 4 . 
            . . . . . 4 4 4 4 4 4 . . . . . 
            . . . . . 4 6 8 8 6 4 f . . . . 
            . . 2 5 4 4 8 8 8 8 4 f f . . . 
            . . 2 5 4 4 8 8 8 8 4 f f . . . 
            . . . . . 4 6 8 8 6 4 f . . . . 
            . . . . . 4 4 4 4 4 4 . . . . . 
            . 5 5 f 4 4 4 4 4 4 4 4 4 4 4 . 
            5 4 2 f f 4 4 4 4 4 4 4 4 4 4 . 
            5 4 2 f f 4 4 4 4 4 4 4 4 4 4 . 
            5 4 2 f f 4 4 4 4 4 4 4 4 4 4 . 
            . 5 5 f 4 4 4 4 4 4 4 4 4 4 . . 
            `, SpriteKind.Enemy)
        nave_enemiga_1.setPosition(160, randint(0, 120))
        nave_enemiga_1.setVelocity(-76, 0)
        pause(2000)
    }
})
forever(function () {
    if (info.score() < 11) {
        nave_disparo = sprites.create(img`
            . . . f . . . . . . . . . . . . 
            4 . . f f f f f f f f . . . . . 
            4 . . f f f f f f f f f . . . . 
            4 f f f f f f f f f f f f . . . 
            4 . . f f f f f f f f f f . . . 
            4 . . f f f f f f f f f f . . . 
            . . . f f f f 5 5 f f f f . . . 
            . . . f f f f 5 5 f f f f . . . 
            . . . f f f f 5 5 f f f f . . . 
            4 . . f f f f f f f f f f . . . 
            4 . . f f f f f f f f f f . . . 
            4 f f f f f f f f f f f f . . . 
            4 . . f f f f f f f f f f . . . 
            4 . . f f f f f f f f f . . . . 
            . . . f f f f f f f f . . . . . 
            . . . f . . . . . . . . . . . . 
            `, SpriteKind.navedisparo)
        nave_disparo.setVelocity(-48, 0)
        nave_disparo.setPosition(160, randint(0, 120))
        pause(2000)
    }
})
forever(function () {
    music.setVolume(255)
    music.playMelody("D E C5 G E D G B ", 126)
    music.playMelody("G E A G E D G B ", 126)
    music.playMelody("G C5 C G E G A G ", 126)
})
forever(function () {
    if (info.score() < 11) {
        nave_enemiga_3 = sprites.create(img`
            . 7 7 f 2 2 2 2 2 2 2 2 2 2 . . 
            7 6 3 f f 2 2 2 2 2 2 2 2 2 2 . 
            7 6 3 f f 2 2 2 2 2 2 2 2 2 2 . 
            7 6 3 f f 2 2 2 2 2 2 2 2 2 2 . 
            . 7 7 f 2 2 2 2 2 2 2 2 2 2 2 . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . . . . . 2 6 8 8 6 2 f . . . . 
            . . 3 7 2 2 8 8 8 8 2 f f . . . 
            . . 3 7 2 2 8 8 8 8 2 f f . . . 
            . . . . . 2 6 8 8 6 2 f . . . . 
            . . . . . 2 2 2 2 2 2 . . . . . 
            . 7 7 f 2 2 2 2 2 2 2 2 2 2 2 . 
            7 6 3 f f 2 2 2 2 2 2 2 2 2 2 . 
            7 6 3 f f 2 2 2 2 2 2 2 2 2 2 . 
            7 6 3 f f 2 2 2 2 2 2 2 2 2 2 . 
            . 7 7 f 2 2 2 2 2 2 2 2 2 2 . . 
            `, SpriteKind.enemy3)
        nave_enemiga_3.setPosition(160, randint(0, 120))
        nave_enemiga_3.setVelocity(-32, 0)
        pause(5000)
    }
})
forever(function () {
    if (info.score() < 11) {
        nave_enemiga_2 = sprites.create(img`
            . 1 1 9 7 7 7 7 7 7 7 7 7 7 . . 
            1 d a 9 9 7 7 7 7 7 7 7 7 7 7 . 
            1 d a 9 9 7 7 7 7 7 7 7 7 7 7 . 
            1 d a 9 9 7 7 7 7 7 7 7 7 7 7 . 
            . 1 1 9 7 7 7 7 7 7 7 7 7 7 7 . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . . . . . 7 4 2 2 4 7 9 . . . . 
            . . a 1 7 7 2 2 2 2 7 9 9 . . . 
            . . a 1 7 7 2 2 2 2 7 9 9 . . . 
            . . . . . 7 4 2 2 4 7 9 . . . . 
            . . . . . 7 7 7 7 7 7 . . . . . 
            . 1 1 9 7 7 7 7 7 7 7 7 7 7 7 . 
            1 d a 9 9 7 7 7 7 7 7 7 7 7 7 . 
            1 d a 9 9 7 7 7 7 7 7 7 7 7 7 . 
            1 d a 9 9 7 7 7 7 7 7 7 7 7 7 . 
            . 1 1 9 7 7 7 7 7 7 7 7 7 7 . . 
            `, SpriteKind.enemy2)
        nave_enemiga_2.setVelocity(-55, 0)
        nave_enemiga_2.setPosition(160, randint(0, 120))
        pause(5000)
    }
})
forever(function () {
    effects.blizzard.startScreenEffect(5000)
})
