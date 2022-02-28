const isConsonant = (letter) => {
  return !letter.match(/[aeiou\s]/i);
};

function insertDash(word) {
  // TODO: implement the method and return word with dashes
  // console.log(word.split(''));
  return word
    .split('')
    .map((letter, i, letters) => {
      if (i > 0 && isConsonant(letters[i - 1]) && isConsonant(letters[i])) {
        return `-${letter}`;
      }
      return letter;
    })
    .join('');
}

module.exports = insertDash;
