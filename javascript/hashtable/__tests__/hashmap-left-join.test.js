'use strict';

const HashTable = require('../hashtable');
const leftJoin = require('../hashmap-left-join/hashmap-left-join');
let table = new HashTable(50);
table.set("fond", "enamored");
table.set("wrath", "anger");
table.set("diligent", "employed");
table.set("outfil", "garb");
table.set("guide", "usher");
let table2 = new HashTable(50);
table2.set("fond", "averse");
table2.set("wrath", "delight");
table2.set("diligent", "idle");
table2.set("guide", "follow");
table2.set("flow", "jam");
describe('leftJoin test', () => {
    it('all the values in the first hashmap are returned, and if values exist in the “right” hashmap ', () => {
        expect(leftJoin(table, table2)).toStrictEqual([
            ['guide', 'usher', 'follow'],
            ['fond', 'enamored', 'averse'],
            ['wrath', 'anger', 'delight'],
            ['outfil', 'garb', null],
            ['diligent', 'employed', 'idle']
        ]);
    });
});