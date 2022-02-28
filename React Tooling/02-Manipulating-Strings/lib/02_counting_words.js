function occurrences(text, word) {
  return text.split(" ").reduce((adder, term) => {
    if (term.toLocaleLowerCase() === word.toLocaleLowerCase()) {
      adder += 1;
      return adder;
    } return adder;
  }, 0);
}

module.exports = occurrences;
