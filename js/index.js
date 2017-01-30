var output = document.getElementById('output');
var opperation = "";
var overwrite = true;
var lastNumber = 0;

// Called when a number key is pressed
var onNumkey = function(keyValue) {
    if (output.innerHTML == "0" || overwrite == true) {
        overwrite = false;
        output.innerHTML = keyValue;
    } else {
        output.innerHTML += keyValue;
    }
}
// Called when the plus button is pressed
var onPlus = function() {
    // Set the operator
    operation = "add";
    // Boolean used to know whether to append or replace the current number
    overwrite = true;
    // Keep track of the last number so we can use it in the equation
    lastNumber = parseFloat(output.innerHTML);
}
// Called when the plus button is pressed
var onMultiply = function() {
    // Set the operator
    operation = "multiply";
    // Boolean used to know whether to append or replace the current number
    overwrite = true;
    // Keep track of the last number so we can use it in the equation
    lastNumber = parseFloat(output.innerHTML);
}
var onDivide = function() {
    // Set the operator
    operation = "divide";
    // Boolean used to know whether to append or replace the current number
    overwrite = true;
    // Keep track of the last number so we can use it in the equation
    lastNumber = parseFloat(output.innerHTML);
}
var onMinus = function() {
    // Set the operator
    operation = "minus";
    // Boolean used to know whether to append or replace the current number
    overwrite = true;
    // Keep track of the last number so we can use it in the equation
    lastNumber = parseFloat(output.innerHTML);
}
var onModulo = function() {
    // Set the operator
    operation = "modulo";
    // Boolean used to know whether to append or replace the current number
    overwrite = true;
    // Keep track of the last number so we can use it in the equation
    lastNumber = parseFloat(output.innerHTML);
}
var onPercent = function() {
    // Set the operator
    operation = "percent";
    // Boolean used to know whether to append or replace the current number
    overwrite = true;
    // Keep track of the last number so we can use it in the equation
    lastNumber = parseFloat(output.innerHTML);
}
var onSquare = function() {
    // Set the operator
    operation = "square";
    // Boolean used to know whether to append or replace the current number
    overwrite = true;
    // Keep track of the last number so we can use it in the equation
    lastNumber = parseFloat(output.innerHTML);
}
// Called when the equal button is pressed
var onEquals = function() {
    var currentNumber = parseFloat(output.innerHTML);
    var result = 0;
    if (operation == "add") {
        result = lastNumber + currentNumber;
    } else if (operation == "multiply") {
        result = lastNumber * currentNumber;
    } else if (operation == "divide") {
        result = lastNumber / currentNumber;
    } else if (operation == "minus") {
        result = lastNumber - currentNumber;
    } else if (operation == "modulo") {
        result = lastNumber % currentNumber;
    } else if (operation == "square") {
        result = Math.sqrt(lastNumber);
    } else if (operation == "percent") {
        result = (lastNumber / 100) * currentNumber;
    }
    // Set our output
    output.innerHTML = result;
    // Our last number turns into our calculated number
    lastNumber = result;
    // Clear the operation
    operation = "";
}
// Called when the clear button is pressed
var onClear = function() {
    output.innerHTML = "0";
    operation = "";
    lastNumber = 0;
}