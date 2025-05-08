import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Lấy token và tên người dùng từ localStorage
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName"); // Lấy tên người dùng từ localStorage

  const handleLogout = () => {
    localStorage.removeItem("token"); // Xóa token khi đăng xuất
    localStorage.removeItem("userName"); // Xóa tên người dùng khi đăng xuất
    navigate("/home"); // Quay lại trang home
  };

  return (
    <>
      <div className="header-top">
        <span className="header-top-text">
          Sign up and get 20% off to your first order.{" "}
          <Link to="/register">Sign Up Now</Link>
        </span>
      </div>

      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo">SHOP.CO</Link>

          <div className="navbar-menu">
            <div className="dropdown">
              <select className="dropdown-select">
                <option value="">Shop</option>
                <option value="casual">Casual</option>
                <option value="sport">Sport</option>
              </select>
            </div>
            <Link to="#">On Sale</Link>
            <Link to="#">New Arrivals</Link>
            <Link to="#">Brands</Link>
          </div>

          <div className="navbar-actions">
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input type="text" placeholder="Search for products..." className="search-input" />
            </div>

            <div className="cart-user-container">
              <Link to="/cart" className="navbar-cart">
                <FaShoppingCart />
                <span className="cart-count">3</span>
              </Link>

              {/* Icon người dùng */}
              {token ? (
                <div className="navbar-user" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                  <FaUser />
                  {isDropdownOpen && (
                    <div className="dropdown-menu">
                      <span>{userName}</span>
                      <Link to="/orders">Orders</Link>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login" className="navbar-user">
                  <FaUser />
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
