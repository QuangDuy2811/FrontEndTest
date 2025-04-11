const CartItem = ({ item }) => {
    return (
      <div className="flex justify-between items-center border rounded-lg p-4 mb-4">
        <div className="flex items-center gap-4">
          <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
          <div>
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-500">Size: {item.size}</p>
            <p className="text-sm text-gray-500">Color: {item.color}</p>
            <p className="font-semibold mt-1">${item.price}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-2 border rounded">-</button>
          <span>1</span>
          <button className="px-2 border rounded">+</button>
          <button className="ml-4 text-red-500">🗑️</button>
        </div>
      </div>
    );
  };
  
  export default CartItem;
  