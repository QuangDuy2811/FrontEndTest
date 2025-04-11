const OrderSummary = ({ subtotal, discount, deliveryFee }) => {
    const total = subtotal - discount + deliveryFee;
  
    return (
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between"><span>Subtotal</span><span>${subtotal}</span></div>
          <div className="flex justify-between text-red-500"><span>Discount (-20%)</span><span>-${discount}</span></div>
          <div className="flex justify-between"><span>Delivery Fee</span><span>${deliveryFee}</span></div>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-semibold text-lg"><span>Total</span><span>${total}</span></div>
        <div className="flex mt-4 gap-2">
          <input type="text" placeholder="Add promo code" className="flex-1 border p-2 rounded" />
          <button className="bg-black text-white px-4 rounded">Apply</button>
        </div>
        <button className="w-full bg-black text-white py-2 mt-4 rounded">Go to Checkout →</button>
      </div>
    );
  };
  
  export default OrderSummary;
  