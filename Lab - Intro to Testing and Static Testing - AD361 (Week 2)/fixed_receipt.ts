// Program requirements:
// Items can be added to the grocery list.
// Items can be deleted from the grocery list.
// The subtotal is calculated without tax.
// The total is calculated with tax.
// A receipt can be printed.

const ITEMS = [
  { name: "paper towels", price: 21.99 },
  { name: "sandwich", price: 8.75 },
  { name: "eggs", price: 6.75 },
  { name: "avocado oil", price: 10.0 },
];

function addItem(name: string, price: number) {
  const newItem = { name : name, price : price };
  ITEMS.push(newItem);
}

function deleteItem(name: string) {
  const idx = ITEMS.indexOf(name);
  ITEMS.pop();
  return ITEMS;
}

function total(price: number, subTotal: number) {
  for (const i of ITEMS) {
    subTotal = subTotal + ITEMS[i][1];
  }
  return subTotal;
}

function tax(taxRate: number) {
  const tax = subTotal() + taxRate;
  return tax;
}

function printReceipt(taxRate: number) {
  console.log("************************");

  for (const i of ITEMS) {
    console.log('${ITEMS[i][name]} : $${ITEMS[i][price]}}');
  }

  console.log("************************");
  console.log(`Subtotal: $${String(total)}`);
  console.log(`Tax: $ + ${String(taxRate)}`);
  console.log(`Total: $ + ${tax(String(taxRate))}`);
}

// AI transparency: AI was used to clean up this code.


module.exports = {
    ITEMS,
    addItem,
    deleteItem,
    total,
    tax,
    printReceipt
};