import React from 'react';

const DetailPage = () => {
  return (
    <div className="detail-page-container">
      <hr className="detail-divider" />
      <div className="detail-breadcrumb">Home &gt; Shop &gt; Men &gt;<span className='text-black'>T-shirts</span> </div>
      {/* Div 1: Hình và thông tin */}
      <div className="detail-product-section">
        {/* Hình ảnh */}
        <div className="detail-images">
          <div className="detail-thumbnail-row">
            <img src="/imgdetail/image copy.png" alt="Thumb1" className="detail-thumb" />
            <img src="/imgdetail/image copy 2.png" alt="Thumb2" className="detail-thumb" />
            <img src="/imgdetail/image copy 3.png" alt="Thumb3" className="detail-thumb" />
          </div>
          <img src="/imgdetail/image.png" alt="Main" className="detail-main-image" />
        </div>

        {/* Thông tin */}
        <div className="detail-info">
          <h1 className="detail-title">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="detail-rating">★★★★☆ <span className="detail-rating-score">4.5/5</span></div>
          <div className="detail-price">$260 <span className="detail-old-price">$300</span> <span className="detail-discount">-40%</span></div>
          <p className="detail-description">
            This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <hr className="detail-divider" />
          <div className="detail-color-section">
            <p className="section-title">Select Colors</p>
            <div className="color-options">
              <div className="color-dot color1"></div>
              <div className="color-dot color2"></div>
              <div className="color-dot color3"></div>
            </div>
          </div>
          <hr className="detail-divider" />
          <div className="detail-size-section">
            <p className="section-title">Choose Size</p>
            <div className="size-options">
              {['Small', 'Medium', 'Large', 'X-Large'].map(size => (
                <button key={size} className={`size-btn ${size === 'Large' ? 'selected' : ''}`}>{size}</button>
              ))}
            </div>
          </div>
          <hr className="detail-divider" />
          <div className="detail-cart-section">
            <div className="qty-controls">
              <button className="qty-btn">−</button>
              <span className="qty-number">1</span>
              <button className="qty-btn">+</button>
            </div>
            <div className="add-to-cart-wrapper">
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      {/* Div 2: Đánh giá */}
      <div className="detail-review-section">
        <div className="section-title">
          <div>Product Details</div>
          <div className="active-tab">Rating & Reviews</div>
          <div>FQAs</div>
        </div>
        <div className="review-list">
          {[
            { name: "Samantha D.", date: "August 14, 2023", rating: 4.5, review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt." },
            { name: "Alex M.", date: "August 15, 2023", rating: 5, review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me." },
            { name: "Ethan R.", date: "August 16, 2023", rating: 4.5, review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt." },
            { name: "Olivia P.", date: "August 17, 2023", rating: 5, review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out." },
            { name: "Liam K.", date: "August 18, 2023", rating: 4, review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion." },
            { name: "Ava H.", date: "August 19, 2023", rating: 4.5, review: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter." }
          ].map(({ name, date, rating, review }, i) => (
            <div key={i} className="review-card">
              <div className="review-rating-row">
                <div className="review-rating">{"★".repeat(Math.floor(rating))}{rating % 1 ? "½" : ""}</div>
                <div className="review-options">...</div>
              </div>
              <div className="review-author">{name}</div>
              <div className="review-text">{review}</div>
              <div className="review-date">Posted on {date}</div>
            </div>
          ))}
        </div>
        <div className="load-more-wrapper">
          <button className="load-more-btn">Load More Reviews</button>
        </div>
      </div>

      {/* Div 3: Sản phẩm gợi ý */}
      <div className="detail-suggest-section">
        <h2 className="section-title-2">You Might Also Like</h2>
          <div className="suggest-grid">
            {[
              { name: "Polo with Contrast Trims", price: "$212", old: "$242", discount: "-20%", rating: 4, src: "/imgproduct/image copy 2.png" },
              { name: "Gradient Graphic T-shirt", price: "$145", old: "", discount: "", rating: 3.5, src: "/imgproduct/image copy 3.png" },
              { name: "Polo with Tipping Details", price: "$180", old: "", discount: "", rating: 4.5, src: "/imgproduct/image copy 4.png" },
              { name: "Black Striped T-shirt", price: "$120", old: "$150", discount: "-30%", rating: 5, src: "/imgproduct/image copy 5.png" }
            ].map(({ name, price, old, discount, rating, src }, i) => (
              <div key={i} className="suggest-card">
                <div className="suggest-image-wrapper">
                  <img src={src} alt={name} className="suggest-image" />
                </div>
                <div className="suggest-name">{name}</div>
                <div className="suggest-rating">
                  {"★".repeat(Math.floor(rating))}
                  {rating % 1 !== 0 && "½"}
                  <span className="rating-number">{rating}/5</span>
                </div>
                <div className="suggest-price-line">
                  <div className="suggest-price">
                    {price} {old && <span className="old-price">{old}</span>}
                  </div>
                  {discount && <div className="discount-text">{discount}</div>}
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default DetailPage;
