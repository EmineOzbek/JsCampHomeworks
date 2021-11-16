
function primeNumbers2() {
    for (let i = 2; i < 1000; i++) {
       
        let result = 0
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                result++
            }
        }
        if (result == 0)
            console.log(i)
    }
}
primeNumbers2()