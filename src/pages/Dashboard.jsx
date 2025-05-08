import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Dashboard</h2>

      {/* Cards thống kê */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg border border-black">
          <h3 className="text-xl font-semibold mb-2">Tổng Người dùng</h3>
          <p className="text-2xl font-bold">1520</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-black">
          <h3 className="text-xl font-semibold mb-2">Tổng Sản phẩm</h3>
          <p className="text-2xl font-bold">320</p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-black">
          <h3 className="text-xl font-semibold mb-2">Tổng Đơn hàng</h3>
          <p className="text-2xl font-bold">870</p>
        </div>
      </div>

      {/* Placeholder cho thống kê biểu đồ sau này */}
      <div className="mt-10 bg-white p-6 rounded-lg border border-black">
        <h3 className="text-xl font-semibold mb-4">Biểu đồ doanh thu (Placeholder)</h3>
        <div className="h-64 bg-gray-200 flex items-center justify-center text-gray-500">
          (Biểu đồ sẽ đặt ở đây sau)
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
