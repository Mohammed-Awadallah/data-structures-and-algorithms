'use strict';
const quickSort = require('../quickSort');
describe("quickSort", () => {
    test(" quickSort", () => {
        let arr = [2, 1, 5, 6, 4, 3];
        expect(quickSort(arr, 0, arr.length - 1)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });
    test("Few uniques", () => {
        let arr2 = [1, 30, 8, 1, 1, 8];
        expect(quickSort(arr2, 0, arr2.length - 1)).toStrictEqual([1, 1, 1, 8, 8, 30]);
    });
    test("Nearly-sorted", () => {
        let arr3 = [1, 2, 3, 4, 6, 5];
        expect(quickSort(arr3, 0, arr3.length - 1)).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });
    test("Reverse-sorted", () => {
        let arr1 = [4, 3, 2, 1, 0, -1];
        expect(quickSort(arr1, 0, arr1.length - 1)).toStrictEqual([-1, 0, 1, 2, 3, 4]);
    });
    
});