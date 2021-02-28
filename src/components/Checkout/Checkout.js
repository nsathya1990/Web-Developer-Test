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

  onUpdateQuantity(event, index, operator) {
    const products = this.state.products.slice();
    if (operator === '+') {
      ++products[index].quantity;
    } else if (operator === '-') {
      --products[index].quantity;
    } else {
      products[index].quantity = event.target.value;
    }
    products[index].cost = this.totalCost(products[index].price, products[index].quantity);
    this.setState({ products });
  }

  isFormValid() {
    return this.state.products.length !== 0 && this.state.products.every(product => product.quantity > 0);
  }

  render() {
    const formProductRows = this.state.products.map((product, index) => (
      <ul key={index} className={classes.FormRow}>
        <li>
          {product.name}, {product.size}
        </li>
        <li>€{product.price}</li>
        <li className={classes.Quantity}>
          <button
            className={classes.QuantityBtn}
            type='button'
            onClick={(event) => this.onUpdateQuantity(event, index, '-')}
          >
            -
          </button>
          <input
            className={classes.QuantityInput}
            value={product.quantity}
            onChange={(event) => this.onUpdateQuantity(event, index)}
          />
          <button
            className={classes.QuantityBtn}
            type='button'
            onClick={(event) => this.onUpdateQuantity(event, index, '+')}
          >
            +
          </button>
        </li>
        <li>€{(Math.round(product.cost * 100) / 100).toFixed(2)}</li>
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
      <ul className={[classes.FormRow]} style={{ paddingTop: '5%' }}>
        <li>Subtotal</li>
        <li></li>
        <li></li>
        <li>€{(Math.round(subTotal * 100) / 100).toFixed(2)}</li>
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
        <li>€{(Math.round(vatAmt * 100) / 100).toFixed(2)}</li>
        <li></li>
      </ul>
    );

    const totalCostRow = (
      <ul className={[classes.FormRow]}>
        <li>
          <strong>Total cost</strong>
        </li>
        <li></li>
        <li></li>
        <li>
          <strong>€{(Math.round((subTotal + vatAmt) * 100) / 100).toFixed(2)}</strong>
        </li>
        <li></li>
      </ul>
    );

    const formValid = this.isFormValid();

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
          <div style={{ textAlign: 'right', paddingRight: '20%' }}>
            <Button disabled={!formValid}>Buy Now</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Checkout;
