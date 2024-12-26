import PropTypes from 'prop-types';
import ProductCard from './ProductCard'; // Assuming ProductCard is a child component

const BestSellingProducts = ({ products }) => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Best Selling Products</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-6 col-sm-4 col-md-3 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

// PropTypes validation
BestSellingProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      oldPrice: PropTypes.number,
      discount: PropTypes.number,
      rating: PropTypes.number,
    })
  ).isRequired,
};

export default BestSellingProducts;
