class Calculator {
    constructor(num1, num2) {
       this.num1 = num1;
       this.num2 = num2;
    }

    sum(num1, num2){
        return num1 + num2;
    }
}

module.exports = Calculator;