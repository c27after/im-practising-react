import React, { useState, useContext } from 'react'
import classes from './Cart.module.css'
import iconImg from '../../asset/bag.png'
import CartDetails from './CartDetails'
import CartContext from '../../store/cart-context'
import CartCheckOut from './CartCheckOut'
const Cart = () => {
  const [showdetail, setShowdetail] = useState(false)

  const ctx = useContext(CartContext)
  //购物车显示
  const toggleShowdetail = () => {
    if (ctx.totalAmount === 0) {
      setShowdetail(false)
      return
    }
    setShowdetail((prevState) => !prevState)
  }
  //支付页面显示
  const [showCheckOut,setShowCheckOut]=useState(false)

  const showCheckOutHandler = ()=>{
    if(ctx.totalAmount === 0)return
    setShowCheckOut(true)
  }

  const hideCheckOutHandler=()=>{
    setShowCheckOut(false)
  }

  return (
    <div className={classes.Cart} onClick={toggleShowdetail}>
      {showdetail &&<CartDetails />}
      {showCheckOut&&<CartCheckOut hideCheckOutHandler={hideCheckOutHandler}/>}
      <div className={classes.Icon}>
        <img src={iconImg} alt="" />
        {ctx.totalAmount && ctx.totalAmount !== 0 ? (
          <span className={classes.totalAmount}>{ctx.totalAmount}</span>
        ) : null}
      </div>
      <div className={classes.Money}>
        {ctx.totalPrice === 0 ? (
          <p className={classes.price}>未选择任何商品</p>
        ) : (
          <p className={classes.price}>￥{ctx.totalPrice}</p>
        )}
      </div>

      <button
      onClick={showCheckOutHandler}
        className={`${classes.payBtn} ${
          ctx.totalPrice === 0 ? classes.Disabled : ''
        }`}
      >
        去结算
      </button>
     
    </div>
    
    
  )
}

export default Cart
