// 1. Combining Arrays

let euroCountries = ["Deutschland", "Litauen", "Griechenland", "Irland"];

let asianCountries = ["Südkorea", "China", "Kambodscha", "Mongolei"];


euroCountries.push(asianCountries);
console.log(euroCountries);


// how do i just push the items, not the array? 

const colours = [ "red", "blue", "green"];
const birds = ["eagles", "vultures", "robins"];

const newArray = [...colours, ...birds];

console.log(newArray);



// 2. Copying Arrays

const arrayToBeCopied = ["bing", "bang", "bong"];

const newVar = [...arrayToBeCopied];
console.log(newVar);

