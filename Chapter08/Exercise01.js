'use strict'
// Create a function that will display a random sentence to the console every minute

function displayRandomSentence() {
    const sentences = [
        "Hello, world!",
        "I'm learning JS.",
        "The sky is blue.",
        "How are you?.",
        "I'm just writting some random sentences."
    ];

    function displaySentence() {
        const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
        console.log(randomSentence);
    }

    displaySentence();
    setInterval(displaySentence, 60 * 1000);
}

displayRandomSentence();
