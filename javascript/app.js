//Reverse Word Order
//This function will grab the word starting at the index it is passed.
const get_word = (index, string) => {
  let word = [];
  //until we run into a whitespace or the end of the string...
  while (string[index] !== " " && index < string.length){
    word = word + string[index];
    //push the character at the current word
    index++;
  }
  return word;
}

//This function finds the addresses of the whitespaces, uses get_word to
//add each of the words to an array, and returns the array.
const get_words = (sentence) => {
  let words = [];
  //holds the addresses of the whitespaces, where the words are assumed to start after
  //each whitespace and at index 0.
  const word_starts = [0];
  let reversed_words = [];
  //deleting the last character (assumed to be a punctuation mark) in the sentence
  sentence = sentence.substring(0, sentence.length - 1);
  for (i = 0; i<sentence.length ;i++){
    if (sentence[i] === " "){
      word_starts.push(i+1);
    }
  }
  for (i = 0; i < word_starts.length; i++){
    words.push(get_word(word_starts[i], sentence));
  }
  return words;
}

const reverse_words = (sentence) => {
  let reversed_words = [];
  let reversed_sentence = "";
  let words = get_words(sentence);
  //loops through reversed words forwards and words backwards
  for (i = 0; i < words.length; i++){
    reversed_words.push(words[words.length - 1 - i] + " ");
  }
  console.log(reversed_words);
  //adds the words from reversed words to a string one at a time
  for (i = 0; i < reversed_words.length; i++){
    reversed_sentence = reversed_sentence + reversed_words[i];
  }
  console.log(reversed_sentence);
}

reverse_words("This is a test run!");
reverse_words("it appears to be working.");

//Get down and dirty with math.random
//This function will return a random number between 0 and 1, inclusive.
const zero_to_one_inclusive = () => {
    if(Math.random() == 0)
    return 1;
    else
    return Math.random();
}

//This function will return a random integer between two specified numbers, inclusively.
//
const inclusive_random_int = (min, max) => {
  range = max - min;
  return min + Math.round((zero_to_one_inclusive()*range+.49)-.5);
  //mathemagical things in order to get the end points to show up as often as any
  //other number.
}

//This function will return a random float. This is a copypaste of inclusive_random_int
//except for the absence of math.round and the mathemagic.
const inclusive_random_float = (min, max) => {
  range = max - min;
  return min + (zero_to_one_inclusive()*range);
}

console.log(inclusive_random_int(1,10));
console.log(inclusive_random_int(10,100));
console.log(inclusive_random_float(532,13267));
console.log(inclusive_random_float(1,10));

//Given an array this function will return a random element from it.
const get_random_element = (array) => {
  return array[inclusive_random_int(0,(array.length-1))];
}

 //
 //Objects
 //
 
