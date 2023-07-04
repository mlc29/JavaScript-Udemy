///// SECTION 1 ASSIGNMENTS /////

// Values and Variables Assignment
const country = 'United States';
const continent = 'North America';
let population = 330;
console.log(country);
console.log(continent);
console.log(population);

// Data Types Assignment
const isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const, and var Assignment
language = 'english';
// isIsland = true;

// Basic Operators Assignment
console.log(population / 2);
console.log(population++);
console.log(population > 6);
console.log(population < 33)
const description1 = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description1)

// Strings and Template Literals Assignment
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`
console.log(description);

// Taking Decisions: if/else Statements Assignment
if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}

// Type Conversion and Coercion Assignment
console.log('9' - '5'); // 4 -> 4
console.log('9' - '13' + '17'); // -417 -> '-417'
console.log('9' - '5' + 17); // 21 -> 21
console.log('123' < 57); // false -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // 107 -> 1143

// // Equality Operators: == vs. === Assignment
// const numNeighbors = Number(prompt('How many neighbor countries does your country have?'));
// if (numNeighbors === 1) {
//     console.log('Only 1 border!');
// } else if (numNeighbors > 1) {
//     console.log('More than 1 border');
// } else {
//     console.log('No borders');
// }

// Logical Operators Assignment
if (language === 'english' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} :)`);
} else {
    console.log(`${country} does not meet your criteria :(`);
}

// The switch Statement Assignment
switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('Most number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

// The Conditional (Ternary) Operator Assignment
console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'} average`);


///// END OF SECTION 1 /////