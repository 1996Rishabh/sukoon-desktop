import React, { useState } from "react";
import styled from "styled-components";

// Components
import Para from "../../elements/Para/desktop";

// Images
import TherapyView from "../../images/exp/bg_2.jpg";
import Title from "../../elements/Heading/desktop";

const PreviewNav = styled.div`
    background: white;
    margin: -30px 3rem 0 auto;
    position: relative;
      
    button:focus{
    outline: none;
    }
      
    ul li {
        margin-right: 10px;
        margin-left: 10px;
    }
`;

const NavItem = styled.button`
    cursor: pointer;
    text-transform: capitalize;
`;

const PreviewCard = styled.div`
    background: white;
    top: 10%;
    right: 50px;
    padding: 50px;
`;

const ViewContent = {
  consultingChambers: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'consulting Chambers',
      summary: `Speak with your doctor in a private and comfortable environment. With sophisticated details such as wooden floors and lounge seating, our chambers are designed to have a calming effect.`
    }
  },
  pharmacy: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'Pharmacy',
      summary: `You can always find your prescribed medications at Sukoon. No more running around the town to find them. We truly are a one-stop destination for all your psychiatric and mental health needs.`
    }
  },
  rtms: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'rtms',
      summary: `Receive repetitive Transcranial Magnetic Stimulation therapy in a plush room. We only work with the latest equipment to offer you an India-first world class treatment for all behavioural and emotional disorders`
    }
  },
  virtualTherapy: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'Video Consultation',
      summary: `Connect with your psychiatric, psychologist, therapist, counsellor, or doctor no matter where you are. Continue your treatment plan and receive expert psychiatric care via chat, phone calls, or video calls`
    }
  },
  cafeteria: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'cafeteria',
      summary: `Take advantage of any of our two fully-equipped cafeterias that serve Indian and Continental cuisines.  Indulge in some delicious snacks, or grab a cup of coffee while you wait.`
    }
  },
  lounge: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'Waiting Area',
      summary: `At Sukoon, your healing begins the moment you walk in. Get inspired by some great art, or relax in the lush-green environment. Our waiting areas will make you feel right at home!`
    }
  },
  artTherapy: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'art therapy',
      summary: `Our doctors actively advocate alternate forms of therapy for a sustain healing process. We have licensed art therapists that have developed an effective clinical program.`
    }
  },

};

const View = ({currentView}) =>{

  return(
    <div className="w-full flex relative">
      <div className="w-3/5">
        <img src={currentView.image} className="block object-cover w-full object-center" alt="Header"/>
      </div>
      <div className="w-2/5">
      </div>
      <PreviewCard className="w-2/5 absolute shadow-lg">
        <Title headingClass={`text-3xl capitalize`} subHeading={currentView.Card.about}  titleBold={currentView.Card.heading}/>
        <Para Class="py-4" width="100%">{currentView.Card.summary}</Para>
      </PreviewCard>
    </div>
  )
};

function Preview (props) {

  const [view , setView] = useState(ViewContent.consultingChambers);

  const changeView = (e) => {
    setView(ViewContent[e.target.name]);
  };

  return(
    <section className="py-6">
      <div className="ExperienceServices w-full">
        <View currentView={view}/>
        <PreviewNav className="bg-white relative py-4  mr-12 w-10/12 shadow-lg">
          <ul className="text-xl font-gilroyMedium flex justify-around px-4 text-sukoon">
            <li className="">
              <NavItem name="consultingChambers" type="text" onClick={changeView}>
                Consulting Chambers
              </NavItem>
            </li>
            <li className="">
              <NavItem name="pharmacy" type="text" onClick={changeView}>
                Pharmacy
              </NavItem>
            </li>
            <li className="">
              <NavItem name="rtms" type="text" onClick={changeView}>
                rtms
              </NavItem></li>
            <li className="">
              <NavItem name="virtualTherapy" type="text" onClick={changeView}>
                Video Consultation
              </NavItem></li>
            <li className="">
              <NavItem name="cafeteria" type="text" onClick={changeView}>
                Cafetaria
              </NavItem>
            </li>
            <li className="">
              <NavItem name="lounge" type="text" onClick={changeView}>
                Waiting Area
              </NavItem>
            </li>
            <li className="">
              <NavItem name="artTherapy" type="text" onClick={changeView}>
                Art Therapy
              </NavItem>
            </li>
          </ul>
        </PreviewNav>
      </div>
    </section>
  )
};

export default Preview;
