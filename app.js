//Current temperature in kelvin degree 
const kelvin = 293;

// converting kelvin to celsius 
const celsius= kelvin -273; 

// convert celsius to fahrenheit
let fahrenheit =(celsius * (9/5) + 32);
// round down fahrenheit variable 
fahrenheit= Math.floor(fahrenheit);

//Printing it to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert Celsius to Newton
let newton = celsius * (33/100);
newton = Math.floor(newton);

// Print the Newton temperature to the console
console.log(`The temperature is ${newton} degrees Newton.`);