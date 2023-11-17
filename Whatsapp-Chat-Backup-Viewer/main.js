// Function to send text content
function send(text) {
  // Replace this with your actual logic to send the text content
  document.write(String(text).replace('\n', '<br>'));
}

// Handle file drop
function handleFileDrop(event) {
  event.preventDefault();

  // Check if files were dropped
  if (event.dataTransfer.items) {
    // Use the first file dropped
    var file = event.dataTransfer.items[0].getAsFile();

    // Create a FileReader to read the file
    var reader = new FileReader();

    reader.onload = function (e) {
      var text = e.target.result; // Get the text content of the file
      send(text); // Call the send function with the text content
    };

    reader.readAsText(file); // Read the file as text
  }
}

// Prevent the default behavior when a file is dragged over the drop zone
function handleDragOver(event) {
  event.preventDefault();
}

document.addEventListener('drop', handleFileDrop);
document.addEventListener('dragover', handleDragOver);
