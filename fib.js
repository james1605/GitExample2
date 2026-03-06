/**
 * Triggers a file download in the browser.
 * @param {string} data The content of the file.
 * @param {string} filename The name for the downloaded file (e.g., "sample.js").
 * @param {string} type The MIME type of the content (e.g., "text/plain", "application/javascript").
 */
function downloadFile(data, filename, type) {
    // Create a Blob from the data
    const blob = new Blob([data], { type: type });

    // Create an anchor element and set the download link
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob); // Create a URL for the blob
    link.download = filename; // Set the file name for download

    // Append the link to the body (necessary for Firefox)
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up: remove the link and revoke the object URL
    document.body.removeChild(link);
    window.URL.revokeObjectURL(link.href);
}

// Example usage:
// A sample string representing the content of a .js file
const scriptContent = `
// This is sample.js
function helloWorld() {
    console.log("Hello, world! This script was downloaded dynamically.");
}

helloWorld();
`;

// You can call this function from an HTML button's event listener
// For this example, it will run automatically when the script loads
// (or you can add a button in the HTML to trigger it on click).
// To use it with a button: document.getElementById('downloadButton').addEventListener('click', function() { ... });

// To make this functional in the browser:
// You might want to wrap the actual call in a user-initiated event (like a button click)
// for better browser compatibility and user experience.
