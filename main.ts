radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
})
radio.setGroup(1)
basic.showLeds(`
    # # # . .
    # . # . .
    # # # . #
    # # . . .
    # . # . .
    `)
basic.forever(function () {
    led.toggle(4, 2)
    basic.pause(250)
    led.toggle(4, 2)
})
