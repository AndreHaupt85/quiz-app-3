// export default function(createCard) {

    const form = document.querySelector('[data-js="form"]');

    form.addEventListener('submit', (event) =>{
        // stops the reset of the form after pushing submit button
        event.preventDefault();

        const myForm = event.target;
        const fields = myForm.elements;

        console.log(fields.answer.value)

        // create a constant with all data from the form
        const formData = {
            question: fields.question.value,
            answer: fields.answer.value,
            hashtag1: fields.hashtag1.value,
            hashtag2: fields.hashtag2.value,
            hashtag3: fields.hashtag3.value,
        };
        
        const quizCards = [];
        quizCard.push(formData);

        console.log(quizCards);

        // reset the form
        event.target.reset();
        // jumps after reset in the first formpart
        fields.question.focus();
    });
// }