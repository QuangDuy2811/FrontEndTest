import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      {/* Header top đen */}
      <div className="header-top">
        <span className="header-top-text">
          Sign up and get 20% off to your first order.{" "}
          <Link to="#">Sign Up Now</Link>
        </span>
        <AiOutlineClose className="header-top-icon" />
      </div>

      {/* Navbar chính */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <Link to="/" className="navbar-logo">
            SHOP.CO
          </Link>

          {/* Menu items */}
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
            {/* Search */}
            <div className="search-container">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search for products..."
                className="search-input"
              />
            </div>

            {/* Cart + User */}
            <div className="cart-user-container">
              <Link to="/cart" className="navbar-cart">
                <FaShoppingCart />
                <span className="cart-count">3</span>
              </Link>

              <Link to="/login" className="navbar-user">
                <FaUser />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
