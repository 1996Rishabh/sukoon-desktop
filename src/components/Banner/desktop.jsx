import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

// Components
import BookBtn from "../../elements/BookNowBtn/desktop"
import Input from "../../elements/Input/desktop";

// Images
import Texture from "../../images/texture.png";

// Intro Section
const Heading = (props) => {
  return (
    <HeadingWrapper className="text-sukoon  text-6xl">
            <span className="block font-light">
                 {props.captionLight || "Don't Just Stay"}
            </span>
      <span className="font-bold block">
                {props.captionBold || "Live Here !"}
            </span>
    </HeadingWrapper>
  )
};

// Header Main heading
const HeadingWrapper = styled.div`
  line-height: 1.1;
`;

// Header Text Container  position
const BannerText = styled.div`
        position: relative; 
        margin-left: ${props => props.marginLeft || '-25vw'};
        z-index: 100;
        width: ${props => props.width || '40vw'};
    `;

// Main Header section component
const Header = styled.section`
`;

const Booking = (props) =>{
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
    <div className="mt-12 sm:text-vlg xs:text-vxl">
      <div id="contact-info-container" className="p-4 bg-sukoon font-gilroyMedium w-full flex">
        <Input type="select" wrapperClass="w-2/5" value={BookingOptions} label="Appointment Type" placeholder=""/>
        <Input type="name" required={true} wrapperClass="ml-4 w-3/5" label="Email / Phone Number" defaultValue={``}/>
      </div>
      <div className="mt-8 font-gilroyMedium">
        <div className="inline-block"  >
          <BookBtn theme="green" wrapperClass="">
            <span onClick={()=>props.showHidePopUp(true)}>Book Now</span>
          </BookBtn>
        </div>
        <Link to="/" className="text-sukoon ml-4  text-lg">or Call at <span className={`border-b-2 border-sukoon`}>+91 7558640422</span></Link>
      </div>
    </div>


  )
};

const HeaderIntroRight = styled.div`
      position: relative;
      width: ${props => props.bannerWidth || '65%'};
     
    `;

const ParagraphSection = (props) =>{
  return(
    <p Class="mt-8 w-3/5 text-para my-1 text-vlg leading-relaxed block">
      {props.para}
    </p>
  )
};

const NavWrapper = styled.div`
  font-size: 1.1vw;
  
  @media screen and (max-width: 1600px) and (min-width: 1450px){
           font-size: 1.3vw;
          
       }
       @media screen and (max-width: 1450px) and (min-width: 1370px){
            font-size: 1.3vw;
        
       }
        @media screen and (max-width: 1370px) and (min-width: 1300px){
           font-size: 1.2vw;
        
       }
       @media screen and (min-width: 1200px) and (max-width: 1300px){
            font-size: 1.2vw;
       }
`;

// Banner Image Component
const BannerImage = styled.div`
    background-image: url(${props=> props.HeaderImg});
    background-position: center center;
    background-size: cover;

    &::after{
    content: '';
    ${props => props.texture ? `background-image: url(${Texture});` : ''};
    display: ${props => props.texture ? 'block' : 'none'};
    float: right;
    margin-top: -4rem;
    width: 85%;
    height: 100px;
    position: relative;
    z-index: -1;
    }
     -webkit-box-shadow: 0 10px 6px -7px rgba(134, 134, 134, 0.60);
       -moz-box-shadow: 0 10px 6px -7px rgba(134, 134, 134, 0.60); 
           box-shadow: 0 10px 6px -7px rgba(134, 134, 134, 0.60);
`;

const ButtonSection = (props) =>{
  return(
    <div>
      <p className="mt-8 w-3/5 text-para my-6  text-vlg leading-relaxed block">
        {props.bannerPara}
      </p>
      <div className="flex" >
        <BookBtn wrapperClass="mr-24" theme="green"><span onClick={()=>props.showHidePopUp(true)} className="w-full h-full" >Book An Appointment</span></BookBtn>
        <BookBtn wrapperClass=""  border >
          <span onClick={()=>props.showHidePopUp(true)}>
          Book a Tour
          </span>
        </BookBtn>
      </div>
    </div>

  )
};

const LeftSpace = styled.div`
  width: 35%;
`;

const HeaderIntro = (props) => {

  return (
    <Header id="header-intro" className="w-full mb-12">
      <div id="header-intro-container" className="flex relative">
        <LeftSpace className="">
        </LeftSpace>
        <HeaderIntroRight id="header-intro-right" bannerWidth={props.bannerWidth} className="relative ">
          <NavWrapper className="flex mb-4 mr-8 font-gilroyMedium  justify-between">
            <Link
              to="/services"
              className=" inline-block mt-0 mr-6 no-underline"
            >
              Services
            </Link>
            <Link
              to="/experience"
              className=" inline-block mt-0 mr-6 no-underline"
            >
              Experience
            </Link>
            <Link
              to="/"
              className=" inline-block mt-0 mr-6 no-underline"
            >
              Doctors
            </Link>
            <Link
              to="/internationalPatient"
              className=" inline-block mt-0 mr-6 no-underline"
            >
              International Patients
            </Link>
            <Link
              to="/about"
              className=" inline-block mt-0 no-underline"
            >
              About
            </Link>
          </NavWrapper>
          <BannerImage HeaderImg={props.HeaderImg} texture={props.texture} className="relative">
            <BannerText marginLeft={props.marginLeft} width={props.width} inner={props.inner} id="header-intro-left" className="py-12">
              <Heading captionLight={props.captionLight} captionBold={props.captionBold}/>
              {props.booking ?
                <Booking showHidePopUp={props.showHidePopUp} discover={props.discover}/>
                : props.para ? <ParagraphSection para={props.bannerPara}/> :
                  <ButtonSection showHidePopUp={props.showHidePopUp} bannerPara={props.bannerPara}/>
              }
            </BannerText>
          </BannerImage>
        </HeaderIntroRight>
      </div>
    </Header>
  )
};


export default HeaderIntro;