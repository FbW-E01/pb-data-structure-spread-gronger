// 1. Combining Arrays

let euroCountries = ["Deutschland", "Litauen", "Griechenland", "Irland"];

const asianCountries = ["Südkorea", "China", "Kambodscha", "Mongolei"];


euroCountries =+ [...asianCountries];
console.log(euroCountries);

const colours = [ "red", "blue", "green"];
const birds = ["eagles", "vultures", "robins"];

const newArray = [...colours, ...birds];

console.log(newArray);



// 2. Copying Arrays

