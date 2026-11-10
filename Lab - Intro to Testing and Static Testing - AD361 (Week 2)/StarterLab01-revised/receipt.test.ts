const { ITEMS, addItem, deleteItem, subTotal, total, printReceipt } = require('./fixed_receipt');


describe('Receipt test', () => {
    // Write test for 'addItem()' function - Happy-path test
    test('should add an item to the items', () => {
        addItem("milk", 5.0);
        expect(ITEMS).toContainEqual({ name: "milk", price: 5.0 });
    });
    // Write test for 'deleteItem()' function - Edge-path test
    test('shoud remove an item from the items', () => {
        deleteItem("avocado oil", 10);
        expect(ITEMS).toContainEqual({ name: "eggs", price: 6.75 });
    });
    // Write test for 'subTotal' function - Happy-path test
    test('should calculate the sub total amount', () => {
        const result = subTotal();
        expect(result).toBeCloseTo(42.49, 2);
    });
    // Write test for 'total' function - Happy-path test
    test('should calculate the total amount with tax', () => {
        const result = total(5);
        expect(result).toBeCloseTo(47.49, 2);
    });
    // Write test for 'printReceipt' function - Unhappy-path test
    test('should print the receipt', () => {
        printReceipt(5);
        expect(ITEMS).toContainEqual({ name: "milk", price: 5.0 });
    });
});