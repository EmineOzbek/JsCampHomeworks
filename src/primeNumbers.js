
function isPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {

        let result = 0
        for (let j = 2; j < numbers[i]; j++) {
            if (numbers[i] % j == 0) {
                result++
            }
        }
        if (result != 0 || numbers[i] == 0 || numbers[i] == 1) {
            console.log(numbers[i] + " is not a prime number")
        }
        else {
            console.log(numbers[i] + " is  a prime number")
        }
    }
}
isPrime(0, 1, 2, 9, 37)


