# PDF Highlighting with PDF.js

This project demonstrates how to render PDF documents in a web application and highlight specific text directly on the rendered pages using PDF.js. The solution overlays a text layer on top of the PDF rendered on a canvas, where specific words are highlighted and colored for visibility.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To run this project, you will need:

- A modern web browser that supports HTML5 and JavaScript.
- A local server environment (e.g., Python's HTTP server, Node.js with Express, etc.) to serve the files to avoid CORS issues when loading the PDF.

### Installation

1. Clone the repository or download the project files to your local machine.
2. Place your PDF document in the same directory as your HTML file, or adjust the `url` variable in `script.js` to point to the location of your PDF file.
3. If using Node.js and Express as your local server, navigate to your project directory and run `npm install` to install dependencies.

### Running the Project

1. Start your local server. If using Python's HTTP server, navigate to your project directory in the terminal and run `python -m http.server` (Python 3.x) or `python -m SimpleHTTPServer` (Python 2.x).
2. Open your web browser and navigate to `http://localhost:8000` (or the port your server is running on).
3. The index.html page should load, rendering the PDF with highlighted text.

## Approach

The project uses PDF.js to render PDF documents on a canvas element. A separate text layer is dynamically generated and overlaid on the canvas. The script searches this text layer for specific words or phrases and applies CSS styles to highlight and change the color of matching text. This approach allows for flexibility in styling and interaction with the rendered text, leveraging standard HTML and CSS.

## Built With

- [PDF.js](https://mozilla.github.io/pdf.js/) - A general-purpose, web standards-based platform for parsing and rendering PDFs.

## Authors

- Akash chikara
