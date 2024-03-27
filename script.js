document.addEventListener("DOMContentLoaded", function() {
    const url = './example.pdf'; // Update this path to your PDF file

    pdfjsLib.getDocument(url).promise.then(function(pdfDoc) {
        pdfDoc.getPage(1).then(function(page) {
            const viewport = page.getViewport({scale: 1.5});
            const canvas = document.getElementById('pdf-canvas');
            const ctx = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            // Render PDF page into canvas context
            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            page.render(renderContext).promise.then(function() {
                // Text layer rendering
                return page.getTextContent();
            }).then(function(textContent) {
                const textLayerDiv = document.getElementById('text-layer');
                textLayerDiv.innerHTML = ''; // Clear previous text layer content
                textLayerDiv.style.height = `${viewport.height}px`;
                textLayerDiv.style.width = `${viewport.width}px`;

                // CSS styles for the text layer
                textLayerDiv.style.position = 'absolute';
                textLayerDiv.style.top = '0';
                textLayerDiv.style.color = 'transparent';

                // Now, process each item in the text content
                textContent.items.forEach(function(item) {
                    const textSpan = document.createElement('span');
                    textSpan.className = 'text-item';
                    textSpan.style.position = 'absolute';
                    textSpan.style.left = `${item.transform[4]}px`;
                    textSpan.style.top = `${item.transform[5]}px`;
                    textSpan.style.transform = `scaleX(${item.transform[0]})`;
                    textSpan.textContent = item.str;

                    // Highlight text if it contains 'Developed'
                    if(item.str.includes('Developed')) {
                        textSpan.style.backgroundColor = 'yellow';
                        textSpan.style.color = 'black'; // Make text visible
                    }

                    textLayerDiv.appendChild(textSpan);
                });

                // Adjust each text span's top position to align with canvas
                const textItems = textLayerDiv.childNodes;
                for(let i = 0; i < textItems.length; i++) {
                    const textItem = textItems[i];
                    textItem.style.top = `${parseFloat(textItem.style.top) - viewport.height}px`;
                }
            });
        });
    }).catch(function(err) {
        console.error('Error: ' + err.message);
    });
});
