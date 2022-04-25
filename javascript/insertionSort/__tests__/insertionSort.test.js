'use strict';
const insertionSort = require('../insertionSort');
describe("Insertion Sort", () => {
    test(" sort", () => {
        const arr1 = [1, 18, 48, 32, 29, 15];
        expect(insertionSort(arr1)).toStrictEqual([1, 15, 18, 29, 32, 48]);
    });

    test("Reverse-sorted", () => {
        const arr2 = [10, 7, 1, 0, -1, -2];
        expect(insertionSort(arr2)).toStrictEqual([-2, -1, 0, 1, 7, 10]);
    });

    test("Few uniques", () => {
        const arr3 = [1, 2, 2, 3, 3, 3];
        expect(insertionSort(arr3)).toStrictEqual([1, 2, 2, 3, 3, 3]);
    });

    test("Nearly-sorted", () => {
        const arr4 = [1, 2, 3, 4, 6, 5];
        expect(insertionSort(arr4)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });
});