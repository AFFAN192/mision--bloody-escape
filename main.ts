namespace SpriteKind {
    export const PORTAL = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.PORTAL, function (sprite, otherSprite) {
    game.setGameOverEffect(true, effects.hearts)
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    for (let index = 0; index < 1; index++) {
        info.changeLifeBy(-1)
    }
})
info.setLife(999)
let mySprite = Render.getRenderSpriteVariable()
let E = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 8 8 f f f . . . . 
    . . . f f f 8 8 8 8 f f f . . . 
    . . f f f 2 e e e e e f f f . . 
    . . f f e 2 8 8 8 8 2 e e f . . 
    . . f 2 8 f f f 2 f f 8 e f . . 
    . . f 2 f f e e 2 e f 2 f f . . 
    . f f e f 1 1 8 2 1 1 2 e f f . 
    . f e e 8 1 1 d d 1 1 2 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 8 8 8 8 e e f . . . 
    . . e 8 f 2 2 8 8 8 8 f 8 e . . 
    . . 8 d f 8 8 8 8 8 2 f d 2 . . 
    . . 8 8 f 8 2 5 5 8 8 f 8 2 . . 
    . . . 2 . f f f f 2 f . . 2 . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Enemy)
E.follow(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 8 . . . . . 
    . . . 8 . . 5 5 5 8 8 . . . . . 
    . . . 8 8 5 5 5 8 8 5 5 . . . . 
    . . . . 8 8 5 5 8 5 5 5 5 . . . 
    . . . . 5 5 5 1 5 5 5 8 8 . . . 
    . . . . 5 5 1 5 5 5 5 5 8 8 . . 
    . . . . 8 8 5 1 5 1 5 5 5 8 8 . 
    . . 8 8 8 5 1 5 1 5 5 5 5 . . . 
    . . 8 . . . 5 8 5 5 8 5 5 . . . 
    . . . . . . 8 8 5 5 8 8 . . . . 
    . . . . . . 8 . . . . 8 8 . . . 
    . . . . . 8 8 . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.PORTAL)
tiles.placeOnRandomTile(mySprite2, sprites.dungeon.chestOpen)
tiles.placeOnRandomTile(E, sprites.castle.tilePath5)
game.setGameOverEffect(false, effects.blizzard)
game.setGameOverMessage(false, "PLAYER BLOOD: 0 PERCENT")
