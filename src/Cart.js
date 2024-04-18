import React from 'react';

function Cart({ cartItems, removeFromCart, emptyCart }) {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP' }).format(amount);
  };

  const handleRemoveFromCart = (index) => {
    removeFromCart(index);
  };

  const handleCheckout = () => {
    const receipt = generateReceipt(cartItems);
    alert(receipt);
    emptyCart();
  };

  const generateReceipt = (cartItems) => {
    let receipt = 'Receipt:\n';
    cartItems.forEach((item, index) => {
      receipt += `${index + 1}. ${item.name} - ${formatCurrency(parseFloat(item.price.replace('₱', '')))}\n`;
    });
    receipt += `\nTotal: ${formatCurrency(
      cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₱', '')), 0)
    )}`;
    return receipt;
  };

  return (
    <div className="Cart">
      <h2>Cart Summary</h2>
      {cartItems && cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> - <span className="price">{formatCurrency(parseFloat(item.price.replace('₱', '')))}</span>
                <button className="remove-button" onClick={() => handleRemoveFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total: <span className="total">{formatCurrency(cartItems.reduce((total, item) => total + parseFloat(item.price.replace('₱', '')), 0))}</span></p>
          <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;
