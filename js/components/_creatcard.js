export default function(createcard) {
baseArrays.forEach((baseArray) => {
        
    const container = document.querySelector('[data-js="quiz11"]');

    console.log(container)
        
    const quizcardcontianer = document.createElement('article');
    quizcardcontianer.classList.add("container--quizcardpage");
    quizcardcontianer.setAttribute('data-js', 'quizcardpage');
    
    container.append(quizcardcontianer);

    // ---------------------------------------------------------------
    // add a section
    const quizcard = document.createElement('section');
    // add a class
    quizcard.classList.add("quizcardpage--quizcard");
    // add a data-js
    quizcard.setAttribute('data-js', 'quizcard');
    
    //create the element in html
    quizcardcontianer.append(quizcard);
    // ----------------------------------------------------------------
    
    const bookmarkbox = document.createElement('div');
    bookmarkbox.classList.add("quizcardpage--bookmarkbox");
        
    
    quizcard.append(bookmarkbox);
    // ----------------------------------------------------------------
    const bootmarkiconbutton = document.createElement('button');
    bootmarkiconbutton.classList.add("quizcard--bookmarkiconbutton");
        
    
    bookmarkbox.append(bootmarkiconbutton);
    // ----------------------------------------------------------------
    const bookmarkicon = document.createElement('img');
    bookmarkicon.classList.add("quizcard--bookmarkicon");
    bookmarkicon.src="./pictures/bookmark_icon.png";
    bookmarkicon.alt='bookmark icon';
    bookmarkicon.setAttribute('data-js', 'bookmarkicon');
    
    bootmarkiconbutton.append(bookmarkicon);
    // ----------------------------------------------------------------
    const cardquestion = document.createElement('p');
    cardquestion.classList.add("quizcard--question");
    cardquestion.textContent = baseArray.question;
        
    
    quizcard.append(cardquestion);
    // ----------------------------------------------------------------
    const answerbox = document.createElement('div');
    answerbox.classList.add("quizcard--answerbox");
        
    
    quizcard.append(answerbox);
    // ----------------------------------------------------------------
    const answer = document.createElement('p');
    answer.classList.add("quizcard--answer", "hidden");
    answer.setAttribute('data-js', 'quizcard--answer');
        answer.textContent = baseArray.answer;
    
    answerbox.append(answer);
    // ----------------------------------------------------------------
    const answerbutton = document.createElement('button');
    answerbutton.classList.add("quizcard--answerbutton");
    answerbutton.setAttribute('data-js', 'quizcard--answerbutton');
    answerbutton.textContent = "Show Answer"
    quizcard.append(answerbutton);
    // ----------------------------------------------------------------
    const hashtag = document.createElement('ul');
    hashtag.classList.add("quizcard--hashtag");

        
    
    quizcard.append(hashtag);
    // ----------------------------------------------------------------
    const hashtagone = document.createElement('li');
    hashtagone.textContent = baseArray.hashtag1;
        
    
    hashtag.append(hashtagone);
    // ----------------------------------------------------------------
    const hashtagtwo = document.createElement('li');
    hashtagtwo.textContent = baseArray.hashtag2;
    
        
        
    
    hashtag.append(hashtagtwo);
    // ----------------------------------------------------------------
    const hashtagthree = document.createElement('li');
    hashtagthree.textContent = baseArray.hashtag3;
        
    
    hashtag.append(hashtagthree);
    // ----------------------------------------------------------------
    const left = document.createElement('div');
    left.classList.add("quizcardpage--left");
    
    // Data JS oder andere Adressierung
    quizcard.append(left);
    
    });

};


