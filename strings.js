// STRINGS EXERCISES
// =================


// 1. Reverse that string
// ----------------------
// Task description: This one is a classic. Simply reverse the string without using reverse().

const reverseString = (someString) => {
    // your code
}

console.log("reverse string: ", reverseString("I am a string")) // gnirts a ma I



// 2. Is it a palindrome?
// ----------------------
// Task description: Another classic. You can apply your previous solution to help with this one.

// Does the given string spell out the same word when written out backwards? For example kayak.

const isPalindrome = (someString) => {
    // your code
}

console.log("racecar is palindrome: ", isPalindrome("racecar")) // true
console.log("apple is palindrome: ", isPalindrome("apple")) // false



// 3. Remove specific characters from a string
// ------------------------------------------
// Task description: What’s the most efficient way to strip specific characters from a string? Without using replace().

// Your function must strip multiple different characters from the provided string.

const removeCharacters = (someString, charactersToRemove) => {
    // your code
}

console.log("remove characters: ", removeCharacters("I am an example string", ["a", "x"]))
// I m n emple string



// 4. Find the most common character within the string
// ---------------------------------------------------
// Task description: Given any string, find the most commonly occurring character.

// If there are 2 or more most commonly occurring characters; return the character which comes first alphabetically.

// For instance:

// xybbbefaaag

// Would return a, as a and b both occur 3 times each, respectively, but a comes before b alphabetically.

const mostCommonCharacter = (someString) => {
    // your code
}

console.log("most common character in abcddefg: ", mostCommonCharacter("abcddefg")) // d
console.log("most common character in heggbdeff: ", mostCommonCharacter("heggbdeff")) // f



// 5. Find the repeating characters
// --------------------------------
// Task description: Return an array containing all repeating characters that occur in the provided string.

// Your function should accept a second parameter that defines how many times the target character should repeat before it is returned.

const findDuplicates = (someString, repeatTimes) => {
    // your code
}

console.log("find two times duplicates in abcddef: ", findDuplicates("abcddef", 2)) // [d]
console.log("find three duplicates in tfghhhplffzaaa: ", findDuplicates("tfghhhplffzaaa", 3)) // [h, a]



// 6. Is the nth letter a vowel or a consonant?
// --------------------------------------------
// Task description: Determine whether the letter at the supplied index in the provided string is either a vowel or a consonant.

const vowelOrConsonant = (someString, position) => {
    // your code
}

console.log("is character 4 vowel or consonant in hello: ", vowelOrConsonant("hello", 4)) // consonant
console.log("is character 2 vowel or consonant in cat: ", vowelOrConsonant("cat", 2)) // vowel



// 7. Sort the string alphabetically
// ---------------------------------
// Task description: Return the supplied string in alphabetical order. Your function must be able to sort the string in either direction; so either ascending or descending alphabetical order.

const sortString = (someString, reverseOrder) => {
    // your code
}

console.log("sort string A-Z: ", sortString("bacd", false)) // "abcd"
console.log("sort string Z-A: ", sortString("axedzpq", true)) // "zxqpeda"


// 8. Is the string in alphabetic order?
// -------------------------------------
// Task description: Similarly, what’s the most efficient way to check if a string is in alphabetic order? Your function must be able to verify reverse-alphabetic order, also.

const isOrderedAlphabetically = (someString, reverseOrder) => {
    // your code
}

console.log("is string abbcddeikl ordered alphabetically: ", isOrderedAlphabetically("abbcddeikl", false)) // true
console.log("is string jheca ordered alphabetically: ", isOrderedAlphabetically("jheca", true)) // true



// 9. Capitalize the first letter of each word
// ------------------------------------------
// Task description: Write a function to capitalize the first letter of each word in the provided string.

const capitalizeFirstLetterOfEachWord = (someString) => {
    // your code
}

console.log(`capitalize first letter of each word in string "i am a string": `, capitalizeFirstLetterOfEachWord("i am a string")) // I Am A String



// 10. Search for a string within a string
// ---------------------------------------
// Task description: Does the target string contain the provided string? No use of indexOf() or similar functions is allowed.

const stringContains = (someString, stringToSearchFor) => {
    // your code
}

console.log(`string "catapult" contains "cat": `, stringContains("catapult", "cat")) // true



// 11. Shuffle the string
// ---------------------
// Task description: Write a function to completely randomize a given string. The string should be scrambled entirely, in a random a manner as possible.

const shuffle = (someString) => {
    // your code
}

console.log(`shuffle "hello": `, shuffle("hello")) // lelho



// 12. Alternating caps
// --------------------
// Task description: Return the supplied string, but every other letter should be capitalized.

const alternateCaps = (someString) => {
    // your code
}

console.log(`alternate caps in "I am a string": `, alternateCaps("I am a string")) // I aM a StRiNg



// 13. Quote extractor
// -------------------
// Task description: Given a quote in a format like this:

// “[QUOTE]” – [author]

// Return an array containing both the quote text and the author. Both components (quote, author) could also contain hyphens (-).

const extractQuote = (quote) => {    
    // your code
}

const quote = `"The unexamined life is not worth living." - Socrates`

console.log(`extract quote "The unexamined life is not worth living." - Socrates: `, extractQuote(quote))
// ["The unexamined life is not worth living.", "Socrates"]



// 14. Verify the email address
// ----------------------------
// Task description: In this JavaScript exercise, write a function to determine whether an email address is valid or not.

const verifyEmail = (email) => {
    // your code
}

console.log(`verify email "somebody@somewhere": `, verifyEmail("somebody@somewhere")) // false
console.log(`verify email "person@company.com": `, verifyEmail("person@company.com")) // true