export default function toggleBookmark() {
    /* konstante Variable Bookmarks aus der Indexdate erstellt aus allen data-js bookmark */
    const bookmarks = document.querySelectorAll('[data-js="bookmarkicon"]');
    /* einteile Variablen intern erstellt */
    bookmarks.forEach((bookmark) => {
      /* veränderliche Variable notSaved gesetzt auf true */
      let notSaved = true;
      /* Test */
      console.log(bookmark.src);
      /* Clickevent auf das Bookmark */
      bookmark.addEventListener("click", () => {
        notSaved = !notSaved;
        bookmark.src = notSaved
        /* if else Funktion */
        ? "./pictures/bookmark_icon.png"
        : "./pictures/filled_bookmark_icon.png";
      });
    });
};