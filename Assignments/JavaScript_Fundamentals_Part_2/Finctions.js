/*
    1. Write a function called 'describeCountry' which takes three parameters: 
       'country', 'population' and 'capitalCity'. Based on this input, the 
       function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki' 
    2. Call this function 3 times, with input data for 3 different countries. Store the 
       returned values in 3 different variables, and log them to the console 
*/

function describeCountry(country,population,capitalCity) {
  return `${country} has ${population} millions people and its capital city is ${capitalCity}`
}

const ans1 = describeCountry("India",1417.2,"New Delhi");
const ans2 = describeCountry("Japan",125,"Tokyo");
const ans3 = describeCountry("Russia",147.2,"Moscow");

console.log(`\n${ans1}\n\n${ans2}\n\n${ans3}\n`);