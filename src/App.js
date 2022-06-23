import React, { useState } from 'react'
import CartContext from './store/cart-context'
import Meals from './components/meals/Meals'
import FilterMeals from './components/FilterMeals/FilterMeals'
import Cart from './components/cart/Cart'

const MEALS_DATA = [
  {
    id: '1',
    title: '汉堡包',
    desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 12,
    img: '/img/meals/1.png',
  },
  {
    id: '2',
    title: '双层吉士汉堡',
    desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
    price: 20,
    img: '/img/meals/2.png',
  },
  {
    id: '3',
    title: '巨无霸',
    desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
    price: 24,
    img: '/img/meals/3.png',
  },
  {
    id: '4',
    title: '麦辣鸡腿汉堡',
    desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
    price: 21,
    img: '/img/meals/4.png',
  },
  {
    id: '5',
    title: '板烧鸡腿堡',
    desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
    price: 22,
    img: '/img/meals/5.png',
  },
  {
    id: '6',
    title: '麦香鸡',
    desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
    price: 14,
    img: '/img/meals/6.png',
  },
  {
    id: '7',
    title: '吉士汉堡包',
    desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
    price: 12,
    img: '/img/meals/7.png',
  },
]

const App = () => {
  //创建一个state,存食物列表
  const [mealsData, setMealsData] = useState(MEALS_DATA)

  //存购物车数据
  //1.商品[]
  //2.商品总数
  //3.商品总价
  const [cartData, setCartData] = useState({
    items: [],
    totalAmount: 0,
    totalPrice: 0,
  })

  const addMealHandler = (meal) => {
    //对购物车进行一个浅拷贝
    const newCart = { ...cartData }
    //判断是否存在
    if (newCart.items.indexOf(meal) === -1) {
      newCart.items.push(meal)
      //修改商品数量
      meal.amount = 1
    } else {
      meal.amount++
    }

    newCart.totalAmount += 1
    newCart.totalPrice += meal.price
    setCartData(newCart)
  }

  const subMealHandler = (meal) => {
    const newCart = { ...cartData }
    meal.amount -= 1
    //检查是否归零
    if (meal.amount === 0) {
      newCart.items.splice(newCart.items.indexOf(meal), 1)
    }

    newCart.totalAmount -= 1
    newCart.totalPrice = newCart.totalPrice - meal.price
    setCartData(newCart)
  }

  const filterHandler = (keyword) => {
    const New_MEALS_DATA = MEALS_DATA.filter(
      (item) => item.title.indexOf(keyword) !== -1
    )
    setMealsData(New_MEALS_DATA)
  }

  const clearHandler = () => {
    const newCart = { ...cartData }
    newCart.items.forEach((item) => {
      delete item.amount
    })
    newCart.items=[]
    newCart.totalAmount=0
    newCart.totalPrice=0
    setCartData(newCart)

  }

  return (
    <CartContext.Provider
      value={{ ...cartData, subMealHandler, addMealHandler, clearHandler }}
    >
      <div>
        <FilterMeals onFilter={filterHandler}></FilterMeals>
        <Meals mealsData={mealsData} />
      </div>
      <Cart cartData={cartData}></Cart>
    </CartContext.Provider>
  )
}

export default App
