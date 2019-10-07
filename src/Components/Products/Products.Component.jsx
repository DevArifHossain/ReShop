import React from "react";
import { Container, Pagination } from "semantic-ui-react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import ProductItem from "../Products/ProductItem/ProductItem.Component";

import "./products.style.scss";

// showing all books for all page
const allProducts = products => {
  let items = Object.keys(products);

  return items.map(key =>
    products[key].map(product => (
      <ProductItem key={product.id} data={product} />
    ))
  );
};

// showing different categorized books on different routes
const speProducts = products => {
  let urlPrams = window.location.pathname.substr(1);
  let categorizedProducts = products[urlPrams];

  return categorizedProducts.map(product => (
    <ProductItem key={product.id} data={product} />
  ));
};

const Products = ({ products }) => {
  return (
    <Container>
      <div className="products-con">
        {window.location.pathname === "/"
          ? allProducts(products)
          : speProducts(products)}
      </div>
    </Container>
  );
};

const mapStateToProps = ({ products }) => ({
  products: products.data
});

export default connect(mapStateToProps)(withRouter(Products));
