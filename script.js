// Pre setting values to avoid typeError

var principal = 0;
var rate = 15;
var years = 1;
var interest = 0;
var year = 1;
var amount = 0;

function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    years = document.getElementById("years").value;
    year = new Date().getFullYear()+parseInt(years);
    interest = (principal * years * rate)/100;
    amount = interest + parseFloat(principal);
    if (principal > 0) 
    {
        document.getElementById("result").innerHTML="If you deposit \<mark>"+principal+"\</mark>,\<br\>at an interest rate of \<mark>"+rate+"\</mark>%\<br\>You will receive an amount of \<mark>"+amount+"\</mark>,\<br\>in the year \<mark>"+year+"\</mark>,\<br\>";
    }
    // Alert if principal < 0
    else
    {
        alert("Please enter a positive number: ");
        document.getElementById("principal").select();
    }
}

function currentRate()
{   
    // Get live slider values
    var slider = document.getElementById("rate");
    var currentpos = document.getElementById("display_rate");
    currentpos.innerHTML = slider.value +"%";
}