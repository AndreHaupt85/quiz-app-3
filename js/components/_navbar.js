export default function navigation() {
    const homePage = document.querySelector('[data-js="quizcard-page"]');
    const bookmarkPage = document.querySelector('[data-js="bookmark-page"]');
    const addPage = document.querySelector('[data-js="add-page"]');
    const profilePage = document.querySelector('[data-js="profile-page"]');

    const navQuizcard = document.querySelector('[data-js="nav-Quizcard"]');
    const navBookmarks = document.querySelector('[data-js="nav-bookmark"]');
    const navAddpage = document.querySelector('[data-js="nav-addpage"]');
    const navProfile = document.querySelector('[data-js="nav-profile"]');

    const quizIndicators = document.querySelector('[data-js="nav-Quizcard"]');
    const bookmarkIndicators = document.querySelector('[data-js="nav-Quizcard"]');
    const addPageIndicators = document.querySelector('[data-js="nav-Quizcard"]');
    const profileIndicators = document.querySelector('[data-js="nav-Quizcard"]');

    navQuizcard.addEventListener("click", () => {
        homePage.classList.remove("hidden");
        bookmarkPage.classList.add("hidden");
        addPage.classList.add("hidden");
        profilePage.classList.add("hidden");
        quizIndicators.classList.add("blink_me");
        bookmarkIndicators.classList.remove("blink_me");
        addPageIndicators.classList.remove("blink_me");
        profileIndicators.classList.remove("blink_me");
    });

    navBookmarks.addEventListener("click", () => {
        bookmarkPage.classList.remove("hidden");
        homePage.classList.add("hidden");
        addPage.classList.add("hidden");
        profilePage.classList.add("hidden");
    });

    navAddpage.addEventListener("click", () => {
        addPage.classList.remove("hidden");
        homePage.classList.add("hidden");
        bookmarkPage.classList.add("hidden");
        profilePage.classList.add("hidden");
    });

    navProfile.addEventListener("click", () => {
        profilePage.classList.remove("hidden");
        homePage.classList.add("hidden");
        bookmarkPage.classList.add("hidden");
        addPage.classList.add("hidden");
    });
};