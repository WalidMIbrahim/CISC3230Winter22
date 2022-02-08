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
    test();
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

function fibonacci(n){
    if((n==0) || (n==1)){
        return n;
    }else{
        return  fibonacci(n-1) +fibonacci(n-2);
    }
}


function wait (timeToWait = 0){
    return new Promise( (success, failure) =>{
        setTimeout(success, timeToWait);
        console.log("After wait function in wait function");
    });
}

async function divideLater(a, b, delay){
    return new Promise((resolve, reject) => {
        if (b==0) {
            reject('Cannot divide by zero');
        }else {
            setTimeout( () => {
                resolve (a/b);
            }, delay);
        }
    });
}


async function test (){
    /*let promise = wait(5000);
    promise.then(() =>{
        console.log("wait() prmoise has been fulfilled");
    });
    console.log("promise:" + promise);
    console.log("After wait function in Test");

    divideLater(15,3,5000).then( result1 => {
        console.log('15 divide by 3 = ' + result1);
        
        divideLater(result1,1,5000).then( result2 => {
            console.log('pre result divide by 1 = ' + result2);
        }).catch( (errorMessage) => {
            console.log("The Third error message is: " + errorMessage);
        });

    }).catch( (errorMessage) => {
        console.log("The first error message is: " + errorMessage);
    });
    
    divideLater(5,0,5000).then( result => {
        console.log('5 divide by 3 = ' + result);
    }).catch( (errorMessage) => {
        console.log("The second error message is: " + errorMessage);
    });*/

    let result1 = await divideLater(150,3,4000);
    console.log("await result1 = " + result1);
    let result2 = await divideLater(result1,10,4000);
    console.log("await result2 = " + result2);
}




//console.log ("Fibonacci 30" + fibonacci(35));
console.log("add 1 + 5 =" + addNumber(1,5));
console.log("value of x after for loop " + x);
console.log("value of i " + i);



