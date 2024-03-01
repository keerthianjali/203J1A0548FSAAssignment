// Declare variables of different types and assign values

// number
let RollNumber: number = 42;

// string
let Name: string = "Anjali";

// boolean
let isTrue: boolean = true;

// array of numbers
let numbersArray: number[] = [1, 2, 3, 4, 5];

// tuple with elements of type string and number
let MyTuple: [string, number] = ["apple", 10];

// enum for days of the week
enum RainbowColors {
    Violet,
    Indigo,
    Blue,
    Green,
    Orange,
    Red,
    Yellow
}

let Rc: RainbowColors = RainbowColors.Yellow;


//Function called add that takes two parameters of numbers and return their sum

function add(num1: number, num2: number): number {
    return num1 + num2;
}

let sum: number = add(5,6);
console.log(sum);

//function calledcapitalize that takes a parameter of type string and returns the capitalized version of it

function Capitalize(input: string): string {
    if(input.length == 0 ) {
        return input;
    }
    return input.charAt(0).toUpperCase() + input.slice(1);
}

let msg = "hello";
let c_msg = Capitalize(msg);
console.log(c_msg);

/*Define an interface called Person with the following properties:
 name of type string
 age of type number
 email of type string in typescript */

 interface Person {
    name: string;
    age: number;
    email: string;
}

//Declare a variable user of type Person and initialize it with sample data in typescript
let person: Person = {
    name: "Anjali",
    age: 20,
    email: "keerthianjali653@gmail.com"
};

/* Create a class called Car with the following properties:
make of type string
 model of type string
year of type number in typescript */

class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo(): void {
        console.log(`Car Information:
            Make: ${this.make}
            Model: ${this.model}
            Year: ${this.year}`);
    }
}

// Implement a method displayInfo which logs the information about the car.

let myCar = new Car("Toyota", "Camry", 2022);
myCar.displayInfo();

/*
Write a generic function called reverseArray that takes an array of any type
and returns a reversed version of that array in typescript */

function reverseArray<T>(array: T[]): T[] {
    return array.reverse();
}

// Example usage:
let originalArray: number[] = [1, 2, 3, 4, 5];
let reversedArray: number[] = reverseArray(originalArray);
console.log(reversedArray); 
