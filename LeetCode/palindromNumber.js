function isPalindrome(gg) {
  var text = gg.toString();
  word = "";
  function reverseWord(text) {
    return text
      .split(" ")
      .map(function (word) {
        return word.split("").reverse().join("");
      })
      .join(" ");
  }

  word = reverseWord(text);
  if (word === text) {
    return true;
  } else {
    return false;
  }
}
