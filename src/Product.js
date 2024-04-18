import React from 'react';

function Product({ product, addToCart }) {
  const handleAddToCart = () => {
    addToCart(product); // Call addToCart function with the product object
  };

  return (
    <div className="product">
      <div className="product-image">
        <img src={product.image} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%' }} />
      </div>
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button> {/* Call handleAddToCart function on button click */}
      </div>
    </div>
  );
}

export default Product;