import React from 'react'
import Meal from './meal/Meal'
import classes from './Meals.module.css'
const Meals = (props) => {
  return (
    // 滚动条是Meals的
    <div className={classes.Meals}>
      {props.mealsData.map((item) => (
        <Meal key={item.id} meal={item}></Meal>
      ))}
    </div>
  )
}

export default Meals
