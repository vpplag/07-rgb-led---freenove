let red = 0
let green = 0
let blue = 0
function SetColor (red: number, green: number, blue: number) {
    red = Math.map(red, 0, 255, 1023, 0)
    green = Math.map(green, 0, 255, 1023, 0)
    blue = Math.map(blue, 0, 255, 1023, 0)
    pins.analogWritePin(AnalogPin.P0, red)
    pins.analogWritePin(AnalogPin.P1, green)
    pins.analogWritePin(AnalogPin.P2, blue)
    basic.pause(200)
}
basic.forever(function () {
    red = 0
    green = 0
    blue = 255
    SetColor(red, green, blue)
})
