function toCelcius(F){
    C = (F-32)*5/9
    console.log(`${F.toFixed(1)} graus Fahrenheit equivalem a ${C.toFixed(1)} graus Celcius`) 
}

function toFahrenheit(C){
    F = C*9/5+32
    console.log(`${C.toFixed(1)} graus Celcius equivalem a ${F.toFixed(1)} graus Fahrenheit`)
}

toCelcius(100)
toFahrenheit(37.8)

