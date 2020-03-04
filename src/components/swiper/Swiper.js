import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';
import './Swiper.css'

class Banner extends Component {
  constructor(props){
    super(props)
    this.state={
      data: this.props.list,
      imgHeight: 176,
    }
  }
  componentDidUpdate(){
    
  }
  componentDidMount(){
    setTimeout(() => {
    }, 100);

  }
  render() {
    return (
      <div className="banner">
       <WingBlank>
        <Carousel
          autoplay={true}
          infinite={true}
          // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          // afterChange={index => console.log('slide to', index)}
        >
          {this.props.list.map((val) => (
            <a
              key={val}
              href={val.url}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={val.image}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>

      </div>
    )
  }
}
export default Banner