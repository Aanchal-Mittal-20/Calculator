function clearScreen() {
    document.getElementById('result').value = "";
}

function display(value) {
    document.getElementById('result').value += value;
}

function calculate() {
    let res = document.getElementById('result').value;
    const ans = eval(res);
    document.getElementById('result').value = ans
}

function clearLastChar() {
    let val = document.getElementById('result').value;
    let ans = val.slice(0, -1);
    document.getElementById('result').value = ans;
}