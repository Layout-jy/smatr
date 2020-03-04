import React, { Component } from 'react'
import { getHomeData } from '../../request/request'
import Search from '../../components/search/Search'
import './Home.css'
import Swiper from '../../components/swiper/Swiper'
import HomeBox from '../../components/homeBox/HomeBox'


export default class Home extends Component {
  constructor(){
    super()
    this.state={
      bannerData:undefined,
      goodsList:[]
    }
    this.goSearch = this.goSearch.bind(this)
  }
  goSearch(){
    this.props.history.push('/calssify')
  }
  componentDidMount(){
    console.log(this.props.history.push)
    getHomeData().then((res)=>{
      this.setState({
        bannerData:res.data.data[0].list,
        goodsList:res.data.data.splice(1)
      })
    })
  }
  render() {
    return (
      <div id='home'>
        <header>
          <div className='logo'></div>
        </header>
        <main>
          <Search />
          <Swiper list={this.state.bannerData?this.state.bannerData:[]} />
          <section>
            {
              this.state.goodsList.map((item,index)=>{
                return <HomeBox goodsList={item} key={index}/>
              })
            }
          </section>
        </main>
        
      </div>
    )
  }
}
