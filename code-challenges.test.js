// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { expect } = require("@jest/globals")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.
var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// a) Create a test with an expect statement using the variables provided.
Describe("codedMessage",() =>{
    test("takes in a string and returns a coded message",() =>{
        let secretCodeWord1 = "Lackadaisical"
        let secretCodeWord2 = "Gobbledygook"
        let secretCodeWord3 = "Eccentric"
        expect(codedMessage(secretCodeWord1).toEqual(["L4ck4d41s1c4l"]))
        expect(codedMessage(secretCodeWord2).toEqual(["G0bbl3dyg00k"]))
        expect(codesMessage(secretCodeWord3).toEqual(["3cc3ntr1c"]))
        // When i ran my test it gave me a ReferenceError. Describe is not defined. 
    })
})
// create a function called codedMessage 
// Paramater - string
// I want to create a new string and replace the letters with numbers using the .replace method. 
// return newStr

const codedMessage =(string)=> {
   let newStr = string.replace('a',4, 'e',3, 'i', 1, 'o', 0)
   {    return newStr
   }
        }
                /// Test did not passs. When i console.log this only the first letter is converting in the new string. I'm not sure how to convert all the letters to numbers.



// b) Create the function that makes the test pass.





// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
// Expected output: ["Apple", "Banana"]
var arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Banana", "Peach","Orange"]

Describe("returnLetter",() =>{
    test("takes in a an array and returns all the words that contain letter a",() =>{
        let arayOfWords1 = ["Apple", "Banana", "Plum", "Cherry", "Kiwi"]
        let arrayOfWords2 = ["Mango", "Orange", "Apricot", "Blueberry", "Peach"]
        expect(returnLetter(secretCodeWord1).toEqual(["Apple", "Banana"]))
        expect(returnLetter(secretCodeWord2).toEqual(["Mango","Banana", "Peach","Orange"]))
   


// declare a function that takes in an array as an argument
// create a new, emoty arry to store all words that contain the letter "a"
// create a loop that goes through ant array i pass to the function
// use a conitional statement to check if that word contains the letter "a"
// if that words contains the letter "a", I want to push the expected output into new arr.
// return the new original blank array
// pass my test 
const returnLetter = (arr) => {
    let arrayOfAs = []
    for(let i= 0; i < arr.length; i++){
        if(arr[i].charAt(0) === "A"){
            arrayOfAs.push('arrayofAs')
        }  
        }
        return arrayOfAs
    }
    //console.log(returnLetter(arrayOfWords1)); 
   // Test did not pass

    

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false

Describe("fullHouse",() =>{
    test("takes in a an array of 5 numbers and determines a full house",() =>{
        let hand1 = [5,5,5,3,3,4]
        let hand2 = [5,5,3,3,4]
        let hand3 = [5,5,5,5,4]
        expect(fullHouse(hand1).toEqual([5,5,5,3,3,4]))
        expect(fullHouse(hand2).toEqual([5,5,3,3,4]))
        expect(fullHouse(hand3).toEqual([5,5,5,5,4]))
// b) Create the function that makes the test pass.
// Create a function that takes in an array of five numbers.
// I know .map and  .filter makes a new array. .fill and .sort act on an existing array.
// I know im going to have to have to use a conditional which has to start with an "if" statement.
// Function named fullHouse that takes in an array.
// create a new array to store the new list of numbers.
// for each given number determine if the number is a pair. - having trouble with this 
// if a pair store into new array.
// return true or false depending on array of numbers.

const fullHouse = (array)=> {
    let  newArr = [];
     for (let i =0; i<array.length; i++){
     if (array[i] % 2 === 0) {
     newArr.push(array[i])
 }
     }
 return newArr
 }
 //console.log(fullHouse(hand1)) The test did not pass. When I node this function i recieve 5,5,5,3,3 instead of true.