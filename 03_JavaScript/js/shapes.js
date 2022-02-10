
class Shape{

    constructor(name){
        this.name = name;
    }

    toString(){
        return this.name;
    }
}

export class Circle extends Shape{

    constructor(radius){
        super('Circle');
        this.radius = radius;
    }

    get area (){
        return 3.1415 * this.radius * this.radius;
    }
    toString( ){
        return this.name + ' with area: ' + this.area;
    }
}

window.onload = function(){
    let circle = new Circle(3.0);
    console.log (circle.toString() )

    display("circleId", circle.toString());

}