import React, { useContext } from 'react'
import classes from './Counter.module.css'
import CartContext from '../../store/cart-context'

//计算器组件
const Counter = (props) => {
  const ctx = useContext(CartContext)
  //添加函数
  const addBtnHandler=()=>{
    ctx.addMealHandler(props.meal)
  }
  //减少函数
  const subBtnHandler=()=>{
    ctx.subMealHandler(props.meal)
  }
  return (
    <div className={classes.Counter}>
      {props.meal.amount && props.meal.amount !== 0 ? (
        <>
          <button className={classes.sub} onClick={subBtnHandler}>-</button>
          <span>{props.meal.amount}</span>
        </>
      ) : null}

      <button className={classes.add} onClick={addBtnHandler}>+</button>
    </div>
  )
}

export default Counter
