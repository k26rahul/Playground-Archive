import './popup-refresh.js';
const log = console.log.bind(console);

document.addEventListener('DOMContentLoaded', fetchBookmarks);

function fetchBookmarks() {
  chrome.bookmarks.getTree(function (bookmarks) {
    displayBookmarks(bookmarks[0].children);
  });
}

function displayBookmarks(bookmarks) {
  log(bookmarks);
}
