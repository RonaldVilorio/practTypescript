class Vehicle{
    // drive(): void{
    //     console.log("chugga chugga")
    // }
    protected honk(): void{
        console.log('honk');
    }
}
class Car extends Vehicle{
    private drive():void{
        console.log("chugga")
    }
    startDrivingProcess(): void{
        this.drive()
        this.honk();
    }

}
const car2 = new Vehicle
const vehicle = new Vehicle()
const car = new Car();
car.startDrivingProcess()
