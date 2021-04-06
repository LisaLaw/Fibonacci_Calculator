function clearResult() {
    var results = document.getElementById("results");
    results.innerHTML = '';
    return null;
}

function removeErrorMessage() {
    var error = document.getElementById("error_message");
    error.parentNode.removeChild(error);
    document.getElementById("fib_nr").classList.remove("input_error");
}

function createErrorMsg(msg) {
    var label = document.getElementById('label');
    var error = document.createElement('div');
    error.id = 'error_message';
    error.innerHTML = msg;
    document.getElementById("fib_nr").classList.add("input_error");
    label.appendChild(error);
}

const computeFib = n => {
    var results = document.getElementById("results");
    var error = document.getElementById("error_message");

    if (results) {
        clearResult();
    }

    if (error) {
        removeErrorMessage();
    }

    if (n < 0) {
        let msg = 'Please choose a positive value.';
        createErrorMsg(msg);
        clearResult();
    }

    else if (n % 1 !== 0) {
        let msg = 'Please choose an integer.';
        createErrorMsg(msg);
        clearResult();
    }

    else if (n < 2) {
        return n;
    }

    else {
        return computeFib(n - 1) + computeFib(n - 2);
    }
}

export default computeFib;