import React from "react";
import PropTypes from "prop-types";
import { ProductCard, ProductsContainer } from "../../components";

function Shop({
  products,
  toggleFavorite,
  updateCartCount,
  history,
  login,
  allow,
  logout,
  location,
}) {
  const intended = location.state && location.state.intendedLocation;
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
      {allow && (
        <button type="button" onClick={() => history.push("/cart")}>
          Go to checkout
        </button>
      )}
      <button
        type="button"
        onClick={() => (allow ? logout() : login(intended))}
      >
        {allow ? "Logout" : "Login"}
      </button>
    </ProductsContainer>
  );
}

Shop.propTypes = {
  history: PropTypes.shape({}).isRequired,
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

Shop.defaultProps = {
  products: [],
};

export default Shop;
