import { useState } from "react";
import Toast from "../components/Toast";

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "Nguyễn Văn A", total: "2.500.000đ", status: "Đang xử lý" },
    { id: 2, customer: "Trần Thị B", total: "1.200.000đ", status: "Hoàn thành" },
    { id: 3, customer: "Lê Văn C", total: "3.800.000đ", status: "Đã hủy" },
  ]);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleUpdateStatus = (id, newStatus) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: newStatus } : order
      )
    );
    setToastMessage("Cập nhật trạng thái đơn hàng thành công!");
    setShowToast(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Quản lý Đơn hàng</h2>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow p-6">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="border-b">
              <th className="p-4">ID</th>
              <th className="p-4">Khách hàng</th>
              <th className="p-4">Tổng tiền</th>
              <th className="p-4">Trạng thái</th>
              <th className="p-4">Thao tác</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 border-b">
                <td className="p-4">{order.id}</td>
                <td className="p-4">{order.customer}</td>
                <td className="p-4">{order.total}</td>
                <td className="p-4">{order.status}</td>
                <td className="p-4 space-x-2">
                  <button
                    onClick={() => handleUpdateStatus(order.id, "Hoàn thành")}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-xs"
                  >
                    Đánh dấu hoàn thành
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
    </div>
  );
};

export default OrderManagement;
