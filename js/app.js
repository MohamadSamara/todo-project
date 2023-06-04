let Fname = prompt("Please enter your name");

let gender = prompt("Please enter your gender (male or female)");

let age = parseInt(prompt("Please enter your age"));

if (age <= 0) {
    alert("the age is less than or equal to zero!!");
}

let skip = confirm("do you want to skip the welcoming message !");
if (skip == false) {
    
    if (gender == "male") {
        alert("welcome Mr." + Fname)
    }
    else if (gender == "female") {
        alert("welcome Ms." + Fname)
    }
    else{
        alert("welcome " + Fname)        
    }
     
  }
  
  