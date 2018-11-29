//Variables
//A.
//let (var) = (value);
//(var) = (new value)
//let (new var) = (old var);
//declare creates the variable, define gives it a property, assign gives a value to a property or variable
//using a mixture of code and plain english to say what a program should do, so you don't have to plan the entire thing in your head
//something like 80/20

//B.
let firstVariable = "Hello World";
firstVariable = Math.random();
let secondVariable = firstVariable;
secondVariable = ("stringeny");
//First variable's value does not change.
let myName = "Max";
console.log(`Hello ${myName}!`);

//C.
const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(true != false);
  console.log(false == false == false == false == false == false == true);
  console.log(false == false)
  console.log(e == 'Kevin');
  console.log(a < b < c);
  console.log(a == a != d);
  console.log(48 !== '48');

//D.
let animal = "cow";
if(animal === "cow"){
  console.log('moooooo');
}else{
  console.log("Hey, you're not a cow!");
}

//E.
let ageOfPerson = 17;
if(ageOfPerson >= 16){
  console.log("Here are the keys!");
}else{
  console.log("Sorry, you're too young to drive!");
}

//Loops
//A.
for(let i = 0; i<11;i++){
  console.log(i);
}
for(let i = 10;i<401;i++){
  console.log(i);
}
for(let i = 12; i<4001; i+=3){
  console.log(i);
}
//B.
for(let i = 2; i<100;i++){
  console.log(i);
  if(i%2 == 0){
    console.log("is an even number");
  }
}
//C.
for(let i=0;i< 101;i++){
  if(i%5 == 0){
    console.log(`I found a ${i}! High five!`);
  }
  if(i%3 == 0){
    console.log(`I found a ${i}! Three is a crowd!`);
  }
}
//D.
let bankAccount = 0
for(let i = 0;i<11;i++){
  bankAccount+=i;
}
console.log(bankAccount);
bankAccount = 0
for(let i = 0;i<101;i++){
  bankAccount+=(i*2);
}
console.log(bankAccount);
//E.
//"You did they same problem twice, tricked you, HOHOHHOOO!"
//Hilarious.

//Arrays and Control Flow
//A.
//Items
//Yes, as in, each item occupies a specific slot in the array and what
//slot it's in does not change unless you do something to the array
//They could still not be *sorted* though, obviously
//You could model stations along a rail line quite nicely with an array.
//B.
let array = ["boo","quotes are overrated","an arbitrary string"];
//C.
const randomThings = [1, 10, "Hello", true]
console.log(randomThings[0])
randomThings.splice(2,1,"World");
console.log(randomThings);
//D.
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
console.log(ourClass[2]);
ourClass.splice(4,1,"Octocat");
ourClass.push("Cloud City");
//E.
const myArray = [5, 10, 500, 20];
myArray.push("Egon","A String");
myArray.splice(0,1);
myArray.splice(0,0,"Bob Marley");
myArray.splice(myArray.length-1,1);
mrArray = myArray.reverse();
//myArray.reverse() returns the reverse of my array.
//The array mutated only because I assigned it to equal the return value of array.reverse()
console.log(myArray);
//F.
let number = [1];
if(number < 100){
  console.log("small number");
}else{
  console.log("big number");
}
//G.
if(number < 5){
  console.log("little number")
}else if(number > 10){
  console.log("big number")
}else{
  console.log("monkey")
}
//H.
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];
console.log(`Kristyn is rocking that ${kristynsCloset[2]} today`);
kristynsCloset.splice(6,0,"Raybans");
kristynsCloset.splice(5,1,"Stained knit hat");
console.log(`Thom is wearing ${thomsCloset[0][0]} and ${thomsCloset[1][0]}`);
thomsCloset[1].splice(2,1,"Footie Pajamas");
console.log(kristynsCloset);

//Functions

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
