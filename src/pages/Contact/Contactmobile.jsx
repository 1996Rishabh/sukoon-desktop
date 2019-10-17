import React, {useState} from "react";
import styled from "styled-components";

// Components
import Title from "../../elements/Heading/mobile";
import Para from "../../elements/Para/mobile"
import Banner from "../../components/Banner/mobile";
import BookBtn from "../../elements/BookNowBtn/mobile";

// Images
import BannerBg from "../../images/servicesBg.png";
import PhoneContact from "../../images/contact/phone_contact.svg";
import HelpContact from "../../images/contact/help_contact.svg";
import Input from "../../elements/Input/desktop";

const ServiceType = styled.div`
`;

const TabList = styled.ul`
   min-height: 40px;
   height: 60px;
   
   
   
  button{
    border-radius: 10px 10px 0 0;
  }

  .active{
    background: rgba(205,236,227,0.81);
  }
  
  
  .passive{
   background: #d1e1d6cf;
  }
`;

const Tab = styled.button`
    margin-left: 1px;
    width: 75px;
    
    &:focus{
    outline: none;
    }
`;

const PhContact = styled.img`
    width:55px;
    margin-bottom:10px;
`;
const HpContact = styled.img`
    width:55px;
    margin-bottom:10px;
`;
const InfoSection = (props) =>{

  return(
    <div className={`${props.wrapperClass || ''}`}>
      <h2 className="text-2xl text-left text-sukoon leading-none">{props.title}</h2>
      <Para>
        {props.content}</Para>
    </div>
  )
};

const MainSection = (props) =>{

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
    <section id={props.titleLight} className="p-4">
      <Title singleLine titleLight={props.titleLight} titleBold={props.titleBold} display="inline-block"/>
      <div className="flex flex-wrap overflow-x-hidden ">
        <ServiceType className="service_content mt-2 overflow-x-hidden text-justify">
          <InfoSection content="Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional
                        crisis with 24-hour, seven-day-a-week." />
        </ServiceType>
        <ul className="flex mt-6 w-full justify-between">
          <li>
            <div className="text-center">
              <HpContact src={HelpContact} />
              <h2 className="text-xl text-sukoon">Helpine No.</h2>
              <Para width="100%">+91 9818273797</Para>
            </div>
          </li>
          <li>
            <div>
              <PhContact src={PhoneContact} />
              <h2 className="text-xl text-sukoon">Contact No.</h2>
              <Para width="100%">+91 9818273797</Para>
            </div>
          </li>
        </ul>
        <div className="w-full my-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11802.296595422606!2d77.09405926095575!3d28.423970582311863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d220169f5e215%3A0x995dcf81cbb6d65e!2sSector+56%2C+Gurugram%2C+Haryana!5e0!3m2!1sen!2sin!4v1565343630794!5m2!1sen!2sin"
            width="100%" height="350" allowFullScreen>
          </iframe>
        </div>
        <form className="ContactForm w-full">
          <h2 className="text-sukoon text-2xl">Contact Us</h2>
          <div className="flex w-full my-3">
            <Input green type="name" required={true} defaultValue={``} wrapperClass="my-2 w-1/2 mr-2" label="First Name"/>
            <Input green type="name" required={true} defaultValue={``} wrapperClass="my-2 w-1/2 ml-2" label="Last Name"/>
          </div>
          <div className="flex w-full my-3">
            <Input type="name" green required={true} defaultValue={``} wrapperClass="w-full " label="Email"/>
          </div>
          <div className="flex w-full my-3">
            <Input type="name" green required={true} defaultValue={``} wrapperClass="w-full " label="Phone Number"/>
          </div>
          <div className="flex w-full my-3">
            <Input type="select" wrapperClass="inline-block w-full" green label="Enter your query" value={BookingOptions} placeholder=""/>
          </div>
          <div className="flex w-full my-3">
            <Input type="name" defaultValue={``} wrapperClass="w-full"  green label="Message" textarea/>
          </div>
          <BookBtn border wrapperClass="float-right">
            Send Us
          </BookBtn>
        </form>
      </div>
    </section>
  )
};

function ContactPage(props) {

  return (
    <>
      <Banner overlay={props.overlay} backgroundImg={BannerBg}/>
      <MainSection titleLight="Contact" titleBold=" Sukoon"/>
    </>
  );
}

export default ContactPage;
