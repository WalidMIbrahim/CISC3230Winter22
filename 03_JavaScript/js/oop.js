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

}


window.onload = function(){
    const deval = new Student('100123100');
    deval.firstName = "Deval";
    deval.lastName = "Kevin";

    console.log(deval.firstName + ' '+deval.lastName);

}