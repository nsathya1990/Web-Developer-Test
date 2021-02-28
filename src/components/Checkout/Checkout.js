import React, { Component } from 'react';
import axios from '../../axios-orders';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import products from '../../../api/products';

import Button from '../UI/Button/Button';
import Spinner from '../UI/Spinner/Spinner';

import classes from './Checkout.module.scss';

class Checkout extends Component {
  state = {
    products: [],
    loading: false,
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
    products[index].cost = this.totalCost(
      products[index].price,
      products[index].quantity
    );
    this.setState({ products });
  }

  isFormValid() {
    return (
      this.state.products.length !== 0 &&
      this.state.products.every(
        (product) => Number.isInteger(product.quantity) && product.quantity > 0
      )
    );
  }

  orderHandler(event) {
    console.log('orderd');
    event.preventDefault();
    this.setState({ loading: true });
    axios
      .post('/orders.json', this.state.products)
      .then(() => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
        console.error(error);
      });
  }

  render() {
    const formProductRows = this.state.products.map((product, index) => (
      <ul key={index} className={classes.FormRow}>
        <li>
          {product.name}, {product.size}
        </li>
        <li>
          <span className={classes.ProductDetailTitle}>Price</span>
          <span className={classes.ProductDetailValue}>€{product.price}</span>
        </li>
        <li className={classes.Quantity}>
          <span className={classes.ProductDetailTitle}>Quantity</span>
          <span className={classes.ProductDetailValue}>
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
          </span>
        </li>
        <li>
          <span className={classes.ProductDetailTitle}>Cost</span>
          <span className={classes.ProductDetailValue}>
            €{(Math.round(product.cost * 100) / 100).toFixed(2)}
          </span>
        </li>
        <li>
          <span className={classes.ProductDetailTitle}>Remove</span>
          <span className={classes.ProductDetailValue}>
            <FontAwesomeIcon
              icon={faTrashAlt}
              title='Remove'
              onClick={() => this.onDeleteHandler(index)}
            />
          </span>
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
          <strong>
            €{(Math.round((subTotal + vatAmt) * 100) / 100).toFixed(2)}
          </strong>
        </li>
        <li></li>
      </ul>
    );

    const formValid = this.isFormValid();

    let checkoutForm = (
      <div className={classes.CheckoutBody}>
        <div className={classes.CheckoutHeadline}>
          <header>Your Basket</header>
          <p>
            Items you have added to your basket are shown below. Adjust the
            quantities or remove items before continuing purchase.
          </p>
        </div>
        <form onSubmit={this.orderHandler.bind(this)}>
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
          <div className={classes.ByNowBtn}>
            <Button disabled={!formValid}>Buy Now</Button>
          </div>
        </form>
      </div>
    );

    if (this.state.loading) {
      checkoutForm = <Spinner />;
    }

    return checkoutForm;
  }
}

export default Checkout;
