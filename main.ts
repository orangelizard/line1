input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.R)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.L)))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.M)))
})
basic.showLeds(`
    # . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . #
    `)
Acebott.stopcar()
Acebott.Trace_Sensor_init(AnalogReadPin.P0, AnalogReadPin.P1, AnalogReadPin.P2)
basic.forever(function () {
    if (Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.L) > 500 && Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.R) > 500) {
        Acebott.moveTime(Acebott.Direction.backward, 40)
        basic.pause(100)
        Acebott.moveTime(Acebott.Direction.left, 40)
        basic.pause(100)
    } else {
        if (Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.L) > 500 && Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.R) < 500) {
            Acebott.moveTime(Acebott.Direction.backward, 10)
            basic.pause(100)
            Acebott.moveTime(Acebott.Direction.left, 10)
            basic.pause(100)
        } else if (Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.L) < 500 && Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.R) > 500) {
            Acebott.moveTime(Acebott.Direction.backward, 10)
            basic.pause(100)
            Acebott.moveTime(Acebott.Direction.right, 10)
            basic.pause(100)
        } else {
            Acebott.moveTime(Acebott.Direction.forward, 10)
        }
    }
})
