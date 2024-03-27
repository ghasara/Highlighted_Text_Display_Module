// Reasons for chosen the Regular Expressions (Regex) Approch
//  1. Case Sensitivity and Global Matches:
//  2. Grouping and Capture
//  3. Efficiency
/**
 * Highlights all occurrences of a specified keyword within a document string by wrapping them
 * in custom highlight tags. This function is case-insensitive and can handle complex regex patterns,
 * making it versatile for various highlighting needs, such as emphasizing specific words, phrases,
 * or patterns within a text.
 * 
 * @param {string} document - The text in which to search and highlight the keyword.
 * @param {string} keyword - The word or regex pattern to be highlighted. This parameter
 *                            supports complex patterns, allowing for flexible highlighting
 *                            scenarios, such as matching a drug name and its dosages.
 * 
 * @returns {string} The document text with all occurrences of the keyword wrapped in
 *                   `<highlight>` and `</highlight>` tags. This function performs a global,
 *                   case-insensitive search and replace operation based on the provided keyword.
 * 
 * @example
 * // Basic usage with a simple keyword
 * const text = "Highlight all occurrences of a specific word.";
 * const keyword = "specific";
 * console.log(highlightText(text, keyword));
 * Expected output: "Highlight all occurrences of a <highlight>specific</highlight> word."
 */
const highlightText = (document, keyword) => {
    // Defining the start and end tags for highlighting
    const highlightStart = '<highlight>';
    const highlightEnd = '</highlight>';

    // Creating a regex pattern with the 'gi' flags for global, case-insensitive matching
    const regex = new RegExp(keyword, 'gi');

    // Replacing all instances of the matched keyword with the highlighted version
    return document.replace(regex, match => `${highlightStart}${match}${highlightEnd}`);
};

// Demonstrating flexibility with regex
// Here, the keyword could be a complex pattern, e.g., matching a drug name and its dosages
const document = "The patient should take 5mg of Medicor twice daily.";
const keyword = "5mg of Medicor";
const highlightedDocument = highlightText(document, keyword);

console.log(highlightedDocument);




