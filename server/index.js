const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'QuangDuy',
  password: '123456',
  database: 'database_shopco'
});

db.connect((err) => {
  if (err) {
    console.error('Database Connection Error:', err);
  } else {
    console.log('✅ Connected to MySQL Database');
  }
});

// ===================== AUTH APIs =====================

// Register
app.post('/api/register', async (req, res) => {
  const { name, email, password, address, date } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const checkEmailSql = "SELECT * FROM users WHERE email = ?";
  db.query(checkEmailSql, [email], (err, result) => {
    if (err) return res.status(500).json({ message: "Server Error" });

    if (result.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return res.status(500).json({ message: "Server Error" });

      const insertSql = "INSERT INTO users (name, email, password, address, date) VALUES (?, ?, ?, ?, ?)";
      db.query(insertSql, [name, email, hashedPassword, address, date], (err, result) => {
        if (err) return res.status(500).json({ message: "Server Error" });

        res.json({ message: "User registered successfully" });
      });
    });
  });
});

// Login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Server Error" });
    if (results.length === 0) return res.status(400).json({ message: "Email not found" });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) return res.status(400).json({ message: "Invalid password" });

    res.json({
      message: "Login successful",
      token: "mocked-jwt-token", // Có thể thay bằng real JWT sau này
      user: { id: user.id, name: user.name, email: user.email, role: user.role }
    });
    
  });
});

// ===================== PRODUCT APIs =====================

// New arrivals
app.get('/api/products/new-arrivals', (req, res) => {
  const sql = "SELECT * FROM products ORDER BY created_at DESC LIMIT 3";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: "Server Error" });
    res.json(result);
  });
});

// Top selling
app.get('/api/products/top-selling', (req, res) => {
  const sql = "SELECT * FROM products ORDER BY sold_quantity DESC LIMIT 3";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: "Server Error" });
    res.json(result);
  });
});

// Get all products
app.get('/api/products', (req, res) => {
  const query = 'SELECT id, name, description, price, stock_quantity, sold_quantity, rating FROM products';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: 'Server Error' });
    res.json(results);
  });
});

// Insert product
// Thêm sản phẩm
app.post('/api/products', (req, res) => {
  const { name, description, price, stock_quantity, sold_quantity, image_path } = req.body;
  
  // Mặc định rating là 5 nếu không có trong request
  const rating = req.body.rating && req.body.rating >= 1 && req.body.rating <= 5 ? req.body.rating : 5;
  
  const query = `
    INSERT INTO products (name, description, price, stock_quantity, sold_quantity, image_path, rating)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;
  
  db.query(query, [name, description || '', price, stock_quantity, sold_quantity, image_path, rating], (err, result) => {
    if (err) return res.status(500).json({ error: 'Thêm sản phẩm thất bại' });
    res.json({
      id: result.insertId,
      name,
      description,
      price,
      stock_quantity,
      sold_quantity,
      image_path,
      rating,
    });
  });
});

// Update product
app.put('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const { name, description, price, stock_quantity, sold_quantity, rating } = req.body;
  const sql = `
    UPDATE products SET name = ?, description = ?, price = ?, stock_quantity = ?, sold_quantity = ?, rating = ?
    WHERE id = ?
  `;
  db.query(sql, [name, description, price, stock_quantity, sold_quantity, rating, id], (err, result) => {
    if (err) return res.status(500).json({ error: 'Update failed' });
    if (result.affectedRows === 0) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Product updated successfully' });
  });
});

// Delete product
app.delete('/api/products/:id', (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM products WHERE id = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ message: "Delete failed" });
    if (result.affectedRows === 0) return res.status(404).json({ message: "Product not found" });
    res.json({ message: "Product deleted successfully" });
  });
});

// ===================== USER APIs =====================

// Get all users
app.get('/api/users', (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) return res.status(500).json({ message: "Server Error" });
    res.json(results);
  });
});

// Get user by id
app.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  db.query("SELECT * FROM users WHERE id = ?", [userId], (err, results) => {
    if (err) return res.status(500).json({ message: "Server Error" });
    if (results.length === 0) return res.status(404).json({ message: "User not found" });
    res.json(results[0]);
  });
});

// Update user
app.put('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, address, date, role } = req.body;

  if (!name || !email || !role) {
    return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });
  }

  const sql = "UPDATE users SET name = ?, email = ?, address = ?, date = ?, role = ? WHERE id = ?";
  db.query(sql, [name, email, address, date, role, userId], (err, result) => {
    if (err) return res.status(500).json({ message: "Lỗi máy chủ" });
    if (result.affectedRows === 0) return res.status(404).json({ message: "Người dùng không tồn tại" });

    res.json({ message: "Cập nhật người dùng thành công" });
  });
});

// Delete user
app.delete('/api/users/:id', (req, res) => {
  const userId = req.params.id;
  db.query("DELETE FROM users WHERE id = ?", [userId], (err, result) => {
    if (err) return res.status(500).json({ message: "Server Error" });
    if (result.affectedRows === 0) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  });
});

// ===================== START SERVER =====================
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
