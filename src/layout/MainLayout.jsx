import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom"; // Thêm Import Outlet

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Phải dùng Outlet để render page */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
