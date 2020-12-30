let MoedaAcara = 0
let MoedaBcara = 0
let JogadorAScore = 0
let JogadorBScore = 0
input.onButtonPressed(Button.A, function () {
    MoedaAcara = 1
    MoedaBcara = 1
    JogadorAScore = 0
    JogadorBScore = 0
})
input.onGesture(Gesture.Shake, function () {
    MoedaAcara = randint(0, 1)
    MoedaBcara = randint(0, 1)
    if (MoedaAcara && MoedaBcara) {
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        JogadorAScore += 1
    } else {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # # . .
            . # . # .
            . # # . .
            `)
        basic.pause(100)
        JogadorBScore += 1
    }
    basic.showLeds(`
        . # . . .
        # # # . .
        . # . # .
        . . # # #
        . . . # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showNumber(JogadorAScore)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # . .
        . # . # .
        . # # . .
        `)
    basic.showNumber(JogadorBScore)
})
basic.forever(function () {
	
})
