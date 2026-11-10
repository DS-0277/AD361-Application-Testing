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

// Items can be added to the grocery list
function addItem(name: string, price: number) {
  const newItem = { name : name, price : price };
  ITEMS.push(newItem);
}

// Items can be deleted from the grocery list
function deleteItem(name: string) {
  const index = ITEMS.findIndex(item => item.name === name);
  if (index !== -1) {
    ITEMS.splice(index, 1);
  }
}

// The subtotal is calculated without tax
function subTotal() {
  let subtotal = 0;
  for (const i of ITEMS) {
    subtotal = subtotal + i.price;
  }
  return subtotal;
}
// Calculate the total
function total(taxAmount: number) {
  const total = subTotal() + taxAmount;
  return total;
}

function printReceipt(taxAmount: number) {
  console.log("************************");

  for (const i of ITEMS) {
    console.log(`${i.name} : $${i.price}`);
  }

  console.log("************************");
  console.log(`Subtotal: $${subTotal()}`);
  console.log(`Tax: $${taxAmount}`);
  console.log(`Total: $${total(taxAmount)}`);
}


module.exports = {
  ITEMS,
  addItem,
  deleteItem,
  subTotal,
  total,
  printReceipt
};

// AI transparency: AI was used to clean up this code.