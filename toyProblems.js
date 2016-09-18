//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
		var newStr = "";
		for (var i = 0; i < str.length; i++) {
        if (str[i] === "&") {
        		newStr += "&amp;";
        } else if (str[i] === "<") {
        		newStr += "&lt; ";
        } else if (str[i] === ">") {
        		newStr += "&gt;";
        } else if (str[i] === "'") {
        		newStr += "&apos;";
        } else if (str[i] === '"') {
        		newStr += "&quot;";
        } else {
        		newStr += str[i]
        }
    }
    console.log(newStr);
  	return newStr;
}



//**********************
//Reverse the provided string
function reverseString(str) {
	str = str.split("");
  return str.reverse().join("");
}


//Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

function findElement(arr, func) {
  for (var i = 0; i < arr.length; i++) {
      if (func(arr[i]) === true) {
          return arr[i];
      }
  }
}
