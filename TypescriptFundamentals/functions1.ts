interface CreateOrderOptions {
  customerId: string;
  items: string[];
  discountCode?: string;
  expressShipping?: boolean;
  notes?: string;
}



function createOrder({
  customerId,
  items,
  discountCode,
  expressShipping = false,
  notes = ''
}: CreateOrderOptions) {
  // implementation
  return { customerId, items, discountCode, expressShipping, notes };
}




const orderDetails = createOrder({
  customerId: "IST-123",
  items: ["test", "sample"],
  discountCode: "30"
});




console.log(orderDetails);


