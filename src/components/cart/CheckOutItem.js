import React, { useContext } from 'react'
import Counter from '../UI/Counter'
import classes from './CheckOutItems.module.css'
import CartContext from '../../store/cart-context'
const CheckOutItem = (props) => {
  console.log(props)
  const ctx = useContext(CartContext)
  let itemPrice = () => {
    return props.meal.amount * props.meal.price
  }
  return (
    <div className={classes.CheckOutItem}>
      <img src={props.meal.img} alt="" />
      <div className={classes.detail}>
        <p className={classes.itemName}>{props.meal.title}</p>
        <div className={classes.ActionBox}>
          <Counter meal={props.meal}></Counter>

          <div className={classes.ItemPrice}>{itemPrice()}</div>
        </div>
      </div>
    </div>
  )
}

export default CheckOutItem
