/*

let js = 'amazing';
console.log(js);

let PI = 3.1415;

const country = "nepal";
const contient = "asia";
let population = 12552255;
console.log(country);
console.log(contient);
console.log(population);


let myPopulation = 12552255;


let yourPopulation = 125522555555;

console.log(myPopulation < yourPopulation);


let markHeight = 1.69;
let markweight = 78;
let johnHeight = 1.95;
let johnweight = 92;
bmiMark = markweight / (markHeight ** 2)
bmiJohn = johnweight / (johnHeight ** 2)
const higherbmimark = bmiMark > bmiJohn
console.log(bmiJohn, bmiMark, higherbmimark)

let markHeight = 1.69;
let markweight = 78;
let johnHeight = 1.95;
let johnweight = 92;
bmiMark = markweight / (markHeight ** 2)
bmiJohn = johnweight / (johnHeight ** 2)

////////////////////////////////////////////
LECTURE: If else

if (bmiMark >= bmiJohn) {
    console.log(`Mark bmi is ${bmiMark}which is higher than bmiJohn ${bmiJohn}`);
}
else {
    console.log(`Mark bmi is ${bmiMark}which is lower than bmiJohn ${bmiJohn}`)
}


//////////////////////////////////////////
LECTURE: Equality Operators: == vs. ===

5  falsy values=0,'', undefined, null, NaN


let numNeigh = 1
console.log(`howw many boders does your country have `)
if (numNeigh == 1) {
    console.log(`only 1 boder`);
}
else {
    console.log(`No boder`);
}
else -if () {

}


const a = Number(prompt(`howw many boders does your country have`))
console.log(a);
if (a === 1) {
    console.log(`only 1 boder`)
}

else if (a === 8) {
    console.log(`ther are more boder`);
}
else {
    console.log(`No boder`);
}

////////////////////////////////////////////
Leacture: Bollean logical operations

let englanguage = true;
let population = false;
let notIsland = true;
if (englanguage && population && notIsland) {
    console.log(`My country is suitable.`)
}
else {
    console.log(`My country is not for you.`)
}





//////////////LECTURE: The Conditional (Ternary) Operator////////





let population = "33";
population >= 33 ? console.log(`'Portugal's population is above average`)
    : console.log(`'Portugal's population isbelow average`);

const drink = age>=18 ? 'wine' : 'water';
console.log(drink)



const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`the bill was ${bill} , the tip was${tip} and the total is ${bill + tip} `);


///////////////////////////////
//////////////////////////////
//////////////////////////
///////////////////////////



Fundamental of javascript part 2:

Activate Strict code :'use strict';

'use strict'; //use at the start of java strict.







//////////////////////Function//////////////////////




function logger() {
    console.log(`my name is jonas`);
}
logger(5);
logger(8);

//////////////

function fruitmaker(apples, oranges) {

    const juice = `juice with${apples} and ${oranges} oranges`
    return juice;
}
const applejuice = fruitmaker(5, 3);
console.log(applejuice)

const appleOrangeJuice = fruitmaker(8, 4);
console.log(appleOrangeJuice);

/////////////////////
function describecountry(country, population, capital) {

    const information = `${country}has ${population} and it's capital city is ${capital} `
    return information;

}
const result = describecountry('Nepal', 30, 'kathmandu')
console.log(result);


///////////////// Function declaration vs expression./////////////
function calAge1(birthyear) {
    return 2020 - birthyear;

}
const age = calAge1(2000);
console.log(age)


function percentageOfWorld(population) {
    return `nepal has 30 million population which is ${(population / 7900) * 100}`;
}
const populationper = percentageOfWorld(500);
console.log(populationper);

//////////////expression///////
const calcAge2 = function (birthyear1) {
    return 2020 - birthyear1;
}
const age1 = calcAge2(2000);
console.log(age1);



//////////Arrow function////////////////
const calcage = birthyear => 2020 - birthyear
const ageee = calcage(2000);
console.log(ageee);

const yearretirement = birthyear => {
    const age = 2020 - birthyear;
    const retire = 65 - age;
    return retire;
}
console.log(yearretirement(1991));





/////////Function calling other function/////////////

function cutFruit(fruit) {
    return fruit * 4;
}

function fruitmaker(apples, oranges) {
    cutapple = cutFruit(apples);
    cutorange = cutFruit(oranges);
    const juice = `juice with${cutapple} and ${cutorange} oranges`
    return juice;
}
console.log(fruitmaker(2, 3));


const calcage = function (birthyear) {
    return 2020 - birthyear;
}

const retirement1 = function (birthyear, firstname) {
    const age = calcage(birthyear, firstname);
    const retirement = 65 - age;
    if (retirement > 0) {
        return retirement;
    }
    else {
        console.log(`${firstname}you already retire.`)
    }


}
console.log(retirement1(2000, "anish"));
console.log(retirement1(1938, "agghsh"));

/////////////////////////////////

const calcaverage = (a, b, c) => (a + b + c) / 3;

const dolphin = calcaverage(44, 23, 71);
const kolawas = calcaverage(65, 54, 49);
console.log(dolphin, kolawas);

const checkwinner = function (averaged, averagek) {
    if (averaged >= 2 * averagek) {
        console.log(`dolphine win the trophies`);
    }
    else if (averagek >= 2 * averaged) {
        console.log(`kowalwasa win the trophies`);
    }
    else {
        console.log(`no teams win`)
    }

}
checkwinner(dolphin, kolawas);



///////////Arrays///////////////////


const years1 = new Array(19988, 1974, 19846, 1645);
console.log(years);

years[2] = 'jay';
console.log(years);


const calcage = function (birthyear) {
    return 2037 - birthyear;
}
const years = [19988, 1974, 19846, 1645];

const age = calcage(years[0]);
const age1 = calcage(years[1]);
const age2 = calcage(years[2]);
console.log(age, age1, age2);



const population = [2, 4, 5, 9];
console.log(population.lenagth === 4)
const percentage = [population[0], population[1], population[2], population[3]]
console.log(percentage);



///////Push method to add at the end of array////////////
const friends = new Array('anish, sandesh, aashish');
friends.push('manish');
console.log(friends);

/////////////unshift to add at the start of array////////
friends.unshift('maro')
console.log(friends);



const calctip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = new Array(125, 555, 44);
const tip = [calctip(bills[0]), calctip(bills[1]), calctip(bills[2])];
console.log(bills, tip);





//////////////Object////////////////////////



const jonas = {
    firstName: 'jonas',
    lastName: 'anish',
    age: 18,
    job: ' teacher',
    friends: ['manish, sandesh']

}


/////////////Dot vs. bracket Notation
const jonas = {
    firstName: 'jonas',
    lastName: 'anish',
    age: 18,
    job: ' teacher',
    friends: ['manish, sandesh', 'aashish']
}
///////.notation///////
console.log(jonas.firstName);


////////////bracket Notation/////////////
console.log(jonas['firstName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);


const info = prompt('what do you want to know abot jonas choose between firstname, last name, age and job');
console.log(jonas[info]);

if (jonas[info]) {
    console.log(jonas[info]);
}
else {
    console.log('does not exit')
}

////////////////

//"jonas has 3 friend and bestfrien is called michael"///////
console.log(`${jonas.firstName} has${jonas.friends.length} and his best friend is ${jonas.friends[1]}`)




/////////////object methods/////////////////////

const jonas = {
    firstName: 'jonas',
    lastName: 'anish',
    birthyear: 1991,
    job: ' teacher',
    friends: ['manish, sandesh', 'aashish'],
    driverlicense: true,

    calcage: function (birthyear) {
        return 2037 - birthyear;
    }
}
console.log(jonas.calcage(jonas.birthyear));

////////////by using "this"//////////////
const jonas1 = {
    firstName: 'jonas',
    lastName: 'anish',
    birthyear: 1991,
    job: ' teacher',
    friends: ['manish, sandesh', 'aashish'],
    driverlicense: true,

    calcage: function () {
        return 2037 - this.birthyear;// "this"  means it is jonas
    }
}
console.log(jonas1.calcage());



//////////////challange////////////////

const jonas = {
    firstName: 'jonas',
    lastName: 'anish',
    birthyear: 1991,
    job: ' teacher',
    friends: ['manish, sandesh', 'aashish'],
    driverlicense: true,

    calcage: function () {
        this.age = 2037 - this.birthyear;
        return this.age
    },
    getsummery: function () {
        return `${this.firstName} is a ${this.calcage()} yearsold ${jonas.job}  and he has ${this.driverlicense ? 'a' : 'no'} driver license}`
    }
}
console.log(jonas.calcage());
console.log(jonas.getsummery());




//////////////challange///////////////////

const mark = {
    fullName: 'mark miller',
    mass: 78,
    height: 1.69,


    calcbmi: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: 'john smith',
    mass: 92,
    height: 1.95,


    calcbmi: function () {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;

    }


};
mark.calcbmi();
john.calcbmi();

console.log(mark.bmi, john.bmi);



///////////////the for loop////////////////


for (let rep = 1; rep <= 10; rep++) {
    console.log(rep)
}

const ram = [
    'jonas',
    'anish',
    18,
    ' teacher',
    ['manish, sandesh', 'mandip']

];

for (let i = 0; i < ram.length; i++) {
    console.log(ram[i])
}



const years = [1997, 1998, 2000, 1995];
const age = [];
for (i = 0; i < years.length; i++) {
    age.push(2037 - years[i])
}
console.log(age);

//////////////continue and break/////////

const ram = [
    'jonas',
    'anish',
    18,
    ' teacher',
    ['manish, sandesh', 'mandip']];

for (let i = 0; i < ram.lengthh; i++) {
    if ([i] !== 'string') continue;

    console.log(ram[i]);
}




/////////////loops in loops////////////

for (let exe = 1; exe < 4; exe++) {
    console.log(`-------starting excersice ${exe}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`lifting weight repeation ${rep}`);
    }
}





const bills = [24, 234, 115, 123, 200, 390];
const tips = [];
const totals = [];

const calctip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (i = 0; i <= bills.length; i++) {
  const tip = calctip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

("use scrict");

const x = 23;

*/

const myname = 'jonas';
function first() {
  const age = 30;

  if (age >= 30) {
    const decade = 3;
    var villenial = true;
  }
  function second() {
    const job = 'teacher';
    console.log(`${myname} is a ${age} old ${job}`);
  }
}
