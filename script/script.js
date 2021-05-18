(function () {

console.log("My code ia runnning");
})();

function compute()
{
    var principal = document.getElementById("principal").value;
    var focus = document.getElementById("principal").focus();
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*years*(rate /100);
    var year = new Date().getFullYear() + parseInt(years) ; 
    
    //create references to the input elements we wish to validate
    //Check if princippal field is empty
    if(principal == ""){
        alert("Please enter the principal");
        focus
        return false;
    }
    //Check if princippal field is zero or negative
    if(principal <=0){
        console.log("comwes hwew")
        alert("Please enter positive number");
        focus
        return false;  
    }
   //Check if rate field is empty
    if(rate == ""){
        alert("Please enter the rate");
        focus
        return false;
    } 
    alert("Field validation is correct");
    
    

   var k = document.getElementById("result");
   
   k.innerHTML = "";
   k.innerHTML += "If you deposit  <span style= 'background-color:yellow' > "
    + principal + "</span>,<br> at an interest rate of <span style= 'background-color:yellow'> "  + 
      rate   + "%</span><br> You will receive an amount of  <span style= 'background-color:yellow'>  " + 
      parseInt(interest) +"</span>,<br> in the year <span style= 'background-color:yellow'> " 
      + year +"</span>" ;

//var width = document.getElementById("cell").style.width= "2000px";
var cellheight = document.getElementById("cell").style.height = "600px";

   
//return true;
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= rateval + "%";
}
