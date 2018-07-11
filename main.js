var fruits = ['apple', 'orange', 'lemon', 'kiwi', 'pineapple'];

// console.log(fruits[0], fruits[2]);

fruit = {};
// console.log(typeof(fruit));

fruit.name = "apple";
fruit.color = "green";
fruit.size = "small";

//now type fruit into the console and it's got these now//

// use fruit['size']; to access the value
//name:apple is a key value pair of the object
//key:value
//fruit.size would also work - but is not how this is done in other languages, so stick to the brackets!

fruit.owner = {name: 'Stephen', email: 'stephenegbert@gmail.com'}

//creates a new object within the object - try calling it now

owner = {name: 'Lucas', email: 'lucas@example.com'}

fruit.owner2 = owner;

// call again!

//get item from Object within Object

fruit['owner']['name']

//can also be done as fruit.owner.name - - but again it's like, not really how you do it with other languages

card1 = {name: 'Man eater bug', element: 'Earth', level: '2', atk: '450', def: '600', cardType: 'Insect/Effect', effect: function() {alert('Target 1 monster on the field; destroy that target.');},
        desc: function(){console.log(this.name + "is the element of " + this.element);},}

Goku = {name: 'Son Goku', race: 'Saiyan', attackOne: 'Kamehameha', attackTwo: 'Spirit Bomb', trainerOne: 'Roshi', trainerTwo: 'Kaio', trans: function() {alert('Super Saiyan!'); document.getElementById('image').src="images/ss.jpg";}, trans2: function() {alert('Super Saiyan 2!'); console.log(this.name + " is going beyond Super Saiyan!"); document.getElementById('image').src="images/ss2.png";}}

pizza = {toppings: 'pepperoni',
size: 'large',
crust: 'thin',
sauce: 'red',
effect: function() {
    alert('DING: it’s done');
 },
decs: function() {
    console.log(this.toppings + 'eat it up you hungry-hungry person' + this.element);
}
};

//using objects, mock up how a system for instant messaging would work

messenger = {name: 'Anakin Skywalker' , email: 'bestworkstjedimaster@jedi.org' , screenname: 'baddest-jedi' , dob: 'unknown' ,
hi: function() {alert('Hello there!'); document.getElementById('image').src="images/kenobi.jpg";},
howru: function() {alert('Been better!'); document.getElementById('image').src="images/robes.jpg";},
gtg: function() {alert('See you later!'); document.getElementById('image').src="images/chosen.jpg";}
}

// message = {
//   sender: 'username',
//   receiver: 'username2',
//   sentAt: '10:50PM',
//   read: true,
//   content: 'Hello there!',
// }
//
// username = {
//   name: 'Stephen Egbert',
//   email: 'someone@example.com'
//
// }
//
// username2 = {
//   name: 'Jack',
//   email: 'someonelse@google.com'
// }
//
// messagesender = username
//
// messagereceiver = username2
//
// var messagebyWho = message['sender']['name']

//create an object that has a function called 'assign' that takes another object as an argument that sets the argument as the owner of the original object

nimbus = {
  name: 'Flying Dingus',
  email: 'stephen@gmail.com',
  owner: 'Stephen',
  assign: function(Goku) {
    this.owner = Goku;
  }
}

// in console check nimbus.owner , re assign with nimbus.assign(Goku), check with nimbus.owner Should now be Goku - can now drill into goku object through this one nimbus.owner.trans2() will run the SS2 function !

stringCheese = "We promptly judged antique ivory buckles for the next prize"
bullIsh = "This is not a pangram lol"

function isPangram(string){
  var letters = "abcdefghijklmnopqrstuvwxyz"
  var lowerCaseString = string.toLowerCase();
  for(var i = 0; i < letters.length; i++){
    if(lowerCaseString.indexOf(letters[i]) == -1)
      return false;
  }
  return true;
}

//Jermaine Way - does not work with capital letters

function is_pangram(sentence){
  count = 0
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
  for(i = 0; i < alpha.length; i++){
        if (sentence.includes(alpha[i])){
          count+= 1
        }
  }
  if (count === 26){
    return true;
  }
  else{
    return false;
  }
}
// Milo Way

function is_a_pangram(string) {
  var alphabet = 'abcdefghijklmnopqrstuvwxyz';
  uniques = [];
  alphabetized = string.split(' ').join('').toLowerCase().split('').sort();
    for (i=0; i < alphabetized.length; i++) {
      if (alphabetized[i] != alphabetized[i + 1]) {
        uniques.push(alphabetized[i]); }
    }
    final = uniques.join('');
  if (final.includes(alphabet)) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}

is_a_pangram("Two driven jocks help fax my big quiz.");
is_a_pangram("a fat dog eats a potato");
is_a_pangram("abcdef ghijklmno pqrstuvwxyz6");
is_a_pangram("zyxWvut?srqp!onMlkjihgfedcba!");
is_a_pangram("Jackdaws love my big sphinx of quartz.");
is_a_pangram("aBc abc abC abc");

// Ted Way

var alphabetArray = "abcdefghijklmnopqrstuvwxyz".split('');

function isAPangram(ar) {
	for (letter in alphabetArray) {
		if (!ar.includes(alphabetArray[letter])) {
			console.log('Not pangram\n');
			return;
		}
	}

  console.log("Is pangram\n");
}


// MOTHER FUCKER .indexOf IS KIND OF CONFUSING

var str = 'To b, or not to b, that is th qustion.';
var count = 0;
var pos = str.indexOf('e');

while (pos !== -1) {
  count++;
  pos = str.indexOf('e', pos + 1);
}

console.log(count); // displays 4 NOPE I TOOK THE E'S OUT LOL

// Write an algorithm that takes in a string and reverses it

function reverseString(string) {
  if (string === "")
    return "";
  else
    return reverseString(string.substr(1)) + string.charAt(0);
}

//shorterversion

function reverseStringTwo(string) {
    return string.split("").reverse().join("");
}

//above method more appropriately explained

function reverseStringTwo(string) {
    // Step 1. Use the split() method to return a new array
    var splitString = string.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}

//fizz buzz
// WORKSHOP 3
//
// Write a program that console.logs the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five console.log "Buzz". For numbers which are multiples of both three and five console.log "FizzBuzz".

for (var i=1; i <= 100; i++)
{
  if (i % 15 == 0)
  console.log("FizzBuzz");
  else if(i % 3 == 0)
  console.log("Fizz");
  else if (i % 5 == 0)
  console.log("Buzz");
  else
    console.log(i);
  }
