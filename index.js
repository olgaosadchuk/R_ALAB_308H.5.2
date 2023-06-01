const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

//1.Every//////////////////////////////////////////////////////////
//Determine if every number is greater than or equal to 0.
const isBelowThreshold = (currentValue) => currentValue >= 0;
console.log(nums.every(isBelowThreshold));

//Determine if every word shorter than 8 characters.
const shorter = panagram.every(word => word.length < 8);
console.log(shorter);
//////////////////////////////////////////////////////////////////////


//2. Filter//////////////////////////////////////////////////////////////
//filter the array for numbers less than 4.
const result = nums.filter(currentValue => currentValue < 4);
console.log(result);

//Filter words that have an even length.
const resultEven = panagram.filter(word => word.length % 2 === 0);
console.log(resultEven);
/////////////////////////////////////////////////////////////////////////


//3. Find///////////////////////////////////////////////////////////////////
//Find the first value divisible by 5.
const found = nums.find(currentValue => currentValue % 5 === 0);
console.log(found);

//Find the first word that is longer than 5 characters.
const foundFirst = panagram.find(world => world.length > 5);
console.log(foundFirst);
///////////////////////////////////////////////////////////////////////////////


//4. Find Index////////////////////////////////////////////////////////////////
//Find the index of the first number that is divisible by 3.
const findNumber = nums.findIndex(currentValue => currentValue % 3 === 0);
console.log(findNumber);

//Find the index of the first word that is less than 2 characters long.
const findWord = panagram.findIndex(world => world.length < 2);
console.log(findWord);
//////////////////////////////////////////////////////////////////////////////////


//5. For Each/////////////////////////////////////////////////////////////////////
//Log each value of the array multiplied by 3.
nums.forEach(element => console.log(element * 3));

//Log each word with an exclamation point at the end of it.
panagram.forEach(world => console.log(world + '!'));
///////////////////////////////////////////////////////////////////////////////////


//6. Map/////////////////////////////////////////////////////////////////////////////
//Make a new array of each number multiplied by 100.
const map1 = nums.map(element => console.log(element * 100));

//Make a new array of all of the words in all uppercase.
const map2 = panagram.map(world => world.toUpperCase());
console.log(map2);
//////////////////////////////////////////////////////////////////////////////////////


//7. Some //////////////////////////////////////////////////////////////////////////////
//Find out if some numbers are divisible by 7.
nums.some(element => console.log(element % 7 === 0));

//Find out if some words have the letter a in them.
const some2 = panagram.some(word => word.includes('a'));
console.log(some2);
////////////////////////////////////////////////////////////////////////////////////////


//8. Reduce ///////////////////////////////////////////////////////////////////////////
//Add all of the numbers in the array together using the reduce method.
const initialValue = 0;
const sumWithInitial = nums.reduce(
    (accumulator, currentValue) => accumulator + currentValue, initialValue);
console.log(sumWithInitial);

//Concatenate all the words using reduce.
const concatenatedWords = panagram.reduce((acc, word) => acc + word);
console.log(concatenatedWords);
////////////////////////////////////////////////////////////////////////////////////////


//9. Sort ////////////////////////////////////////////////////////////////////////////
//Sort the numbers in ascending order.
nums.sort();
console.log(nums);

//Sort the numbers in descending order.
nums.sort((a, b) => b - a);
console.log(nums);

//Sort the words in ascending order.
panagram.sort((a, b) => a.localeCompare(b));
console.log(panagram);

//Sort the words in descending order.
panagram.sort((a, b) => b.localeCompare(a));
console.log(panagram);
///////////////////////////////////////////////////////////////////////////////////////////


//10. isPanagram //////////////////////////////////////////////////////////////////////////
//test whether each letter a-z (case insensitive) is used at least once.
function isPanagram(arr) {
    const letters = new Set();
    for (const word of arr) {
        for (const char of word.toLowerCase()) {
            if (/[a-z]/.test(char)) {
                letters.add(char);
            }
        }
    }
    return letters.size === 26;
}
console.log(isPanagram(panagram));
////////////////////////////////////////////////////////////////////////////////////////////////


//11. Working with data  //////////////////////////////////////////////////////////////////////
const products = [
    {
        "name": "allen wrench",
        "price": 2.99,
        "description": "handy tool"
    },
    {
        "name": "cornucopia",
        "price": 5.99,
        "description": "festive holiday decoration"
    },
    {
        "name": "banana",
        "price": 0.99,
        "description": "full of potassium"
    },
    {
        "name": "guillotine (cigar)",
        "price": 10.59,
        "description": "behead your stub"
    },
    {
        "name": "jack-o-lantern",
        "price": 3.99,
        "description": "spooky seasonal fun"
    },
    {
        "name": "doggie treat (box)",
        "price": 5.99,
        "description": "fido loves 'em"
    },
    {
        "name": "egg separator",
        "price": 3.99,
        "description": "it separates yolks from whites"
    },
    {
        "name": "LED lightbulb",
        "price": 6.55,
        "description": "It's super-efficient!"
    },
    {
        "name": "owl pellets",
        "price": 3.99,
        "description": "Don't ask what they used to be."
    },
    {
        "name": "flag",
        "price": 5.99,
        "description": "catches the breeze"
    },
    {
        "name": "hair brush",
        "price": 6.99,
        "description": "fine boar bristles"
    },
    {
        "name": "iridium (one gram)",
        "price": 19.36,
        "description": "corrosion-resistant metal"
    },
    {
        "name": "quark",
        "price": 0.01,
        "description": "Very small"
    },
    {
        "name": "turtleneck",
        "price": 19.99,
        "description": "available in black and slightly-darker black"
    },
    {
        "name": "kaleidoscope",
        "price": 8.25,
        "description": "tube with moving plastic pieces inside"
    },
    {
        "name": "mitt (leather)",
        "price": 15,
        "description": "regulation sized"
    },
    {
        "name": "nothing",
        "price": 10,
        "description": "Hey, if you pay us, we won't ask any questions."
    },
    {
        "name": "violin",
        "price": 2000,
        "description": "Talk about a JS fiddle..."
    },
    {
        "name": "yoyo",
        "price": 1,
        "description": "We had to pull some strings to get this one in."
    },
    {
        "name": "pincushion",
        "price": 1.99,
        "description": "You'll get 'stuck' on it"
    },
]
//Filter for products with a price that is less than 10.
const price1 = products.filter(value => value.price < 10);
console.log(price1);

//Sort alphabetically by product name.
const alphabet = products.sort((a, b) => a.name.localeCompare(b.name));
console.log(alphabet);
//////////////////////////////////////////////////////////////////////////////////////////




