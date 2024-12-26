import { useState } from "react";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import './ProductCard.css';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  const { image, name, price, oldPrice, discount, rating } = product;

  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = () => {
    setIsWishlisted((prevState) => !prevState);
  };

  return (
    <div className="product-card">
      <div className="product-image" style={{ position: 'relative' }}>
        <img src={image} alt={name} />
        {discount && <span className="discount-badge">{discount}%</span>}
        <button
          className="wishlist-btn"
          onClick={handleWishlistClick}
          style={{ color: isWishlisted ? 'red' : 'gray' }}
        >
          <FaHeart />
        </button>
      </div>
      <div className="product-info">
        <h5 className="product-name">{name}</h5>
        <div className="product-pricing">
          <span className="current-price">₹{price}</span>
          {oldPrice && <span className="old-price">₹{oldPrice}</span>}
        </div>
        <div className="product-rating">
          {Array.from({ length: rating }, (_, i) => (
            <FaStar key={i} className="star" />
          ))}
        </div>
        <div className="cart-container">
        <button className="add-to-cart-btn">
          <FaShoppingCart /> Add to Cart
        </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,  
    name: PropTypes.string.isRequired,    
    price: PropTypes.number.isRequired,   
    oldPrice: PropTypes.number,           
    discount: PropTypes.number,           
    rating: PropTypes.number.isRequired,  
  }).isRequired,                          
};

export default ProductCard;
