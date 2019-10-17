import React, { useState } from "react";
import styled from "styled-components";
import TherapyView from "../images/exp/bg_2.jpg";
import Para from "../elements/Para";


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
      summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.`
    }
  },
  pharmacy: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'pharmacy',
      summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.`
    }
  },
  rtms: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'rtms',
      summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.`
    }
  },
  virtualTherapy: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'virtual therapy',
      summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.`
    }
  },
  cafeteria: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'cafeteria',
      summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.`
    }
  },
  lounge: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'lounge',
      summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.`
    }
  },
  artTherapy: {
    image: TherapyView,
    Card: {
      about: 'opd',
      heading: 'art therapy',
      summary: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever 
        since the 1500s, when an unknown printer took a 
        galley of type and scrambled it to make a type specimen book.`
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
        <span className="font-semibold text-lg text-sukoon uppercase">{currentView.Card.about}</span>
        <h2 className="font-bold text-3xl text-sukoon capitalize">{currentView.Card.heading}</h2>
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
                virtual thearapy room
              </NavItem></li>
            <li className="">
              <NavItem name="cafeteria" type="text" onClick={changeView}>
                cafeteria
              </NavItem>
            </li>
            <li className="">
              <NavItem name="lounge" type="text" onClick={changeView}>
                lounge
              </NavItem>
            </li>
            <li className="">
              <NavItem name="artTherapy" type="text" onClick={changeView}>
                art therapy
              </NavItem>
            </li>
          </ul>
        </PreviewNav>
      </div>
    </section>
  )
};

export default Preview;
