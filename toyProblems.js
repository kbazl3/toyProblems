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

//Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

//The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

//Return the rest of the array, otherwise return an empty array.

function dropElements(arr, func) {
	for (var i = 0, length = arr.length; i < length; i++) {
        if (func(arr[0]) === false) {
            arr.shift();
        } else {
        	return arr;
        }
    }
    return [];
}


//Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

function truthCheck(c, pre) {
    for (var i = 0; i < c.length; i++) {
        if (c[i].hasOwnProperty(pre) === false || (!c[i][pre])) {
    	    return false;
    	}
    }
    return true;
}
