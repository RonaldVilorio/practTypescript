// to fix below create an interface
interface Vehicle{
    name:string;
    year:number;
    broken:boolean;
}
const printVehicle2 = (vehicle:Vehicle)=>{}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken:true
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

