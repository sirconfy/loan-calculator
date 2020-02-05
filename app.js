// document.getElementById("loan-form").addEventListener("submit", calculateResult);

// function calculateResult(e) {
//   const amount = document.getElementById("amount");
//   const interest = document.getElementById("interest");
//   const years = document.getElementById("years");
//   const monthlyPayment = document.getElementById("monthly-payment");
//   const totalPayment = document.getElementById("total-payment");
//   const totalInterest = document.getElementById("totalInterest")
  
//   const principal = parseFloat(amount.value);
//   const calculatedInterest = parsefloat(interst.value) / 100 / 12;
//   const calculatedPayments = parseFloat(years.value) * 12;
 

// //compute monthly payment
// const x = Math.pow(1 + calculatedInterest, calculatedPayments);
// const monthly = (principal*x*calculatedInterest)/(x-1);
// if(isFinite(monthly)) {
//   monthlyPayment.value = monthly.toFixed(2).innerHTML;
//   totalPayment.value = (monthly * calculatedPayments). toFixed(2).innerHTML;
//   totalInterest = ((monthly * calculatedPayments) -principal).toFixed(2).innerHTML;

// } else {
//   console.log("please chheheh");
// }
//   e.preventDefault();

// }




// date for the borrowed money

var hello = setInterval(borrowedDate, 1000);
function borrowedDate() {

  var date = new Date();
  var day = date.getDate();
  var month = date.getUTCMonth() + 1;
  var year = date.getFullYear();
  document.getElementById("time").innerHTML = "DATE: "     + day + "-"+ month+ "-" + year;
}



const principal = document.getElementById("num");
const t = document.getElementById("anual");
const r = document.getElementById("repayment");
const output = document.getElementById("interest");
const monthlyPayment = document.getElementById("monthly");
const total = document.getElementById("total");

const btn = document.getElementById("btn");
btn.addEventListener("click", function(e) {
  e.preventDefault();
 
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculate, 3000);
});

function calculate() {
 
   let i = principal.value;
   let y = t.value;
   let k = r.value;
  
  //for monthly payment
   let d = ((1 + (y/100) / 12) ** (k*12) - 1 );
let m=   ((1 + (y/100) / 12) ** (k*12));
let g =(y/100) / 12 * m;

let j =  d / g;
let monthly = i / j;

// for the total payments
let calculatedPayments = k * 12






 if(isFinite(monthly)) {
  monthlyPayment.value = monthly.toFixed(2);
  total.value = (monthly * calculatedPayments).toFixed(2);
  output.value = ((monthly * calculatedPayments)-i).toFixed(2);
  document.getElementById('results').style.display = 'block';
  //hide loader
  document.getElementById('loading').style.display = 'none';

 } else {
       showError("please check the numbers");
   }
  
  

}

function showError(error) {
  const errorDiv = document.createElement('div');
  const card =document.querySelector('.card');
  const heading = document.querySelector( '.heading');
  errorDiv.className = 'alert alert-danger';
  errorDiv.appendChild(document.createTextNode(error));
  card.insertBefore(errorDiv, heading);
  setTimeout(clearError, 3000);
  document.getElementById('loading').style.display = 'none';

}


//clear error
function clearError() {
  document.querySelector('.alert').remove();
}

