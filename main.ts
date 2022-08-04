input.onButtonPressed(Button.A, function () {
    PlayerAWins += 1
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    PlayersTie += 1
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    PlayerBWins += 1
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Wins")
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `)
    basic.showNumber(PlayerAWins)
    basic.pause(1000)
    basic.showLeds(`
        . # # . .
        . # . # .
        . # # # .
        . # . # .
        . # # . .
        `)
    basic.showNumber(PlayerBWins)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.showNumber(PlayersTie)
    basic.pause(1000)
    basic.clearScreen()
})
let PlayerAWins = 0
let PlayerBWins = 0
let PlayersTie = 0
PlayersTie = 0
PlayerBWins = 0
PlayerAWins = 0
