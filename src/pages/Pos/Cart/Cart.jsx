import React, { useState } from 'react';
import './styles/Cart.scss';
import { actionTypes } from '../../../reduser/cartReducer';

const Cart = ({ state, dispatch }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, subtotal, discountAmount, tax, total, errorMessage } = state;

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const increaseQuantity = (item) => {
    dispatch({
      type: actionTypes.UPDATE_QUANTITY,
      payload: { id: item.id, quantity: item.quantity + 1 },
    });
  };

  const decreaseQuantity = (item) => {
    dispatch({
      type: actionTypes.UPDATE_QUANTITY,
      payload: { id: item.id, quantity: item.quantity - 1 },
    });
  };

  const applyPromoCode = (promoCode) => {
    dispatch({ type: actionTypes.APPLY_PROMO_CODE, payload: { promoCode } });
  };

  const formatCurrency = (value) => value.toFixed(2);

  return (
    <>
      <button className="toggle-cart" onClick={toggleCart}>
        ☰
      </button>
      <div className={`checkout ${isCartOpen ? 'open' : ''}`}>
        <div className="top">
          <div className="info">
            <div className="name">Customer's name</div>
          </div>
          <div className="order">
            <select className="table">
              <option>Select Table</option>
            </select>
            <select className="type">
              <option>Order Table</option>
            </select>
          </div>
        </div>

        <div className="cart-products">
          {cart.length === 0 ? (
            <div className="empty">No Item Selected</div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="img-section">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="food-info">
                  <div className="name">{item.name}</div>
                  <div className="price">{item.price}</div>
                  <div className="total">${formatCurrency(item.price * item.quantity)}</div>
                </div>
                <div className="quantity-section">
                  <div className="quantity-controls">
                    <button className="decrease" onClick={() => decreaseQuantity(item)}>
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button className="increase" onClick={() => increaseQuantity(item)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="bottom">
          <div className="tax">
            <div className="subtotal-section">
              <div className="subtotal">
                <div className="text">Subtotal</div>
                <div className="currency">$</div>
                <div className="value">{formatCurrency(subtotal)}</div>
              </div>
            </div>
            {discountAmount > 0 && (
              <div className="subtotal-section">
                <div className="subtotal">
                  <div className="text">Discount</div>
                  <div className="currency">-$</div>
                  <div className="value">{formatCurrency(discountAmount)}</div>
                </div>
              </div>
            )}
            <div className="tax-section">
              <div className="tax">
                <div className="text">Tax 10%</div>
                <div className="currency">$</div>
                <div className="value">{formatCurrency(tax)}</div>
              </div>
            </div>
          </div>
          <div className="total-section">
            <div className="total">
              <div className="text">TOTAL</div>
              <div className="currency">$</div>
              <div className="value">{formatCurrency(total)}</div>
            </div>
            {errorMessage && <div className="error">{errorMessage}</div>}
            <div className="payment-section">
              <div className="promo-section">
                <input
                  type="text"
                  onChange={(e) => applyPromoCode(e.target.value)}
                  placeholder="Add a Promo or Voucher"
                />
              </div>
              <button>Payment Method</button>
            </div>
          </div>
          <button className="place-order">Place Order</button>
        </div>
      </div>
    </>
  );
};

export default Cart;