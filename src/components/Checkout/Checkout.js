import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import classes from './Checkout.module.scss';

import products from '../../../api/products';

class Checkout extends Component {
  totalCost(price, quantity) {
    return price * quantity;
  }

  render() {
    const productsData = [...products.items].map((product) => {
      return {
        ...product,
        quantity: 2,
      };
    });

    let formProductRows = productsData.map((product, index) => (
      <ul key={index} className={classes.FormRow}>
        <li>
          {product.name}, {product.size}
        </li>
        <li>€{product.price}</li>
        <li>{product.quantity}</li>
        <li>€{this.totalCost(product.price, product.quantity)}</li>
        <li>
          <FontAwesomeIcon icon={faTrashAlt} />
        </li>
      </ul>
    ));

    return (
      <div className={classes.CheckoutBody}>
        <div className={classes.CheckoutHeadline}>
          <header>Your Basket</header>
          <p>
            Items you have added to your basket are shown below. Adjust the
            quantities or remove items before continuing purchase.
          </p>
        </div>
        <form>
          <ul className={classes.FormRow}>
            <li>
              <strong>Product</strong>
            </li>
            <li>
              <strong>Price</strong>
            </li>
            <li>
              <strong>Quantity</strong>
            </li>
            <li>
              <strong>Cost</strong>
            </li>
            <li></li>
          </ul>
          {formProductRows}
        </form>
      </div>
    );
  }
}

export default Checkout;
