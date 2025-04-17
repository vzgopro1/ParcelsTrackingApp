export const initialState = {
  cart: [],
  appliedDiscount: null,
  errorMessage: '',
  subtotal: 0,
  discountAmount: 0,
  tax: 0,
  total: 0,
};


export const actionTypes = {
  ADD_ITEM: 'ADD_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  APPLY_PROMO_CODE: 'APPLY_PROMO_CODE',
};

const discounts = {
  SAVE10: { type: 'percentage', value: 10 },
  FREESHIP: { type: 'fixed', value: 5 },
};

const calculateTotals = (cart, appliedDiscount) => {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountAmount = appliedDiscount
    ? appliedDiscount.type === 'percentage'
      ? subtotal * (appliedDiscount.value / 100)
      : Math.min(appliedDiscount.value, subtotal)
    : 0;
  const discountedSubtotal = subtotal - discountAmount;
  const tax = discountedSubtotal * 0.10;
  const total = discountedSubtotal + tax;

  return { subtotal, discountAmount, tax, total };
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM: {
      const { item } = action.payload;
      if (!item || !item.id || !item.price) {
        console.error('Invalid item:', item);
        return state;
      }
      const existingItem = state.cart.find(cartItem => cartItem.id === item.id);
      let newCart;
      if (existingItem) {
        newCart = state.cart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        newCart = [...state.cart, { ...item, quantity: 1 }];
      }
      const totals = calculateTotals(newCart, state.appliedDiscount);
      return { ...state, cart: newCart, ...totals };
    }

    case actionTypes.UPDATE_QUANTITY: {
      const { id, quantity } = action.payload;
      let newCart;
      if (quantity <= 0) {
        newCart = state.cart.filter(cartItem => cartItem.id !== id);
      } else {
        newCart = state.cart.map(cartItem =>
          cartItem.id === id ? { ...cartItem, quantity } : cartItem
        );
      }
      const totals = calculateTotals(newCart, state.appliedDiscount);
      return { ...state, cart: newCart, ...totals };
    }

    case actionTypes.APPLY_PROMO_CODE: {
      const { promoCode } = action.payload;
      const discount = discounts[promoCode];
      const totals = calculateTotals(state.cart, discount);
      if (discount) {
        return {
          ...state,
          appliedDiscount: discount,
          errorMessage: '',
          ...totals,
        };
      }
      return {
        ...state,
        appliedDiscount: null,
        errorMessage: 'Invalid promo code',
        ...totals,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;