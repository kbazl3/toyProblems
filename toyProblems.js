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


//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    var flattened = [];
    arr.forEach(function(item) {
        if (Array.isArray(item) === true) {
            flattened = flattened.concat(steamrollArray(item));
        } else {
            flattened.push(item);
        }
    });
    return flattened;
}

//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
    var odds = [1, 1];
    var fibs = [1, 1];
    for (var i = 1; i < 100; i++) {
        fibs.push(fibs[i] + fibs[i - 1])
        if ((fibs[i] + fibs[i - 1]) % 2 === 1 && fibs[i] + fibs[i - 1] <= num) {
            odds.push(fibs[i] + fibs[i - 1]);
        }
    }

    function getSum(total, num) {
        return total + num;
    }
    return odds.reduce(getSum);
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




//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether() {
    for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] !== 'number') {
            return undefined;
        }
    }
    if (arguments.length === 1) {
        var ogArg = arguments[0];
        return function(num) {
            if (typeof num !== "number") {
                return undefined;
            } else {
                return num + ogArg;
            }
        };
    } else {
        return arguments[0] + arguments[1];
    }
}


//Sum all the prime numbers up to and including the provided number.

function sumPrimes(num) {
    var primes = [2];
    for (var i = 2; i <= num; i++) {
        for (var j = 2; j < i; j++) {
            var flag = true;
            if (i % j === 0) {
                flag = false;
                break;
            }
        }
        if (flag === true) {
            primes.push(i);
        }
    }
    var summy = function(a, b) {
        return a + b;
    };
    return primes.reduce(summy);
}


//Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

//The range will be an array of two numbers that will not necessarily be in numerical order.

function smallestCommons(arr) {
    var nums = [];
    var answer = 0;
    for (var i = arr.sort()[0]; i <= arr.sort()[1]; i++) {
        nums.push(i);
    }
    for (var possibleDenom = 1; possibleDenom < 7000000; possibleDenom++) {
        var flag = true;
        nums.forEach(function(number) {
            if (possibleDenom % number !== 0) {
                flag = false;
            }
        })
        if (flag === true) {
            console.log(possibleDenom);
            return possibleDenom;
        }
    }
}
