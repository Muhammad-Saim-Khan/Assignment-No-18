// ================= THE START =================

// Chapters 21-25 Start

// Q1
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
alert("Hello, " + fullName + "! Welcome.");

// Q2
var favoriteMobileModel = prompt("Enter your favorite mobile phone model:");
var inputLength = favoriteMobileModel.length;
document.write(
  "<p>My favorite phone is: " +
    favoriteMobileModel +
    " Length of string:" +
    inputLength +
    "</p>"
);

// Q3
var word = "Pakistani";
var indexOfN = word.indexOf("n");
document.write(
  "<br>",
  "<h2>The index of 'n' in the word 'Pakistani' is: " + indexOfN + "</h2>"
);

// Q4
var word2 = "Hello World";
var lastIndexofL = word2.lastIndexOf("l");
document.write(
  "<br>",
  "<h2>The last index of 'l' in the word 'Hello World' is: " +
    lastIndexofL +
    "</h2>"
);

// Q5
var word3 = "Pakistani";
var charAtIndex3 = word3.charAt(3);
document.write(
  "<br>",
  "<h2>The character at the 3rd index in the word 'Pakistani' is: " +
    charAtIndex3 +
    "</h2>"
);

// Q6
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
alert("Hello, " + fullName + "! Welcome.");

// Q7
var word4 = "Hyderabad";
var replacedWord = word4.replace("Hyder", "Islam");
document.write(
  "<br>",
  "<h2>",
  word4,
  "</h2>",
  "<h2> After replacement is: " + replacedWord + "</h2>"
);

// Q8
var message =
  "Ali and Sami are best friends. They play cricket and football together.";
var modifiedMessage = message.split("and").join("&");
document.write("<p>Original Message: " + message + "</p>");
document.write("<p>Modified Message: " + modifiedMessage + "</p>");

// Q9
var str = "472";
var number = parseInt(str);
document.write(
  "<br>",
  "<p>Original String: " + str + "<br>Type: " + typeof str + "</p>"
);
document.write(
  "<br>",
  "<p>Converted Number: " + number + "<br>Type: " + typeof number + "</p>"
);

// Q10
var userInput5 = prompt("Enter your input:");
var capitalizedInput = userInput5.toUpperCase();
document.write("<br>", "<h2>User Input: " + userInput5 + "</h2>");
document.write("<br>", "<h2>Capitalized Input: " + capitalizedInput + "</h2>");

// Q11
var userInput4 = prompt("Enter your input:");
var titleCaseInput = userInput4.slice(0, 1).toUpperCase();
var remainChar = userInput4.slice(1).toLowerCase();
var combineInput = titleCaseInput + remainChar;
document.write("<br><h2>userInput4:</h2>", userInput4);
document.write("<br><h2>Title Case:</h2>", combineInput);

// Q12
var num2 = 35.36;
var strNum = num2.toString().replace(".", "");
document.write("<br>", "<h2>Number: " + num2 + "</h2>");
document.write("<br>", "<h2>Result: " + strNum + "</h2>");

// Q13
function containsSpecialSymbol(username) {
  for (var i = 0; i < username.length; i++) {
    var charCode = username.charCodeAt(i);
    if (
      charCode === 33 ||
      charCode === 44 ||
      charCode === 46 ||
      charCode === 64
    ) {
      return true;
    }
  }
  return false;
}
var username = prompt("Enter your username:");
if (containsSpecialSymbol(username)) {
  alert("Please enter a valid username without special symbols [@ . , !]");
} else {
  alert("Username is valid: " + username);
}

// Q14
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
function searchItem(array, item) {
  item = item.toLowerCase(); // Convert the search item to lowercase for case-insensitive search
  for (var i = 0; i < array.length; i++) {
    if (array[i].toLowerCase() === item) {
      return true; // Item found
    }
  }
  return false; // Item not found
}
var userInput = prompt("Enter an item to search:");
if (searchItem(A, userInput)) {
  alert("Yes, '" + userInput + "' is found in the list.");
} else {
  alert("No, '" + userInput + "' is not found in the list.");
}

// Q15
function validatePassword(password) {
  if (password.length < 6) {
    return false;
  }
  var hasAlphabets = false;
  var hasNumbers = false;
  for (var i = 0; i < password.length; i++) {
    var charCode = password.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      hasAlphabets = true;
    } else if (charCode >= 48 && charCode <= 57) {
      hasNumbers = true;
    }
  }
  var startsWithNumber =
    !(password.charCodeAt(0) >= 65 && password.charCodeAt(0) <= 90) &&
    !(password.charCodeAt(0) >= 97 && password.charCodeAt(0) <= 122);

  return hasAlphabets && hasNumbers && !startsWithNumber;
}
var password = prompt("Enter your password:");
while (!validatePassword(password)) {
  password = prompt(
    "Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long:"
  );
}
alert("Password is valid.");

// Q16
var university = "University of Karachi";
var universityArray = university.split(" ");
document.write("<p>Array elements:</p>");
document.write("<ul>");
for (var i = 0; i < universityArray.length; i++) {
  document.write("<li>" + universityArray[i] + "</li>");
}
document.write("</ul>");

// Q17
var userInput = prompt("Enter your input:");
var inputLength = userInput.length;
var lastCharacter = userInput.slice(inputLength - 1);
document.write(
  "<br>",
  "<h2>The last character of your input is: " + lastCharacter + "</h2>"
);

// Q18
var str = "The quick brown fox jumps over the lazy dog";
var lowercaseStr = str.toLowerCase();
var wordToSearch = "the";
var wordsArray = lowercaseStr.split(" ");
var count = 0;
for (var i = 0; i < wordsArray.length; i++) {
  if (wordsArray[i] === wordToSearch) {
    count++;
  }
}
document.write(
  "<br>",
  "<h2>Number of occurrences of 'the': " + count + "</h2>"
);

// Chapters 21-25 End

// ================= THE END =================
