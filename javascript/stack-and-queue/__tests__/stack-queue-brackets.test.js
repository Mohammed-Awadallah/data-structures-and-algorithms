'use strict';
const stackQueueBracket = require('../stack-queue-brackets/stack-queue-brackets');
describe('test stackQueueBracket ', () => {
    it('true cases', () => {
        expect(stackQueueBracket('{}')).toBeTruthy();
        expect(stackQueueBracket('{}(){}')).toBeTruthy();
        expect(stackQueueBracket('()[[Extra Characters]]')).toBeTruthy();
        expect(stackQueueBracket('(){}[[]]')).toBeTruthy();
        expect(stackQueueBracket('{}{aaaaa}[dsfgsfgsg](())')).toBeTruthy();
    });
    it('false cases ', () => {
        expect(stackQueueBracket(')(')).toBeFalsy();
        expect(stackQueueBracket('[({}]')).toBeFalsy();
        expect(stackQueueBracket('(](')).toBeFalsy();
        expect(stackQueueBracket('{(})')).toBeFalsy();
        expect(stackQueueBracket('}')).toBeFalsy();
    });
});



