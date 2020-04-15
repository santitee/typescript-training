import { Shape } from './Shape';
import { Circle } from './Circle';
import { Retangle } from './Retangle';

let myCircle = new Circle(5, 10, 20);
let myRetangle = new Retangle(0, 0, 3,7);

// declare an array of shapes ... initially empty
let theShape: Shape[] = [];

// add the shapes to the array
theShape.push(myCircle);
theShape.push(myRetangle);

for (let tempShape of theShape) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}