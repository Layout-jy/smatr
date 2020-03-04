import React, { Component } from 'react'
import './HomeGoods.css'

export default class HomeGoods extends Component {
  render() {
    return (
      <div className='goods'>
      <figure className='goods-img' style={{backgroundImage:`url(${this.props.list.images})`}}></figure>
      <article>
        <h4 className='goods-name'>{this.props.list.skuTitle}</h4>
      </article>
      <p className='goods-price'>
        <span className='discountPrice'>¥ {this.props.list.discountPrice}</span>
        <span className='originalPrice'><del>¥{this.props.list.originalPrice}</del></span>
      </p>
    
      </div>
    )
  }
}
