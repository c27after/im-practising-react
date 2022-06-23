import React, { useContext ,useState} from 'react'
import Backdrop from '../UI/BackDropRoot/Backdroproot'
import classes from './CartDetails.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../store/cart-context'
import Meal from '../meals/meal/Meal'
import Comfirm from '../UI/Comfirm/Comfirm'

const CartDetails = () => {

  const ctx = useContext(CartContext)

  const [ShowConfirm,setShowConfirm]=useState(false)

  const ShowConfirmHandler=()=>{
    setShowConfirm(true)
  }

  const cancelHandler=(e)=>{
    e.stopPropagation()
    setShowConfirm(false)
  }

  const OKHandler=()=>{
    ctx.clearHandler()
  }

  return (
    <Backdrop>
      <div 
      onClick={e=>e.stopPropagation()}
      className={classes.DetailsBox}>
        <div className={classes.top}>
          <h2>餐品详情</h2>
          <div 
          onClick={ShowConfirmHandler}
          className={classes.Actionbox}>
            <FontAwesomeIcon className={classes.icon} icon={faTrashCan} />
            <button>清空购物车</button>
          </div>
        </div>
        <div className={classes.meallist}>
        {ctx.items.map((item) => (
          <Meal noDesc key={item.id} meal={item}></Meal>
        ))}
      </div>
      </div>
      {ShowConfirm&&<Comfirm 
      onCancel={cancelHandler}
      onOK={OKHandler}
      ></Comfirm>}
      
    </Backdrop>
  )
}

export default CartDetails
