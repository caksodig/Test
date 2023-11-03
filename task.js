function findLongestWord(sentence) {
    // Split the sentence into words
    const words = sentence.split(" ");
    
    // Initialize variables to store the longest word and its length
    let longestWord = "";
    let maxLength = 0;
    
    // Iterate through the words in the sentence
    for (let i = 0; i < words.length; i++) {
        // Remove any punctuation and whitespace from the word
        const word = words[i].replace(/[.,!?;:"']/g, "");
        
        // Check if the current word is longer than the previously found longest word
        if (word.length > maxLength) {
            longestWord = word;
            maxLength = word.length;
        }
    }
    
    return longestWord;
}

// Test cases
console.log(findLongestWord("The sun was shining brightly in the clear blue sky."));  // return shining
console.log(findLongestWord("The birds were singing and the flowers were in bloom."));  // return singing
console.log(findLongestWord("She was walking down the street, lost in thought."));  // return walking
console.log(findLongestWord("He sat at his desk, staring at the computer screen."));  // return staring
console.log(findLongestWord("The city was bustling with people going about their day."));  // return bustling
console.log(findLongestWord("The air was cool and crisp, perfect for a morning jog."));  // return perfect
console.log(findLongestWord("She stood at the edge of the cliff, looking out at the vast ocean."));  // return cliff
console.log(findLongestWord("The trees rustled in the gentle breeze, their leaves a riot of color."));  // return gentle
console.log(findLongestWord("He lay on the grass, gazing up at the clouds as they drifted by."));  // return gazing
console.log(findLongestWord("The sound of laughter filled the room as friends gathered for dinner."));  // return laughter
