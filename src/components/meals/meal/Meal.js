import React from 'react'
import Counter from '../../UI/Counter'
import classes from './meal.module.css'
const Meal = (props) => {
  return (
    <div className={classes.Meal}>
      <div className={classes.MealImg}>
        <img src={props.meal.img} alt="" />
      </div>
      <div className={classes.DescBox}>
        <h2 className={classes.Title}>{props.meal.title}</h2>
        {props.noDesc ? null : (
          <p className={classes.Desc}>{props.meal.desc}</p>
        )}
        <div className={classes.ActionBox}>
          <div>
            <span className={classes.MoneyIcon}>￥</span>
            <span className={classes.Price}>{props.meal.price}</span>
          </div>
          <div>
            <Counter meal={props.meal}></Counter>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Meal
