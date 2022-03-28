const karyTree = require('../k-ary tree/k-aryTree')
const testKary = new karyTree();
describe('kary tree test', () => {
    it(' testing adding to tree', () => {
        testKary.add(10);
        expect(testKary.root.value).toEqual(10);      
    });
   
});