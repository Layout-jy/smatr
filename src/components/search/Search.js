import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import './Search.css'

 class Search extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='searchBar' onClick={this.goSearch}>
        <section className='search-bar-wrap'>
          <section>
            <i className='fas fa-search'></i>请输入搜索关键字
          </section>
        </section>
      </div>
    )
  }
}
export default withRouter(Search) 