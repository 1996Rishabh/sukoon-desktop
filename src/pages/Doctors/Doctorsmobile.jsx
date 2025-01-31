import React, {useState} from "react";
import styled from "styled-components";

// Components
import Title from "../../elements/Heading/mobile";
import Para from "../../elements/Para/mobile";
import Banner from "../../components/Banner/mobile";
import Carousel from "../../components/Carousel/mobile";
import BookBtn from "../../elements/BookNowBtn/mobile";
import MeetExperts from "../../components/MeetExperts/mobile";

// Images
import HeaderBg from "../../images/mobile_header.jpg";
import MedicalDoc from "../../images/doctor/doctor1.jpg";


const Caption = (props) => {
  return (
    <div className="my-4">
      <h2 className="text-sukoon text-lg font-normal font-bold block">
        {props.subHeading || ''}
      </h2>
      <Para>
        {props.para || ''}
      </Para>
    </div>

  )
};

const Intro = (props) => {
  return (
    <section id="why-sukoon" className="why-sukoon p-4">
      <Title subHeading="Meet" titleLight="Our" titleBold="Team" />
    </section>
  )
};

const DocCard = styled.div`
    width:75vw;
    margin-right: 20px;
`;

const Doctors = [
  {
    name: 'John Doe',
    image: MedicalDoc,
  },
  {
    name: 'John Doe',
    image: MedicalDoc,
  },
  {
    name: 'John Doe',
    image: MedicalDoc,
  },
  {
    name: 'John Doe',
    image: MedicalDoc,
  },
  {
    name: 'John Doe',
    image: MedicalDoc,
  },
  {
    name: 'John Doe',
    image: MedicalDoc,
  },

];

const CarouselItems = (item) =>{
  return(
    <DocCard className="">
      <div className="DocImgSec">
        <img src={item.image} alt="doctor"/>
        <h3 className="bg-sukoon text-white p-2 text-center text-xl">{item.name}</h3>
      </div>
      <BookBtn border wrapperClass="mx-auto mt-3">Book Appointment</BookBtn>
    </DocCard>
  )
};

const InPatientServices = (props) => {

  return (
    <section id="inpatient-services" className="p-4">
      <Title singleLine subHeading="Meet" titleLight="Our" titleBold="Doctors" display="block"/>
      <Carousel container  cardFn={CarouselItems} content={Doctors}/>
    </section>
  )
};

function DoctorsPage(props) {
  return (
    <>
      <Banner overlay={props.overlay} backgroundImg={HeaderBg}/>
      <Intro/>
      <section className="MedicalDirectorSection p-4 pt-0">
        <div className="MedicalDocImg">
          <img src={MedicalDoc} />
        </div>
        <div className="MedicalDocInfo pt-4">
          <h3 className="text-sukoon text-3xl font-Gilroy-Bold">Medical Director</h3>
          <Para wrapperClass={`m-0`} width="100%">MBBS, DPM, MD (Psychiatry)</Para>
          <Para width="100%">Director, Mental Health And Behavioural Sciences</Para>
          <Para>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto delectus distinctio dolorum eius, facilis fuga iure iusto magnam nam natus nihil, odit quam tempora, velit. Animi architecto blanditiis cupiditate dolore explicabo, facere in itaque necessitatibus neque, odio odit officia perferendis quam quo repellat? Est, impedit, sapiente! Aspernatur, error obcaecati? Consectetur eaque eos laudantium molestias recusandae sunt? Aliquam asperiores atque, autem debitis esse fuga fugit necessitatibus nesciunt.</Para>
        </div>
      </section>
      <InPatientServices/>
      <MeetExperts/>
    </>
  );
}

export default DoctorsPage;
