import React from 'react'
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
const Cart = (props) => {
  return (
    <div className={classes.Cart}>
      <div className={classes.Icon}>
        <img src={iconImg} alt="" />
        {props.cartData.totalAmount && props.cartData.totalAmount !== 0 ? (
          <span className={classes.totalAmount}>
            {props.cartData.totalAmount}
          </span>
        ) : null}
      </div>
      <div className={classes.Money}>
      {
        props.cartData.totalPrice===0?<p className={classes.price}>未选择任何商品</p>:<p className={classes.price}>￥{props.cartData.totalPrice}</p>
      }
      
      </div>
      
      <button className={`${classes.payBtn} ${props.cartData.totalPrice===0?classes.Disabled:''}`}>去结算</button>
    </div>
  )
}

export default Cart
