// Initialise pre-defined values
var principal = 0;
var rate = 15;
var years = 1;
var comp = 12
var year = 1;
var amount = 0;

// Simple Interest
function computeSi() {
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    year = new Date().getFullYear()+parseInt(years);
    amount = parseFloat(principal) + (principal * years * rate)/100;
    amount = amount.toFixed(2);
    if (principal > 0) {
        document.getElementById("result").innerHTML="If you deposit \<mark>"+principal+"\</mark>,\<br\>at an interest rate of \<mark>"+rate+"\</mark>%\<br\>You will receive an amount of \<mark>"+amount+"\</mark>,\<br\>in the year \<mark>"+year+"\</mark>,\<br\>";
    } else {
        alert("Please enter a positive number: ");
        document.getElementById("principal").select();
    }
}

// Compound Interest
function computeCi() {
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value / 100;
    years = document.getElementById("years").value;
    comp = document.getElementById("comp").value;
    year = new Date().getFullYear()+parseInt(years);
    amount = principal * (Math.pow((1 + (rate / comp)), (comp * years)));
    amount = amount.toFixed(2);
    if (principal > 0) {
        document.getElementById("result").innerHTML="If you deposit \<mark>"+principal+"\</mark>,\<br\>at an interest rate of \<mark>"+rate*100+"\</mark>%\<br\>You will receive an amount of \<mark>"+amount+"\</mark>,\<br\>in the year \<mark>"+year+"\</mark>,\<br\>";
    } else {
        alert("Please enter a positive number: ");
        document.getElementById("principal").select();
    }
}

// Get live slider values
function currentRate() {   
    var slider = document.getElementById("rate");
    var currentpos = document.getElementById("display_rate");
    currentpos.innerHTML = slider.value +"%";
}

// Clear input bar
function clrScrn() {
    document.getElementById("result").value = "";
}

// Display input values
function display(value) {
    document.getElementById("result").value += value;
}

// Evaluate the result
function compute() {
    var elem = document.getElementById("result").value;
    var res = eval(elem);
    document.getElementById("result").value = res;
}