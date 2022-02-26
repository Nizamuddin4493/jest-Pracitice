class Calculator {

    add(firstNum, secondNum) {
        if (!firstNum || !secondNum) {
            throw ('Argument is missing')
        } else if(typeof(firstNum) === 'number' && typeof(secondNum) === 'number') {
            return firstNum + secondNum;
        }
        throw ('Cannot ADD \"not a number\"')   
    }

    subtract(firstNum, secondNum) {
        if (!firstNum || !secondNum) {
            throw ('Argument is missing')
        } else if(typeof(firstNum) === 'number' && typeof(secondNum) === 'number') {
            return firstNum - secondNum;
        }
        throw ('Cannot SUBTRACT \"not a number\"')   
    }

    multiply(firstNum, secondNum) {
        if (!firstNum || !secondNum) {
            throw ('Argument is missing')
        } else if(typeof(firstNum) === 'number' && typeof(secondNum) === 'number') {
            return firstNum * secondNum;
        }
        throw ('Cannot Multiply \"not a number\"')   
    }

    divide(firstNum, secondNum) {
        if (!firstNum || !secondNum) {
            throw ('Argument is missing')
        } else if(typeof(firstNum) === 'number' && typeof(secondNum) === 'number') {
            return firstNum / secondNum;
        }
        throw ('Cannot Divide \"not a number\"')   
    }
}

module.exports = Calculator;