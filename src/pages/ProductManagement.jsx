import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import Toast from "../components/Toast";
import axios from "axios";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [editingProduct, setEditingProduct] = useState(null); // Để lưu sản phẩm đang chỉnh sửa

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/products/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
        setToastMessage("Product deleted successfully!");
        setShowToast(true);
      })
      .catch((err) => {
        console.error("Failed to delete product:", err);
        setToastMessage("Failed to delete product!");
        setShowToast(true);
      });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const newProduct = {
      name: form.name.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      stock_quantity: parseInt(form.stock_quantity.value),
      sold_quantity: parseInt(form.sold_quantity.value),
      image_path: form.image_path.value,
    };

    axios.post("http://localhost:5000/api/products", newProduct)
      .then((res) => {
        setProducts([...products, res.data]);
        setShowModal(false);
        setToastMessage("Product added successfully!");
        setShowToast(true);
      })
      .catch((err) => {
        console.error("Failed to add product:", err);
        setToastMessage("Failed to add product!");
        setShowToast(true);
      });
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedProduct = {
      name: form.name.value,
      description: form.description.value,
      price: parseFloat(form.price.value),
      stock_quantity: parseInt(form.stock_quantity.value),
      sold_quantity: parseInt(form.sold_quantity.value),
      image_path: form.image_path.value,
    };

    axios.put(`http://localhost:5000/api/products/${editingProduct.id}`, updatedProduct)
      .then(() => {
        setProducts(products.map((product) => 
          product.id === editingProduct.id ? { ...product, ...updatedProduct } : product
        ));
        setShowModal(false);
        setToastMessage("Product updated successfully!");
        setShowToast(true);
      })
      .catch((err) => {
        console.error("Failed to update product:", err);
        setToastMessage("Failed to update product!");
        setShowToast(true);
      });
  };

  const openEditModal = (product) => {
    setEditingProduct(product);
    setShowModal(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Product Management</h2>
        <button
          onClick={() => {
            setEditingProduct(null);
            setShowModal(true);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Product
        </button>
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow p-6">
        <table className="min-w-full text-sm text-left">
          <thead>
            <tr className="border-b">
              <th className="p-4">id</th>
              <th className="p-4">name</th>
              <th className="p-4">description</th>
              <th className="p-4">price</th>
              <th className="p-4">stock_quantity</th>
              <th className="p-4">sold_quantity</th>
              <th className="p-4">rating</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50 border-b">
                <td className="p-4">{product.id}</td>
                <td className="p-4">{product.name}</td>
                <td className="p-4">{product.description}</td>
                <td className="p-4">{product.price}</td>
                <td className="p-4">{product.stock_quantity}</td>
                <td className="p-4">{product.sold_quantity}</td>
                <td className="p-4">{product.rating}</td>
                <td className="p-4 space-x-2">
                  <button
                    onClick={() => openEditModal(product)}
                    className="bg-blue-500 text-white px-3 py-1 rounded text-xs"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded text-xs"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={editingProduct ? "Edit Product" : "Add New Product"}
      >
        <form onSubmit={editingProduct ? handleEditProduct : handleAddProduct} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input 
              type="text" 
              name="name" 
              className="w-full border rounded p-2" 
              defaultValue={editingProduct ? editingProduct.name : ""} 
              required 
            />
          </div>
          <div>
            <label className="block mb-1">Description</label>
            <input 
              type="text" 
              name="description" 
              className="w-full border rounded p-2" 
              defaultValue={editingProduct ? editingProduct.description : ""} 
              required 
            />
          </div>
          <div>
            <label className="block mb-1">Price</label>
            <input 
              type="number" 
              step="0.01" 
              name="price" 
              className="w-full border rounded p-2" 
              defaultValue={editingProduct ? editingProduct.price : ""} 
              required 
            />
          </div>
          <div>
            <label className="block mb-1">Stock Quantity</label>
            <input 
              type="number" 
              name="stock_quantity" 
              className="w-full border rounded p-2" 
              defaultValue={editingProduct ? editingProduct.stock_quantity : ""} 
              required 
            />
          </div>
          <div>
            <label className="block mb-1">Sold Quantity</label>
            <input 
              type="number" 
              name="sold_quantity" 
              className="w-full border rounded p-2" 
              defaultValue={editingProduct ? editingProduct.sold_quantity : 0} 
              required 
            />
          </div>
          <div>
            <label className="block mb-1">Image Path</label>
            <input 
              type="text" 
              name="image_path" 
              className="w-full border rounded p-2" 
              defaultValue={editingProduct ? editingProduct.image_path : ""} 
              required 
            />
          </div>
          <div className="flex justify-end">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700" type="submit">
              {editingProduct ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </Modal>

      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
    </div>
  );
};

export default ProductManagement;
