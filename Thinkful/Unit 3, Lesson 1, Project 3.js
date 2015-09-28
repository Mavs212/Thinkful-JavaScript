 function stringTool(sen) {
  var sentenceArrayChars = sen.split("");
  console.log(sentenceArrayChars);
  var sentenceArrayWords = sen.split(" ");
  console.log(sentenceArrayWords);
  var sumOfChars =0;
 
  for (var i =0; i<sentenceArrayWords.length; i++) {
    sumOfChars+=sentenceArrayWords[i].length;
  }
  var numWords = sentenceArrayWords.length;
  var average = sumOfChars/numWords;
  console.log(average);
  console.log("This string has " +  sentenceArrayWords.length + " words." + "The average length of each word is " + average + "  words");
 
 
}
 
stringTool("This is a test!"); // "This string has 8 words.The average length of each word is 4.125 characters"