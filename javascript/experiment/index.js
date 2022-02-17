function calculator() {
    event.preventDefault();

    const number1 = parseFloat(document.getElementById("firstnumber").value);
    const number2 = parseFloat(document.getElementById("secondnumber").value);
    const number3 = document.getElementById("option").value;

    if (number3 == "+") {
        // const number1 = parseInt(document.getElementById("firstnumber").value);
        // const number2 = parseInt(document.getElementById("secondnumber").value);
        document.getElementById("result").value = number1 + number2;
    }

    if (number3 == "-") {
        // const number1 = parseInt(document.getElementById("firstnumber").value);
        // const number2 = parseInt(document.getElementById("secondnumber").value);
        document.getElementById("result").value = number1 - number2;
    }

    if (number3 == "*") {
        // const number1 = parseInt(document.getElementById("firstnumber").value);
        // const number2 = parseInt(document.getElementById("secondnumber").value);
        document.getElementById("result").value = number1 * number2;
    }

    if (number3 == "/") {
        // const number1 = parseInt(document.getElementById("firstnumber").value);
        // const number2 = parseInt(document.getElementById("secondnumber").value);
        document.getElementById("result").value = number1 / number2;
    }

}

