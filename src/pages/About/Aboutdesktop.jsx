import React, { useState } from "react";
import styled from "styled-components";

// Components
import Title from "../../elements/Heading/desktop";
import Para from "../../elements/Para/desktop"
import Banner from "../../components/Banner/desktop";

// Images
import BannerBg from "../../images/Desktop-Header/pacientes-mejora.png";
import PopUp from "../../elements/PopUp/popUpDesktop";
import General from "../../components/common/general";

const ServiceType = styled.div`
`;

const InfoSection = (props) =>{

  return(
    <div className={`${props.wrapperClass || ''}`}>
      <h2 className="text-2xl text-left text-sukoon leading-none my-2">{props.title}</h2>
      <Para>{props.content}</Para>
    </div>
  )
};

const CareService = (props) =>{

  return(
    <section id={props.titleLight} className="py-12 px-20">
      <Title titleLight={props.titleLight} titleBold={props.titleBold} display="inline-block"/>
      <Para>Sukoon is India’s first super specialty hospital that offers both inpatient and outpatient treatments for psychiatry, mental health, and deaddiction. We have a team of experienced psychiatrists, clinical psychologists, counsellors, and art-based therapists that ensures you receive personalised care. Our treatments are designed keeping in mind your condition, emotions, and needs. At Sukoon, we want to make you feel like yourself again as quickly as possible. We ensure this through world-class treatments, premium facilities, modern amenities, and above all compassionate caregivers.</Para>
      <div className="flex flex-wrap">
        <ServiceType className="service_content mt-2 text-justify">
          <InfoSection title="Our Mission" content="Provide world-class psychiatric care, and mental health treatments with compassion, personalisation, and sincerity"/>
          <InfoSection title="Our Vision" content="To be the largest network of psychiatric hospitals, mental health facilities, deaddiction centers in India"/>
          {/*<InfoSection content="Hennepin Healthcare's Acute Psychiatric Services (APS) center serves those in emotional*/}
          {/*              crisis with 24-hour, seven-day-a-week crisis counseling, assessment, and referral. More than*/}
          {/*              42,000 calls and drop-in visits each year are handled by the Acute Psychiatric Services*/}
          {/*              staff of psychiatrists, social workers, and psychiatric nurses. The APS is supported by*/}
          {/*              Hennepin County funds and state grants, provides these services to any person in need."/>*/}
        </ServiceType>
      </div>
    </section>
  )
};

function DesktopAbout() {
  const[popUp, setPopUp] = useState(false);

  // To prevent page scroll when dialog box is open.
  function handlePopUp(showBox) {
    if(showBox){
      setPopUp(showBox);
      General.NoScroll(showBox);
    }
    else{
      setPopUp(showBox);
      General.NoScroll(showBox);
    }
  }

  return (
    <>
      <PopUp handlePopUp={handlePopUp} popUp={popUp}/>
      <Banner showHidePopUp={handlePopUp} width={`52vw`} marginLeft={`-30vw`} captionLight={`Get Care`} captionBold={`Without compromise`}  inner texture HeaderImg={BannerBg}/>
      <CareService titleLight="About" titleBold=" Sukoon"/>
      </>
  );
}

export default DesktopAbout;
