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
    red = Math.map(input.acceleration(Dimension.X), 0, 1023, 0, 255)
    green = Math.map(input.acceleration(Dimension.Y), 0, 1023, 0, 255)
    blue = Math.map(input.acceleration(Dimension.Z), -1023, 0, 0, 255)
    SetColor(red, green, blue)
    led.plotBarGraph(
    blue,
    255
    )
})
