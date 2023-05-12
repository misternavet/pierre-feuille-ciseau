radio.setGroup(204)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendNumber(1)
})
