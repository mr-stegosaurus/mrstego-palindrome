
module.exports = Phrase;

//Adds 'reverse' to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return this.string = string.toLowerCase()
  }

  //Returns content processed for palidnrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  //Returns the letters in the content.
  this.letters = function letters() {
    return this.content; //stub return value
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
