import React from "react";
import { FiStar } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner Section */}
      <div className="home-banner">
        <img src="/background.png" alt="Banner" className="home-banner-img" />
        <div className="home-banner-overlay">
          <h1>Find Clothes That Matches Your Style</h1>
          <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <div className="home-banner-button">Shop Now</div>
          <div className="home-stats">
            <div>
              <h3>200+</h3>
              <p>International Brands</p>
            </div>
            <div>
              <h3>2,000+</h3>
              <p>High-Quality Products</p>
            </div>
            <div>
              <h3>30,000+</h3>
              <p>Happy Customers</p>
            </div>
          </div>
          <FiStar className="home-icon-star" />
          <FiStar className="home-icon-star-2" />
        </div>
      </div>

      {/* Brands */}
      <div className="home-brands">
        <img src="/logohome1.png" alt="brand" />
        <img src="/logohome2.png" alt="brand" />
        <img src="/logohome3.png" alt="brand" />
        <img src="/logohome4.png" alt="brand" />
        <img src="/logohome5.png" alt="brand" />
      </div>

      {/* New Arrivals */}
      <h2 className="home-section-title">New Arrivals</h2>
      <div className="home-product-list">
        <div className="home-product-card">
          <img src="/imgproduct/image.png" alt="Black Denim Jacket" />
          <h4>Black Denim Jacket</h4>
          <p>$120</p>
        </div>
        <div className="home-product-card">
          <img src="/imgproduct/image copy.png" alt="White Hoodie" />
          <h4>White Hoodie</h4>
          <p>$95</p>
        </div>
        <div className="home-product-card">
          <img src="/imgproduct/image copy 2.png" alt="Retro Sunglasses" />
          <h4>Retro Sunglasses</h4>
          <p>$45</p>
        </div>
        <div className="home-product-card">
          <img src="/imgproduct/image copy 3.png" alt="Retro Sunglasses" />
          <h4>Retro Sunglasses</h4>
          <p>$45</p>
        </div>
      </div>
      <div className="home-viewall-button">View All</div>
      <div className="home-divider"></div>

      {/* Top Selling */}
      <h2 className="home-section-title">Top Selling</h2>
      <div className="home-product-list">
        <div className="home-product-card">
          <img src="/imgproduct/image copy 4.png" alt="Minimal T-Shirt" />
          <h4>Minimal T-Shirt</h4>
          <p>$49</p>
        </div>
        <div className="home-product-card">
          <img src="/imgproduct/image copy 5.png" alt="Slim Fit Jeans" />
          <h4>Slim Fit Jeans</h4>
          <p>$89</p>
        </div>
        <div className="home-product-card">
          <img src="/imgproduct/image copy 6.png" alt="Sporty Sneakers" />
          <h4>Sporty Sneakers</h4>
          <p>$110</p>
        </div>
        <div className="home-product-card">
          <img src="/imgproduct/image copy 7.png" alt="Sporty Sneakers" />
          <h4>Sporty Sneakers</h4>
          <p>$110</p>
        </div>
      </div>
      <div className="home-viewall-button">View All</div>

      {/* Browse by Style */}
      <div className="home-style-section">
        <h2 className="home-section-title">Browse by Dress Style</h2>
        <div className="home-style-grid">
          <div className="home-style-item item-1">
            <img src="/imgproduct/image copy 8.png" alt="Casual" />
            <span>Casual</span>
          </div>
          <div className="home-style-item item-2">
            <img src="/imgproduct/image copy 9.png" alt="Formal" />
            <span>Formal</span>
          </div>
          <div className="home-style-item item-3">
            <img src="/imgproduct/image copy 11.png" alt="Party" />
            <span>Party</span>
          </div>
          <div className="home-style-item item-4">
            <img src="imgproduct/image copy 10.png" alt="Gym" />
            <span>Gym</span>
          </div>
        </div>
      </div>


      {/* Testimonials */}
      <div className="home-testimonials-section">
        <div className="home-testimonials-header">
          <h2 className="home-section-title2">Our Happy Customers</h2>
          <div className="arrow-group">
            <button className="arrow-button">←</button>
            <button className="arrow-button">→</button>
          </div>
        </div>

        <div className="home-testimonials">
          <div className="home-testimonial-card">
            <p>"I had an amazing experience shopping here. The quality is top-notch!"</p>
            <h5>Emily R.</h5>
          </div>
          <div className="home-testimonial-card">
            <p>"Great customer service and fast delivery. Highly recommend!"</p>
            <h5>James K.</h5>
          </div>
          <div className="home-testimonial-card">
            <p>"Stylish and comfortable clothes. I keep coming back for more."</p>
            <h5>Sophia L.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
