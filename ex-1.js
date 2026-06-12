let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  const wordsLength = words.map((word) => word.length);
  return wordsLength
}

/* แบบย่อ
function getWordLengths(words){
  return words
  .map((word) => word.length);
}
*/

const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
