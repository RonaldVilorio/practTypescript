let apples: number=5
let speed: string='fast'
let hasName: boolean=true
let nothingMuch: null=null
let nothing: undefined=undefined

// objs/arrays
let now: Date=new Date()
let colors: string[]=['red','green','blue']
let myNumbers: number[]=[1,2,3]
let truths: boolean[]=[true,false]

// classes
class Car{}
let car: Car = new Car();

// obj literal
let point: {x:number; y:number}= {
    x:10,
    y:20
}
//function
const logNumber:(i:number)=> void = (i: number)=>{
    console.log(i);
}

// when to use annotations
// func that returns any type

const json = '{"x":10,"y":20}'
const coordinates: {x: number; y:number} = JSON.parse(json);

// when we declare a var on one line and initalize it later
let words = ['red','green','blue']
let foundWord = false