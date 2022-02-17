
function adding() {

    const firstnumber = parseFloat(document.getElementById("input1").value);

    const secondnumber = parseFloat(document.getElementById("input2").value);

    let results = firstnumber + secondnumber;
    document.getElementById("result").value = results;
}

function subtract() {

    const firstnumber = parseFloat(document.getElementById("input1").value);

    const secondnumber = parseFloat(document.getElementById("input2").value);

    let results = firstnumber - secondnumber;
    document.getElementById("result").value = results;
}

function multiply() {

    const firstnumber = parseFloat(document.getElementById("input1").value);

    const secondnumber = parseFloat(document.getElementById("input2").value);

    let results = firstnumber * secondnumber;
    document.getElementById("result").value = results;
}

function division() {

    const firstnumber = parseFloat(document.getElementById("input1").value);

    const secondnumber = parseFloat(document.getElementById("input2").value);

    let results = firstnumber / secondnumber;
    document.getElementById("result").value = results;
}
