radio.setGroup(209)
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendString("F")
    } else if (input.buttonIsPressed(Button.A)) {
        radio.sendString("L")
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("R")
    } else if (input.isGesture(Gesture.Shake)) {
        radio.sendString("B")
    } else {
        radio.sendString("S")
    }
    basic.pause(100)
})
control.inBackground(function () {
    while (true) {
        basic.showNumber(209)
    }
})
