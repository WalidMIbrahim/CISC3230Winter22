import {Circle} from './shapes.js';

class Student{
    idNum = '';
    firstName = '';
    lastName = '';
    grades = [];

    constructor(idNum){
        this.idNum = idNum;
    }

    get idNum() {
        return this.idNum;
    }

    set idNum (idNum){
        this.idNum = idNum;
    }

    get gpa() {
        let sum = 0.0;
        for ( let i=0; i< this.grades.length; i++){
            sum+= this.grades[i];
        }
        return sum/ this.grades.length;
    }

    addGrade(grade){
        this.grades.push(grade);
    }
    
    toString(){
        return `<div> ${this.firstName} ${this.lastName}  GPA is:   ${this.gpa}</div>`
    }

    toString2(){
        return `${this.firstName} ${this.lastName}  GPA is:   ${this.gpa}`
    }

}


window.onload = function(){
    const deval = new Student('100123100');
    deval.firstName = "Deval";
    deval.lastName = "Kevin";
    deval.addGrade(3.0);
    deval.addGrade(4.0);
    deval.addGrade(3.5);


    const ben = new Student('100123110');
    ben.firstName = "Ben";
    ben.lastName = "Sam";
    ben.addGrade(3.3);
    ben.addGrade(3.0);
    ben.addGrade(3.5);

    //console.log(deval.firstName + ' '+deval.lastName +' GPA is: ' + deval.gpa);
    
    //let divOutput = document.getElementById('output');
    //divOutput.innerHTML += `<div> ${deval.firstName} ${deval.lastName}  GPA is:   ${deval.gpa}</div>`
    
    //info = `<div> ${deval.firstName} ${deval.lastName}  GPA is:   ${deval.gpa}</div>`
    //display( "devalInfo", info )

    display2( "devalInfo", deval.toString2());
    display2( "benInfo", ben.toString2());

    let circle = new Circle(3.0);
    console.log (circle.toString() )

    display("circleId", circle.toString());
}

function display(divID, content){
    let divOutput = document.getElementById('output');
    divOutput.innerHTML += `<div id=${divID}>${content} !!!</div>`
}

function display2(divID, content){
    let divOutput = document.getElementById('output');
    let contentNode = document.createTextNode(content);
    let contentDiv = document.createElement('div');
    contentDiv.appendChild(contentNode);
    divOutput.appendChild(contentDiv);
}