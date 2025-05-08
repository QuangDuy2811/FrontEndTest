import { useEffect, useState } from "react";
import { useNavigate, Outlet, Link } from "react-router-dom";

const AdminLayout = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    const role = localStorage.getItem("role");

    if (!storedName || role !== "admin") {
      // Nếu không phải admin hoặc chưa login -> redirect
      navigate("/login");
    } else {
      setUserName(storedName);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("role");
    navigate("/home");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 hidden md:block shadow-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Admin Panel</h2>
          <p className="text-gray-600 text-sm">System Administration</p>
        </div>
        <nav className="space-y-4">
          <Link to="/admin/dashboard" className="block text-black hover:bg-gray-200 rounded-md px-4 py-2 transition duration-300">
            Dashboard
          </Link>
          <Link to="/admin/users" className="block text-black hover:bg-gray-200 rounded-md px-4 py-2 transition duration-300">
            User Management
          </Link>
          <Link to="/admin/products" className="block text-black hover:bg-gray-200 rounded-md px-4 py-2 transition duration-300">
            Product Management
          </Link>
          <Link to="/admin/orders" className="block text-black hover:bg-gray-200 rounded-md px-4 py-2 transition duration-300">
            Order Management
          </Link>
          <Link to="/admin/settings" className="block text-black hover:bg-gray-200 rounded-md px-4 py-2 transition duration-300">
            Setting
          </Link>
        </nav>
      </aside>

      {/* Nội dung chính */}
      <div className="flex flex-col flex-1 min-h-screen">
        {/* Navbar Admin */}
        <header className="bg-white border-b border-gray-200 p-4 flex justify-between items-center shadow-md">
          <h1 className="text-xl font-bold text-black">System Administration</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Hello, {userName}</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              className="rounded-full w-12 h-12 border-2 border-gray-300"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              onClick={handleLogout}
            >
              Đăng xuất
            </button>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-grow p-6 bg-gray-50">
          <Outlet />
        </main>

        {/* Footer Admin */}
        <footer className="bg-white border-t border-gray-200 p-4 text-center text-sm text-gray-500">
          © 2025 Admin Panel. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
