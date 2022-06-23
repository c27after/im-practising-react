import React from 'react'
import Backdroproot from '../BackDropRoot/Backdroproot'
import classes from './Comfrim.module.css'

const Comfirm = (props) => {
  return (
    <Backdroproot 
    onClick={props.onCancel}
     className={classes.ConfirmBackdrop}>
      <div className={classes.Comfirm}>
        <p className={classes.ComfirmText}>确定清空购物车吗？</p>
        <div>
          <button 
          onClick={(e)=>{props.onCancel(e)}}
          className={classes.cancel}>取消</button>
          <button 
          onClick={()=>{props.onOK()}}
          className={classes.ok}>确定</button>
        </div>
      </div>
    </Backdroproot>
  )
}

export default Comfirm
