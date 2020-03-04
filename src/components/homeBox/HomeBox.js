import React, { Component } from 'react'
import './HomeBox.css'
import {connect} from 'react-redux'
import HomeGoods from '../homeGoods/HomeGoods'
import BScroll   from 'better-scroll'
@connect((state)=>state)
class HomeBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      Bscroll: '',
    }
  }
  componentDidMount(){
    const wrapper = document.querySelector('.goods-list-wrap')
    //选中DOM中定义的 .wrapper 进行初始化
    const scroll = new BScroll(wrapper, {
      scrollX: true,  //开启横向滚动
      click: true,  // better-scroll 默认会阻止浏览器的原生 click 事件
      scrollY: false, //关闭竖向滚动
    })
    this.setState({
      Bscroll: scroll,
    })
  }
  render() {
    const { Bscroll } = this.state
    // console.log(this.props.goodsList.skuInfo)
    // console.log(this.props)  
    return (
      <div className='home-box'>
        <div className='imaginaryline' style={{borderTop:'1px dashed #ccc',margin:'0 .30rem'}}></div>
        <div className='bg-image-box'>
          <figure style={{backgroundImage:`url(${this.props.goodsList.header.image})`}}></figure>
        </div>
        <div className='goods-list-wrap'>
          {
            this.props.goodsList.skuInfo.map((item,index)=>{
              return <HomeGoods key={index} list={item} />
            })
          }
          
        </div>
      </div>
    )
  }
}
export default HomeBox