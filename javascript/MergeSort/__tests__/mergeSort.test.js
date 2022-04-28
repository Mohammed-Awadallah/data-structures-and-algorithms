'use strict';

const mergeSort = require('../mergeSort');
describe("mergeSort", () => {
    test(" mergeSort", () => {
        const arr = [8, 4, 23, 42, 16, 15];
        expect(mergeSort(arr)).toStrictEqual([4, 8, 15, 16, 23, 42]);
    });

    test("Reverse-sorted", () => {
        const arr1 = [20, 18, 12, 8, 5, -2];
        expect(mergeSort(arr1)).toStrictEqual([-2, 5, 8, 12, 18, 20]);
    });

    test("Few uniques", () => {
        const arr2 = [5, 12, 7, 5, 5, 7];
        expect(mergeSort(arr2)).toStrictEqual([5, 5, 5, 7, 7, 12]);
    });

    test("Nearly-sorted", () => {
        const arr3 = [2, 3, 5, 7, 13, 11];
        expect(mergeSort(arr3)).toStrictEqual([2, 3, 5, 7, 11, 13]);
    });
});