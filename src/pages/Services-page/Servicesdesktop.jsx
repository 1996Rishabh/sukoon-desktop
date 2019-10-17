import React, { useState } from "react";
import {Sticky , StickyContainer} from "react-sticky";
import  styled from "styled-components";

// Components
import Title from "../../elements/Heading/desktop";
import Para from "../../elements/Para/desktop";
import Banner from "../../components/Banner/desktop";
import ArrowButton from "../../elements/ArrowButton/desktop";
import MeetExperts from "../../components/MeetExperts/desktop";
import SVG from "../../elements/SVG/desktop";

// Images
import HeaderImg from "../../images/pacientes-mejora_2019-08-02/pacientes-mejora@3x.jpg";

const Content = {
  Main: 'Acute Psychiatry Services',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      title: 'Services',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias.`
    },
    {
      title: 'Our Treatment Team',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
    },
    {
      title: 'Treatment Goals',
      para:`Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus.
        `
    }
  ]
};

const Content2 = {
  Main: 'Alcohol, Drug, And Habbit De-addiction Programs',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      title: 'Services',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias.`
    },
    {
      title: 'Our Treatment Team',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
    },
    {
      title: 'Treatment Goals',
      para:`Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus.
        `
    }
  ]
};

const Content3 = {
  Main: 'Day-Care Counselling, and Immersive Therapy Programs.',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      title: 'Services',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias.`
    },
    {
      title: 'Our Treatment Team',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
    },
    {
      title: 'Treatment Goals',
      para:`Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus.
        `
    }
  ]
};

const Content4 = {
  Main: 'Off-site IPD Setup At Home Services',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      title: 'Services',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias.`
    },
    {
      title: 'Our Treatment Team',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
    },
    {
      title: 'Treatment Goals',
      para:`Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus.
        `
    }
  ]
};

const Content5 = {
  Main: 'Geriatic Psychiatry age related mental health issues.',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      title: 'Services',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
            consectetur dolor error facere laboriosam! Ad eius molestias
            officiis reprehenderit tempore velit vitae. Cupiditate,
            molestias.`
    },
    {
      title: 'Our Treatment Team',
      para: `Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
    },
    {
      title: 'Treatment Goals',
      para:`Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus. Hennepin Healthcare's Acute Psychiatric Services
            (APS) center serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Assumenda, quas! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Illo, sint. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Architecto commodi corporis eos
            ipsam maxime neque, perspiciatis sapiente tenetur voluptas
            voluptatibus.
        `
    }
  ]
};

// UL element on left side list.
const StyledLeftNav = styled.ul`
  display: flex;
  background: #c2dcd3;
  padding: 1.5rem;
  flex-direction: column;
  justify-content: space-between;
  line-height: 1.5;
  font-size: 1.1vw;
  width: 37vw;
  
  li{
    margin-bottom: 10px;
  }
  li > a:active{
    color: #12443e;
  }
  li:hover >.active{
    display: flex;
    opacity: 1;
    transition: opacity 200ms ease-in;
  }
  li .active{
    color: #12443e;
  }
  
`;

const OutPatienList = [
  {name: 'Clinical psychology ' , content: Content, number: '1'},
  {name: 'Counselling psychology', content: Content2, number: '2'},
  {name: 'Art-Based Therapy', content: Content3, number: '3'},
  {name: 'rTMS Treatment', content: Content4, number: '4'},
  {name: 'Remediation', content: Content5, number: '5'},
  {name: 'Psychoanalytical  Therapy', content: Content, number: '6'},
  {name: 'Occupational Therapy', content: Content, number: '7'},
  {name: 'Virtual Therapy', content: Content, number: '8'},
  {name: 'Psycho - Oncology ', content: Content, number: '9'},
];

const ResidentialServicesList = [
  {name: 'Acute Psychiatry Care' , content: Content, number: '1'},
  {name: 'Intensive Care Unit', content: Content2, number: '2'},
  {name: 'Alcohol Deaddiction', content: Content3, number: '3'},
  {name: 'Drug Deaddiction', content: Content4, number: '4'},
  {name: 'Habit Deaddiction', content: Content5, number: '5'},
  {name: 'Sukoon At Home', content: Content, number: '6'},
  {name: 'Geriatric Psychiatry', content: Content, number: '7'},
  {name: 'Women Focused Care', content: Content, number: '8'},
  {name: 'Child Psychiatry', content: Content, number: '9'},
];


// Patient card component
const PatientCare = (props) => {

  const[ListContent, setContent] = useState(Content);
  const[isActive, setActive] = useState('1');


  // Left nav list component.
  let navList = props.list.map((list)=>{
    return(
      <li className={`${isActive === list.number ? 'text-sukoon' : ''} text-lg flex justify-between hover:text-sukoon items-center`}>
        <button onClick={()=>{setContent(list.content); setActive(list.number)}} className="focus:outline-none">
          {list.name}
        </button>
        <ArrowButton wrapperClass={`${isActive === list.number ? 'active' : 'hidden'}`} margin="0"/>
      </li>
    )
  });

  return (
    <section id="" className="In-patient mt-4 p-12">
      <div id="top-title-row" className="flex">
        <div className="w-4/5">
          <Title
            titleLight={props.titleLight}
            titleBold={props.titleBold}
            display="block"
          />
        </div>
        <div className="bg-sukoon text-center text-vxs text-white p-6 w-1/5">
          <SVG display="inline-block" icon="helpline" width={'35px'} fill={'#fff'} />
          <h4 className="leading-loose py-2">Sukoon Suicide Helpline</h4>
          <h2 className="text-v2xl tracking-widest">+91 8448170041</h2>
        </div>
      </div>
      <StickyContainer id="sticky-container" className="flex pt-8 justify-between">
        <Sticky  disableCompensation className="bg-green-500 h-fit text-vxl w-2/5 p-8" topOffset={-10}>
          {({style , isSticky}) => {
            let top = '0';
            if(isSticky){
              top = '64px';
            }
            return(
              <div style={{...style, paddingTop: `${top}`}} className="">
                <StyledLeftNav className="text-gray-600">
                  {navList}
                </StyledLeftNav>
              </div>
            );
          }}
        </Sticky>
        <div id="right-section-services" className="w-3/5 px-8">
          <RightContainer Content={ListContent} />
        </div>
      </StickyContainer>
    </section>
  );
};

// Component to render right list content on link selected.
const RightContainer = ({Content}) =>{

  // Bottom list item of right content.
  let list = Content.items.map(list=>{
    return(
      <li className="mt-4">
        <h3 className="text-v2xl pb-4 font-gilroyBold">{list.title}</h3>
        <Para width="100%">
          {list.para}
        </Para>
      </li>
    )
  });

  // Main is the top heading of list items.
  return(
    <div className="text-sukoon">
      <ul>
        <li>
          <h2 className="text-v3xl pb-4 font-gilroyBold">
            {Content.Main}
          </h2>
          <Para width="100%">
            {Content.Summary}
          </Para>
        </li>
        {list}
      </ul>
    </div>
  )
};

// Main services page function.
function ServicesPage(props) {

  return (
    <>
      <Banner para captionLight={`Feel like`} bannerPara={`We’re here for you! At Sukoon, our experienced team provides compassionate, short-term and inpatient mental health services that help you feel better as quickly as possible. We work with you one-on-one ensuring that every part of your care is personalised to your condition, emotions, and needs.`} captionBold={`Yourself Again`} inner texture HeaderImg={HeaderImg}/>
      <PatientCare list={ResidentialServicesList} titleLight="Residential" titleBold={`Services`} />
      <PatientCare list={OutPatienList} title="Out Patient" />
      <MeetExperts />
    </>
  );
}

export default ServicesPage;
