"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Retangle_1 = require("./Retangle");
var myShape = new Shape_1.Shape(10, 15);
var myCircle = new Circle_1.Circle(5, 10, 20);
var myRetangle = new Retangle_1.Retangle(0, 0, 3, 7);
// declare an array of shapes ... initially empty
var theShape = [];
// add the shapes to the array
theShape.push(myShape);
theShape.push(myCircle);
theShape.push(myRetangle);
for (var _i = 0, theShape_1 = theShape; _i < theShape_1.length; _i++) {
    var tempShape = theShape_1[_i];
    console.log(tempShape.getInfo());
}
