// ================= THE START =================

// Chapter 21 (Changing Case) Start

// Q1
var allLower = userInput.toLowerCase();

// Q2
x = x.toLowerCase();

// Q3
y = y.toUpperCase();

// Q4
var originalString = "YourOriginalStringHere";
var lowerCaseString = originalString.toLowerCase();

// Q5
var arrayOfStrings = ["Hello", "World", "Example"];
var lowerCaseString = arrayOfStrings[0].toLowerCase();

// Q6
var yourString = "YourStringHere";
alert(yourString.toUpperCase());

// Q7
var cityName = "kaRacHi";
var capitalizedCityName =
  cityName.charAt(0).toUpperCase() + cityName.slice(1).toLowerCase();
alert(capitalizedCityName);

// Chapter 21 (Changing Case) End

// Chapter 22 - 25 (Strings) Start

// Q1
var sameWords = "captain";
var slicedString = sameWords.slice(1, 3);
alert(slicedString);

// Q2
var sameWords = "captain";
var numberOfCharacters = sameWords.length;
alert("Number of characters: " + numberOfCharacters);

// Q3
var animal = "elephant";
var seg = animal.slice(2, 6);
alert(seg);

// Q4
var myString = "example";
var numberOfCharacters = myString.length;
alert("Number of characters: " + numberOfCharacters);

// Q5
var myString = "example";
var numberOfCharacters = myString.length;
var slicedString = myString.slice(1, -3);
alert(
  "Number of characters: " +
    numberOfCharacters +
    "\nSliced string: " +
    slicedString
);

// Q6
var text = "To be or not to be.";
var indx = text.indexOf("be");
document.write("<br>", "The value of indx is: " + indx);

// Q7
var text = "To be or not to be.";
var indx = text.lastIndexOf("be");
document.write("<br>", "The value of indx is: " + indx);

// Q8
var text = "Let's go, go, go!";
var searchWord = "go";
var indx = text.lastIndexOf(searchWord) + searchWord.length - 2;
alert("Index of the first character of the last instance of 'go': " + indx);

// Q9
if (indexNum >= 0 && indexNum < text.length) {
}

// Q10
var str = "abcde";
var characterAtIndex2 = str.charAt(2);
console.log(characterAtIndex2);

// Q11
var text = "YourStringHere";
var cha = text.charAt(9);
console.log(cha);

// Q12
var str = "YourStringHere"; // Example string
var x = str.charAt(str.length - 1);
console.log(x);

// Q13
var input = "YourInputStringHere"; // Example input string
var cha = input.charAt(4); // Indexing starts from 0, so we use 4 to get the 5th character
console.log(cha);

// Chapter 22 - 25 (Strings) End

// ================= THE END =================
