input.onButtonPressed(Button.A, function () {
    music.ringTone(988)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.showLeds(`
    # . . # .
    # . # . #
    # . # . #
    # . # . #
    . # . . #
    `)
Acebott.Trace_Sensor_init(AnalogReadPin.P0, AnalogReadPin.P2, AnalogReadPin.P1)
Acebott.stopcar()
basic.forever(function () {
    if (Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.R) > 400) {
        music.ringTone(988)
        Acebott.colorLight(Acebott.RGBLights.RGB_R, 0xff0000)
        Acebott.colorLight(Acebott.RGBLights.RGB_L, 0x000000)
    }
    if (Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.L) > 400) {
        music.ringTone(131)
        Acebott.colorLight(Acebott.RGBLights.RGB_L, 0x00ff00)
        Acebott.colorLight(Acebott.RGBLights.RGB_R, 0x000000)
    }
    if (Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.R) < 400 && Acebott.Trace_Sensor_getValue(Trace_Sensor_Index.L) < 400) {
        music.stopAllSounds()
        Acebott.colorLight(Acebott.RGBLights.ALL, 0x000000)
    }
})
