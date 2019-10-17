import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import BookBtn from "../../elements/BookNowBtn/mobile";
import Input from "../../elements/Input/desktop";


const HeadingWrapper = styled.div`
  font-size: 12vw;
  line-height: 1.2;
`;

const Header = styled.section`
    ${props => props.backgroundImg ? `background-image: url(${props.backgroundImg});` : ''}
    background-position: top 0 left 0;
    background-size: cover;
    background-repeat: no-repeat;
    filter: ${props=> props.overlay ? 'blur(3px)' : 'none'};
`;

const Heading = (props) => {
  return (
    <HeadingWrapper className="text-sukoon">
            <span className="font-light block">
                {props.captionLight || "Don't Just Stay"}
            </span>
      <span className="font-semibold block">
                {props.captionBold || "Live Here !"}
            </span>
    </HeadingWrapper>
  )
};

const ParaSection = (props) => {

  return(
    <div>
      <p className="text-para font-medium py-1 text-left text-v6xl mb-8 block">{props.bannerPara}</p>
    </div>
  )
};

const BookNow = (props) =>{

  const BookingOptions = [
    {
      value: "Video Appointment",
      label: "Video Appointment"
    },
    {
      value: "In Person Appointment",
      label: "In Person Appointment"
    }
  ];
  
  return(
    <div className="mb-12">
      <div id="contact-info-container" className="w-full ">
        <Input type="select" green value={BookingOptions} wrapperClass="w-4/5" label="Appointment Type" placeholder=""/>
        <Input type="name" green required={true} wrapperClass="w-4/5" label="Email / Phone Number" defaultValue={``}/>
      </div>
      <div className="flex flex-col mt-8" onClick={()=>props.showHidePopUp(true)}>
        <BookBtn border bg="transparent" wrapperClass="">
          <Link to="/" >Book Now</Link>
        </BookBtn>
        {props.contact ?
          <div className="my-4">
            <span className="font-normal ">or Call at <a href="tel:+91 7558640422" className={`border-sukoon border-b `}>+91 7558640422</a></span>
          </div> : null}
      </div>
    </div>
  )
};



const Banner = (props) => {
  return (
    <Header id="header-intro-mobile" overlay={props.overlay} bookNow={props.bookNow} backgroundImg={props.backgroundImg} className="w-full px-4">
      <div className="mt-32 mb-8">
        <Heading captionLight={props.captionLight} bannerPara={props.bannerPara} captionBold={props.captionBold} />
      </div>
      {props.bookNow ?
        <BookNow  showHidePopUp={props.showHidePopUp} contact={props.contact} discover={props.discover}/> :
        <ParaSection bannerPara={props.bannerPara} />}
    </Header>
  )
};

export default Banner;