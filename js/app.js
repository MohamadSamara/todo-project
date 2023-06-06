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

  
function questions() {
    
    question1 = prompt("Do you like programing ? (Yes/No)");
    question2 = prompt("Do you like my website ? (Yes/No)");
    question3 = prompt("Are you ready to learn programming ? (Yes/No)");

    let arr = [];

    if (question1 == "Yes" || question1 == "No") {
        arr.push(question1);
    }
    else{
        arr.push("invalid");
    }
    
    if (question2 == "Yes" || question2 == "No") {
        arr.push(question2);
    }
    else{
        arr.push("invalid");
    }
    
    
    if (question3 == "Yes" || question3 == "No") {
        arr.push(question3);
    }
    else{
        arr.push("invalid");
    }
    
    for (let i = 0; i < arr.length; i++) {
        console.log( arr[i] );    
    }
}

questions();