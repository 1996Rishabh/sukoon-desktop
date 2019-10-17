import React, {useState} from "react";
import styled from "styled-components";

// Components
import Title from "../../elements/Heading/mobile";
import Para from "../../elements/Para/mobile"
import MeetExperts from "../../components/MeetExperts/mobile";
import Banner from "../../components/Banner/mobile";
import Tab from "../../elements/Tabs/TabsMobile";

// Images
import BannerBg from "../../images/servicesBg.png";

const ServiceType = styled.div`
`;

const TabList = styled.ul`
   min-height: 40px;
   height: 60px;
`;

const Content = {
  Main: 'Acute Psychiatry Services',
  Summary:  ` Hennepin Healthcare's Acute Psychiatric Services (APS) center
            serves those in emotional crisis with 24-hour,
            seven-day-a-week crisis counseling, assessment, and referral.`,
  items:[
    {
      title: 'Service',
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

const InfoSection = (props) =>{

  return(
    <div className={`${props.wrapperClass || ''}`}>
      <h3 className="font-gilroyMedium mt-3 text-left text-sukoon leading-none">{props.title}</h3>
      <Para>
        {props.content}</Para>
    </div>
  )
};

const CareService = (props) =>{

  const[ListContent, setContent] = useState(Content);

  function handleView(content){
    // Content bellow the tab is changed by the next function.
    setContent(content);
  }

  return(
    <section id={props.titleLight} className="p-4">
      <Title titleLight={props.titleLight} subHeading={props.subheading} titleBold={props.titleBold} display="block"/>
      <div className="flex flex-wrap overflow-x-hidden ">
        <TabList className="patient_services_nav flex overflow-y-hidden overflow-x-scroll">
          {props.list.map((item)=>{
            return (
            <li className="mt-3">
            <Tab onClick={handleView} argument={[item.content]} active={ ListContent === item.content} buttonClass={``}>
              {item.name}
            </Tab>
            </li>
            )
          })}
        </TabList>
        <ServiceType className="service_content mt-2 overflow-x-hidden text-justify">
          {ListContent.items.map((content)=>{
            return(
              <InfoSection title={content.title} content={content.para} />
            )
          })}
        </ServiceType>
      </div>
    </section>
  )
};

function Services(props) {

  return (
    <>
      <Banner captionLight={`Feel like`} bannerPara={`We’re here for you. At Sukoon, our experienced team of psychiatrists, clinical psychologists, therapists, and nurses provide compassionate, short-term and inpatient psychiatric and mental health services that help you feel better as quickly as possible. We work with you one-on-one ensuring that every part of your care is personalised to your condition, emotions, and needs.`} captionBold={`Yourself Again`}  overlay={props.overlay} backgroundImg={BannerBg}/>
      <CareService list={ResidentialServicesList} subHeading={`IPD`} titleLight="Residential" titleBold="Care Services"/>
      <CareService list={OutPatienList} subHeading={`OPD`} titleLight="Out Patient" titleBold="Care Services"/>
      <MeetExperts/>
    </>
  );
}

export default Services;
