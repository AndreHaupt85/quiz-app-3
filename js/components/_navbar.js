export default function navigation() {
    const homePage = document.querySelector('[data-js="quiz11"]');
    const bookmarkPage = document.querySelector('[data-js="bookmark-page"]');
    const addPage = document.querySelector('[data-js="add-page"]');
    const profilePage = document.querySelector('[data-js="profile-page"]');

    const navQuizcard = document.querySelector('[data-js="nav-Quizcard"]');
    const navBookmarks = document.querySelector('[data-js="nav-bookmark"]');
    const navAddpage = document.querySelector('[data-js="nav-addpage"]');
    const navProfile = document.querySelector('[data-js="nav-profile"]');

    const quizIndicators = document.querySelector('[data-js="quizIndicator"]');
    const bookmarkIndicators = document.querySelector('[data-js="bookmarkIndicator"]');
    const addPageIndicators = document.querySelector('[data-js="addIndicator"]');
    const profileIndicators = document.querySelector('[data-js="profileIndicator"]');

    navQuizcard.addEventListener("click", () => {
        homePage.classList.remove("hidden");
        bookmarkPage.classList.add("hidden");
        addPage.classList.add("hidden");
        profilePage.classList.add("hidden");
        quizIndicators.classList.add("blink_me");
        bookmarkIndicators.classList.remove("blink_me");
        addPageIndicators.classList.remove("blink_me");
        profileIndicators.classList.remove("blink_me");
        navQuizcard.classList.add("colored");
        navBookmarks.classList.remove("colored");
        navAddpage.classList.remove("colored");
        navProfile.classList.remove("colored");
    });

    navBookmarks.addEventListener("click", () => {
        bookmarkPage.classList.remove("hidden");
        homePage.classList.add("hidden");
        addPage.classList.add("hidden");
        profilePage.classList.add("hidden");
        bookmarkIndicators.classList.add("blink_me");
        quizIndicators.classList.remove("blink_me");
        addPageIndicators.classList.remove("blink_me");
        profileIndicators.classList.remove("blink_me");
        navBookmarks.classList.add("colored");
        navQuizcard.classList.remove("colored");
        navAddpage.classList.remove("colored");
        navProfile.classList.remove("colored");
    });

    navAddpage.addEventListener("click", () => {
        addPage.classList.remove("hidden");
        homePage.classList.add("hidden");
        bookmarkPage.classList.add("hidden");
        profilePage.classList.add("hidden");
        addPageIndicators.classList.add("blink_me");
        quizIndicators.classList.remove("blink_me");
        bookmarkIndicators.classList.remove("blink_me");
        profileIndicators.classList.remove("blink_me");
        navAddpage.classList.add("colored");
        navQuizcard.classList.remove("colored");
        navBookmarks.classList.remove("colored");
        navProfile.classList.remove("colored");
    });

    navProfile.addEventListener("click", () => {
        profilePage.classList.remove("hidden");
        homePage.classList.add("hidden");
        bookmarkPage.classList.add("hidden");
        addPage.classList.add("hidden");
        profileIndicators.classList.add("blink_me");
        quizIndicators.classList.remove("blink_me");
        bookmarkIndicators.classList.remove("blink_me");
        addPageIndicators.classList.remove("blink_me");
        navProfile.classList.add("colored");
        navQuizcard.classList.remove("colored");
        navBookmarks.classList.remove("colored");
        navAddpage.classList.remove("colored");
    });
};