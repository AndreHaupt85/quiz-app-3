export default function toggleBookmark() {
    /* konstante Variable Bookmarks aus der Indexdate erstellt aus allen data-js bookmark */
    const bookmarks = document.querySelectorAll('[data-js="bookmarkicon"]');
    /* einteile Variablen intern erstellt */
    bookmarks.forEach((bookmark) => {
      /* veränderliche Variable notSaved gesetzt auf true */
      let notsaved = true;
      /* Clickevent auf das Bookmark */
      bookmark.addEventListener("click", () => {
        notsaved = !notsaved;
        bookmark.src = notsaved
        /* if else Funktion */
        ? "./pictures/bookmark_icon.png"
        : "./pictures/filled_bookmark_icon.png";
      });
    });
}