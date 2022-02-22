// get input from input field
function getInput(id) {
    const inputField = document.getElementById(id);
    const inputFieldText = inputField.value;
    inputField.value = '';
    const inputValue = parseFloat(inputFieldText);
    return inputValue;

}
// update total value and balance
function updateValue(id, amount) {
    if (amount < 0)
        alert('please input a positive number');
    else {
        const totalField = document.getElementById(id);
        const totalText = totalField.innerText;
        const previousValue = parseFloat(totalText);
        const newTotal = previousValue + amount;
        totalField.innerText = newTotal;

    }
}

// update balance
function updateBalance(amount, isadding) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const previousTotal = parseFloat(balanceText);
    if (isadding) {
        const newBalance = previousTotal + amount;
        balanceTotal.innerText = newBalance;
    }
    else {
        const newBalance = previousTotal - amount;
        balanceTotal.innerText = newBalance;
    }

}
// check balance
function checkBalance() {
    const input = document.getElementById('balance-total');
    const inputText = input.innerText;
    const balanceValue = parseFloat(inputText);
    return balanceValue;
}
// for deposit
document.getElementById('deposit-button').addEventListener('click', function () {
    const value = getInput('deposit-input');
    const depositTotal = updateValue('deposit-total', value);
    updateBalance(value, true);
})
// for withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    const value = getInput('withdraw-input');
    const balance = checkBalance();
    if (value < balance) {
        const withdrawTotal = updateValue('withdraw-total', value);
        updateBalance(value, false);
    }
    else {
        alert('you have insufficient balance');
    }
})
//complete

