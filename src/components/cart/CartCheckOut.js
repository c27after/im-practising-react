import React, { useContext } from 'react'
import classes from './CartCheckOut.module.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Meal from '../meals/meal/Meal'
import CartContext from '../../store/cart-context'
import CheckOutItem from './CheckOutItem'

const CartCheckOutRoot = document.getElementById('checkout-root')

const CartCheckOut = (props) => {
  const ctx = useContext(CartContext)
  // const itemtotalPrice=()=>{
  //   return props.meal.amount*props.meal.price
  // }
  // //let itePri = itemtotalPrice()
  return ReactDOM.createPortal(
    <div className={classes.checkout}>
      <div className={classes.top}>
        <FontAwesomeIcon
          onClick={props.hideCheckOutHandler}
          className={classes.icon}
          icon={faXmark}
        />
      </div>
      <div className={classes.mainBox}>
        <h2>餐品详情</h2>
        <div className={classes.main}>
          {ctx.items.map((item) => {
            return <CheckOutItem key={item.id} meal={item}></CheckOutItem>
          })}
        </div>
        <div className={classes.totalPrice}>
          <span className={classes.price}>{ctx.totalPrice}</span>
        </div>
      </div>
     
          <button className={classes.GoToPay}>去支付</button>

    </div>,
    CartCheckOutRoot
  )
}

export default CartCheckOut
