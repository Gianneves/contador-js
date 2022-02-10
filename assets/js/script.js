let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0

function increment() {
    currentNumber ++
    currentNumberWrapper.innerHTML = currentNumber
    if (currentNumber >= 10) {
        console.log('parar')
        currentNumber --
    }
}

function decrement() {
    currentNumber --
    currentNumberWrapper.innerHTML = currentNumber
    if (currentNumber <= 0){
        currentNumber ++
    }
}