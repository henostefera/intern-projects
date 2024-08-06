function calculatorLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;

    interestRateValue = document.getElementById("intereser-rate").value;

    MonthsToPayValue = document.getElementById("months-to-pay").value;
    interest = (loanAmountValue * (intrestRtaeValue * 0.01)) / MonthsToPayValue;

    monthlyPayment = (loanAmoutValue / MonthsToPayValue + interest).toFixed(2);

    document.getElementById("payment").innerHTML= `Monthly Payment: ${monthlyPayment}`;
}