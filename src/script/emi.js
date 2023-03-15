function amountchange(){
  document.getElementById("txtamount").value=document.getElementById("rangeamount").value;
}
function yearschange(){
    document.getElementById("txtyears").value=document.getElementById("rangeyears").value;
  }
  function ratechange(){
    document.getElementById("txtrate").value=document.getElementById("rangerate").value;
  }
  function calculateclick(){
    var p = parseInt(document.getElementById("txtamount").value);
    var n = parseInt(document.getElementById("txtyears").value) * 12;
    var r = parseFloat(document.getElementById("txtrate").value)/12/100;

    var emi = p * r * Math.pow(1 + r, n) / Math.pow(1 + r, n) - 1;

    document.getElementById("result").innerHTML = "Your monthly installment amount is <b> <span class='text-primary'> &#8377;" + Math.round(emi) + "</span></b> for " + p + " in " + (n/12) + " years.";
}
function amountTextBoxChange(){
    document.getElementById("rangeamount").value=document.getElementById("txtamount").value;
}
function yearsTextBoxChange(){
    document.getElementById("rangeyears").value=document.getElementById("txtyears").value;
}
function rateTextBoxChange(){
    document.getElementById("rangerate").value=document.getElementById("txtrate").value;
}


  