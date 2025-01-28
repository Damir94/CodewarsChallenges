
/*

function findShort(str) {
    const arrWord = str.split(' ');
    const result = arrWord.map(a => a.length);
    return Math.min(...result); 
}

const res = findShort('hello be world Foo');
console.log(res);



function findShort(str) {
    return Math.min(...str.split(' ').map(a => a.length));
}

console.log(findShort('hello be world Foo'));



function getSum(a, b) {
    return (Math.abs(a - b) + 1) * (a + b) / 2;
}
console.log(getSum(-1, 2));


function solution(str, ending) {
    
    return str.endsWith(ending);
}
console.log(solution('abc', 'bc'));


function friend(friends) {
    let arr = [];
    let length = 4;
    
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length === length) {
            arr.push(friends[i]);
        }
    }
    return arr;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));


function friend(friends) {
    return friends.filter(n => n.length == 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]));


function isTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return true;
    }else {
        return false;
    }
}
console.log(isTriangle(3, 4, 5));


function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse('').join(' ');   
}

console.log(reverseWords("This is an example"));


function solution(number) {
    
    let sum = 0;
    
    for (let i = 0; i < number; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

console.log(solution(10));


function likes(names) {
    let likeText;

    if (names.length === 0) {
        likeText = 'no one likes this';
    } else if (names.length === 1) {
        likeText = `${names[0]} likes this`;
    } else if (names.length === 2) {
        likeText = `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        likeText = `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        const remainingCount = names.length - 2;
        likeText = `${names[0]}, ${names[1]} and ${remainingCount} others like this`;
    }
    return likeText;
}

console.log(likes(["Alex", "Jacob", "Mark", "Max"]));



function createPhoneNumber(numbers) {
    let str = numbers.join('');
    let newStr = str.slice(0, 3);
    let newStr1 = str.slice(3, 6);
    let newStr2 = str.slice(6, 10);
    return `(${newStr}) ${newStr1}-${newStr2}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


function createPhoneNumber(numbers) {
    
    let format = '(xxx) xxx-xxxx';
    
    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }
    
    return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


function arrayDiff(a, b) {
    return a.filter((item) => !b.includes(item));
}
console.log(arrayDiff([1, 2, 3, 4], [1, 2]));



function spinWords(string) {
    let arr = string.split(' ');
    
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].length >= 5) {
            arr[i] = arr[i].split('').reverse().join('')
        }
    }
    return arr.join(' ');   
}

console.log(spinWords("Hey fellow warriors")); // => returns "Hey wollef sroirraw" 


function spinWords(str) {
    return str.split(' ').map(w => w.length <= 5 ? w : w.split('').reverse().join('')).join(' ');
}
console.log(spinWords("Hey fellow warriors")); // => returns "Hey wollef sroirraw" 
*/

