// src/pages/Checkout.jsx
import React, { useState } from 'react';
import { toast } from 'react-toastify'; // Thêm thư viện Toast
import 'react-toastify/dist/ReactToastify.css'; // Đừng quên import CSS cho Toast

const Checkout = () => {
  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    phone: '',
    address: '',
    note: '',
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [cardInfo, setCardInfo] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: '',
  });
  const [loading, setLoading] = useState(false); // Thêm state loading

  const cartItems = [
    {
      id: 1,
      name: 'Áo thể thao Nike',
      price: 500000,
      quantity: 2,
      image: 'https://via.placeholder.com/60',
    },
    {
      id: 2,
      name: 'Giày chạy bộ Adidas',
      price: 1500000,
      quantity: 1,
      image: 'https://via.placeholder.com/60',
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCardInputChange = (e) => {
    const { name, value } = e.target;
    setCardInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitOrder = () => {
    if (!shippingInfo.name || !shippingInfo.phone || !shippingInfo.address) {
      toast.error('Vui lòng điền đầy đủ thông tin giao hàng!');
      return;
    }

    if (paymentMethod === 'visa') {
      if (!cardInfo.cardNumber || !cardInfo.cardHolder || !cardInfo.expiryDate || !cardInfo.cvv) {
        toast.error('Vui lòng điền đầy đủ thông tin thẻ Visa/Mastercard!');
        return;
      }
    }

    setLoading(true);
    const orderData = {
      shippingInfo,
      paymentMethod,
      cardInfo: paymentMethod === 'visa' ? cardInfo : null,
      cartItems,
    };

    // Giả lập gọi API gửi dữ liệu đặt hàng
    setTimeout(() => {
      setLoading(false); // Dừng loading khi đã gửi xong
      toast.success('Đặt hàng thành công!');
      console.log('Đặt hàng với dữ liệu:', orderData);
    }, 2000); // Giả lập thời gian gửi đơn
  };

  const handleCardNumberChange = (e) => {
    const { value } = e.target;
    if (/[^0-9]/.test(value)) return; // Cấm nhập ký tự không phải số
    setCardInfo((prev) => ({
      ...prev,
      cardNumber: value,
    }));
  };

  const handleCVVChange = (e) => {
    const { value } = e.target;
    if (/[^0-9]/.test(value)) return; // Cấm nhập ký tự không phải số
    setCardInfo((prev) => ({
      ...prev,
      cvv: value,
    }));
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const shippingFee = 30000;
  const total = calculateSubtotal() + shippingFee;

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Thanh toán đơn hàng</h2>
      <div className="checkout-wrapper">
        
        {/* Cột trái */}
        <div className="checkout-left">
          <div className="checkout-section">
            <h3 className="checkout-section-title">Thông tin giao hàng</h3>
            <input type="text" name="name" placeholder="Họ và tên" value={shippingInfo.name} onChange={handleInputChange} className="checkout-input" />
            <input type="text" name="phone" placeholder="Số điện thoại" value={shippingInfo.phone} onChange={handleInputChange} className="checkout-input" />
            <input type="text" name="address" placeholder="Địa chỉ" value={shippingInfo.address} onChange={handleInputChange} className="checkout-input" />
            <textarea name="note" placeholder="Ghi chú cho người giao hàng (không bắt buộc)" value={shippingInfo.note} onChange={handleInputChange} className="checkout-textarea"></textarea>
          </div>

          <div className="checkout-section">
            <h3 className="checkout-section-title">Phương thức thanh toán</h3>
            <div className="checkout-radio-group">
              <label className="checkout-radio">
                <input type="radio" name="paymentMethod" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} />
                Thanh toán khi nhận hàng (COD)
              </label>
              <label className="checkout-radio">
                <input type="radio" name="paymentMethod" value="bank" checked={paymentMethod === 'bank'} onChange={(e) => setPaymentMethod(e.target.value)} />
                Chuyển khoản ngân hàng
              </label>
              <label className="checkout-radio">
                <input type="radio" name="paymentMethod" value="visa" checked={paymentMethod === 'visa'} onChange={(e) => setPaymentMethod(e.target.value)} />
                Visa/Mastercard
              </label>
            </div>

            {/* Nếu chọn Visa thì hiện thêm các input */}
            {paymentMethod === 'visa' && (
              <div className="checkout-card-info">
                <input type="text" name="cardNumber" placeholder="Số thẻ" value={cardInfo.cardNumber} onChange={handleCardNumberChange} className="checkout-input" />
                <input type="text" name="cardHolder" placeholder="Tên chủ thẻ" value={cardInfo.cardHolder} onChange={handleCardInputChange} className="checkout-input" />
                <input type="text" name="expiryDate" placeholder="Ngày hết hạn (MM/YY)" value={cardInfo.expiryDate} onChange={handleCardInputChange} className="checkout-input" />
                <input type="text" name="cvv" placeholder="CVV" value={cardInfo.cvv} onChange={handleCVVChange} className="checkout-input" />
              </div>
            )}
          </div>
        </div>

        {/* Cột phải */}
        <div className="checkout-right">
          <div className="checkout-section">
            <h3 className="checkout-section-title">Đơn hàng của bạn</h3>
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-cart-item">
                <img src={item.image} alt={item.name} className="checkout-cart-img" />
                <div className="checkout-cart-info">
                  <p>{item.name}</p>
                  <p>Số lượng: {item.quantity}</p>
                  <p>{item.price.toLocaleString()} đ</p>
                </div>
              </div>
            ))}

            <div className="checkout-summary">
              <div className="checkout-summary-item">
                <span>Tạm tính:</span>
                <span>{calculateSubtotal().toLocaleString()} đ</span>
              </div>
              <div className="checkout-summary-item">
                <span>Phí vận chuyển:</span>
                <span>{shippingFee.toLocaleString()} đ</span>
              </div>
              <div className="checkout-summary-total">
                <span>Tổng cộng:</span>
                <span>{total.toLocaleString()} đ</span>
              </div>
            </div>

            <button className="checkout-submit-btn" onClick={handleSubmitOrder} disabled={loading}>
              {loading ? 'Đang xử lý...' : 'Đặt hàng'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
