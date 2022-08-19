import createcard from "./_creatCard.js";
import toggleBookmark from "./_togglebookmark.js";
import toggleAnswer from "./_toggleanswer.js";

export default function renderCards() {
    createcard();
    toggleBookmark();
    toggleAnswer();
}