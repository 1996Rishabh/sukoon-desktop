import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Para from "../../elements/Para/desktop";
import ArrowButton from "../../elements/ArrowButton/desktop";

// Images
import greenBg from "../../images/green-leaves-bg/green-leaves-waterdrops-4k-wallpaper-3840x2400@2x.jpg";

const CardContainer = styled.div`
  background-image: url(${greenBg});
  background-position: center center  ;
`;

const Cards = (item) =>{

  return(
    <CardContainer className={`my-2 p-3 mx-1`}>
      <div className="bg-white">
        <div className="p-2 px-4 w-full">
          <h3 className="text-xl font-bold text-sukoon block">{item.mainTitle}
            <span className="font-bold text-sukoon block">{item.subTitle}</span>
          </h3>
          <Para wrapperClass="my-1 py-2" width="14rem">
            {item.para}
          </Para>
          <ArrowButton border margin="10px 0"/>
        </div>
      </div>
    </CardContainer>
  )
};

const Carousel = (props) => {

  let item = props.content.map(item => {

    if(props.container){
      return props.cardFn(item);
    }
    else{
      return Cards(item);
    }
  });

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: props.slidesToShow || 3,
    slidesToScroll: props.slidesToScroll || 1,
    autoplaySpeed: 2500,
    autoplay: props.autoPlay || true,
  };

  return (
    <div style={{width: '', padding: props.wrapperPadding || '25px 4vw'}}>
      <Slider {...settings}>
        {item}
      </Slider>
    </div>

  );
};

export default Carousel;