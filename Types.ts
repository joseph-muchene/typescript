// Type = Easy way to refer to the diffrent properties + functions that a value has

// variables = type annotations

let apples:number  = 5;
let speed:string = 'fast';
let hasName:boolean = true;
let nothingMuch:null = null;
let nothing:undefined = undefined;
let date:Date = new Date();

// object literal annotations
// Array
let colors:string[] = ["red","blue"];
let numbers:number[] = [1,3,4,6,7];
let isBooleans:boolean[] = [true,false];

// classes
class Car{

}

let car:Car = new Car()


interface poinInterface{x:number,y:number}
// object literal
const point:poinInterface  = {
    x:10,
    y:20
}
// Functions

const logNumber:(i:number) => void = (i:number) => {
    console.log(i)
}

const displayName:(name:string) => void =  (name:string) => console.log(name)

// when to use annotations
// 1 when we have a functions that return an any type
const json = "{x:10,y:20}"
const coodinates:{x:number; y:number} = JSON.parse(json)


// when we declatre a variable on one line and initialize it later

const names:string[] = ["joseph","mary","kevin"];
let found:boolean;
for(let i:number = 0; i < names.length; i++){
    if(names[i] === "kevin"){
        found = true
    }
}


// 3 when we have a variable whose variable cannot be inferred correctly;

// find a value greater than 0 and return it else return false;

let values:number[] = [-10,-1,10];
let numOrFound:number | boolean;

for(let x = 0; x < values.length; x++){
    if(values[x] > 0){
        numOrFound = values[x]
    }else{
        numOrFound = false
    }
}

