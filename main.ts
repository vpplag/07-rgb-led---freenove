let red = 0
let green = 0
let blue = 0
function SetColor (red: number, green: number, blue: number) {
    red = Math.map(red, 0, 255, 1023, 0)
    green = Math.map(green, 0, 255, 1023, 0)
    blue = Math.map(blue, 0, 255, 1023, 0)
    pins.analogWritePin(AnalogPin.P2, red)
    pins.analogWritePin(AnalogPin.P1, green)
    pins.analogWritePin(AnalogPin.P0, blue)
    basic.pause(200)
}
basic.forever(function () {
    red = randint(0, 255)
    green = randint(0, 255)
    blue = randint(0, 255)
    SetColor(red, green, blue)
})
