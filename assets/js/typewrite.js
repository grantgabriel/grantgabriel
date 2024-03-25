// HTML element where the typewriter effect will be displayed
const typewriterElement = document.getElementById('typewriter');

// Array of sentences to display
const sentences = [
    'IT Student.',
    'Software Engineer.',
    'Golang Enthusiast.',
];

// Index to keep track of the current sentence
let currentSentenceIndex = 0;

// Speed settings (adjust as desired)
const typingDelay = 100;     // Delay between each character being typed
const erasingDelay = 50;     // Delay between each character being erased
const sentenceDelay = 1000;  // Delay before typing the next sentence

// Function to start the typewriter animation
function startTypewriter() {
    typeSentence(sentences[currentSentenceIndex]);
}

// Function to type out a sentence
function typeSentence(sentence) {
    let charIndex = 0;
    const sentenceLength = sentence.length;

    // Typing effect
    const typingInterval = setInterval(() => {
        typewriterElement.textContent += sentence.charAt(charIndex);
        charIndex++;

        // Check if the entire sentence has been typed
        if (charIndex === sentenceLength) {
            clearInterval(typingInterval);

            // Start erasing the sentence after a delay
            setTimeout(eraseSentence, sentenceDelay);
        }
    }, typingDelay);
}

// Function to erase the current sentence
function eraseSentence() {
    const sentence = sentences[currentSentenceIndex];
    let charIndex = sentence.length - 1; // Adjusted to correctly erase the sentence

    // Erasing effect
    const erasingInterval = setInterval(() => {
        typewriterElement.textContent = typewriterElement.textContent.slice(0, charIndex);
        charIndex--;

        // Check if the entire sentence has been erased
        if (charIndex === -1) { // Adjusted to correctly exit the erasing loop
            clearInterval(erasingInterval);

            // Move to the next sentence after a delay
            currentSentenceIndex++;
            if (currentSentenceIndex === sentences.length) {
                currentSentenceIndex = 0; // Reset index to loop back to the first sentence
            }
            setTimeout(startTypewriter, sentenceDelay);
        }
    }, erasingDelay);
}

// Start the typewriter animation
startTypewriter();
