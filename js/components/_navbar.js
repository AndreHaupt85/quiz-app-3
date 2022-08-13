export default function navigation() {
    const homePage = document.querySelector('[data-js="quizcard-page"]');
    const bookmarkPage = document.querySelector('[data-js="bookmark-page"]');
    const addPage = document.querySelector('[data-js="add-page"]');
    const profilePage = document.querySelector('[data-js="profile-page"]');

    const navQuizcard = document.querySelector('[data-js="nav-Quizcard"]');
    const navBookmarks = document.querySelector('[data-js="nav-bookmark"]');
    const navAddpage = document.querySelector('[data-js="nav-addpage"]');
    const navProfile = document.querySelector('[data-js="nav-profile"]');

    navQuizcard.addEventListener("click", () => {
        homePage.classList.remove("hidden");
        bookmarkPage.classList.add("hidden");
        addPage.classList.add("hidden");
        profilePage.classList.add("hidden");
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