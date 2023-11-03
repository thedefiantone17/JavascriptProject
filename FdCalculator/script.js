function calculateMaturityAmt() {
    // getting input values from from elements

    const principle = parseFloat(document.getElementById('principle').value);
    const interest = parseFloat(document.getElementById('interest').value);
    const period = parseFloat(document.getElementById('period').value);

    // Calculation

    const maturityAmt= principle + (principle*interest*period) / 100;

    // result

    document.getElementById('result').innerText = `Maturity Amount: ₹ ${maturityAmt.toFixed(2)}`;
}

// Event listner
document.getElementById('btnCalculate').addEventListener('click', calculateMaturityAmt);