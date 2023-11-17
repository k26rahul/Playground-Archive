window.log = console.log.bind(console);
window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

$$('.appScreen').forEach(element => {
  importHtmlIntoElement(element, element.dataset.import);
});

function importHtmlIntoElement(targetElement, htmlFileURL) {
  if (!navigator.onLine) {
    console.error('Browser is offline. Cannot fetch HTML.');
    return;
  }

  fetch(htmlFileURL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      const styleElement = doc.querySelector('style');
      const scriptElement = doc.querySelector('script');
      const templateElement = doc.querySelector('template');

      if (styleElement) {
        document.head.appendChild(styleElement);
      }

      if (scriptElement) {
        const newScriptElement = document.createElement('script');
        newScriptElement.textContent = scriptElement.textContent;
        document.head.appendChild(newScriptElement);
      }

      if (templateElement) {
        targetElement.appendChild(templateElement.content);
      }
    })
    .catch(error => {
      console.error('Error fetching or injecting HTML:', error);
    });
}
