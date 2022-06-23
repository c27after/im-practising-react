import React from 'react'

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
  clearHandler: () => {},
})

export default CartContext
