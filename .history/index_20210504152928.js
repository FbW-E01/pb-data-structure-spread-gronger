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


// 3. Find the Largest...

const iHateNumbers = [34, 63, 19, 358, 292];

const largestNum = param => Math.max(...param);

console.log(largestNum(iHateNumbers));


// 4. Find the Smallest

const smallestNum = param => Math.min(...param);

console.log(smallestNum(iHateNumbers));