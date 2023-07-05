// Functions Assignment
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const descUS = describeCountry('United States', 330, 'Washington D.C.');
const descCanada = describeCountry('Canada', 38, 'Ottawa');
const descMexico = describeCountry('Mexico', 126, 'Mexico City');
// console.log(descUS, descCanada, descMexico);

// Function Declarations vs. Expressions Assignment
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const percentageUS1 = percentageOfWorld1(330);
const percentageCanada1 = percentageOfWorld1(38);
const percentageMexico1 = percentageOfWorld1(126);
// console.log(percentageUS1, percentageCanada1, percentageMexico1);

// Arrow Functions Assignment
const percentageOfWorld3 = population => (population / 7900) * 100;

const percentageUS3 = percentageOfWorld3(330);
const percentageCanada3 = percentageOfWorld3(38);
const percentageMexico3 = percentageOfWorld3(126);
// console.log(percentageUS3, percentageCanada3, percentageMexico3);

// Functions Calling Other Functions Assignment
function describePopulation(country, population) {
    const percentage = percentageOfWorld1(population);
    const description = `${country} has ${population} million people, which is about ${percentage}% of the world.`;
    console.log(description);
}

describePopulation('United States', 330);
describePopulation('Canada', 38);
describePopulation('Mexico', 126);

// Introduction to Arrays Assignment
const populations = [330, 38, 126, 6];
console.log(populations.length === 4);

const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
];
console.log(percentages);

// Basic Array Operations (Methods) Assignment
const neighbors = ['Canada', 'Mexico'];

neighbors.push('Utopia');
console.log(neighbors);

neighbors.pop();
console.log(neighbors);

if (!neighbors.includes('Germany')) {
    console.log('Probably not a central European country :D');
}

neighbors[neighbors.indexOf('Mexico')] = 'Republic of Mexico';
console.log(neighbors);

// Introduction to Objects Assignment
const myCountry = {
    country: 'United States',
    capital: 'Washington DC',
    language: 'english',
    population: 330,
    neighbors: ['Canada', 'Mexico'],

    // Part of Object Methods Assignment
    describe: function () {
        console.log(
            `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and a capital called ${this.capital}.`
        );
    },

    // Part of Object Methods Assignment
    checkIsland: function () {
        this.isIsland = this.neighbors.length === 0 ? true : false;
    }
}

// Dot vs. Bracket Notation Assignment
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and a capital called ${myCountry.capital}.`);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

// Object Methods Assignment
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

// Iteration: The for Loop Assignment
for (let voter = 1; voter <= 50; voter++) {
    console.log(`Voter number ${voter} is currently voting`);
}

// Looping Arrays, Breaking and Continuing Assignment
// const populations = [330, 38, 126, 6]
const percentages2 = [];
for (let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
}
console.log(percentages, percentages2);

// Looping Backwards and Loops in Loops Assignment
const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = 0; i < listOfNeighbors.length; i++) {
    for (let j = 0; j < listOfNeighbors[i].length; j++) {
        console.log(`Neighbor: ${listOfNeighbors[i][j]}`);
    }
}

// The while Loop Assignment
const percentages3 = [];
let i = 0;
while (i < populations.length) {
    percentages3.push(percentageOfWorld1(populations[i]));
    i++;
}
console.log(percentages2, percentages3);