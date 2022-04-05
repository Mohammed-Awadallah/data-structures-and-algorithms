'use strict';
class Node {
    constructor(value=null, k) {
        this.value = value;
        this.child = new Array(k);
    }
}
module.exports = Node;
