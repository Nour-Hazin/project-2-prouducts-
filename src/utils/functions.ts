/**
 * Truncates a given text to a specified length and appends "..." if truncated.
 *
 * @param {string} txt - The input text to be sliced.
 * @param {number} [max=50] - The maximum length of the truncated text (default is 50).
 * @returns {string} - The truncated text with "..." appended if it exceeds the max length.
 *
 * @example
 * console.log(txtSlicer("This is a long text that needs to be shortened.", 20));
 * // Output: "This is a long text..."
 */
// js doc is up
export function txtSlicer(txt: string, max: number = 50): string {
    if (txt.length >= max) {
        return `${txt.slice(0, max)}...`;
    }
    return txt;
}
