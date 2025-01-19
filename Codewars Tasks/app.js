/*
function squeredNum(num) {
    return +num.toString().split('').map( i => i * i ).join('');
}
console.log(squeredNum(1919));


function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;    
}
console.log(highAndLow('5 4 3 2 1'));


const isSquare = function(n) {
    return Math.sqrt(n) % 1 === 0;
}
console.log(isSquare(-25));



function descendingOrder(num) {
    return +num.toString().split('').sort().reverse().join('');
}
console.log(descendingOrder(123456789));


function getMiddle(word) {
    const length = word.length;
    
    if (length % 2 === 1) {
        const middleIndex = Math.floor(length / 2);
        return word[middleIndex];
    } else {
        const middleIndex1 = length / 2 - 1;
        const middleIndex2 = length / 2;
        return word[middleIndex1] + word[middleIndex2];
    }
}
console.log(getMiddle('word'));


function filter_list(l) {
    let newArr = [];
    
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === 'number') {
            newArr.push(l[i]);
        }
    }
    return newArr;
}
console.log(filter_list([1,2,'a','b']));


function filter_list(l) {
    return l.filter(value => typeof value == 'number');
}
console.log(filter_list([1,2,'a','b']));


function accum(str) {
    
    if (typeof str !== 'string') {
        return 'Input must be a string';
    }
    
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i].toUpperCase();
        
        for (let j = 0; j < i; j++) {
            result += str[i].toLowerCase();
        }
        
        if (i < str.length -1) {
            result += '-'
        }
    }
    
    return result;
}
console.log(accum('abcd'));



function accum(str) {
    return str.split('').map((value, index) => value.toUpperCase() + value.toLowerCase().repeat(index)).join('-');
}
console.log(accum('abcd'));



function isIsogram(str) {
    let lowercaseStr = str.toLowerCase();
    
    for (let i = 0; i < lowercaseStr.length; i++) {
        for (let j = i + 1; j < lowercaseStr.length; j++) {
            if (lowercaseStr[i] ===  lowercaseStr[j]) {
                return false;
            }
        }
    }
    return true;
}
console.log(isIsogram('moose'));



function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length;
}

console.log(isIsogram('moose'));


const sameLetter = (str) => {
    const lowerStr = str.toLowerCase();
    
    const xCount = lowerStr.split('x').length -1;
    const oCount = lowerStr.split('o').length -1;
    
    return xCount === oCount;
}
console.log(sameLetter("ooxxx"));


function sameLetter(str) {
    let lowercaseStr = str.toLowerCase().split('');
    
    return lowercaseStr.filter((x) => x === 'x').length === lowercaseStr.filter((o) => o === 'o').length;
}

console.log(sameLetter('xxoo'));



function livesLeft(age) {
    const remainingYears = 90 - age;
    const days = remainingYears * 365;
    const weeks = remainingYears * 52;
    const months = remainingYears * 12;
    
    console.log("You have " + days + " days " + weeks + " weeks " + months + " months left.");
}

livesLeft(29);


function bmiCalculator(weight, height) {
    return Math.floor(weight / (height * height));
}

var bmi = bmiCalculator(65, 1.8);
console.log(bmi);


function sumTwoSmallesNumbers(numbers) {
    return numbers.sort((a, b) => a - b).at(0) + numbers.sort((a, b) => a - b).at(1);
}

console.log(sumTwoSmallesNumbers([19, 5, 42, 2, 77]));
*/

