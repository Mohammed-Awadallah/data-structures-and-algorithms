'use strict';


const AnimalShelter = require('../stack-queue-animal-shelter/stack-queue-animal-shelter');
const newAnimalShelter = new AnimalShelter();
describe('test AnimalShelter', () => {
    it('add to AnimalShelter', () => {
        const catAnimalShelter = { name: 'Simsim', kind: 'cat' };
        const dogAnimalShelter = { name: 'Bobby', kind: 'dog' };
        newAnimalShelter.enqueue(catAnimalShelter);
        expect(newAnimalShelter.length).toEqual(1);
        newAnimalShelter.enqueue(dogAnimalShelter);
        expect(newAnimalShelter.enqueue({ name: 'banana', kind: 'Hamster'})).toEqual('only cats or dogs are allowed');
    })
    it('enqueue from AnimalShelter', () => {
        newAnimalShelter.enqueue({ name: 'Sherry', kind: 'dog'});
        expect(newAnimalShelter.dequeue('cat')).toEqual({ name: 'Simsim', kind: 'cat'})
        newAnimalShelter.dequeue('cat');
        expect(newAnimalShelter.dequeue('cat')).toEqual('empty');
        newAnimalShelter.dequeue('dog');
        newAnimalShelter.dequeue('dog');
        expect(newAnimalShelter.dequeue('dog')).toEqual('empty');
    });
});