input.onButtonPressed(Button.A, function () {
    basic.showString("" + (Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.R)))
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.L)))
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("" + (Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.M)))
})
Acebott.Trace_Sensor_init(AnalogReadPin.P0, AnalogReadPin.P1, AnalogReadPin.P2)
