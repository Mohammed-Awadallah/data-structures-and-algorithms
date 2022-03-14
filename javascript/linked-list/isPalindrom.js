const LinkedList = require('./index')
// const Node = require('./lib/Node')

function isPalindrome(ll1){
    if(ll1 === null) return false;
    let array =[];
    let current = ll1.head;
    while (current != null){
      array.push(current.value);
      current = current.next
    }
    if(array.join('') === array.reverse().join('')) {return true;} 
    else{return false};
  }
module.exports =isPalindrome;
