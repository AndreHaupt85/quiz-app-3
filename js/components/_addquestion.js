
export default function newQuestion() {
    // import form data
    const data = document.querySelector('[data-js="form"]');
    const baseArrays = [{question: "Can i go to sleep?", answer: "No! Finish it!", hashtag1: "Fast!", hashtag2: " Faster!",hashtag3: "NOW!!!"}]
    // add submit event
    data.addEventListener("submit", (event) => {
    // stops send and delet of submit event
        event.preventDefault();

        // convert all user inputs in a array
        const userForm = event.target;
        //converts all values of the user inputs in a arrey
        const fields = userForm.elements;

        // create a constant with the data for 1 new card
        const newCard = {
            // create a ID to count through the cards
            id: baseArrays.length+1,
            // sets the bootmark icon on not bookmarked
            isBookmarked: false,
            // adds the question input of the user
            question: fields.question.value,
            // adds the answer input of the user
            answer: fields.answer.value,
            // adds first hashtag input of user
            hashtag1: fields.hashtag1.value,
            hashtag2: fields.hashtag2.value,
            hashtag3: fields.hashtag3.value,
        };

        baseArrays.push(newCard);
        
        console.log(baseArrays);

        // reset the form
        event.target.reset();
        // jumps after reset in the first formpart
        fields.question.focus();
    });
}