/*Enunciado:
Defina una clase llamada AreaCalculator. Dentro de él,
crea un método estático que te permita calcular el área de la figura geométrica pasada
como parámetro.
El método te permitirá calcular el área del cuadrado, el rectángulo y el círculo.*/
class Square {
    constructor(side) {
    this.side = side;
    }
    }
    
    class Rectangle {
    constructor(width, height) {
    this.width = width;
    this.height = height;
    }
    }
    
    class Circle {
    constructor(radius) {
    this.radius = radius;
    }
    }
    
    class AreaCalculator {
        static calculate(figura){
            if (figura instanceof Square){
                return figura.side * figura.side
            }else if (figura instanceof Rectangle){
                return figura.width * figura.height
            }else if (figura instanceof Circle){
                return Math.PI * Math.pow(figura.radius,2)
            }
        }
    }
    
    const square = new Square(4);
    const rectangle = new Rectangle(4, 2);
    const circle = new Circle(5);
    
    console.log(AreaCalculator.calculate(square));
    console.log(AreaCalculator.calculate(rectangle));
    console.log(AreaCalculator.calculate(circle));