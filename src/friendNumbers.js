
function friendNumbers(number1, number2) {
    let resultNumber1 = 0
    let resultNumber2 = 0
    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            resultNumber1 += i
        }
    }
    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0) {
            resultNumber2 += i
        }
    }
    if (resultNumber1 == number2 && resultNumber2 == number1) {
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır.")
    } else {
        console.log(number1 + " ve " + number2 + " arkadaş sayılar değildir.")
    }
}
friendNumbers(220, 284)