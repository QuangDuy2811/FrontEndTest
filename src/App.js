import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage.jsx";
import CartPage from "./pages/CartPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
