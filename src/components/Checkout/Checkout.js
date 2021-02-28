import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import products from '../../../api/products';

import Button from '../UI/Button/Button';

import classes from './Checkout.module.scss';

class Checkout extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    const dummyQuantity = 2;
    const productsData = [...products.items].map((product) => {
      return {
        ...product,
        quantity: dummyQuantity,
        cost: this.totalCost(product.price, dummyQuantity),
      };
    });
    this.setState({ products: productsData });
  }

  totalCost(price, quantity) {
    return price * quantity;
  }

  onDeleteHandler(index) {
    const tempProducts = this.state.products.slice();
    tempProducts.splice(index, 1);
    this.setState({ products: tempProducts });
  }

  render() {
    const formProductRows = this.state.products.map((product, index) => (
      <ul key={index} className={classes.FormRow}>
        <li>
          {product.name}, {product.size}
        </li>
        <li>€{product.price}</li>
        <li>{product.quantity}</li>
        <li>€{product.cost}</li>
        <li>
          <FontAwesomeIcon
            icon={faTrashAlt}
            title='Delete'
            onClick={() => this.onDeleteHandler(index)}
          />
        </li>
      </ul>
    ));

    const subTotal = this.state.products.reduce(
      (sum, product) => sum + product.cost,
      0
    );
    const subTotalRow = (
      <ul className={[classes.FormRow]}>
        <li>Subtotal</li>
        <li></li>
        <li></li>
        <li>€{subTotal}</li>
        <li></li>
      </ul>
    );

    const vat = 20;
    const vatAmt = (subTotal * vat) / 100;
    const vatRow = (
      <ul className={[classes.FormRow]}>
        <li>VAT at 20%</li>
        <li></li>
        <li></li>
        <li>€{vatAmt}</li>
        <li></li>
      </ul>
    );

    const totalCostRow = (
      <ul className={[classes.FormRow]}>
        <li>Total cost</li>
        <li></li>
        <li></li>
        <li>€{subTotal + vat}</li>
        <li></li>
      </ul>
    );

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
          {subTotalRow}
          {vatRow}
          {totalCostRow}
          <Button>Buy Now</Button>
        </form>
      </div>
    );
  }
}

export default Checkout;
