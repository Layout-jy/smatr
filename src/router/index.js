import Loadable from 'react-loadable'
import React from 'react'
import Classify from '../page/Classify/Classify'
import Cart from '../page/Cart/Cart'
import My from '../page/My/My'
//路由懒加载
const Home = Loadable({
  loader:()=>import("../page/Home/Home"),
  loading:()=><div>loading.....</div>
})

const routes = [
  {
    path:'/home',
    component:Home,
    name:'首页'
  },
  {
    path:'/classify',
    component:Classify,
    name:'分类'
  },
  {
    path:'/cart',
    component:Cart,
    name:'购物车'
  },
  {
    path:'/my',
    component:My,
    name:'我的'
  }
]

export { routes }