window.onload = init;

let principal;
let interestRate;
let monthlyRate;
let loanLength;
let totalMonths;

let paymentsPerMonth;
let totalInterestPaid;
// Principal amount + interest rate/ 12) (1 + interest rate / 12)^ -payments

function init()
{
    principal = parseFloat(document.getElementById("principal").value)
    interestRate = parseFloat(document.getElementById("interest").value) 
    loanLength = parseFloat(document.getElementById("loanLength").value)
    document.getElementById("submitBtn").onclick = calculate
   
}

function calculate()
{
    
    monthlyRate = interestRate / 1200;
    totalMonths = loanLength * 12; 
    paymentsPerMonth = (principal + (monthlyRate)) /  1 - Math.pow(1 + monthlyRate, totalMonths);
    console.log(interestRate)
}