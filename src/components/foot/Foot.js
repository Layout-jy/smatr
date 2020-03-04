import React, { Component } from 'react'
import { NavLink } from 'react-router-dom' 
import {routes} from '../../router/index'
import './foot.css'

export default class Foot extends Component {
  constructor(){
    super()
    this.state={
      arr:['fas fa-home','fas fa-list-ul','fas fa-shopping-bag','fas fa-user']
    }
  }
  render() {
    return (
      <div id='foot'>
        <ul>
          {
            routes.map((item,index)=>{
              return <li key={item.path}>
                <NavLink to={item.path}>
                  <i className={this.state.arr[index]}></i>{item.name}
                </NavLink>
              </li> 
            })
          }
        </ul>
      </div>
    )
  }
}
