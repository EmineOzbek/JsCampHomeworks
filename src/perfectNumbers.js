
function perfectNumbers() {
    for (let i = 1; i < 1000; i++) {
      
        let resultNumber = 0
        for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                resultNumber += j
            }
        }
        if (resultNumber == i) {
            console.log(resultNumber)
        }
    }
}
perfectNumbers()
