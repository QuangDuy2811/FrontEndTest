import { Navigate } from "react-router-dom";

const RequireAdmin = ({ children }) => {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token"); // Giả sử bạn lưu token khi login

  // Nếu chưa đăng nhập hoặc không phải admin
  if (!token || role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RequireAdmin;
