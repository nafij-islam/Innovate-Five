import React from 'react'
import Slider from 'react-slick';
import sld1 from '../../assets/sld1.png'
import sld2 from '../../assets/sld2.png'
import sld3 from '../../assets/sld3.png'
import sld4 from '../../assets/sld4.png'
import sld5 from '../../assets/sld5.png'
import sld6 from '../../assets/sld6.png'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Slide = () => {

    const settings = {
   
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1, 
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
  };

  return (
    <section className='py-[80px]'>
         <div className='max-w-[1320px] mx-auto'>
              <Slider {...settings}>
                    <img src={sld1} alt="" />
                    <img src={sld2} alt="" />
                    <img src={sld3} alt="" />
                    <img src={sld4} alt="" />
                    <img src={sld5} alt="" />
                    <img src={sld6} alt="" />
              </Slider>
         </div>
    </section>
  )
}

export default Slide