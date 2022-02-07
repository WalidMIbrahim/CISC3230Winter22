window.onload = function(){
    //var: globle scope 
    //let: local scope
    var nameField = document.getElementById("name_id");
    let ageField = document.getElementsByName("age_name");
    let hiButton = document.getElementById("hiButton");
    hiButton.onclick = function(){
        let name_value = nameField.value;
        let age = parseInt(ageField[0].value);
        console.log("Your name is " + name_value);
        console.log("your age is " + age);

        let ouputDiv = document.getElementById("output");
        let driveDiv = document.getElementById("drive");

        // innerText: display as text only.
        // innerHTML: display as HTML code.
        // =  : is assignemt 
        // == : is for compare and ignore type compare
        // ===: is for compare and inforce type compare
        ouputDiv.innerHTML = ` <p> Hi ${name_value} <br> your age is ${age}</p>`;
        if (age > 18){
            driveDiv.innerText = "You can have a driver license!!";
        }else if (age === 18){
            driveDiv.innerText = "You may drive";
        }else{
            driveDiv.innerText = "You are still young to drive!!";
        }

    
    };
    //local storage: store per device i.e. shared between browser tabs.
    window.localStorage.setItem('DriverExamLocalion', 'Oshawa');
    console.log( 'Driving Exam location is in ' 
            + window.localStorage.getItem('DriverExamLocalion'));
    window.localStorage.removeItem('DriverExamLocalion');
    
    //Session Storage: store per session i.e. the same browser tab
    window.sessionStorage.setItem('LocationHour', '8am');
    console.log( 'Driving Exam location is in ' 
            + window.sessionStorage.getItem('LocationHour'));
    window.sessionStorage.removeItem('LocationHour');
};


function addNumber(a,b){
    return a+b;
}

for(var i=0; i<10;i++){
    var x =i;
    //console.log("value of x " + x);
}
console.log("add 1 +5 =" + addNumber(1,5));
console.log("value of x after for loop " + x);
console.log("value of i " + i);



