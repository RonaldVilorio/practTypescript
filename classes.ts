class Vehicle{
    drive(): void{
        console.log("chugga chugga")
    }
}
class Car extends Vehicle{
    drive():void{
        console.log("chugga")
    }



}
const vehicle = new Vehicle()
const car = new Car();
car.drive()
vehicle.drive()