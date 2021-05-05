// 1. Combining Arrays

let asianCountries = ["Südkorea", "China", "Kambodscha", "Mongolei"];


let euroCountries = ["Deutschland", "Litauen", "Griechenland", "Irland", ...asianCountries];

// asianCountries needs to be assigned first for above example !! or error

// euroCountries.push(asianCountries);
// console.log(euroCountries);

// Joel solution below ( and above, my attempt was wrong, have commented out)

euroCountries = [...euroCountries, ...asianCountries]




// how do i just push the items, not the array? 

const colours = [ "red", "blue", "green"];
const birds = ["eagles", "vultures", "robins"];

const newArray = [...colours, ...birds];

console.log(newArray);



// 2. Copying Arrays

const bing = ["bing", "bang", "bong"];

const copyOfBing = [...bing];
console.log(copyOfBing);

copyOfBing.push("sing sang song");

console.log(copyOfBing);
console.log(bing);

// we know it is copy, as changes made to copy do not affect original


// 3. Find the Largest...

const iHateNumbers = [34, 63, 19, 358, 292];

const largestNum = param => Math.max(...param);

console.log(largestNum(iHateNumbers));


// 4. Find the Smallest

const smallestNum = param => Math.min(...param);

console.log(smallestNum(iHateNumbers));

console.log(Math.round(smallestNum)); // in case u want integer


//5 Clone and Merge....

const person = {name: "John"};
const job = {role: "Teacher"};

const cloneOfPerson = {...person};
console.log(cloneOfPerson);

console.log(person == cloneOfPerson);
console.log(person === cloneOfPerson);

let employee = {...person, ...job};
console.log(employee);

employee.role = "Walrus tamer";
console.log(employee);

// 6. Is the average a whole number?

function isAverageWholeNumber(param1, param2, param3, param4) {

    let average = (param1 + param2 +  param3 + param4) / 4;

    if (parseInt(Number(average)) === true) {
        console.log(true);
    } else {
        console.log(false);
    }
}

(isAverageWholeNumber(1, 2, 3, 4));

