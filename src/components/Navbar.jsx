import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

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
            <Link to="#">Shop</Link>
            <Link to="#">On Sale</Link>
            <Link to="#">New Arrivals</Link>
            <Link to="#">Brands</Link>
          </div>

          {/* Search + Cart + User */}
          <div className="navbar-actions">
            <input
              type="text"
              placeholder="Search for products..."
              className="navbar-search"
            />

            {/* Giỏ hàng */}
            <Link to="/cart" className="navbar-cart">
              <FaShoppingCart />
              <span className="cart-count">3</span>
            </Link>

            {/* Người dùng */}
            <Link to="/account" className="navbar-user">
              <FaUser />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
