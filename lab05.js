// ==== Lab05 JavaScript Introduction - Use Array Methods: filter, map, reduce, etc to implement functions below:
/*
1.  Create a function using function declaration named sum with one parameter of Array type, the
    returned result is the sum of all elements which are greater than 20.
 */
function sum(arr) {
    return arr
        .filter(item => item > 20)
        .reduce((partialSum, item) => partialSum + item, 0);
}

console.log(sum([20, 30, 40, 50, 'test']));

/*
2.  Create a function using function expression named getNewArray with one parameter of String
    Array, return a new array which contains all string, length is greater than and equal to 5, and
    contains letter ‘a’.
 */
function getNewArray(arr) {
    return arr
        .filter(item => item.length >= 5 && item.includes('a'));
}
console.log(getNewArray(['Phat', 'Nguyen', "Tan", "Tuong", "Trang", 111111]));