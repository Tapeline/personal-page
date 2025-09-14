$(document).ready(function() {

    // --- Configuration ---
    const words = ["Tapeline", "Ilya"]; // The two strings to alternate between
    const typingSpeed = 70; // Milliseconds per character
    const deletingSpeed = 40; // Milliseconds per character
    const pauseBeforeDelete = 1500; // Pause after typing a word (in ms)
    const pauseBeforeTyping = 200; // Pause after deleting a word (in ms)

    // --- Script State ---
    const $typewriterElement = $('#index-hero-typewriter'); // jQuery object selector
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentWord = words[wordIndex];
        let displayText = '';

        // Determine the current text to display
        if (isDeleting) {
            // Deleting: slice the string from the beginning to one character less
            displayText = currentWord.substring(0, charIndex - 1);
        } else {
            // Typing: slice the string from the beginning to the current character
            displayText = currentWord.substring(0, charIndex + 1);
        }

        $typewriterElement.text(displayText); // Use .text() to update content

        // --- Logic to switch between typing, pausing, and deleting ---

        // 1. If the word is fully typed
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            // Pause before starting to delete
            setTimeout(type, pauseBeforeDelete);
            return;
        }

        // 2. If the word is fully deleted
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            // Move to the next word (and loop back to the start if at the end)
            wordIndex = (wordIndex + 1) % words.length;
            // Pause before typing the next word
            setTimeout(type, pauseBeforeTyping);
            return;
        }

        // --- THIS IS THE CORRECTED LINE ---
        // Update the character index based on whether we are typing or deleting
        isDeleting ? charIndex-- : charIndex++;

        // Set the speed for the next character
        const speed = isDeleting ? deletingSpeed : typingSpeed;
        setTimeout(type, speed);
    }

    // Start the effect after a short delay
    setTimeout(type, 500);

});
