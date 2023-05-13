radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3 && mon_choix == 1 || (receivedNumber == 2 && mon_choix == 3 || receivedNumber == 1 && mon_choix == 2)) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1, 4212, 110, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        basic.showString("game over")
        jeux = 0
    } else {
        if (mon_choix == 3 && receivedNumber == 1 || (mon_choix == 2 && receivedNumber == 3 || mon_choix == 1 && receivedNumber == 2)) {
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
            basic.showString("win")
            jeux = 0
        } else {
            music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 1, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
            basic.showString("égalité")
            jeux = 0
        }
    }
})
let mon_choix = 0
let jeux = 0
radio.setGroup(204)
jeux = 0
basic.forever(function () {
    if (input.logoIsPressed()) {
        music.playTone(330, music.beat(BeatFraction.Half))
        basic.showNumber(1)
        music.playTone(440, music.beat(BeatFraction.Half))
        basic.showNumber(2)
        music.playTone(587, music.beat(BeatFraction.Whole))
        basic.showNumber(3)
        jeux += 1
        while (jeux == 1) {
            if (input.buttonIsPressed(Button.A)) {
                basic.showIcon(IconNames.Scissors)
                radio.sendNumber(1)
                mon_choix = 1
            } else {
                if (input.buttonIsPressed(Button.B)) {
                    basic.showLeds(`
                        # . . . .
                        # # . . .
                        # # # . .
                        # # # # .
                        # # # # #
                        `)
                    radio.sendNumber(2)
                    mon_choix = 2
                } else {
                    if (input.buttonIsPressed(Button.AB)) {
                        basic.showLeds(`
                            . . . . .
                            . # # # .
                            . # # # .
                            . # # # .
                            . . . . .
                            `)
                        radio.sendNumber(3)
                        mon_choix = 3
                    }
                }
            }
        }
    }
})
