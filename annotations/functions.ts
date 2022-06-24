const add = (a:number,b:number): number=>{
    return a+b

}
function divide(a:number,b:number): number{
    return a/b
}
const multiply = function(a:number,b:number): number{
    return a*b
}
// destructuring
const todaysWeather = {
    date:new Date(),
    weather:'sunny'
}
const logWeather = (forecast:{date:Date,weather:string}):void=>{
    console.log(forecast.date, forecast.weather)
}
logWeather(todaysWeather)

const logWeather2 =({date,weather}:{date:Date,weather:string}):void=>{
    console.log(date,weather)
}