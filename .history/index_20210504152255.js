// 1. Combining Arrays

let euroCountries = ["Deutschland", "Litauen", "Griechenland", "Irland"];

let asianCountries = ["Südkorea", "China", "Kambodscha", "Mongolei"];


euroCountries.push(asianCountries[0][3]);
console.log(euroCountries);

const colours = [ "red", "blue", "green"];
const birds = ["eagles", "vultures", "robins"];

const newArray = [...colours, ...birds];

console.log(newArray);



// 2. Copying Arrays

