import React from "react";
import PropTypes from "prop-types";
import { ProductCard, ProductsContainer } from "../../components";

function Favorites({ products, toggleFavorite, updateCartCount }) {
  return (
    <ProductsContainer>
      {products.map(product => (
        <ProductCard
          key={product.id}
          {...product}
          toggleFavorite={toggleFavorite}
          updateCartCount={updateCartCount}
        />
      ))}
    </ProductsContainer>
  );
}

Favorites.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      currencySymbol: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool.isRequired,
    })
  ),
  toggleFavorite: PropTypes.func.isRequired,
  updateCartCount: PropTypes.func.isRequired,
};

Favorites.defaultProps = {
  products: [],
};

export default Favorites;
