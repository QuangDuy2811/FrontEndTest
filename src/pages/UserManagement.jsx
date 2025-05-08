import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import Toast from "../components/Toast";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`);
      fetchUsers();
      setToastMessage("Xóa người dùng thành công!");
      setShowToast(true);
    } catch (err) {
      console.error("Error deleting user:", err);
      setToastMessage("Có lỗi khi xóa người dùng!");
      setShowToast(true);
    }
  };

  const handleSaveUser = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedUser = {
      name: form.name.value,
      email: form.email.value,
      address: form.address.value,
      role: form.role.value,
      date: form.date.value
    };

    if (editingUser) {
      try {
        await axios.put(`http://localhost:5000/api/users/${editingUser.id}`, updatedUser);
        setToastMessage("Cập nhật người dùng thành công!");
        setShowModal(false);
        setEditingUser(null);
        fetchUsers();
      } catch (error) {
        setToastMessage("Cập nhật người dùng thất bại!");
      }
      setShowToast(true);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Quản lý Người dùng</h2>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow p-6">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="border-b">
              <th className="p-4">ID</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Date</th>
              <th className="p-4">Address</th>
              <th className="p-4">Role</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 border-b">
                <td className="p-4">{user.id}</td>
                <td className="p-4">{user.name}</td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  {user.date ? new Date(user.date).toLocaleDateString("vi-VN") : ""}
              </td>
                <td className="p-4">{user.address}</td>
                <td className="p-4">{user.role}</td>
                <td className="p-4 space-x-2">
                  <button
                    onClick={() => {
                      setEditingUser(user);
                      setShowModal(true);
                    }}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-xs"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-xs"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
          setEditingUser(null);
        }}
        title="Edit user"
      >
        <form onSubmit={handleSaveUser} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              defaultValue={editingUser?.name}
              type="text"
              name="name"
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              defaultValue={editingUser?.email}
              type="email"
              name="email"
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Address</label>
            <input
              defaultValue={editingUser?.address}
              type="text"
              name="address"
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1">Date</label>
            <input
              defaultValue={new Date(editingUser?.date).toLocaleDateString('en-CA')}
              type="date"
              name="date"
              className="w-full border rounded p-2"
            />
          </div>
          <div>
            <label className="block mb-1">Role</label>
            <select
              defaultValue={editingUser?.role}
              name="role"
              className="w-full border rounded p-2"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">
              Lưu
            </button>
          </div>
        </form>
      </Modal>

      {showToast && <Toast message={toastMessage} onClose={() => setShowToast(false)} />}
    </div>
  );
};

export default UserManagement;
