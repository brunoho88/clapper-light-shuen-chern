let lightioxs = false
input.onSound(DetectedSound.Loud, function () {
    lightioxs = !(lightioxs)
    if (lightioxs) {
        basic.showString("rthij9uinrwgeijerfdgokptpokiojjiefi")
        music.playMelody("C5 C5 C5 C5 C5 C5 C5 C5 ", 17)
        music.playMelody("C5 C5 C5 A C5 C5 C5 C5 ", 17)
    } else {
        basic.clearScreen()
    }
})
