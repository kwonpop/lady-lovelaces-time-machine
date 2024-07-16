namespace SpriteKind {
    export const Lovelace = SpriteKind.create()
    export const Shelley = SpriteKind.create()
    export const Curie = SpriteKind.create()
    export const Hopper = SpriteKind.create()
    export const Johnson = SpriteKind.create()
    export const Mom = SpriteKind.create()
    export const Other = SpriteKind.create()
    export const Cam = SpriteKind.create()
    export const el = SpriteKind.create()
    export const Monster = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Lovelace, function (sprite, otherSprite) {
    if (shelleyWin + curieWin + (hopperWin + johnsonWin) == 8) {
        game.setDialogTextColor(8)
        game.setDialogFrame(img`
            ..99999999999999999999..
            .9966666666666666666699.
            996661111111111111166699
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            996661111111111111166699
            .9966666666666666666699.
            ..99999999999999999999..
            `)
        game.showLongText("Did you find the passcode?", DialogLayout.Top)
        codeInput = game.askForNumber("Passcode?", 4)
        if (codeInput == passcode) {
            game.showLongText("That seemed to work!", DialogLayout.Top)
            game.showLongText("I'm not very familiar with this programming language, though. Could you help me out?", DialogLayout.Top)
            usedQs = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
            ]
            for (let index = 0; index < 3; index++) {
                newQ = usedQs.removeAt(randint(0, usedQs.length - 1))
                quiz(newQ)
            }
            game.showLongText("Wow! You're good at this!", DialogLayout.Top)
            game.showLongText("And.....", DialogLayout.Top)
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
            game.showLongText("Fixed! Your time machine should be completely functional again!", DialogLayout.Top)
            game.showLongText("It's amazing knowing what sort of things will be done with programming in the future...", DialogLayout.Top)
            game.showLongText("I can't wait to tell Charles about this!", DialogLayout.Top)
            game.showLongText("Have fun in the future!", DialogLayout.Top)
            game.setDialogTextColor(11)
            game.setDialogFrame(img`
                .....cccccccccccccc.....
                ...cbd111111111111dbc...
                ..cd1111111111111111dc..
                .cd111111111111111111dc.
                .b11111111111111111111b.
                cd11111111111111111111dc
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                cd11111111111111111111dc
                .b11111111111111111111b.
                .cd111111111111111111dc.
                ..cd1111111111111111dc..
                ..b11d111111111111dbc...
                .b11bcccccccccccccc.....
                ccccc...................
                `)
            game.showLongText("You know, I actually think I'm going to go back to the present.", DialogLayout.Bottom)
            game.showLongText("Though I suppose that's still the future for you!", DialogLayout.Bottom)
            game.showLongText("Thanks for fixing my time machine. Goodbye! :)", DialogLayout.Bottom)
            endGame()
        } else {
            game.showLongText("Hmm... That doesn't seem quite right.", DialogLayout.Top)
            info.setScore(knownCode)
            pause(1000)
        }
    } else {
        game.setDialogTextColor(8)
        game.setDialogFrame(img`
            ..99999999999999999999..
            .9966666666666666666699.
            996661111111111111166699
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            996661111111111111166699
            .9966666666666666666699.
            ..99999999999999999999..
            `)
        game.showLongText("Go talk to the other women. They'll help you with the passcode!", DialogLayout.Top)
        pause(1000)
    }
})
function CurieGame () {
    if (curieWin < 2) {
        if (curieWin == 0) {
            game.setDialogTextColor(2)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("Hi there! I'm Marie Curie.", DialogLayout.Top)
            game.showLongText("I was the first woman to ever win a Nobel Prize!", DialogLayout.Top)
            game.showLongText("I won them in chemistry and physics.", DialogLayout.Top)
            game.showLongText("I discovered radium and polonium and researched cancer treatment.", DialogLayout.Top)
            game.showLongText("Speaking of chemistry, I've found part of the passcode you need, but I'm facing some issues...", DialogLayout.Top)
            game.showLongText("Will you help me mix these chemicals?", DialogLayout.Top)
            game.setDialogTextColor(11)
            game.setDialogFrame(img`
                .....cccccccccccccc.....
                ...cbd111111111111dbc...
                ..cd1111111111111111dc..
                .cd111111111111111111dc.
                .b11111111111111111111b.
                cd11111111111111111111dc
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                cd11111111111111111111dc
                .b11111111111111111111b.
                .cd111111111111111111dc.
                ..cd1111111111111111dc..
                ..b11d111111111111dbc...
                .b11bcccccccccccccc.....
                ccccc...................
                `)
            game.showLongText("Of course!", DialogLayout.Bottom)
        } else {
            game.setDialogTextColor(2)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("Ready to try again?", DialogLayout.Top)
            game.showLongText("Remember-- try not to spill!", DialogLayout.Top)
        }
        clear()
        music.play(music.createSong(assets.song`curieSong`), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundImage(assets.image`curieBG`)
        pause(1000)
        game.splash("MADAME CURIE'S", "CHEMISTRY CLASS")
        game.splash("Pour the chemicals", "but don't spill!")
        game.splash("Press space when the arrow", "is in the green section!")
        game.splash("Successfully mix 10", "chemicals to win!")
        scene.setBackgroundImage(assets.image`chemTable`)
        info.setScore(0)
        info.setLife(3)
        camera = sprites.create(img`
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
            `, SpriteKind.Cam)
        camera.setPosition(0, 0)
        scene.cameraFollowSprite(camera)
        gaugeRed = sprites.create(assets.image`redGauge`, SpriteKind.Enemy)
        gaugeRed.setPosition(80, 20)
        gaugeGreen = sprites.create(assets.image`greenGuage1`, SpriteKind.Food)
        gaugeGreen.setPosition(randint(55, 105), 20)
        pour = sprites.create(img`
            ................................
            ............9999999999..........
            ......99999999999999999.........
            ....9999999999999111999.........
            ....99999999999991111999........
            ....99999999999991111999........
            ....99999999999991111199........
            ....99999999999999111199........
            ....999999999999991111999.......
            ....999999999999999111199.......
            .....99999999999999111199.......
            .....99999999999999111199.......
            .....999999999999999111999......
            .....999999999999999111199......
            ......99999999999999111199......
            ......99999999999999911199......
            ......999999999999999111999.....
            .......99999999999999111999.....
            .......99999999999999111999.....
            ........9999999999999111199.....
            ........99999999999991111999....
            ........99999999999991111999....
            .........9999999999999111999....
            .........9999999999999111999....
            ..........999999999999999999....
            ..........999999999999999999....
            ..........999999999999999999....
            ...........99999999999999999....
            ...........9999999999999999.....
            ............9999999999999.......
            .................999999.........
            ................................
            `, SpriteKind.Other)
        pour.setPosition(92, 54)
        arrow = sprites.create(assets.image`arrow`, SpriteKind.Player)
        arrow.setPosition(41, 30)
        arrow.setVelocity(50, 0)
        game2 = 2
    } else {
        game.setDialogTextColor(2)
        game.setDialogFrame(img`
            ..99999999999999999999..
            .9966666666666666666699.
            996661111111111111166699
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            996661111111111111166699
            .9966666666666666666699.
            ..99999999999999999999..
            `)
        game.showLongText("You already have my part of the passcode.", DialogLayout.Top)
        game.showLongText("I'm sure the others will have the other parts for you!", DialogLayout.Top)
        pause(1000)
    }
}
function ShelleyGame () {
    if (shelleyWin < 2) {
        if (shelleyWin == 0) {
            game.setDialogTextColor(15)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("Hello. My name is Mary Shelley.", DialogLayout.Top)
            game.showLongText("You might know me as the author of Frankenstein, the first-ever science fiction novel.", DialogLayout.Top)
            game.setDialogTextColor(11)
            game.setDialogFrame(img`
                .....cccccccccccccc.....
                ...cbd111111111111dbc...
                ..cd1111111111111111dc..
                .cd111111111111111111dc.
                .b11111111111111111111b.
                cd11111111111111111111dc
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                cd11111111111111111111dc
                .b11111111111111111111b.
                .cd111111111111111111dc.
                ..cd1111111111111111dc..
                ..b11d111111111111dbc...
                .b11bcccccccccccccc.....
                ccccc...................
                `)
            game.showLongText("Wow! Can I get your autograph?", DialogLayout.Bottom)
            game.showLongText("Oh, wait, I don't have a pen...", DialogLayout.Bottom)
            game.setDialogTextColor(15)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("You're looking for the passcode Lady Lovelace mentioned, I suppose?", DialogLayout.Top)
            game.showLongText("She and I have met, you know. Her father and I are... friends.", DialogLayout.Top)
            game.showLongText("I have a piece of the code, but first I need your help building a certain monster...", DialogLayout.Top)
            game.setDialogTextColor(11)
            game.setDialogFrame(img`
                .....cccccccccccccc.....
                ...cbd111111111111dbc...
                ..cd1111111111111111dc..
                .cd111111111111111111dc.
                .b11111111111111111111b.
                cd11111111111111111111dc
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                cd11111111111111111111dc
                .b11111111111111111111b.
                .cd111111111111111111dc.
                ..cd1111111111111111dc..
                ..b11d111111111111dbc...
                .b11bcccccccccccccc.....
                ccccc...................
                `)
            game.showLongText("Let's go!", DialogLayout.Bottom)
        } else {
            game.setDialogTextColor(15)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("Back to try again?", DialogLayout.Top)
            game.showLongText("Let's build that monster!", DialogLayout.Top)
        }
        clear()
        music.play(music.createSong(assets.song`shellySong`), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundImage(assets.image`shelleyBG`)
        pause(1000)
        game.splash("MARY SHELLEY'S", "MONSTER")
        game.splash("Find all 6 monster parts", "before time runs out!")
        game.splash("Then, bring them back", "to the entrance!")
        game2 = 1
        scene.setBackgroundImage(img`
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
            `)
        tiles.setCurrentTilemap(tilemap`level6`)
        info.setScore(0)
        fHead = sprites.create(assets.image`head`, SpriteKind.Food)
        tiles.placeOnTile(fHead, tiles.getTileLocation(9, 1))
        fBody = sprites.create(assets.image`body`, SpriteKind.Food)
        tiles.placeOnTile(fBody, tiles.getTileLocation(28, 1))
        fArm1 = sprites.create(assets.image`arm1`, SpriteKind.Food)
        tiles.placeOnTile(fArm1, tiles.getTileLocation(15, 8))
        fArm2 = sprites.create(assets.image`arm2`, SpriteKind.Food)
        tiles.placeOnTile(fArm2, tiles.getTileLocation(16, 16))
        fLeg1 = sprites.create(assets.image`leg1`, SpriteKind.Food)
        tiles.placeOnTile(fLeg1, tiles.getTileLocation(3, 12))
        fLeg2 = sprites.create(assets.image`leg2`, SpriteKind.Food)
        tiles.placeOnTile(fLeg2, tiles.getTileLocation(2, 29))
        el = sprites.create(assets.image`el`, SpriteKind.el)
        el.setKind(SpriteKind.Player)
        tiles.placeOnTile(el, tiles.getTileLocation(16, 31))
        controller.moveSprite(el)
        scene.cameraFollowSprite(el)
        info.startCountdown(90)
    } else {
        game.setDialogTextColor(15)
        game.setDialogFrame(img`
            ..99999999999999999999..
            .9966666666666666666699.
            996661111111111111166699
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            996661111111111111166699
            .9966666666666666666699.
            ..99999999999999999999..
            `)
        game.showLongText("I already gave you my part of the passcode.", DialogLayout.Top)
        game.showLongText("Go get the others' so you can send us all home.", DialogLayout.Top)
        pause(1000)
    }
}
sprites.onCreated(SpriteKind.el, function (sprite) {
    characterAnimations.loopFrames(
    sprite,
    assets.animation`elUp`,
    0,
    characterAnimations.rule(Predicate.FacingUp)
    )
    characterAnimations.loopFrames(
    sprite,
    assets.animation`elRight`,
    0,
    characterAnimations.rule(Predicate.FacingRight)
    )
    characterAnimations.loopFrames(
    sprite,
    assets.animation`elDown`,
    0,
    characterAnimations.rule(Predicate.FacingDown)
    )
    characterAnimations.loopFrames(
    sprite,
    assets.animation`elLeft`,
    0,
    characterAnimations.rule(Predicate.FacingLeft)
    )
    characterAnimations.loopFrames(
    sprite,
    assets.animation`elUpWalk`,
    200,
    characterAnimations.rule(Predicate.MovingUp)
    )
    characterAnimations.loopFrames(
    sprite,
    assets.animation`elRightWalk`,
    200,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    sprite,
    assets.animation`elDownWalk`,
    200,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    sprite,
    assets.animation`elLeftWalk`,
    200,
    characterAnimations.rule(Predicate.MovingLeft)
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    if (game2 == 3) {
        sprites.destroy(sprite)
        otherSprite.setVelocity(0, 0)
        sprites.destroy(otherSprite, effects.disintegrate, 200)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Hopper, function (sprite, otherSprite) {
    HopperGame()
    pause(1000)
})
/**
 * This game is dedicated to my mom, who is forever and always my favorite woman in STEM. I'm her biggest fan, except maybe for my dad, who has supported her throughout her career in chemical engineering in the paper industry.
 * 
 * Just because there's no wiki pages for her doesn't mean she's any less than the other women in this game. Because the truth is, all women are awesome. :)
 */
function endGame () {
    clear()
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(assets.image`time machine`)
    game.setDialogTextColor(11)
    game.setDialogFrame(img`
        .....cccccccccccccc.....
        ...cbd111111111111dbc...
        ..cd1111111111111111dc..
        .cd111111111111111111dc.
        .b11111111111111111111b.
        cd11111111111111111111dc
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        cd11111111111111111111dc
        .b11111111111111111111b.
        .cd111111111111111111dc.
        ..cd1111111111111111dc..
        ..b11d111111111111dbc...
        .b11bcccccccccccccc.....
        ccccc...................
        `)
    game.showLongText("Back in the time machine-- I hope nothing goes wrong this time!", DialogLayout.Bottom)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    pause(500)
    music.stopAllSounds()
    game.showLongText("Oh! It worked!", DialogLayout.Bottom)
    camera = sprites.create(img`
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
        `, SpriteKind.Cam)
    camera.setPosition(80, 60)
    scene.cameraFollowSprite(camera)
    music.play(music.createSong(assets.song`homeSong`), music.PlaybackMode.LoopingInBackground)
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccc1111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111cccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccc111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111ccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccc111111cc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111cc11ccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccc111111111c11111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc111111111c11111ccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccc1111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111111111ccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccc1111111111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111111111111ccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccc11111111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc11111111111111111111cccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccc1111111111111111111ccc11cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111111111111ccc11ccccccccccccccccccccccccccccccccccccc
        ccccccccccccc11119111111111111111111cc11111cccccccccccccccccccccccccccccccccccccccccccccccccccc11119111111111111111111cc11111ccccccccccccccccccccccccccccccccccc
        cccccccccccc11111191111111111111111ccc11111ccccccccccccccccccccccccccccccccccccccccccccccccccc11111191111111111111111ccc11111ccccccccccccccccccccccccccccccccccc
        cccccccccccc11111111111111111111119111111111cccccccccccccccccccccccccccccccccccccccccccccccccc11111111111111111111119111111111cccccccccccccccccccccccccccccccccc
        cccccccccccc11111111111111111111111111111111cccccccccccccccccccccccccccccccccccccccccccccccccc11111111111111111111111111111111cccccccccccccccccccccccccccccccccc
        ccccccccccccc1111111111111111111111111111111ccccccccccccccccccccccccccccccccccccccccccccccccccc1111111111111111111111111111111cccccccccccccccccccccccccccccccccc
        cc111cccc1111911111111111111111111111111111cc11ccccccccccccc1111cccccccccccccccccccc111cccc1111911111111111111111111111111111cc11ccccccccccccc1111cccccccccccccc
        c11111cc11111111111111111111111111111111111c1111ccccccccccc111111cccccccccccccccccc11111cc11111111111111111111111111111111111c1111ccccccccccc111111ccccccccccccc
        c11111c111111111111111111111111111111111111c1111ccccccccccc111111c111cccccccccccccc11111c111111111111111111111111111111111111c1111ccccccccccc111111c111ccccccccc
        cc1111111111111111111111111111111111111111111111ccccccccccccc111111111cccccccccccccc1111111111111111111111111111111111111111111111ccccccccccccc111111111cccccccc
        c1111111111111111111111111111111111111111111111ccccccccc1111c111111111ccccccccccccc1111111111111111111111111111111111111111111111ccccccccc1111c111111111cccccccc
        111111111111111111111111111111111111111111111111ccccccc11111111111111cccccccccc1cc111111111dd1111111111111111111111111111111111111ccccccc11111111111111ccccccccc
        1111111111111111111111111111111111111111111111111c111cc111111111111111111ccccccddd111111111ddd1111111111111111111111111111111111111c111cc111111111111111111ccccc
        11111111111111111111111111111111111111111111111111111111111111111111111111cccc1ddd111111111ddd11111111111111111111111111111111111111111111111111111111111111cccc
        11111111111111111111111111111111111111111111111111111111111111111111111111cccddddddd111111ddddd1111111111111111111111111111111111111111111111111111111111111cccc
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
        1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
        111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
        11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
        11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
        11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
        11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
        d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
        dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
        dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
        dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
        ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd1199ddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11dddddd9ddddddd11999ddd1dd
        ddddd1dddddddddddddddddddd1dddddd1ddddddddd999ddddddddd999dddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1dddddddddd99ddddddddd999ddd1dd
        ddddd1ddddddddddddddddddddddddddd1ddddddddd999ddddddddd999dddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1dddddddddd99ddddddddd999dddddd
        ddddd1ddddddddddddddddddddddddddd1ddddddd9999999dddddd99999ddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1dddddd9999999ddddd99999ddddd
        ddddd999999999ddddddddddddddddddd1ddddddd9999999dddddd99999ddddddddddddddddddddddddddd1dddddddddddddd9999999999dddddddddddddddddd1dddddddd9999999ddddd99999ddddd
        ddddd999999999ddddddddddddddddddd1ddddddd9999999dddddd99999ddddddddddddddddddddddddddd1dddddddddddddd9999999999dddddddddddddddddd1dddddddd9999999ddddd99999ddddd
        ddddd9dd999999ddddddddddddddddddd1ddddddd9dd9999ddddd9999999dd111ddddddddddddddd99dddd1dddddddddddddd99d9d99999dddddddddddddddddd1dddddddd9999999dddd9999999911d
        ddddd9999999d9ddddddddddddddddddd1ddddddd9999999ddddd9999999ddd11dddddddddddddd9999ddd1dddddddddddddd999999dd99dddddddddddddddddd1dddddddd9999999dddd99999999ddd
        ddddd999999999dddddddddd9dddddddd99999ddd9d99999ddddd9999999ddddddddddd1ddddd999999ddd1dddddddddddddd9999999999ddddddddddddddddddd9999dddd999d999dddd99999999ddd
        ddddd999999999ddddddddd99dddddddd99999ddd9999999ddddd9999999dd1dddddddddddddd999d9dddddd99ddddddddddd9999d99999dddddddd99ddddddddd9999dddd999d999dddd99999999d1d
        ddddd9999999d9ddddddddd99dddddddd99999ddd9999999ddddd9999999dd111dddddddddddd999999ddddd99ddddddddddd9999999d99dddddddd99dddddddd999999ddd9999999dddd9999999911d
        ddddd999999999dd999999d99dddddddd99999ddd9999999ddddd9999999ddddddddd991ddddd999d9ddddd999ddddddddddd9999999999d999999999dddddddd999999ddd999d999dddd99999999ddd
        ddddd9999999d9dd9dd999d99ddddddddd99d99dd9999999ddd9999999999d99dddd9999999999999d9dddd9999dddddddddd999999dd99d9dd999999dddddddd9999999dd9999999dd9999999999999
        ddddd999999999dd9999d9d99dddddddd999999dd99d9999ddd9999999999999dddd99d999d99999999dddd9999dddddddddd9999999999d9999d9999dddddddd9999999dd9999d99dd9999999999999
        ddddd999999999dd9999d9999dddddddd999999dd9999999ddd99999999999d9dddd9999d9dd9999999dddd9999dddddddddd9999999999d9999d9999dddddddd9999999dd9999999dd9999999999999
        d99d99999999999d9dd999999dddddddd999999dd9999999ddd9999999999999dddd9999999999999999dd999999ddd9dd9999999999999d9dd999999dddddddd9999999dd9999999dd9999999999999
        999999999999999d999999999dd9dd9dd999999dd9999999ddd99999999999d9dddd9999999999999999dd999999ddd9999999999999999d999999999ddddd9dd9999999dd9999999dd9999999999999
        99dd9999999999999dddd9999999d999dd99d99dd9999999ddd999999999999999d999d9999999999999dd9999999ddd9dd99999999999999dd9d9999d99d999d9999999dd9999999dd9999999999999
        9999999999999999999999999999d999d999999dd9999999ddd999999999999999d99999999999999999999999999d999999999999999999999999999d99d99999999999dd9999d99dd9999999999999
        999999999999999999999999999999999999999999999999ddd999999999999999d99999999999999999999999999d999999999999999999999999999999999999999999999999999dd9999999999999
        99999999999999999999999999999999999999999999999999d999999999999999d99999999999999999999999999d9d99999999999999999999999999999999999999999999999999d9999999999999
        99999999999999999999999999999999999999999999999999d999999999999999d99999999999999999999999999d99999999999999999999999999999999d9999999999999999999d9999999999999
        99999999999999999999999999999999999999999999999999d999999999999999d99999999999999999999999999d9999999999999999999999999999999999999999999999999999d9999999999999
        99999999999999999999999999ddd999999999999999999999d999999999999999d99999999999999999999999999d999999999999999999999999999dd9d9d999999999999999999999999999999999
        999999999999999999999999999dd999999999999999999999d999999999999999d99999999999999999999999999d999999999999999999999999999999d9d999999999999999999999999999999999
        99999999999999999999999999999999999d99999999999999d999999999999999999999999999999999999999999999999999999999999999999999999999d9999d9999999999999999999999999999
        99999999999999999999999999d99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999d9999999999999999999999999999999999999
        99999999999999999999999999ddd99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd9d99999999999999999999999999999999999
        99999999999999999999999999999999999d9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999e9999999999999999e9999999999999999999999e9999999999999999e9999999999999999999999e9999999999999999e9999999999999999999999e9999999999999999e99999
        999999e999ee99999ee9999e999e9999e9ee999e999999e999ee99999ee9999e999e9999e9ee999e999999e999ee99999ee9999e999e9999e9ee999e999999e999ee99999ee9999e999e9999e9ee999e
        99e999ee9ee99e999ee999ee999ee999e99ee9ee99e999ee9ee99e999ee999ee999ee999e99ee9ee99e999ee9ee99e999ee999ee999ee999e99ee9ee99e999ee9ee99e999ee999ee999ee999e99ee9ee
        99ee99ee9ee99ee999ee9ee9999ee9e9ee9eeee999ee99ee9ee99ee999ee9ee9999ee9e9ee9eeee999ee99ee9ee99ee999ee9ee9999ee9e9ee9eeee999ee99ee9ee99ee999ee9ee9999ee9e9ee9eeeeb
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        `)
    house = sprites.create(img`
        ....................62622626....................
        .................22266622626222.................
        ..............22262262622666226222..............
        ...........62262266662622626666226226...........
        ........66662262262262622626226226226666........
        .....22262262266662262622626226666226226222.....
        ...226666226226226226662266622622622622666622...
        d6622622622666622622626226262262266662262262266d
        c6c666226226226226226262262622622622622622666c6c
        dcc226226666226226666262262666622622666622622ccd
        dcc226226226226666226262262622666622622622622ccd
        d6622666622622622622666226662262262262266662266d
        c6c226226226666226226262262622622666622622622c6c
        dcc666226226226226226262262622622622622622666ccd
        dcc226226666226226226262262622622622666622622ccd
        d6622622622622622666626226266662262262262262266d
        c6c226666226226666226662266622666622622666622c6c
        dcc226226226666226226262262622622666622622622ccd
        dcc666226226226226226262262622622622622622666ccd
        d6622622666622622622626226262262262266662262266d
        c6c226226226226226226662266622622622622622622c6c
        dcc2266662262262266666cccc6666622622622666622ccd
        dcc2262262262266666cccccccccc6666622622622622ccd
        d666662262266666ccccc666666ccccc666662262266666d
        c6c2262266666ccccc66cddddddc66ccccc6666622622c6c
        dcc2262266ccccc66cddddddddddddc66ccccc6622622ccd
        dcc2266cccc666cddddddddddddddddddc666cccc6622ccd
        d666cccc666cdddc66cccccccccccc66cdddc666cccc666d
        66666666ccccccc6cddddddddddddddc6ccccccc66666666
        cddddddddddddc6dddddddddddddddddd6cddddddddddddc
        cc6cddddddddd6cd1111111111111111dc6dddddddddc6cc
        ccc66666666666d1cccccccccccccccc1d66666666666ccc
        ccccddddddddd611c33333333333333c116dddddddddcccc
        ccc6aaaaaaa6d61c3767767767767763c16d6aaaaaaa6ccc
        ccc666666666d61c3767767767767763c16d666666666ccc
        ccc677777776d6ccd767cddddddc7763cc6d677777776ccc
        ccc67dd7dd76d6ccd76dddddddddd763cc6d67dd7dd76ccc
        ccc67cc7cc76d6ccd7cddddddddddc63cc6d67cc7cc76ccc
        ccc677777776d6ccd7cccccccccccc63cc6d677777776ccc
        6cc67dd7dd76d6cc3767767767767763cc6d67dd7dd76cc6
        6cc67cc7cc76d6cc3767767767767763cc6d67cc7cc76cc6
        66ccccccccccd6cc37677677677d3333cc6dcccccccccc66
        .6ccddddddddd6cc37677677677dddd3cc6dddddddddcc6.
        ..6cdcccdcccd6ccd7677677677d77d3cc6dcccdcccdc6..
        ...6dcccdcccd6ccd76776776776dd33cc6dcccdcccd6...
        ....cdddddddd6ccd767767767767763cc6ddddddddc....
        .....cdcccddd6ccd767767767767763cc6dddcccdc.....
        ......c666ccc6cc3767767767767763cc6ccc666c......
        `, SpriteKind.Player)
    house.setPosition(41, 80)
    mom = sprites.create(assets.image`mom`, SpriteKind.Mom)
    mom.setPosition(46, 100)
    timeMachine = sprites.create(assets.image`miniTimeMachine`, SpriteKind.Other)
    timeMachine.setPosition(140, 90)
    el = sprites.create(assets.image`el`, SpriteKind.Player)
    el.setPosition(124, 100)
    pause(1000)
    game.showLongText("Mom! I made it back home!", DialogLayout.Bottom)
    game.setDialogTextColor(6)
    game.setDialogFrame(img`
        ..99999999999999999999..
        .9966666666666666666699.
        996661111111111111166699
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        996661111111111111166699
        .9966666666666666666699.
        ..99999999999999999999..
        `)
    game.showLongText("Welcome back sweetie! How was the future?", DialogLayout.Top)
    game.setDialogTextColor(11)
    game.setDialogFrame(img`
        .....cccccccccccccc.....
        ...cbd111111111111dbc...
        ..cd1111111111111111dc..
        .cd111111111111111111dc.
        .b11111111111111111111b.
        cd11111111111111111111dc
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        cd11111111111111111111dc
        .b11111111111111111111b.
        .cd111111111111111111dc.
        ..cd1111111111111111dc..
        ..b11d111111111111dbc...
        .b11bcccccccccccccc.....
        ccccc...................
        `)
    game.showLongText("Actually, I went to the past. You wouldn't believe what happened.....", DialogLayout.Bottom)
    pause(1000)
    game.setDialogTextColor(6)
    game.setDialogFrame(img`
        ..99999999999999999999..
        .9966666666666666666699.
        996661111111111111166699
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        996661111111111111166699
        .9966666666666666666699.
        ..99999999999999999999..
        `)
    game.showLongText("That sounds amazing! Who was the coolest person you saw today, then?", DialogLayout.Top)
    sprites.destroy(timeMachine)
    sprites.destroy(house)
    sprites.destroy(mom)
    sprites.destroy(el)
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccc777777777777777777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccc7777777777777777777777776777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccc777777777777777777777777766777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccc7777777777777777777777777776777777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccc77777777777777777777777777777677777777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccc7777777777777777777777777777767777777777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccc777777777777777777777777777777677777777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccc77777777777777777777777777777776777777777777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccc777777777777777777777777777777767777777777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccc777777777777777777777777777777767777777777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccc77777777777777777777777777777777677777777777777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccc777777777777777777777777777777777677777777777777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccc7777777777777777777777777777777776777777777777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccc77777777777777777777777777777777766777777777777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccc777777777777777777777777777aaaaaa777777777777777777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccc7777777777777777777777777aaaaaaaaaaaaa77777777777777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccc7777777777777777777777aaaaaaa55555555aa77777777777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc777777777777777777777aaaaaaa55555555555aaa777777777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc777777777777777777aaaaaaaa55555555555555aaa777777777777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccc77777777777777777aaaaaaa555555555555555555aaa7777777777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccc77777777777777777aaaaaa55555555555555555555aaaa777777777777ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccc7777777777777777aaaaaa5555555555555555555555aaaa777777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccc777777777777777aaaaa555555555555555555555555aaaa777777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccc77777777777777aaaaa55555555555555555555555555aaaa77777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccc7777777777777aaaaa555555555555555555555555555aaaa77777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc77777777777777aaaa55555555555555555555555555555aaaa7777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc7777777777777aaaa555555555555555555555555555555aaaa7777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc7777777777777aaa5555577777755555555555555555555aaa77777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc777777777777aaa555555555577755555555555555555555a666777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc777777777777aa5555555555557775555555555555555555a666777777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccc777777777777555555555555555775555555555555555555a666677777777cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc7777777777777555555665555555555555555557777755555a666666677766cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc7777777777775555555666555555555555555577777777775a666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc7777777777765555555666655555555555555555555555555a666666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc77777777776655555555666666655555555555555bbbbbbbbbbbb666666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc777777777666555555555666666555555bbbbbbbbbbbbbbbbbbbbbbb666666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc77777777766555555555555566555555bbbbbbbbbbb2bbbbbbbbbbbbbb6666cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc77777777666555555555555555555555bbbbbbbbbb22bbbbbbbbbbbbaaaa66cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc77777777666a5555555555555555555bbbbbbbbbb22bbbbbbbbbbbbaaaaa66cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc77777776666a555555555555555555bbbbb2222222bbbbbbbbbbbbbaaaaabbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc77777776666a555555555555555555bbbbbbbbbb2bbbbbaaabbbbaaaaaabbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc77777776666a55555555555555555bbbbbbbbbbbbbbbbbaaaaaaaaaaaabbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc7777777666aaa555555555555555bbbbbbbbbbbbbbbbbaaaaaaaaaaaabbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc7777776666aaa555555555555555bbbbbbbbbbbbbbbbaaaaaaaaaaaabbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc7777776666aaa55555555555555bbbbbbbbbbbbbbbaaaaaaaaaaaabbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc7777766666aaa5555555555555bbaaaabbbbbbbaaaaaaaaabbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccc7777766666aaa5555555555555bbaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc77777666666aaaa55555565555bbbaaaaaaaaaaaaaaaaa22bbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc77776666666aaaa55555566555bbbbbaaaaaaaaaaabbbb22bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc77666666666aaaaa5555556665bbbbbbbbbbbbbbbbbbbb225bbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc66666666666aaaaa5555555566bbbbbbbbbbbbbbbbbbbb22555bbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc66666666666aaaaaa55555555bbbbbbbbbbbbbbbbbbbbb2255555bbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccc66666666666aaaaaaa5555555bbbbbbbbb22bbbbbbbbb222555555bbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccd
        cccccccccccccccccccccccccccccccc666666666666aaaaaaaa555555bbbbbbbb2222bbbbbbbb2225555555bbbbbbbbbbabbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccccccd
        cccccccccccccccccccccccccccccccc66666666888888aaaaaaaaa555bbbbbbb22222bbbbbbbb22255555555bbbbbbbbbabbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccccddd
        cccccccccccccccccccccccccccccccc666666688888888aaaaaaaaaaabbbbbb222222bbbbbbbb222555555555bbbbbbbbabbbbbbbccccccccccccccccccccccccccccccccccccccccccccccccccdddd
        ccccccccccccccccccccccccccccccc666666888888888888aaaaaaaaabbbbbb222222bbbbbbbb22255555555555bbbbbbabbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccddddd
        ccccccccccccccccccccccccccccccc66666888888888888888aaaaaaabbbbbb222255bbbbbbbb222555555555555bbbbaabbbbbbbbccccccccccccccccccccccccccccccccccccccccccccccddddddd
        ccccccccccccccccccccccccccccccc666688888888888888888aaaaaabbbbb2222555bbbbbbbb222555555555555aaaaaaabbbbbbbcccccccccccccccccccccccccccccccccccccccccccccdddddddd
        cccccccccccccccccccccccc555555566688866688888888888888aaaabbbbb2225555bbbbbbb22255566555555555aaaaaabbbbbbbbcccccccccccccccccccccccccccccccccccccccccccddddddddd
        ccccccccccccccccccccccc55555555588888688888888888888888aaabbbbb2225555bbbbbbb22255666555555555aaaaaabbbbbbb2ccccccccccccccccccccccccccccccccccccccccccdddddddddd
        ccccccccccccccccccccccc5555555558888668888888888888888888abbbbb2225555bbbbbb222255665555555555aaaaaabbbbbbb22ccccccccccccccccccccccccccccccccccccccccddddddddddd
        cccccccccccccccccccccc55555aaaaa88886888888888888888888888bbbbb22555555bbbbb222556655555555555aaaaaabbbbbbb222ccccccccccccccccccccccccccccccccccccccdddddddddddd
        cccccccccccccccccccccc555aaa555588886888888888888888888888bbbbb22555555bbbb2222556655555555555aaaaaabbbbbb2222cccccccccccccccccccccccccccccccccccccddddddddddddd
        cccccccccccccccccccccc555555555588886888888888888888888888bbbbb22555555bbb22225566666666655555aaaaaabbbbbb22222cccccccccccccccccccccccccccccccccccdddddddddddddd
        ccccccccccccccccccccc5555555555588886888888888888888888888bbbbb26666665bbb22255566666665555555aaaaaabbbbb2222222cccccccccccccccccccccccccccccccccddddddddddddddd
        ccccccccccccccccccccc55555555aa888886888888888888888888888bbbbb22555666bb222255555555555aa5555aaaaaaabbb22222222ccccccccccccccccccccccccccccccccdddddddddddddddd
        ccccccccccccccccccccc55aaaaaaa5888886888888888888888888888bbbbb2255556662222555555555aaaaa5555aaaaaaabbb222222222ccccccccccccccccccccccccccccccddddddddddddddddd
        ccccccccccccccccccccc55a5555558888886888888888888888888888bbbbb22556665522225555555aaaaaaa5555aaaaaaabb22222222222cccccccccccccccccccccccccccddddddddddddddddddd
        cccccccccccccccccccc55555555558888886888888888888888888888bbbbb2256665555555555555555555555555aaaaaaa2222222222222ccccccccccccccccccccccccccdddddddddddddddddddd
        cccccccccccccccccccc55555aaaa88888886888888888888888888888bbbbb225655aa55555555aa555555555555aaaaaaaa22222222222222cccccccccccccccccccccccdddddddddddddddddddddd
        cccccccccccccccccccc55aaaa55888888886888888888888888888888bbbbb225aaaa555a555555a555555555555aaaaaaaa222222222222222cccccccccccccccccccccddddddddddddddddddddddd
        cccccccccccccccccccc555555588888888868888888888888888888888bbbb225aaaa555a5555555555555555555aaaaaaaa222222222222222cccccccccccccccccccddddddddddddddddddddddddd
        ddccccccccccccccccdd555555888888888868888888888888888888888bbbb2285555555a55555a555555555555aaaaaaaaa2222222222222222ccccccccccccddddddddddddddddddddddddddddddd
        dddddddccccccddddddd5555aa888888888868888888888888888888888bbbb2288555555a5555aa555566555555aaaaaaaffffffffffff222222ddddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddaaaaa8888888888688888888888888888888888bbbb288855555aaaaaa555566655555aaaaaaaffffffffffffff222222dddddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddaaaaaaaa888888888668888888888888888888888bbbb28888555555555555666165555aaaaaafffffffffffffffff222222ddddddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddaaaaaaaaa888888888868888888888888888888888bbbb28888855555555566611665555aaafffffffffffffffffffff222222dddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddaaaaaaa5aaa888888888688888888888888888888888bbbb88888888555556611166555aaafffffffffffffffffffffffff22222ddddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddaaaa5555555888888888668888888888888888888888bbbb8888888888555566666555aafffffffffffffffffffffffffff2222222ddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddaaa555555555558888888868888888888888888888888888688888888888888555555aaffffffffffffffffffffffffffffff22222222ddddddddddddddddddddddddddddddddddd
        dddddddddddddddaaa5555555555555888888868888888888888888888888888688888888888888888888affffffffffffffffffffffffffffffff22222222dddddddddddddddddddddddddddddddddd
        dddddddddddddddaa55555555555555888888866888888885555555555555888668888888888888888888fffffffffffffffffffffffffffffffffff2222222ddddddddddddddddddddddddddddddddd
        dddddddddddddddaa555555555555555588888868888555555555555555555888688888888888888888ffffffffffffffffffffffffffffffffffffff222222ddddddddddddddddddddddddddddddddd
        ddddddddddddddda555555555555555558888886685555555555555555555555868888888888888fffffffffffffffffffffffffffffffffffffffffff22222ddddddddddddddddddddddddddddddddd
        ddddddddddddddda55555555555555555588888865555555555555555555555556888888888888ffffffffffffffffffffffffffffffffffffffffffff22222ddddddddddddddddddddddddddddddddd
        ddddddddddddddd5555555555555555555588888855555555555555555555555588888888888ffffffffffffffffffffffffffffffffffffffffffffff22222ddddddddddddddddddddddddddddddddd
        ddddddddddddddd55555555555555555555588888555555555555555555555555588888888ffffffffffffffffffffffffffffffffffffffffffffffff22222ddddddddddddddddddddddddddddddddd
        dddddddddddddddd555555555555555555558888855555555555555555555555555888888fffffffffffffffffffffffffffffffffffffffffffffffff22222ddddddddddddddddddddddddddddddddd
        dddddddddddddddd5555555555555555555558888555555555555555555555555558888aafffffffffffffffffffffffffffffffffffffffffffffffffff5555dddddddddddddddddddddddddddddddd
        ddddddddddddddddd555555555555555555558888855555555555555555555555555855aafffffffffffffffffffffffffffffffffffffffffffffffff555555dddddddddddddddddddddddddddddddd
        ddddddddddddddddd5555555555555555555558888555555555555555555555555555a5aaaffffffffffffffffffffffffffffffffffffffffffffffff555555dddddddddddddddddddddddddddddddd
        ddddddddddddddddd5555555555555555555555888555555555555555555555555555a55aaafffffffffffffffffffffffffffffffffffffffffffffff555555dddddddddddddddddddddddddddddddd
        dddddddddddddddddd555555555555555555555588855555555555555555555555555aa55aaaffffffffffffffffffffffffffffffffffffffffffffff555555dddddddddddddddddddddddddddddddd
        dddddddddddddddddd5555555555555555555555588555555555555555555555555555a55aaafffffffffffffffffffffffffffffffffffffffffffff5555555dddddddddddddddddddddddddddddddd
        ddddddddddddddddddd555555555555555555555588855555555555555555555555555a555aaaffffffffffffffffffffffffffffffffffffffffff555555555dddddddddddddddddddddddddddddddd
        ddddddddddddddddddd555555555555555555555558885555555555555555555555555a5555aafffffffffffffffffffffffffffffffffffffffff5555555555dddddddddddddddddddddddddddddddd
        ddddddddddddddddddd555555555555555555555555aaa555555555555555555555555aa5555aaafffffffffffffffffffffffffffffffffffff555555555555dddddddddddddddddddddddddddddddd
        dddddddddddddddddd8885555555555555555555555aaa5555555555555555555555555aa5555aaaffffffffffffffffffffffffffffffffff55555555555555dddddddddddddddddddddddddddddddd
        dddddddddddddddddd8885555555555555555555555aaaa555555555555555555555555aaa55555aafffffffffffffffffffffffffffffff5555555555555555dddddddddddddddddddddddddddddddd
        dddddddddddddddddd88885555555555555555555555aaa555555555555555555555555aaa555555aaffffffffffffffffffffffffffff555555555555555555dddddddddddddddddddddddddddddddd
        dddddddddddddddddd88888555555555555555555555aaaa55555555555555555555555aaaa555555aaffffffffffffffffffffffffff5555555555555555555dddddddddddddddddddddddddddddddd
        dddddddddddddddddd88888555555555555555555555aaaaa5555555555555555555555aaaaa55555aafffffffffffffffffffffff5555555555555555555555dddddddddddddddddddddddddddddddd
        dddddddddddddddddd88888855555555555555555555aaaaa55555555555555555555555aaaaa55555aaffffffffffffffffffff555555555555555555555555dddddddddddddddddddddddddddddddd
        dddddddddddddddddd88888855555555555555555555aaaaaa5555555555555555555555aaaaaa555aaafffffffffffffffff5555555555555555aaaa5555555dddddddddddddddddddddddddddddddd
        ddddddddddddddddddd8888885555555555555555555aaaaaaa555555555555555555555aaaaaaaaaaaaaffffffffffff5555555555555555555aaaaaa555555dddddddddddddddddddddddddddddddd
        ddddddddddddddddddd8888888555555555555555555aaaaaaa5555555555555555555555aaaaaaaaaaaafffffffff55555555555555555555aaaaaaaaaaa555dddddddddddddddddddddddddddddddd
        ddddddddddddddddddd8888888555555555555555555aaaaaaaa555555555555555555555aaaaaaaaaaaaaffffff555555555555555555555aaaaaafaaaaaa5ddddddddddddddddddddddddddddddddd
        dddddddddddddddddddd888888555555555555555555aaaaaaaaa555555555555555555555aaaaaaaaaaaafff55555555555555555555555aaaaaafffaaaaddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddd888888855555555555555555aaaaaaaaaa55555555555555555555aaaaaaaaaffff555555555555555555555555aaaaaafffffdddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddd8888885555555555555555aaaaaaaaaaaa55555555555555555555aaaafffffff555555555555555555555555aaaaafffffffdddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddd8888888555555555555555aaaaaaaaaaaaa5555555555555555555ffffffff55555555555555555555555555aaaaaffffffffdddddddddddddddddddddddddddddddddddddd
        ddddddddddddddddddddd8888888885555555555555aaaaaaaaaaaaa5555555555555555555555555555555555555555555555555555aaaaffffffffffdddddddddddddddddddddddddddddddddddddd
        dddddddddddddddddddddd888888885555555555555aaaaaaaaaaaaaa55555555555555555555555555555555555555555555555555aaaafffffffffffdddddddddddddddddddddddddddddddddddddd
        `)
    pause(1000)
    game.setDialogTextColor(11)
    game.setDialogFrame(img`
        .....cccccccccccccc.....
        ...cbd111111111111dbc...
        ..cd1111111111111111dc..
        .cd111111111111111111dc.
        .b11111111111111111111b.
        cd11111111111111111111dc
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        cd11111111111111111111dc
        .b11111111111111111111b.
        .cd111111111111111111dc.
        ..cd1111111111111111dc..
        ..b11d111111111111dbc...
        .b11bcccccccccccccc.....
        ccccc...................
        `)
    game.showLongText("You, of course!", DialogLayout.Bottom)
    game.showLongText("I love you, Mom!", DialogLayout.Bottom)
    pause(1000)
    game.splash("THE END", "Thanks for playing ! <3")
    effects.hearts.startScreenEffect()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameover == 0) {
        if (game2 == 3) {
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            projectile = sprites.createProjectileFromSprite(assets.image`star`, shooter, vx[currentDir], vy[currentDir])
        }
        if (game2 == 2) {
            nextV = Math.abs(arrow.vx)
            if (arrow.overlapsWith(gaugeGreen)) {
                arrow.setVelocity(0, 0)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                animation.runImageAnimation(
                pour,
                [img`
                    ................................
                    ................................
                    ................................
                    ................................
                    ................................
                    ........99999999................
                    ........99999999................
                    ........999911999999............
                    ........999911999999............
                    ........999911999999............
                    ......9999991111999999..........
                    ......9999991111999999..........
                    ....99999999991111119999........
                    ....99999999991111119999........
                    ....99999999991111119999........
                    ....9999999999999911119999......
                    ....9999999999999911119999......
                    ......9999999999999911119999....
                    ......9999999999999911119999....
                    ......9999999999999911119999....
                    ........9999999999999911119999..
                    ........9999999999999911119999..
                    ..........99999999999999999999..
                    ..........99999999999999999999..
                    ..........99999999999999999999..
                    ..............9999999999999999..
                    ..............9999999999999999..
                    ................99999999999999..
                    ................99999999999999..
                    ................99999999999999..
                    ..................9999999999....
                    ..................9999999999....
                    `,img`
                    ................................
                    ................................
                    ................................
                    ................................
                    ................................
                    ................................
                    ....9999999999999...............
                    ....9999999999999...............
                    ....9999111111111999999999......
                    ....9999111111111999999999......
                    ....9999111111111999999999......
                    ....99999999999111111111119999..
                    ....99999999999111111111119999..
                    ....9999999999999999999111119999
                    ....9999999999999999999111119999
                    ..889999999999999999999999999999
                    ..889999999999999999999999999999
                    88889999999999999999999999999999
                    88889999999999999999999999999999
                    88889999999999999999999999999999
                    88889999999999999999999999999999
                    88889999999999999999999999999999
                    ..........99999999999999999999..
                    ..........99999999999999999999..
                    ................................
                    ................................
                    ................................
                    ................................
                    ................................
                    ................................
                    ................................
                    ................................
                    `,img`
                    ................................
                    ................................
                    ................................
                    ..................9999999999....
                    ..................9999999999....
                    ............999999111199999999..
                    ............999999111199999999..
                    ........9999111111119999999999..
                    ........9999111111119999999999..
                    ......991111119999999999999999..
                    ......991111119999999999999999..
                    ......999999999999999999999999..
                    ......999999999999999999999999..
                    ......889999999999999999999999..
                    ......889999999999999999999999..
                    ......889999999999999999999999..
                    ......88889999999999999999......
                    ......88889999999999999999......
                    ..88..8888999999................
                    ..88..8888999999................
                    ......888888....................
                    ......888888....................
                    ......888888....................
                    ......888888....................
                    ....88888888....................
                    ....88888888....................
                    ....88888888..88................
                    ....88888888..88................
                    ....8888........................
                    ....8888........................
                    ................................
                    ................................
                    `],
                200,
                false
                )
                pause(650)
                pour.setImage(img`
                    ................................
                    ............9999999999..........
                    ......99999999999999999.........
                    ....9999999999999111999.........
                    ....99999999999991111999........
                    ....99999999999991111999........
                    ....99999999999991111199........
                    ....99999999999999111199........
                    ....999999999999991111999.......
                    ....999999999999999111199.......
                    .....99999999999999111199.......
                    .....99999999999999111199.......
                    .....999999999999999111999......
                    .....999999999999999111199......
                    ......99999999999999111199......
                    ......99999999999999911199......
                    ......999999999999999111999.....
                    .......99999999999999111999.....
                    .......99999999999999111999.....
                    ........9999999999999111199.....
                    ........99999999999991111999....
                    ........99999999999991111999....
                    .........9999999999999111999....
                    .........9999999999999111999....
                    ..........999999999999999999....
                    ..........999999999999999999....
                    ..........999999999999999999....
                    ...........99999999999999999....
                    ...........9999999999999999.....
                    ............9999999999999.......
                    .................999999.........
                    ................................
                    `)
                info.changeScoreBy(1)
                if (info.score() < 10) {
                    arrow.setVelocity(nextV + 10, 0)
                }
            } else {
                arrow.setVelocity(0, 0)
                pour.setImage(img`
                    ................................
                    ............9999999999..........
                    ......99999999999999999.........
                    ....988999999999988888888.......
                    ...88888999999999888888888......
                    888888999999999998888888888.....
                    888889999999999991888888888.....
                    888889999999999999188888888.....
                    .888999989999999991188889.......
                    .88.999989999999999111199.......
                    .....99889999999999111199.......
                    .....98888999999999111199.......
                    .....988889999999999111999......
                    .....888889999999999111199......
                    .....888889999999999111199......
                    ....8888899999999999911199......
                    ....88889999999999999111999.....
                    .......99999999999999111999.....
                    .......99999999999999111999.....
                    ........9999999999999111199.....
                    ........99999999999991111999....
                    ........99999999999991111999....
                    .........9999999999999111999....
                    .........9999999999999111999....
                    ..........999999999999999999....
                    ..........999999999999999999....
                    ..........999999999999999999....
                    ...........99999999999999999....
                    ...........9999999999999999.....
                    ............9999999999999.......
                    .................999999.........
                    ................................
                    `)
                pause(650)
                pour.setImage(img`
                    ................................
                    ............9999999999..........
                    ......99999999999999999.........
                    ....9999999999999111999.........
                    ....99999999999991111999........
                    ....99999999999991111999........
                    ....99999999999991111199........
                    ....99999999999999111199........
                    ....999999999999991111999.......
                    ....999999999999999111199.......
                    .....99999999999999111199.......
                    .....99999999999999111199.......
                    .....999999999999999111999......
                    .....999999999999999111199......
                    ......99999999999999111199......
                    ......99999999999999911199......
                    ......999999999999999111999.....
                    .......99999999999999111999.....
                    .......99999999999999111999.....
                    ........9999999999999111199.....
                    ........99999999999991111999....
                    ........99999999999991111999....
                    .........9999999999999111999....
                    .........9999999999999111999....
                    ..........999999999999999999....
                    ..........999999999999999999....
                    ..........999999999999999999....
                    ...........99999999999999999....
                    ...........9999999999999999.....
                    ............9999999999999.......
                    .................999999.........
                    ................................
                    `)
                info.changeLifeBy(-1)
                arrow.setVelocity(nextV, 0)
            }
            gaugeGreen.setPosition(randint(55, 105), 20)
            arrow.setPosition(41, 30)
        }
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    if (game2 < 2) {
        characterAnimations.setCharacterState(el, characterAnimations.rule(Predicate.FacingDown))
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game2 == 3) {
        if (currentDir > 0) {
            currentDir += -1
        } else {
            currentDir = 7
        }
        shooter.setImage(shootDirections[currentDir])
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (game2 < 2) {
        characterAnimations.setCharacterState(el, characterAnimations.rule(Predicate.FacingRight))
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (game2 < 2) {
        characterAnimations.setCharacterState(el, characterAnimations.rule(Predicate.FacingLeft))
    }
})
info.onCountdownEnd(function () {
    if (game2 == 1) {
        shelleyWin = 1
        gameover = 1
        shelleyFails += 1
    }
    if (game2 == 3) {
        hopperWin = 2
        gameover = 1
    }
    if (game2 == 4) {
        johnsonWin = 2
        gameover = 1
    }
})
info.onScore(10, function () {
    if (game2 == 2) {
        curieWin = 2
        gameover = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Monster, function (sprite, otherSprite) {
    game.setDialogTextColor(14)
    game.setDialogFrame(img`
        ..99999999999999999999..
        .9966666666666666666699.
        996661111111111111166699
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        996661111111111111166699
        .9966666666666666666699.
        ..99999999999999999999..
        `)
    game.showLongText("Contrary to popular belief, my speech is actually quite eloquent.", DialogLayout.Top)
    game.showLongText("I studied extensive literature in an effort to integrate into human society.", DialogLayout.Top)
    game.showLongText("Unfortunately, even Victor, my creator, was terrified of me.", DialogLayout.Top)
    game.setDialogTextColor(11)
    game.setDialogFrame(img`
        .....cccccccccccccc.....
        ...cbd111111111111dbc...
        ..cd1111111111111111dc..
        .cd111111111111111111dc.
        .b11111111111111111111b.
        cd11111111111111111111dc
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        c1111111111111111111111c
        cd11111111111111111111dc
        .b11111111111111111111b.
        .cd111111111111111111dc.
        ..cd1111111111111111dc..
        ..b11d111111111111dbc...
        .b11bcccccccccccccc.....
        ccccc...................
        `)
    game.showLongText("Wow, you aren't at all how I expected!", DialogLayout.Bottom)
    game.setDialogTextColor(14)
    game.setDialogFrame(img`
        ..99999999999999999999..
        .9966666666666666666699.
        996661111111111111166699
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        966611111111111111116669
        996661111111111111166699
        .9966666666666666666699.
        ..99999999999999999999..
        `)
    game.showLongText("I'm sorry. Let me try again. *ahem*", DialogLayout.Top)
    game.showLongText("ROOOAAARRRGGGGG", DialogLayout.Top)
    pause(1000)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Other, function (sprite, otherSprite) {
    if (game2 == 0) {
        game.setDialogTextColor(11)
        game.setDialogFrame(img`
            .....cccccccccccccc.....
            ...cbd111111111111dbc...
            ..cd1111111111111111dc..
            .cd111111111111111111dc.
            .b11111111111111111111b.
            cd11111111111111111111dc
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            c1111111111111111111111c
            cd11111111111111111111dc
            .b11111111111111111111b.
            .cd111111111111111111dc.
            ..cd1111111111111111dc..
            ..b11d111111111111dbc...
            .b11bcccccccccccccc.....
            ccccc...................
            `)
        game.showLongText("My time machine is broken...", DialogLayout.Bottom)
        game.showLongText("I better get the code so Lady Lovelace can fix it!", DialogLayout.Bottom)
        pause(1000)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game2 == 3) {
        if (currentDir < 7) {
            currentDir += 1
        } else {
            currentDir = 0
        }
        shooter.setImage(shootDirections[currentDir])
    }
})
// call whenever a minigame is about to start
function clear () {
    music.stopAllSounds()
    tiles.setCurrentTilemap(tilemap`level4`)
    sprites.destroy(el)
    sprites.destroy(lovelace)
    sprites.destroy(shelley)
    sprites.destroy(curie)
    sprites.destroy(hopper)
    sprites.destroy(johnson)
    sprites.destroy(monster)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Other)
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    if (game2 < 2) {
        characterAnimations.setCharacterState(el, characterAnimations.rule(Predicate.FacingUp))
    }
})
info.onLifeZero(function () {
    if (game2 == 2) {
        curieWin = 1
        gameover = 1
        curieFails += 1
    }
    if (game2 == 3) {
        hopperWin = 1
        gameover = 1
        hopperFails += 1
    }
    if (game2 == 4) {
        johnsonWin = 1
        gameover = 1
        johnsonFails += 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Johnson, function (sprite, otherSprite) {
    JohnsonGame()
    pause(1000)
})
// call after each minigame is played to reset everyone's positions, tilemap, etc
function setup (x: number, y: number) {
    tiles.setCurrentTilemap(tilemap`main`)
    el = sprites.create(assets.image`el`, SpriteKind.el)
    el.setKind(SpriteKind.Player)
    tiles.placeOnTile(el, tiles.getTileLocation(x, y))
    timeMachine = sprites.create(assets.image`miniTimeMachine`, SpriteKind.Other)
    tiles.placeOnTile(timeMachine, tiles.getTileLocation(6, 7))
    lovelace = sprites.create(assets.image`lovelace`, SpriteKind.Lovelace)
    tiles.placeOnTile(lovelace, tiles.getTileLocation(9, 7))
    shelley = sprites.create(assets.image`shelley`, SpriteKind.Shelley)
    tiles.placeOnTile(shelley, tiles.getTileLocation(4, 3))
    if (shelleyWin == 2) {
        monster = sprites.create(assets.image`monster`, SpriteKind.Monster)
        tiles.placeOnTile(monster, tiles.getTileLocation(5, 3))
    }
    curie = sprites.create(assets.image`curie`, SpriteKind.Curie)
    tiles.placeOnTile(curie, tiles.getTileLocation(12, 2))
    hopper = sprites.create(assets.image`hopper`, SpriteKind.Hopper)
    tiles.placeOnTile(hopper, tiles.getTileLocation(3, 11))
    johnson = sprites.create(assets.image`johnson`, SpriteKind.Johnson)
    tiles.placeOnTile(johnson, tiles.getTileLocation(11, 12))
    music.play(music.createSong(assets.song`bgMusic`), music.PlaybackMode.LoopingInBackground)
    scene.cameraFollowSprite(el)
}
function HopperGame () {
    if (hopperWin < 2) {
        if (hopperWin == 0) {
            game.setDialogTextColor(13)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("Hello, I'm Grace Hopper. ", DialogLayout.Top)
            game.showLongText("I'm a computer scientist, mathematician, and rear admiral for the U.S. Navy.", DialogLayout.Top)
            game.showLongText("I created a programming language called COBOL, as well as the first-ever compiler.", DialogLayout.Top)
            game.showLongText("My contributions to computer science created the type of high-level languages that you might use.", DialogLayout.Top)
            game.showLongText("Now, I imagine you want that passcode?", DialogLayout.Top)
            game.setDialogTextColor(11)
            game.setDialogFrame(img`
                .....cccccccccccccc.....
                ...cbd111111111111dbc...
                ..cd1111111111111111dc..
                .cd111111111111111111dc.
                .b11111111111111111111b.
                cd11111111111111111111dc
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                cd11111111111111111111dc
                .b11111111111111111111b.
                .cd111111111111111111dc.
                ..cd1111111111111111dc..
                ..b11d111111111111dbc...
                .b11bcccccccccccccc.....
                ccccc...................
                `)
            game.showLongText("Yes I do!", DialogLayout.Bottom)
            game.setDialogTextColor(13)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("I'll give it to you, but first I need some help debugging this program.", DialogLayout.Top)
        } else {
            game.setDialogTextColor(13)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("You're back!", DialogLayout.Top)
            game.showLongText("Let's get those bugs!", DialogLayout.Top)
        }
        clear()
        music.play(music.createSong(assets.song`hopperSong`), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundImage(assets.image`hopperBG`)
        pause(1000)
        game.splash("GRACE HOPPER'S", "TROUBLESHOOTING")
        game.splash("Shoot the bugs!", "Space to shoot.")
        game.splash("Right arrow turns", "clockwise.")
        game.splash("Left arrow turns", "counterclockwise.")
        game.splash("Survive until the", "time runs out!")
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        scene.setBackgroundColor(1)
        camera = sprites.create(img`
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
            `, SpriteKind.Cam)
        camera.setPosition(0, 0)
        scene.cameraFollowSprite(camera)
        info.setLife(3)
        info.setScore(0)
        shootDirections = [
        assets.image`downRight`,
        assets.image`down`,
        assets.image`downLeft`,
        assets.image`left`,
        assets.image`upLeft`,
        assets.image`up`,
        assets.image`upRight`,
        assets.image`right`
        ]
        xVal = [
        0,
        80,
        160,
        160,
        160,
        80,
        0,
        0
        ]
        yVal = [
        0,
        0,
        0,
        60,
        120,
        120,
        120,
        60
        ]
        vx = [
        40,
        0,
        -40,
        -50,
        -40,
        0,
        40,
        50
        ]
        vy = [
        30,
        50,
        30,
        0,
        -30,
        -50,
        -30,
        0
        ]
        info.startCountdown(60)
        currentDir = 0
        shooter = sprites.create(assets.image`downRight`, SpriteKind.Player)
        game2 = 3
    } else {
        game.setDialogTextColor(13)
        game.setDialogFrame(img`
            ..99999999999999999999..
            .9966666666666666666699.
            996661111111111111166699
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            996661111111111111166699
            .9966666666666666666699.
            ..99999999999999999999..
            `)
        game.showLongText("My code is running very well now!", DialogLayout.Top)
        game.showLongText("Go talk to the others for the rest of the passcode!", DialogLayout.Top)
        pause(1000)
    }
}
function quiz (q: number) {
    if (q == 1) {
        while (answer != "b") {
            game.showLongText("A value that can change throughout your program is:", DialogLayout.Top)
            game.showLongText("a. a conditional", DialogLayout.Top)
            game.showLongText("b. a variable", DialogLayout.Top)
            game.showLongText("c. a constant", DialogLayout.Top)
            game.showLongText("d. a function", DialogLayout.Top)
            answer = game.askForString("?", 1)
            if (answer != "b") {
                game.showLongText("Hmm... that's not quite right. Let's try again.", DialogLayout.Top)
            } else {
                game.showLongText("That's correct! Good job!", DialogLayout.Top)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            }
        }
    }
    if (q == 2) {
        while (answer != "c") {
            game.showLongText("What does the word \"sequence\" mean?", DialogLayout.Top)
            game.showLongText("a. a section of code that repeats", DialogLayout.Top)
            game.showLongText("b. a variable that evaluates to true or false", DialogLayout.Top)
            game.showLongText("c. the order in which code runs", DialogLayout.Top)
            game.showLongText("d. a specific location in memory", DialogLayout.Top)
            answer = game.askForString("?", 1)
            if (answer != "c") {
                game.showLongText("Hmm... that's not quite right. Let's try again.", DialogLayout.Top)
            } else {
                game.showLongText("That's correct! Good job!", DialogLayout.Top)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            }
        }
    }
    if (q == 3) {
        while (answer != "a") {
            game.showLongText("What is a loop?", DialogLayout.Top)
            game.showLongText("a. a section of code that runs multiple times", DialogLayout.Top)
            game.showLongText("b. a value that stays the same", DialogLayout.Top)
            game.showLongText("c. a type of calculation", DialogLayout.Top)
            game.showLongText("d. when you set two variables equal to each other", DialogLayout.Top)
            answer = game.askForString("?", 1)
            if (answer != "a") {
                game.showLongText("Hmm... that's not quite right. Let's try again.", DialogLayout.Top)
            } else {
                game.showLongText("That's correct! Good job!", DialogLayout.Top)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            }
        }
    }
    if (q == 4) {
        while (answer != "b") {
            game.showLongText("What do you call a variable that evaluates to true or false?", DialogLayout.Top)
            game.showLongText("a. an integer", DialogLayout.Top)
            game.showLongText("b. a boolean", DialogLayout.Top)
            game.showLongText("c. a string", DialogLayout.Top)
            game.showLongText("d. a float", DialogLayout.Top)
            answer = game.askForString("?", 1)
            if (answer != "b") {
                game.showLongText("Hmm... that's not quite right. Let's try again.", DialogLayout.Top)
            } else {
                game.showLongText("That's correct! Good job!", DialogLayout.Top)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            }
        }
    }
    if (q == 5) {
        while (answer != "d") {
            game.showLongText("What is a constant?", DialogLayout.Top)
            game.showLongText("a. code that loops until a condition is met", DialogLayout.Top)
            game.showLongText("b. code that contains no errors", DialogLayout.Top)
            game.showLongText("c. a special number", DialogLayout.Top)
            game.showLongText("d. a value that doesn't change", DialogLayout.Top)
            answer = game.askForString("?", 1)
            if (answer != "d") {
                game.showLongText("Hmm... that's not quite right. Let's try again.", DialogLayout.Top)
            } else {
                game.showLongText("That's correct! Good job!", DialogLayout.Top)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            }
        }
    }
    if (q == 6) {
        while (answer != "c") {
            game.showLongText("What might cause an error in your code?", DialogLayout.Top)
            game.showLongText("a. using clear documentation", DialogLayout.Top)
            game.showLongText("b. removing all bugs", DialogLayout.Top)
            game.showLongText("c. using undeclared variables", DialogLayout.Top)
            game.showLongText("d. using lots of animations", DialogLayout.Top)
            answer = game.askForString("?", 1)
            if (answer != "c") {
                game.showLongText("Hmm... that's not quite right. Let's try again.", DialogLayout.Top)
            } else {
                game.showLongText("That's correct! Good job!", DialogLayout.Top)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            }
        }
    }
    if (q == 7) {
        while (answer != "a") {
            game.showLongText("Who created the first compiler?", DialogLayout.Top)
            game.showLongText("a. Grace Hopper", DialogLayout.Top)
            game.showLongText("b. Mary Shelley", DialogLayout.Top)
            game.showLongText("c. Marie Curie", DialogLayout.Top)
            game.showLongText("d. Katherine Johnson", DialogLayout.Top)
            answer = game.askForString("?", 1)
            if (answer != "a") {
                game.showLongText("Hmm... that's not quite right. Let's try again.", DialogLayout.Top)
            } else {
                game.showLongText("That's correct! Good job!", DialogLayout.Top)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            }
        }
    }
    if (q == 8) {
        while (answer != "b") {
            game.showLongText("Who was the first science fiction author?", DialogLayout.Top)
            game.showLongText("a. Grace Hopper", DialogLayout.Top)
            game.showLongText("b. Mary Shelley", DialogLayout.Top)
            game.showLongText("c. Marie Curie", DialogLayout.Top)
            game.showLongText("d. Katherine Johnson", DialogLayout.Top)
            answer = game.askForString("?", 1)
            if (answer != "b") {
                game.showLongText("Hmm... that's not quite right. Let's try again.", DialogLayout.Top)
            } else {
                game.showLongText("That's correct! Good job!", DialogLayout.Top)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            }
        }
    }
    if (q == 9) {
        while (answer != "c") {
            game.showLongText("Who was the first woman to win a Nobel Prize?", DialogLayout.Top)
            game.showLongText("a. Grace Hopper", DialogLayout.Top)
            game.showLongText("b. Mary Shelley", DialogLayout.Top)
            game.showLongText("c. Marie Curie", DialogLayout.Top)
            game.showLongText("d. Katherine Johnson", DialogLayout.Top)
            answer = game.askForString("?", 1)
            if (answer != "c") {
                game.showLongText("Hmm... that's not quite right. Let's try again.", DialogLayout.Top)
            } else {
                game.showLongText("That's correct! Good job!", DialogLayout.Top)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            }
        }
    }
    if (q == 10) {
        while (answer != "d") {
            game.showLongText("Who played a vital role in the Apollo moon landing?", DialogLayout.Top)
            game.showLongText("a. Grace Hopper", DialogLayout.Top)
            game.showLongText("b. Mary Shelley", DialogLayout.Top)
            game.showLongText("c. Marie Curie", DialogLayout.Top)
            game.showLongText("d. Katherine Johnson", DialogLayout.Top)
            answer = game.askForString("?", 1)
            if (answer != "d") {
                game.showLongText("Hmm... that's not quite right. Let's try again.", DialogLayout.Top)
            } else {
                game.showLongText("That's correct! Good job!", DialogLayout.Top)
                music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            }
        }
    }
}
function JohnsonGame () {
    if (johnsonWin < 2) {
        if (johnsonWin == 0) {
            game.setDialogTextColor(12)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("Oh, hello! I am Katherine Johnson.", DialogLayout.Top)
            game.showLongText("I was one of only three black students able to attend West Virginia's graduate school in 1939-- and the only woman of those three.", DialogLayout.Top)
            game.showLongText("Later on, I gained the trust of many NASA astronauts, and even helped with the Apollo moon landing!", DialogLayout.Top)
            game.showLongText("But now, I need your help landing a rocket. Then I'll get that passcode for you!", DialogLayout.Top)
            game.setDialogTextColor(11)
            game.setDialogFrame(img`
                .....cccccccccccccc.....
                ...cbd111111111111dbc...
                ..cd1111111111111111dc..
                .cd111111111111111111dc.
                .b11111111111111111111b.
                cd11111111111111111111dc
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                c1111111111111111111111c
                cd11111111111111111111dc
                .b11111111111111111111b.
                .cd111111111111111111dc.
                ..cd1111111111111111dc..
                ..b11d111111111111dbc...
                .b11bcccccccccccccc.....
                ccccc...................
                `)
            game.showLongText("Sounds good!", DialogLayout.Bottom)
        } else {
            game.setDialogTextColor(12)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("I've got another rocket ready to go. ", DialogLayout.Top)
            game.showLongText("Now let's get this thing landed!", DialogLayout.Top)
        }
        clear()
        music.play(music.createSong(assets.song`johnsonSong`), music.PlaybackMode.LoopingInBackground)
        scene.setBackgroundImage(assets.image`johnsonBG`)
        pause(1000)
        game.splash("KATHERINE JOHNSON'S", "MOON LANDING")
        game.splash("Move around to", "dodge the asteroids!")
        game.splash("Survive until the", "time runs out.")
        camera = sprites.create(img`
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
            `, SpriteKind.Cam)
        camera.setPosition(80, 60)
        scene.cameraFollowSprite(camera)
        scene.setBackgroundImage(img`
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            ................................................................................................................................................................
            `)
        scene.setBackgroundColor(6)
        rocket = sprites.create(assets.image`rocket`, SpriteKind.Player)
        rocket.setPosition(20, 60)
        animation.runImageAnimation(
        rocket,
        assets.animation`rocketAnim`,
        200,
        true
        )
        controller.moveSprite(rocket)
        rocket.setStayInScreen(true)
        asteroidImgs = [
        img`
            . . . . . . . . . 6 6 d . . . . 
            . . . . . . d 6 6 6 6 d 6 6 . . 
            . . . 6 6 d d 6 6 9 6 6 6 6 6 . 
            . . 6 6 6 6 6 6 6 9 9 6 6 6 6 6 
            d 6 6 6 6 6 6 6 6 6 9 9 6 d 6 6 
            6 6 6 8 6 6 6 d 9 6 6 9 9 9 6 6 
            6 9 9 8 8 d 9 8 6 6 6 6 6 6 6 6 
            9 6 6 9 9 8 8 9 6 6 6 6 6 6 6 6 
            9 d 6 6 9 9 6 6 9 6 9 6 6 6 6 6 
            6 9 d 9 9 6 6 6 6 9 9 6 6 6 d 9 
            . 9 6 9 9 6 6 6 9 9 8 d 6 6 6 9 
            . . 6 6 8 9 6 6 6 9 8 8 6 6 d 6 
            . . . 6 8 8 9 6 6 d d 9 8 d 6 . 
            . . . 6 6 8 8 8 d d 9 6 6 6 6 . 
            . . . . 6 6 9 8 8 6 6 6 . . . . 
            . . . . . 6 6 6 6 6 6 . . . . . 
            `,
        img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 6 6 6 6 . . 
            . 6 6 6 6 6 . 6 6 6 6 6 6 6 6 . 
            6 6 9 6 6 6 6 6 d 6 6 6 6 6 6 6 
            6 9 6 9 9 6 6 9 6 6 6 9 9 6 6 6 
            6 9 d 6 9 9 6 9 6 6 6 9 9 9 9 6 
            6 8 6 6 9 9 9 9 9 6 6 6 6 6 6 6 
            6 8 8 9 9 6 6 d 9 6 6 6 d 6 6 6 
            . 6 8 8 9 8 6 6 9 9 9 d d 6 6 . 
            . . . . 9 9 8 8 8 9 9 d 9 6 . . 
            . . . . 6 8 6 9 9 6 6 8 . . . . 
            . . . . 8 8 6 6 9 9 9 9 . . . . 
            . . . . 8 8 9 8 9 d 9 . . . . . 
            . . . . 6 8 8 8 d d 6 . . . . . 
            . . . . . 6 9 d d 8 6 . . . . . 
            . . . . . . . 6 6 6 . . . . . . 
            `,
        img`
            . . . . . . . . 6 6 6 6 . . . . 
            . . . . 6 6 6 6 6 6 6 6 6 . . . 
            . . . 6 6 6 6 9 9 9 9 6 9 6 . . 
            . . 6 6 6 6 6 6 9 9 9 6 9 9 6 . 
            . . 6 6 9 6 6 6 9 9 6 6 6 9 9 6 
            . . 6 6 9 9 9 9 8 6 6 6 6 9 9 6 
            . 6 6 6 6 9 6 6 8 9 6 6 9 9 6 6 
            6 9 6 6 6 6 6 9 8 8 6 8 8 8 6 6 
            6 9 6 6 6 6 6 6 6 6 8 8 8 9 9 6 
            6 9 9 6 6 6 6 9 6 6 8 8 8 9 9 6 
            6 6 8 9 9 9 9 8 6 8 8 9 8 8 9 . 
            . 6 6 8 8 8 8 8 8 8 9 6 6 8 9 . 
            . . 6 6 6 8 6 6 6 8 9 9 8 6 . . 
            . . . . 6 8 9 6 6 8 8 8 6 . . . 
            . . . . 6 8 8 9 9 6 8 6 . . . . 
            . . . . . . 8 6 6 6 6 . . . . . 
            `,
        img`
            . . . . . . . 6 6 6 9 6 . . . . 
            . . 6 6 8 8 8 9 6 9 9 9 6 . . . 
            . 6 6 9 8 9 6 8 9 9 9 8 6 6 . . 
            . 6 9 8 6 6 6 6 8 9 8 8 8 9 . . 
            . 6 9 6 6 6 6 d 9 8 8 8 8 8 9 . 
            . 6 9 d 6 6 d 6 9 8 8 8 8 8 9 . 
            6 6 6 9 6 6 6 6 9 8 6 6 9 8 6 6 
            6 6 9 9 9 6 6 6 9 6 6 6 6 8 8 9 
            6 6 9 8 d 9 6 6 9 6 6 6 6 8 8 9 
            6 9 8 6 6 d 6 6 9 9 9 8 8 6 8 6 
            6 9 6 6 6 9 6 6 9 6 9 6 6 6 8 . 
            6 9 d 6 6 6 8 9 6 6 6 8 6 6 6 . 
            . 6 8 6 6 6 6 8 6 6 9 8 8 9 6 . 
            . . 9 8 8 8 8 8 8 8 8 8 8 8 6 . 
            . . . 6 6 6 6 8 8 8 8 8 6 6 . . 
            . . . . . . . . 6 8 8 6 . . . . 
            `,
        img`
            . . . . . . 6 6 6 . . . . . . . 
            . . . . . 9 9 9 6 6 6 . . . . . 
            . . . 6 9 6 6 9 9 9 9 6 . . . . 
            . . 6 9 6 6 6 6 9 6 6 9 6 . . . 
            . 6 6 9 6 6 6 9 9 6 6 6 9 6 . . 
            . 9 8 9 9 6 d 9 9 6 6 6 9 6 6 6 
            . 9 8 8 8 d 9 8 8 9 9 6 9 6 6 6 
            . . 9 8 8 9 6 6 8 8 9 9 6 6 6 6 
            6 . 9 9 9 6 6 6 6 8 9 9 6 6 9 6 
            6 6 9 9 9 6 6 9 9 9 8 8 9 6 9 6 
            9 6 9 8 8 9 9 d 9 8 8 d 8 8 6 . 
            8 9 6 8 8 8 d 8 6 . 6 6 9 6 . . 
            8 9 6 6 9 8 8 9 6 . . . . . . . 
            8 8 9 6 9 8 9 9 . . . . . . . . 
            9 8 d 8 8 9 6 . . . . . . . . . 
            . 9 9 8 6 . . . . . . . . . . . 
            `
        ]
        spaceObjs = []
        info.startCountdown(60)
        info.setLife(3)
        game2 = 4
    } else {
        game.setDialogTextColor(12)
        game.setDialogFrame(img`
            ..99999999999999999999..
            .9966666666666666666699.
            996661111111111111166699
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            966611111111111111116669
            996661111111111111166699
            .9966666666666666666699.
            ..99999999999999999999..
            `)
        game.showLongText("The others are waiting with the rest of the code parts.", DialogLayout.Top)
        game.showLongText("You can do this!", DialogLayout.Top)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (game2 == 1) {
        info.changeScoreBy(1)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprites.destroy(otherSprite, effects.disintegrate, 500)
    }
    if (game2 == 3) {
        info.changeLifeBy(1)
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        sprites.destroy(otherSprite, effects.hearts, 500)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Shelley, function (sprite, otherSprite) {
    ShelleyGame()
    pause(1000)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (game2 == 3) {
        sprites.destroy(sprite)
        otherSprite.setVelocity(0, 0)
        sprites.destroy(otherSprite, effects.disintegrate, 500)
        info.changeScoreBy(1)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    if (info.score() == 6) {
        info.stopCountdown()
        shelleyWin = 2
        gameover = 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (game2 == 3) {
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
        info.changeLifeBy(-1)
    }
    if (game2 == 4) {
        sprites.destroy(otherSprite)
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
        info.changeLifeBy(-1)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Curie, function (sprite, otherSprite) {
    CurieGame()
    pause(1000)
})
let star: Sprite = null
let heart: Sprite = null
let bug: Sprite = null
let projDir = 0
let asteroid: Sprite = null
let spaceObjs: Sprite[] = []
let asteroidImgs: Image[] = []
let rocket: Sprite = null
let answer = ""
let yVal: number[] = []
let xVal: number[] = []
let johnsonFails = 0
let hopperFails = 0
let curieFails = 0
let monster: Sprite = null
let johnson: Sprite = null
let hopper: Sprite = null
let curie: Sprite = null
let shelley: Sprite = null
let lovelace: Sprite = null
let shelleyFails = 0
let shootDirections: Image[] = []
let nextV = 0
let vy: number[] = []
let currentDir = 0
let vx: number[] = []
let shooter: Sprite = null
let projectile: Sprite = null
let gameover = 0
let mom: Sprite = null
let house: Sprite = null
let fLeg2: Sprite = null
let fLeg1: Sprite = null
let fArm2: Sprite = null
let fArm1: Sprite = null
let fBody: Sprite = null
let fHead: Sprite = null
let game2 = 0
let arrow: Sprite = null
let pour: Sprite = null
let gaugeGreen: Sprite = null
let gaugeRed: Sprite = null
let camera: Sprite = null
let knownCode = 0
let newQ = 0
let usedQs: number[] = []
let codeInput = 0
let johnsonWin = 0
let hopperWin = 0
let curieWin = 0
let shelleyWin = 0
let el: Sprite = null
let passcode = 0
let timeMachine: Sprite = null
game.splash("LADY LOVELACE'S", "TIME MACHINE")
scene.setBackgroundColor(6)
timeMachine = sprites.create(assets.image`time machine`, SpriteKind.Player)
music.play(music.melodyPlayable(music.thump), music.PlaybackMode.LoopingInBackground)
game.setDialogTextColor(11)
game.setDialogFrame(img`
    .....cccccccccccccc.....
    ...cbd111111111111dbc...
    ..cd1111111111111111dc..
    .cd111111111111111111dc.
    .b11111111111111111111b.
    cd11111111111111111111dc
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    cd11111111111111111111dc
    cb11111111111111111111bc
    ccd111111111111111111dc.
    .ccd1111111111111111dcc.
    ..c111111111111111dbcc..
    .b11dcccccccccccccccc...
    cddcccccccccccccccc.....
    ccccc...................
    `)
pause(500)
game.showLongText("Wow! I can't believe my time machine works!", DialogLayout.Bottom)
game.showLongText("I'm really going to see the future!", DialogLayout.Bottom)
music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
scene.cameraShake(3, 500)
pause(500)
game.showLongText("Huh? What's happening?", DialogLayout.Bottom)
music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
scene.cameraShake(5, 1000)
pause(1000)
game.showLongText("WAAAAAAAAAAHHHHH!!!!!!", DialogLayout.Bottom)
music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
scene.cameraShake(5, 1000)
pause(1000)
sprites.destroy(timeMachine)
music.stopAllSounds()
pause(500)
game.showLongText("Woah... I think something went really wrong...", DialogLayout.Bottom)
setup(8, 7)
// every character has a unique dialogue color, but El (me/player) is the only one with a unique dialogue box. El's dialogue appears on the bottom of the screen, and whoever she is talking to appears on the top.
game.setDialogTextColor(11)
game.setDialogFrame(img`
    .....cccccccccccccc.....
    ...cbd111111111111dbc...
    ..cd1111111111111111dc..
    .cd111111111111111111dc.
    .b11111111111111111111b.
    cd11111111111111111111dc
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    cd11111111111111111111dc
    .b11111111111111111111b.
    .cd111111111111111111dc.
    ..cd1111111111111111dc..
    ..b11d111111111111dbc...
    .b11bcccccccccccccc.....
    ccccc...................
    `)
game.showLongText("Hey, where am I? Who are you?", DialogLayout.Bottom)
game.setDialogTextColor(8)
game.setDialogFrame(img`
    ..99999999999999999999..
    .9966666666666666666699.
    996661111111111111166699
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    996661111111111111166699
    .9966666666666666666699.
    ..99999999999999999999..
    `)
game.showLongText("Hmm? Oh, hello there!", DialogLayout.Top)
game.showLongText("I am Lady Ada Lovelace.", DialogLayout.Top)
game.showLongText("I am the first person ever to research computer programming!", DialogLayout.Top)
game.showLongText("That's quite the advanced piece of technology you have there.", DialogLayout.Top)
game.setDialogTextColor(11)
game.setDialogFrame(img`
    .....cccccccccccccc.....
    ...cbd111111111111dbc...
    ..cd1111111111111111dc..
    .cd111111111111111111dc.
    .b11111111111111111111b.
    cd11111111111111111111dc
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    cd11111111111111111111dc
    .b11111111111111111111b.
    .cd111111111111111111dc.
    ..cd1111111111111111dc..
    ..b11d111111111111dbc...
    .b11bcccccccccccccc.....
    ccccc...................
    `)
game.showLongText("Ada Lovelace?! Then my time machine DID work!", DialogLayout.Bottom)
game.showLongText("But I went backwards instead of forwards...", DialogLayout.Bottom)
game.setDialogTextColor(8)
game.setDialogFrame(img`
    ..99999999999999999999..
    .9966666666666666666699.
    996661111111111111166699
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    966611111111111111116669
    996661111111111111166699
    .9966666666666666666699.
    ..99999999999999999999..
    `)
game.showLongText("A time machine, you say? That explains things.", DialogLayout.Top)
game.showLongText("There are other women here, too, but it seems we're all from different times.", DialogLayout.Top)
game.showLongText("Your machine must have brought us together! ", DialogLayout.Top)
game.showLongText("And together, we'll make things right!", DialogLayout.Top)
game.showLongText("I can fix your time machine, but it seems like I'll need a special passcode.", DialogLayout.Top)
game.showLongText("I'll bet the other women have found pieces of that code!", DialogLayout.Top)
game.setDialogTextColor(11)
game.setDialogFrame(img`
    .....cccccccccccccc.....
    ...cbd111111111111dbc...
    ..cd1111111111111111dc..
    .cd111111111111111111dc.
    .b11111111111111111111b.
    cd11111111111111111111dc
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    cd11111111111111111111dc
    .b11111111111111111111b.
    .cd111111111111111111dc.
    ..cd1111111111111111dc..
    ..b11d111111111111dbc...
    .b11bcccccccccccccc.....
    ccccc...................
    `)
game.showLongText("On it! I'll go talk to them right away!", DialogLayout.Bottom)
let passNums = [
randint(1, 9),
randint(1, 9),
randint(1, 9),
randint(1, 9)
]
let multipliers = [
1000,
100,
10,
1
]
passcode = passNums[0] * 1000 + passNums[1] * 100 + (passNums[2] * 10 + passNums[3])
controller.moveSprite(el)
game.onUpdateInterval(randint(400, 750), function () {
    if (game2 == 4 && gameover == 0) {
        asteroid = sprites.create(asteroidImgs._pickRandom(), SpriteKind.Enemy)
        asteroid.setPosition(160, randint(0, 120))
        asteroid.setVelocity(randint(-15, -75), 0)
        asteroid.setFlag(SpriteFlag.AutoDestroy, true)
        spaceObjs.push(asteroid)
    }
})
game.onUpdateInterval(800, function () {
    if (game2 == 3 && gameover == 0) {
        projDir = randint(0, 7)
        bug = sprites.create(assets.image`bug`, SpriteKind.Enemy)
        animation.runImageAnimation(
        bug,
        [img`
            ....................
            .......6666666......
            ..66..6eeeeeee6..66.
            .6..66eeeeeeeef66..6
            .6..6eeeeeeeeeff6...
            ....6eeeeeeeefff6...
            ....66fffffffff66...
            ..66666666666666666.
            .6..6eeeeeeeeeff6..6
            .6..6eee6eee6eff6..6
            ....6eeeeeeeefff6...
            ...666eeeefffff666..
            ..6...6fffffff6...6.
            .6.....6666666.....6
            .6.................6
            ....................
            `,img`
            ....................
            .......6666666......
            ...6..6eeeeeee6..666
            ..6.66eeeeeeeef66...
            ..6.6eeeeeeeeeff6...
            ....6eeeeeeeefff6..6
            ....66fffffffff66..6
            ..66666666666666666.
            .6..6eeeeeeeeeff6...
            .6..6eee6eee6eff6...
            ....6eeeeeeeefff6...
            ....66eeeefffff66..6
            ...6..6fffffff6..66.
            ..6....6666666......
            ..6.................
            ..6.................
            `,img`
            ....................
            .......6666666......
            ..66..6eeeeeee6..66.
            .6..66eeeeeeeef66..6
            .6..6eeeeeeeeeff6...
            ....6eeeeeeeefff6...
            ....66fffffffff66...
            ..66666666666666666.
            .6..6eeeeeeeeeff6..6
            .6..6eee6eee6eff6..6
            ....6eeeeeeeefff6...
            ...666eeeefffff666..
            ..6...6fffffff6...6.
            .6.....6666666.....6
            .6.................6
            ....................
            `,img`
            ....................
            .......6666666......
            .666..6eeeeeee6..6..
            ....66eeeeeeeef66.6.
            ....6eeeeeeeeeff6.6.
            .6..6eeeeeeeefff6...
            .6..66fffffffff66...
            ..66666666666666666.
            ....6eeeeeeeeeff6..6
            ....6eee6eee6eff6..6
            ....6eeeeeeeefff6...
            .6..66eeeffffff66...
            ..66..6fffffff6..6..
            .......6666666....6.
            ..................6.
            ..................6.
            `],
        200,
        true
        )
        bug.setPosition(xVal[projDir], yVal[projDir])
        bug.setVelocity(vx[projDir] / 2, vy[projDir] / 2)
        if (Math.percentChance(5)) {
            projDir = randint(0, 7)
            heart = sprites.create(assets.image`heart`, SpriteKind.Food)
            heart.setPosition(xVal[projDir], yVal[projDir])
            heart.setVelocity(vx[projDir] / 2, vy[projDir] / 2)
        }
    }
})
/**
 * Credits
 * 
 * all sprite and background art by me
 * 
 * tilemaps recolored from makeCode assets
 * 
 * music by me
 * 
 * original story idea by me
 * 
 * Mary Shelley info - https://www.britannica.com/biography/Mary-Wollstonecraft-Shelley
 * 
 * Marie Curie info - https://www.mariecurie.org.uk/who/our-history/marie-curie-the-scientist
 * 
 * Grace Hopper info - https://president.yale.edu/biography-grace-murray-hopper
 * 
 * Katherine Johnson info - https://www.nasa.gov/centers-and-facilities/langley/katherine-johnson-biography/
 * 
 * (check out these sources for more information!)
 * 
 * special thanks to my awesome friends and family for playtesting this so I could make this game as awesome as possible! I couldn't have done it without their support <3
 */
/**
 * If you fail a game three times, it lets you pass automatically. I wanted it to be possible for anyone to complete the game :)
 */
forever(function () {
    if (game2 == 1 && gameover == 1) {
        if (shelleyWin == 2) {
            effects.confetti.startScreenEffect()
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
            pause(2000)
            effects.confetti.endScreenEffect()
        }
        clear()
        setup(4, 4)
        sprites.destroyAllSpritesOfKind(SpriteKind.Food)
        info.setScore(knownCode)
        game2 = 0
        gameover = 0
        controller.moveSprite(el)
        scene.cameraFollowSprite(el)
        if (shelleyFails < 3) {
            if (shelleyWin == 1) {
                game.setDialogTextColor(15)
                game.setDialogFrame(img`
                    ..99999999999999999999..
                    .9966666666666666666699.
                    996661111111111111166699
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    996661111111111111166699
                    .9966666666666666666699.
                    ..99999999999999999999..
                    `)
                game.showLongText("Hmm... not quite. Come back when you want to try again!", DialogLayout.Top)
            } else {
                game.setDialogTextColor(15)
                game.setDialogFrame(img`
                    ..99999999999999999999..
                    .9966666666666666666699.
                    996661111111111111166699
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    996661111111111111166699
                    .9966666666666666666699.
                    ..99999999999999999999..
                    `)
                game.showLongText("HAHA! IT'S ALIIIIIVE!!!", DialogLayout.Top)
                game.showLongText("Thank you for your help.", DialogLayout.Top)
                game.showLongText("The next number you need is " + passNums[0], DialogLayout.Top)
                knownCode += passNums.removeAt(0) * multipliers.removeAt(0)
                info.setScore(knownCode)
            }
            pause(1000)
        } else {
            shelleyWin = 2
            game.setDialogTextColor(15)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("That's alright, it was hard for Victor, too.", DialogLayout.Top)
            game.showLongText("The next number you need is " + passNums[0], DialogLayout.Top)
            knownCode += passNums.removeAt(0) * multipliers.removeAt(0)
            info.setScore(knownCode)
        }
    }
    if (game2 == 2 && gameover == 1) {
        if (curieWin == 2) {
            effects.confetti.startScreenEffect()
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
            pause(2000)
            effects.confetti.endScreenEffect()
        }
        clear()
        setup(12, 3)
        game2 = 0
        info.setScore(knownCode)
        info.setLife(0)
        info.stopCountdown()
        gameover = 0
        controller.moveSprite(el)
        scene.cameraFollowSprite(el)
        if (curieFails < 3) {
            if (curieWin == 1) {
                game.setDialogTextColor(2)
                game.setDialogFrame(img`
                    ..99999999999999999999..
                    .9966666666666666666699.
                    996661111111111111166699
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    996661111111111111166699
                    .9966666666666666666699.
                    ..99999999999999999999..
                    `)
                game.showLongText("Oh, looks like we've made a bit of a mess.", DialogLayout.Top)
                game.showLongText("I'll get this cleaned up. Come back and try to help me again soon!", DialogLayout.Top)
            } else {
                game.setDialogTextColor(2)
                game.setDialogFrame(img`
                    ..99999999999999999999..
                    .9966666666666666666699.
                    996661111111111111166699
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    996661111111111111166699
                    .9966666666666666666699.
                    ..99999999999999999999..
                    `)
                game.showLongText("Wow! You're really good at this!", DialogLayout.Top)
                game.showLongText("Thank you for your help.", DialogLayout.Top)
                game.showLongText("The next number you need is " + passNums[0], DialogLayout.Top)
                knownCode += passNums.removeAt(0) * multipliers.removeAt(0)
                info.setScore(knownCode)
            }
            pause(1000)
        } else {
            curieWin = 2
            game.setDialogTextColor(2)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("It took me years to get the hang of this! Don't worry about it.", DialogLayout.Top)
            game.showLongText("The next number you need is " + passNums[0], DialogLayout.Top)
            knownCode += passNums.removeAt(0) * multipliers.removeAt(0)
            info.setScore(knownCode)
        }
    }
    if (game2 == 3 && gameover == 1) {
        if (hopperWin == 2) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            sprites.destroyAllSpritesOfKind(SpriteKind.Food)
            effects.confetti.startScreenEffect()
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
            pause(2000)
            effects.confetti.endScreenEffect()
        }
        clear()
        setup(3, 12)
        info.setScore(knownCode)
        game2 = 0
        info.stopCountdown()
        info.setLife(0)
        gameover = 0
        controller.moveSprite(el)
        scene.cameraFollowSprite(el)
        if (hopperFails < 3) {
            if (hopperWin == 1) {
                game.setDialogTextColor(13)
                game.setDialogFrame(img`
                    ..99999999999999999999..
                    .9966666666666666666699.
                    996661111111111111166699
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    996661111111111111166699
                    .9966666666666666666699.
                    ..99999999999999999999..
                    `)
                pause(200)
                game.showLongText("I think there's still a couple of bugs left.", DialogLayout.Top)
                game.showLongText("Come try again when you get the chance.", DialogLayout.Top)
            } else {
                game.setDialogTextColor(13)
                game.setDialogFrame(img`
                    ..99999999999999999999..
                    .9966666666666666666699.
                    996661111111111111166699
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    996661111111111111166699
                    .9966666666666666666699.
                    ..99999999999999999999..
                    `)
                pause(200)
                game.showLongText("Thanks! Now my code compiles flawlessly!", DialogLayout.Top)
                game.showLongText("The next number you need is " + passNums[0], DialogLayout.Top)
                knownCode += passNums.removeAt(0) * multipliers.removeAt(0)
                info.setScore(knownCode)
            }
            pause(1000)
        } else {
            hopperWin = 2
            game.setDialogTextColor(13)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("This is tough stuff! I'll find those bugs myself.", DialogLayout.Top)
            game.showLongText("The next number you need is " + passNums[0], DialogLayout.Top)
            knownCode += passNums.removeAt(0) * multipliers.removeAt(0)
            info.setScore(knownCode)
        }
    }
    if (game2 == 4 && gameover == 1) {
        if (johnsonWin == 2) {
            sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
            effects.confetti.startScreenEffect()
            pause(2000)
            effects.confetti.endScreenEffect()
        }
        clear()
        setup(11, 13)
        info.setScore(knownCode)
        game2 = 0
        info.stopCountdown()
        info.setLife(0)
        gameover = 0
        controller.moveSprite(el)
        scene.cameraFollowSprite(el)
        if (johnsonFails < 3) {
            if (johnsonWin == 1) {
                game.setDialogTextColor(12)
                game.setDialogFrame(img`
                    ..99999999999999999999..
                    .9966666666666666666699.
                    996661111111111111166699
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    996661111111111111166699
                    .9966666666666666666699.
                    ..99999999999999999999..
                    `)
                game.showLongText("Uh oh! Guess we'll need a new rocket...", DialogLayout.Top)
                game.showLongText("Come try again soon!", DialogLayout.Top)
            } else {
                game.setDialogTextColor(12)
                game.setDialogFrame(img`
                    ..99999999999999999999..
                    .9966666666666666666699.
                    996661111111111111166699
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    966611111111111111116669
                    996661111111111111166699
                    .9966666666666666666699.
                    ..99999999999999999999..
                    `)
                game.showLongText("Great work! This is one great leap for mankind!", DialogLayout.Top)
                game.showLongText("The next number you need is " + passNums[0], DialogLayout.Top)
                knownCode += passNums.removeAt(0) * multipliers.removeAt(0)
                info.setScore(knownCode)
            }
            pause(1000)
        } else {
            johnsonWin = 2
            game.setDialogTextColor(13)
            game.setDialogFrame(img`
                ..99999999999999999999..
                .9966666666666666666699.
                996661111111111111166699
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                966611111111111111116669
                996661111111111111166699
                .9966666666666666666699.
                ..99999999999999999999..
                `)
            game.showLongText("Nice try! Even NASA hasn't been successful every time.", DialogLayout.Top)
            game.showLongText("The next number you need is " + passNums[0], DialogLayout.Top)
            knownCode += passNums.removeAt(0) * multipliers.removeAt(0)
            info.setScore(knownCode)
        }
    }
})
// for some reason the asteroid and star sprites stop when they reach the edge of the screen instead of going all the way off. it seems to be something to do with converting between tilemaps and regular backgrounds. this is why im using an array to delete them instead of setting the sprites' auto-destroy to true
forever(function () {
    if (game2 == 4) {
        for (let value of spaceObjs) {
            if (value.x < 10) {
                sprites.destroy(value)
            }
        }
    }
})
forever(function () {
    if (game2 < 2) {
        if (controller.right.isPressed()) {
            characterAnimations.setCharacterState(el, characterAnimations.rule(Predicate.MovingRight))
        }
        if (controller.left.isPressed()) {
            characterAnimations.setCharacterState(el, characterAnimations.rule(Predicate.MovingLeft))
        }
        if (controller.up.isPressed()) {
            characterAnimations.setCharacterState(el, characterAnimations.rule(Predicate.MovingUp))
        }
        if (controller.down.isPressed()) {
            characterAnimations.setCharacterState(el, characterAnimations.rule(Predicate.MovingDown))
        }
    }
})
forever(function () {
    if (game2 == 2) {
        if (arrow.x <= 40 || arrow.x >= 120) {
            arrow.setVelocity(arrow.vx * -1, 0)
        }
    }
})
game.onUpdateInterval(100, function () {
    if (game2 == 4) {
        star = sprites.create(img`
            1 1 
            1 1 
            `, SpriteKind.Other)
        star.setPosition(160, randint(0, 120))
        star.setVelocity(randint(-15, -200), 0)
        star.z = -5
        star.setFlag(SpriteFlag.AutoDestroy, true)
        spaceObjs.push(star)
    }
})
