// function to hide and show the answers

export default function toggleAnswer() {
// declares the constant cards for all data-js quizcard
const cards = document.querySelectorAll('[data-js="quizcard"]');
    // declares every item of cards as the constant card
    cards.forEach((card) => {
        // declares the constant answerbutton to the Asnwerbutton in HTML
        const answerButton = card.querySelector('[data-js="quizcard--answerbutton"]');
        // declares the Awnsertext to a constant
        const answerText = card.querySelector('[data-js="quizcard--answer"]');
        // adds a click event to the answerbutton
        answerButton.addEventListener('click', () => {
            // removes the class hidden from the class Answer
            answerText.classList.toggle('hidden');
        });
    });
}