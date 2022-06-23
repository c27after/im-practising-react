import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import classes from './FilterMeals.module.css'

const FilterMeals = props => {
  const inputChangeHandler=e=>{
   const keyword= e.target.value.trim()
   props.onFilter(keyword)
  }
  return (
    <div className={classes.FliterMeals}>
      <div className={classes.InputBox}>
        <input
          onChange={inputChangeHandler}
          className={classes.searchInput}
          type="text"
          placeholder="请输入想吃的汉堡"
        />
        <FontAwesomeIcon
          className={classes.searchIcon}
          icon={faSearch}
        ></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default FilterMeals
