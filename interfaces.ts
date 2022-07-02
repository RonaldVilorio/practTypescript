// to fix below create an interface
interface Vehicle{
    name:string;
    year:number;
    broken:boolean;
    summary():string;

}
const printVehicle2 = (vehicle:Vehicle)=>{}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken:true
}
const drink ={
    color:'brown',
    carbonated:true,
    sugar:40,
    summary():string{
        return `My drink has ${this.sugar}`
    }
}
printVehicle2(oldCivic)


const printVehicle = (
    vehicle:{
        name:string; 
        year:number;
        broken:boolean}):void =>{
            console.log(vehicle.name)

}
printVehicle(oldCivic)
// problem with above is the annotation length

