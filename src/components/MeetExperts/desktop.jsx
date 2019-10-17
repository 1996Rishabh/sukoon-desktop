import React from "react";
import styled from "styled-components";

// Components
import Title from "../../elements/Heading/desktop";
import Para from "../../elements/Para/desktop";
import Carousel from ".././Carousel/desktop";

// Images
import Physician from "../../images/physician_retail_web_2019-07-29/physician_retail_web@3x.jpg";

const DocImgSec = styled.div`
`;

const CarouselItems = (item) =>{
  return(
    <Nurses className="">
      <DocImgSec className="DocImgSec">
        <img src={item.image} alt="doctor"/>
        <h3 className="bg-sukoon text-white p-2 text-center text-xl">{item.name}</h3>
      </DocImgSec>
    </Nurses>
  )
};

const Doctors = [
  {
    name: 'John Doe',
    image: Physician,
  },
  {
    name: 'John Doe',
    image: Physician,
  },
  {
    name: 'John Doe',
    image: Physician,
  },
  {
    name: 'John Doe',
    image: Physician,
  },
  {
    name: 'John Doe',
    image: Physician,
  },
  {
    name: 'John Doe',
    image: Physician,
  },
  {
    name: 'John Doe',
    image: Physician,
  },
  {
    name: 'John Doe',
    image: Physician,
  },
  {
    name: 'John Doe',
    image: Physician,
  },

];
const Nurses = styled.div`
    padding: 0 5px;
`;


const MeetExperts = props => {
  return (
    <section id="meet-experts" className="py-12  overflow-x-hidden relative">
      <div className="pl-20">
        <Title subHeading="About" titleLight="Our" titleBold="Doctors" />
        <Para Class="py-8" width="65%">
          With a team of experienced doctors led by our Resident Director - Dr Sameer Kalani, we can assure you that everybody is in good hands here. With an emphasis on relaxation and restoration of your mental well-being, we have a clinical team of psychiatrists, clinical psychologists, counselling psychologists, visiting consultants, general physicians, art therapists and fitness therapists.
        </Para>
      </div>
      <Carousel container  cardFn={CarouselItems} content={Doctors}/>
    </section>
  );
};

export default MeetExperts;