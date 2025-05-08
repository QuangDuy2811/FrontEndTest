const Settings = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Cài đặt hệ thống</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Thông tin Website</h3>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Tên website</label>
              <input type="text" className="w-full border rounded p-2" placeholder="Sports Shop" />
            </div>
            <div>
              <label className="block mb-1">Email liên hệ</label>
              <input type="email" className="w-full border rounded p-2" placeholder="contact@sports.vn" />
            </div>
            <div>
              <label className="block mb-1">Số điện thoại</label>
              <input type="text" className="w-full border rounded p-2" placeholder="0123 456 789" />
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Lưu thay đổi
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Cài đặt khác</h3>
          <ul className="space-y-2">
            <li className="flex justify-between items-center">
              <span>Kích hoạt chế độ bảo trì</span>
              <input type="checkbox" className="w-5 h-5" />
            </li>
            <li className="flex justify-between items-center">
              <span>Gửi email tự động</span>
              <input type="checkbox" className="w-5 h-5" />
            </li>
            <li className="flex justify-between items-center">
              <span>Thông báo đẩy</span>
              <input type="checkbox" className="w-5 h-5" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Settings;
