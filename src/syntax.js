import styles from "./syntax.css";

const JSON_REGEX = /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g;

/**
 * This function will apply syntax highlighting to a JSON object in order to be
 * displayed within the editor.
 *
 * @param {String} json - The original JSON object to be run through the syntax highlighter.
 * @returns {String} The applied text JSON with syntax highlighting.
 */
export const syntaxHighlighter = json => {
  console.time("syntax_highlight");
  let highlightedJson = json
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  highlightedJson = highlightedJson.replace(JSON_REGEX, function(match) {
    let token = "number";

    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        token = "key";
      } else {
        token = "string";
      }
    } else if (/true|false/.test(match)) {
      token = "boolean";
    } else if (/null/.test(match)) {
      token = "null";
    }
    return `<span class="${styles[token]}">${match}</span>`;
  });

  console.timeEnd("syntax_highlight");
  return highlightedJson;
};
