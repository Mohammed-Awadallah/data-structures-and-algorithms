' use strict';

const HashTable = require('../hashtable');

function treeIntersection(BTOne, BTTwo) {
    let commonValues = [];
    const newHashTable = new HashTable(1024);
    const BTOneArr = BTOne.preOrder();
    const BTTwoArr = BTTwo.preOrder();

    for (let i = 0; i < BTOneArr.length; i++) {
        if (!newHashTable.contains(BTOneArr[i].toString())) {
            newHashTable.set(BTOneArr[i].toString(), BTOneArr[i]);
        }
    }
    for (let i = 0; i < BTTwoArr.length; i++) {
        if (newHashTable.contains(BTTwoArr[i].toString())) {
            commonValues.push(BTTwoArr[i]);
        }
    }

    return commonValues.length ? commonValues : 'There is No common values';
}

module.exports = treeIntersection;