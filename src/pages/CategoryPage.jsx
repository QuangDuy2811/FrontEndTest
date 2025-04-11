import React from "react";
import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";


const CategoryPage = () => {
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
                <span>^</span>
                </div>
                <input type="range" min="50" max="200" className="price-range" />
                <div className="price-values">
                <span>$50</span>
                <span>$200</span>
                </div>
            </div>

            {/* Div 5 - Rating */}
            <div className="filters-rating">
                <div className="filters-title">
                <h3>Rating</h3>
                <span>^</span>
                </div>
                <div className="rating-stars">⭐⭐⭐☆☆</div>
            </div>

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
            <div className="product-card">
                <img src="/image1.png" alt="Product" />
                <h4>Fjallraven - Foldsack ...</h4>
                <div>⭐⭐⭐⭐☆</div>
                <p>$145</p>
            </div>
            <div className="product-card">
                <img src="/image2.png" alt="Product" />
                <h4>Mens Casual Premium ...</h4>
                <div>⭐⭐⭐⭐☆</div>
                <p>$180</p>
            </div>
            <div className="product-card">
                <img src="/image3.png" alt="Product" />
                <h4>Mens Cotton Jacket</h4>
                <div>⭐⭐⭐⭐☆</div>
                <p>$120</p>
            </div>
            <div className="product-card">
                <img src="/image3.png" alt="Product" />
                <h4>Mens Cotton Jacket</h4>
                <div>⭐⭐⭐⭐☆</div>
                <p>$145</p>
            </div>
            <div className="product-card">
                <img src="/image3.png" alt="Product" />
                <h4>Mens Cotton Jacket</h4>
                <div>⭐⭐⭐⭐☆</div>
                <p>$145</p>
            </div>
            <div className="product-card">
                <img src="/image3.png" alt="Product" />
                <h4>Mens Cotton Jacket</h4>
                <div>⭐⭐⭐⭐☆</div>
                <p>$145</p>
            </div>
            <div className="product-card">
                <img src="/image3.png" alt="Product" />
                <h4>Mens Cotton Jacket</h4>
                <div>⭐⭐⭐⭐☆</div>
                <p>$145</p>
            </div>
            <div className="product-card">
                <img src="/image3.png" alt="Product" />
                <h4>Mens Cotton Jacket</h4>
                <div>⭐⭐⭐⭐☆</div>
                <p>$145</p>
            </div>
            <div className="product-card">
                <img src="/image3.png" alt="Product" />
                <h4>Mens Cotton Jacket</h4>
                <div>⭐⭐⭐⭐☆</div>
                <p>$145</p>
            </div>
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
