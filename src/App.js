import React from "react";
import Slider from "react-slick";
import './App.css';

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render() {
    const settings_1 = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "120spx",
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3500,
      pauseOnHover: true
    };

    const settings_2 = {
      dots: true,
    };
    
    return (
      <div /* style={{'max-width':'1140px', padding:'100px'}} */>

        <div>
          <Slider
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            {...settings_1}
          >
            <div>
              <img src={require('./image/4.jpeg')} className='fh_rec_carousel_img' />
            </div>
            <div>
              <img src={require('./image/7.jpeg')} className='fh_rec_carousel_img' />
            </div>
            <div>
              <img src={require('./image/5.jpeg')} className='fh_rec_carousel_img' />
            </div>
          </Slider>
        </div>

        <div>
          <Slider
            asNavFor={this.state.nav1}
            ref={slider => (this.slider2 = slider)}
            slidesToShow={1}
            fade={true}
            {...settings_2}
          >
            <div>
              <h3 className='fh_rec_carousel_title'>Designer insights from Creative South 2017 Long long longlonglong longlonglong long longlong long</h3>
              <p className='fh_rec_carousel_content'>Until now, Fantuan delivery has covered Vancouver, Toronto, Victoria and Edmonton. 
                Besides food delivery service, our businesses include advertising and promotion. 
              </p>
            </div>
            <div>
              <h3 className='fh_rec_carousel_title'>Designer insights from Creative South 2018</h3>
              <p className='fh_rec_carousel_content'>Until now, Fantuan delivery has covered Vancouver, Toronto, Victoria and Edmonton. 
                Besides food delivery service, our businesses include advertising and promotion. Until now, Fantuan delivery has covered Vancouver, Toronto, Victoria and Edmonton. 
                Besides food delivery service, our businesses include advertising and promotion. Until now, Fantuan delivery has covered Vancouver, Toronto, Victoria and Edmonton. 
                Besides food delivery service, our businesses include advertising and promotion. Until now, Fantuan delivery has covered Vancouver, Toronto, Victoria and Edmonton. 
                Besides food delivery service, our businesses include advertising and promotion.
                
              </p>
            </div>
            <div>
              <h3 className='fh_rec_carousel_title'>Designer insights from Creative South 2019</h3>
              <p className='fh_rec_carousel_content'>Until now, Fantuan delivery has covered Vancouver, Toronto, Victoria and Edmonton. 
                Besides food delivery service, our businesses include advertising and promotion. 
              </p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default SimpleSlider;
