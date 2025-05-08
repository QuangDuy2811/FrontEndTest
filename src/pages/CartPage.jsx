import React from "react";

const CartPage = () => {
  return (
    <div className="cart-page">
      <hr className="cart-divider" />

      {/* Breadcrumb */}
      <div className="cart-breadcrumb">
        <span>Home</span> <span>{">"}</span> <span className="text-black">Cart</span>
      </div>

      {/* Title */}
      <h2 className="cart-title">YOUR CART</h2>

      {/* Main Content */}
      <div className="cart-main">
        {/* Left: Cart Items */}
        <div className="cart-items">
          {[
            {
              img: "/imgproduct/image copy 2.png",
              name: "Gradient Graphic T-shirt",
              size: "Large",
              color: "White",
              price: 145,
            },
            {
              img: "/imgproduct/image copy 3.png",
              name: "Checkered Shirt",
              size: "Medium",
              color: "Red",
              price: 180,
            },
            {
              img: "/imgproduct/image copy 4.png",
              name: "Skinny Fit Jeans",
              size: "Large",
              color: "Blue",
              price: 240,
            },
          ].map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.img} alt={item.name} />
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>Size: {item.size}</p>
                <p>Color: {item.color}</p>
                <p className="item-price">${item.price}</p>
              </div>
              <div className="quantity-control">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button className="delete-btn">🗑</button>
            </div>
          ))}
        </div>

        {/* Right: Order Summary */}
        <div className="order-summary">
          <h4>Order Summary</h4>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>$565</span>
          </div>
          <div className="summary-row">
            <span>Discount (-20%)</span>
            <span className="discount">- $113</span>
          </div>
          <div className="summary-row">
            <span>Delivery Fee</span>
            <span>$15</span>
          </div>

          {/* Đường kẻ ngang thêm vào đây */}
          <hr style={{borderTop: "1px solid #ccc" }} />

          <div className="summary-total">
            <span>Total</span>
            <span>$467</span>
          </div>

          {/* Promo Code - thêm icon vào đây */}
          <div className="promo-code">
            <img
              src="/tag.png" // đổi path cho đúng với thư mục public
              alt="tag icon"
              style={{ width: "24px", height: "24px" }}
            />
            <input type="text" placeholder="Add promo code" />
            <button className="apply-btn">Apply</button>
          </div>

          <button className="checkout-btn">
            Go to Checkout <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
