import React from "react";
import styled from "styled-components";

// Components
import Title from "../../elements/Heading/mobile";
import Para from "../../elements/Para/mobile";

// Images
import Carousel from ".././Carousel/mobile";

// Images
import NursesImg from "../../images/physician_retail_web_2019-07-29/physician_retail_web.jpg";

const MeetExpertsWrapper = styled.section`
  
`;


const Doctors = [
  {
    name: 'John Doe',
    image: NursesImg,
  },
  {
    name: 'John Doe',
    image: NursesImg,
  },
  {
    name: 'John Doe',
    image: NursesImg,
  },
  {
    name: 'John Doe',
    image: NursesImg,
  },
  {
    name: 'John Doe',
    image: NursesImg,
  },
  {
    name: 'John Doe',
    image: NursesImg,
  },
];

const Nurses = styled.div`
    width:75vw;
    margin-right: 20px;
`;

const CarouselItems = (item) =>{
  return(
    <Nurses className="">
      <div className="DocImgSec">
        <img src={item.image} alt="doctor"/>
        <h3 className="bg-sukoon text-white p-2 text-center text-xl">{item.name}</h3>
      </div>
    </Nurses>
  )
};


const MeetExperts = (props) => {
  return (
    <MeetExpertsWrapper id="meet-experts" className="p-4 relative">
      <Title singleLine subHeading="Team" titleLight="Our" titleBold="Doctors"/>
      <Para width="100%"
            content="With a team of experienced psychiatrists, clinical psychologists, counselling psychologists, and art therapists led by Dr Samir Parikh of Fortis Healthcare, we can assure you that everybody is in good hands here."/>
      <Carousel container  cardFn={CarouselItems} content={Doctors}/>
    </MeetExpertsWrapper>
  )
};

export default MeetExperts;