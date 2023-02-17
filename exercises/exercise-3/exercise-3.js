let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function getOrderReceipt(orders){

  console.log("QTY".padEnd(7)+ "Item".padEnd(20) + "Total");
   let totalOrderCost = 0;
   orders.forEach((order)=> {
    const {itemName, quantity,unitPrice} = order;
    const total = quantity * unitPrice;
    totalOrderCost += total;
    console.log(`${quantity.toString().padEnd(7)}${itemName.padEnd(20)}${total}`);
   });
   console.log(`\n Total: ${totalOrderCost}`);
}
getOrderReceipt(order);