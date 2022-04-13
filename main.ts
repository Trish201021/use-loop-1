input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 9; index++) {
        number += -1
        basic.showNumber(number)
    }
})
let number = 0
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    # # # # #
    `)
number = 0
basic.showNumber(number)
basic.forever(function () {
	
})
