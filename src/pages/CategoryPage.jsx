import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronUp, FiFilter } from 'react-icons/fi'; // Import các icon

const CategoryPage = () => {
  const [rating, setRating] = useState(0);

  const handleRatingClick = (value) => {
    setRating(value);
  };
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(200);


  return (
    <div className="category-page">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> &gt; <span>Casual</span>
      </div>

      <div className="category-content">
        {/* Filters Sidebar */}
        <div className="filters">
          {/* Div 1 - Title Filters */}
          <div className="filters-header">
              <h3>Filters</h3>
              <span><FiFilter /></span>
          </div>
          {/* Div 3 - Đường line */}
          <div className="filters-line"></div>
          {/* Div 2 - Danh sách danh mục */}
          <div className="filters-category">
              <div className="category-item">Electronics <span>›</span></div>
              <div className="category-item">Jewellery <span>›</span></div>
              <div className="category-item">Men's Clothing <span>›</span></div>
              <div className="category-item">Women's Clothing <span>›</span></div>
          </div>

          {/* Div 3 - Đường line */}
          <div className="filters-line"></div>

          {/* Div 4 - Price filter */}
          <div className="filters-price">
            <div className="filters-title">
              <h3>Price</h3>
              <span><FiChevronUp /></span>
            </div>

            <div className="slider-container">
              <input
                type="range"
                min="0"
                max="500"
                value={minPrice}
                onChange={(e) => {
                  const value = Math.min(Number(e.target.value), maxPrice - 10);
                  setMinPrice(value);
                }}
                className="thumb thumb-left"
              />
              <input
                type="range"
                min="0"
                max="500"
                value={maxPrice}
                onChange={(e) => {
                  const value = Math.max(Number(e.target.value), minPrice + 10);
                  setMaxPrice(value);
                }}
                className="thumb thumb-right"
              />
              <div className="slider-track"></div>
              <div
                className="slider-range"
                style={{
                  left: `${(minPrice / 500) * 100}%`,
                  width: `${((maxPrice - minPrice) / 500) * 100}%`,
                }}
              ></div>
            </div>

            <div className="price-values">
              <span>${minPrice}</span>
              <span>${maxPrice}</span>
            </div>
          </div>
          
          {/* Div 3 - Đường line */}
          <div className="filters-line"></div>

          {/* Div 5 - Rating */}
          <div className="filters-rating">
              <div className="filters-title">
                  <h3>Rating</h3>
                  <span><FiChevronUp /></span> {/* Thu gọn */}
              </div>
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`star ${star <= rating ? 'filled' : ''}`}
                    onClick={() => handleRatingClick(star)}
                    style={{ cursor: 'pointer', fontSize: '20px', color: star <= rating ? 'gold' : '#ccc' }}
                  >
                    ★
                  </span>
                ))}
              </div>
          </div>
          
          {/* Div 3 - Đường line */}
          <div className="filters-line"></div>

          {/* Div 6 - Button */}
          <button className="apply-filter-button">Apply Filter</button>
        </div>

        {/* Main Section */}
        <div className="category-main">
          <div className="category-header">
            <h2>Casual</h2>
            <div className="category-subheader">
              <p>Showing 1-12 of 100 Products</p>
              <select>
                <option>Sort by: Most Popular</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="product-grid">
            {[...Array(9)].map((_, i) => (
              <div className="product-card" key={i}>
                <img src={`/image${(i % 3) + 1}.png`} alt="Product" />
                <h4>Mens Cotton Jacket</h4>
                <div>⭐⭐⭐⭐☆</div>
                <p>$145</p>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button className="pagination-btn">
                <span className="arrow">&#8592;</span> Previous
            </button>
            <div className="pagination-pages">
                <span className="page-number active">1</span>
                <span className="page-number">2</span>
                <span className="page-number">3</span>
                <span className="dots">...</span>
                <span className="page-number">8</span>
                <span className="page-number">9</span>
                <span className="page-number">10</span>
            </div>
            <button className="pagination-btn">
                Next <span className="arrow">&#8594;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
