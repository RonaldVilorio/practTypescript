class Vehicle{

    constructor(public color:string){}    
    protected honk(): void{
        console.log('honk');
    }
}
class Car extends Vehicle{
    constructor(public wheels:number,color:string){
        super(color);
    }
    private drive():void{
        console.log("chugga")
    }
    startDrivingProcess(): void{
        this.drive()
        this.honk();
    }
}
// const car2 = new Vehicle
const car = new Car(3,'blue');
// car.startDrivingProcess()
const vehicle = new Vehicle('orange')
console.log(vehicle.color,car.color,car.wheels)
