var first;
var sign;
var second;
var equal;
var result;
var secondNumber;

function n(digit) {
    if (sign == undefined || secondNumber) {
        console.log(digit);

        var old = current();
        console.log(old);
        old += digit;
        if (secondNumber) second = old;
        else first = old;
        console.log("first: " + first);
        console.log("second: " + second);
        $("#display").val(old);
    }
    else if (equal == undefined) {
        clear();
        $("#display").val(digit);
        second = digit;
        secondNumber = true;
    }
    else {
        clear();
        $("#display").val(digit);
        first = undefined;
        sign = undefined;
        equal = undefined;
        second = undefined;
        result = undefined;
        secondNumber = undefined;
    }
}

$("[id^=button]").click(function () {
    x = $(this).val();
    n(x);
})


$("#addButton").click(function () {
    if(equal != undefined) {
        console.log("hereeeeeee");
        // secondNumber = true;
        equal = undefined;
    }
    else if (first != undefined && second != undefined) {
        console.log("here");
        second = current();
        result = decide(Number(first), Number(second), sign);
        $("#display").val(result);
        first = result;
        secondNumber = undefined;
        second = undefined;
        equal = undefined;
        result = undefined;
    }
    else {
        first = current();
    }
    sign = "+";


});

$("#subtractButton").click(function () {
    if(equal != undefined) {
        console.log("hereeeeeee");
        // secondNumber = true;
        equal = undefined;
    }
    else if (first != undefined && second != undefined) {
        console.log("here");
        second = current();
        result = decide(Number(first), Number(second), sign);
        $("#display").val(result);
        first = result;
        secondNumber = undefined;
        second = undefined;
        equal = undefined;
        result = undefined;
    }
    else {

        first = current();
    }
    sign = "-";
});

$("#divideButton").click(function () {
    if(equal != undefined) {
        console.log("hereeeeeee");
        // secondNumber = true;
        equal = undefined;
    }
    else if (first != undefined && second != undefined) {
        console.log("here");
        second = current();
        result = decide(Number(first), Number(second), sign);
        $("#display").val(result);
        first = result;
        secondNumber = undefined;
        second = undefined;
        equal = undefined;
        result = undefined;

    }
    else {

        first = current();
    }
    sign = "/";
});

$("#multiplyButton").click(function () {
    if(equal != undefined) {
        console.log("hereeeeeee");
        // secondNumber = true;
        equal = undefined;
    }
    else if (first != undefined && second != undefined) {
        console.log("here");
        second = current();
        result = decide(Number(first), Number(second), sign);
        $("#display").val(result);
        first = result;
        secondNumber = undefined;
        second = undefined;
        equal = undefined;
        result = undefined;

    }
    else {

        first = current();
    }
    sign = "*";
});

$("#equalsButton").click(function () {
    if(first != undefined && sign != undefined && second != undefined && result != undefined) {
        first = result;
        result = decide(Number(first), Number(second), sign);
        $("#display").val(result);
    }
    else if (first != undefined && sign != undefined && second != undefined) {
        second = current();
        result = decide(Number(first), Number(second), sign);
        $("#display").val(result);
        first = result;
        secondNumber = false;
        equal = true;
    }


});

$("#clearButton").click(function () {
    clear();
    first = undefined;
    sign = undefined;
    second = undefined;
    equal = undefined;
    result = undefined;
    secondNumber = undefined;
});

function clear() {
    $("#display").val("");
}

function current() {
    return $("#display").val();
}


function decide(a, b, sign) {
    if (sign == "+") return a + b;
    if (sign == "-") return a - b;
    if (sign == "*") return a * b;
    if (sign == "/") return a * 1.0 / b;
}
