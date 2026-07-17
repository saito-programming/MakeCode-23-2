let 落下物 = game.createSprite(2, 0)
basic.forever(function () {
    basic.pause(1000)
    落下物.change(LedSpriteProperty.Y, 1)
})
