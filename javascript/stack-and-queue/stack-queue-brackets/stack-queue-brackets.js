'use strict';
const Stack = require('../stack/stack');
function stackQueueBracket(string) {
    let check = new Stack();
    let stringWithoutWord = string.replace(/[A-Za-z]/g, "").replace(/\s/g, '').split('');
    stringWithoutWord.map((bracket) => {
        if (bracket === '(' || bracket === '{' || bracket === '[') {
            check.push(bracket)
        } else if (bracket === ')' && check.peek() === '(') {
            check.pop();
        } else if (bracket === '}' && check.peek() === '{') {
            check.pop();
        } else if (bracket === ']' && check.peek() === '[') {
            check.pop();
        }
    });
    if(stringWithoutWord.length == 1 ){
        return false;
    }
    if (check.isEmpty()) return true;
    return false;
}
module.exports = stackQueueBracket;



    