import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import '../../styles.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <Link to={`/products/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain p-4"
        />
      </Link>
      <div className="p-4">
        <Link to={`/products/${product.id}`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-indigo-600 line-clamp-1">
            {product.title}
          </h3>
        </Link>
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-indigo-600">
            ${product.price}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;