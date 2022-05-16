'use strict';

const repeatedWord = require('../hashmap-repeated-word/hashmap-repeated-word');
describe('repeatedWord Test', () => {
    
    it('repeated word', () => {
        let intro1 = "my name is Mohammed and my head hurt";
        let test = repeatedWord(intro1);
        expect(test).toStrictEqual('my');
    });
    
    it('repeated more than 1 word', () => {
        let stringTwo = "my name is Mohammed and my head hurt and my name is Mohammed";
        let testTwo = repeatedWord(stringTwo);
        expect(testTwo).toEqual('my');
    });
    
    it('No Repeated Word', () => {
        let stings = "I am a studen at ASAC";
        let test = repeatedWord(stings);
        expect(test).toEqual('NUll');
    });
    
});