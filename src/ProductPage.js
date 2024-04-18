import React, { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

const products = [
  { id: 1, name: 'Wireless Mouse', description: 'Ergonomic wireless mouse with USB receiver', price: '₱500', image: 'wireless_mouse.jpg' },
  { id: 2, name: 'Mechanical Keyboard', description: 'RGB mechanical gaming keyboard with customizable keys', price: '₱2500', image: 'mechanical_keyboard.jpg' },
  { id: 3, name: 'Gaming Headset', description: 'Over-ear gaming headset with noise-canceling microphone', price: '₱1800', image: 'gaming_headset.jpg' },
  { id: 4, name: 'External Hard Drive', description: 'Portable external hard drive with high-speed USB 3.0 connectivity', price: '₱3000', image: 'external_hard_drive.jpg' },
  { id: 5, name: 'Wireless Earbuds', description: 'Bluetooth wireless earbuds with charging case', price: '₱1500', image: 'wireless_earbuds.jpg' },
  { id: 6, name: 'Laptop Cooling Pad', description: 'Adjustable laptop cooling pad with multiple fans', price: '₱800', image: 'laptop_cooling_pad.jpg' },
  { id: 7, name: 'Gaming Mouse Pad', description: 'Large gaming mouse pad with anti-fray stitching', price: '₱600', image: 'gaming_mouse_pad.jpg' },
  { id: 8, name: 'USB-C Hub', description: 'Multiport USB-C hub with HDMI, USB 3.0, and SD card reader', price: '₱1200', image: 'usb_c_hub.jpg' },
  { id: 9, name: 'Webcam', description: 'Full HD webcam with built-in microphone', price: '₱2000', image: 'webcam.jpg' },
  { id: 10, name: 'Wireless Charger', description: 'Qi-enabled wireless charger for smartphones', price: '₱1000', image: 'wireless_charger.jpg' },
];

function ProductPage() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    // Implement remove from cart functionality
  };

  const emptyCart = () => {
    setCartItems([]); // Clear the cart by setting cartItems to an empty array
  };

  return (
    <div>
      <h1>PC Accessories and Devices</h1>
      <div className="product-list">
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} emptyCart={emptyCart} />
    </div>
  );
}

export default ProductPage;