import React, { useState } from "react";
import styled from "styled-components";

// Slick CSS files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Components
import Title from "../../elements/Heading/desktop"
import Para from "../../elements/Para/desktop"
import ArrowIcon from "../../elements/ArrowButton/desktop";
import Banner from "../../components/Banner/desktop";
import Infrastructure from "../../components/Infrastructure/desktop";
import WhySukoon from "../../components/Intro/desktop";
import Details from "../../elements/Details/desktop";
import MeetExperts from "../../components/MeetExperts/desktop";
import PopUp from "../../elements/PopUp/popUpDesktop"

// Images
import BlogImg  from "../../images/iStock-968194620_2019-07-17/blogImg.jpg";
import HeaderImg from "../../images/Desktop-Header/HomeBanner.jpg";
import SukoonBgLogo from "../../images/sukoon-bg-logo/logo@2x.jpg";
import SukoonLogo from "../../images/sukoon-bg-logo/logo.jpg";
import General from "../../components/common/general";

// Meet Experts and Blog and faq wrapper
const MFBWrapper = styled.section`
    background-image: url(${SukoonBgLogo});
    background-repeat: no-repeat;
    background-position: left -23vw top 16vw;
    background-size: 48vw;
`;

const TopRow = styled.section`
    background-image: url(${SukoonLogo});
    background-size: 20vw;
    background-repeat: no-repeat;
    background-position: top 26vw right -10vw;
    
     @media screen and (max-width: 1600px) and (min-width: 1450px){
          background-position: top 33vw right -11vw;

       }
       @media screen and (max-width: 1450px) and (min-width: 1370px){
          background-position: top 27vw right -11vw;

       }
        @media screen and (max-width: 1370px) and (min-width: 1300px){
          background-position: top 19vw right -11vw;

       }
       @media screen and (min-width: 1200px) and (max-width: 1300px){
          background-position: top 24vw right -11vw;

       }
`;

// Content for residential services & out-patient services.
let ResidentialServicesContent = [
  {
    Cards:[
      {
     titleLight: 'Acute',
      titleBold: 'Psychiatry Care',
      para: 'Inpatient hospitalisation with high levels of personalised care, comfort, and safety.',
    },
      {
        titleLight: 'Intensive',
        titleBold: 'Care Units',
        para: 'Three ICUs designed to handle any emergencies with round the clock care, and medical supervision.',
      },
      {
        titleLight: 'Alcohol',
        titleBold: 'Deaddiction',
        para: 'Personalised treatments addressing substance abuse such as smoking cigarettes, taking drugs, or sniffing glue. ',
      },
    ],
    col:'Col1'
  },
  {
    Cards:[
      {
        titleLight: 'Drug',
        titleBold: 'Deaddiction',
        para: 'Personalised treatments addressing substance abuse such as smoking cigarettes, taking drugs, or sniffing glue. ',
      },
      {
        titleLight: 'Habit',
        titleBold: 'Deaddiction',
        para: 'Specialised treatments for lifestyle issues such as gambling, gaming, and internet addiction',
      },
      {
        titleLight: 'Sukoon',
        titleBold: 'At Home',
        para: 'Get tailor-made psychiatric care in the comfort of your residence from our expert team of doctors and nurses',
      },

    ],
    col:'Col2'
  },
  {
    Cards:[
      {
        titleLight: 'Geriatric',
        titleBold: 'Psychiatry',
        para: 'Old age psychiatric treatments and mental health programs for all needs of the elderly',
      },
      {
        titleLight: 'Women',
        titleBold: 'Focused Care',
        para: 'Consult with only female doctors, and receive care from female nurses in a safe environment',
      },

    ],
    col:'Col3'
  },
  {
    Cards:[
      {
        titleLight: 'Child',
        titleBold: 'Psychiatry',
        para: 'Adolescent focused mental health programs and psychiatric treatments delivered with extra care.',
      },
    ],
    col:'Col4'
  }
];


// Content for residential services & out-patient services.
let OutPatientServicesContent = [
  {
    Cards:[
      {
        titleLight: 'Clinical',
        titleBold: 'psychology',
        para: 'Specialised psychotherapeutic treatments for emotional and behavioural disorders',
      },
      {
        titleLight: 'Counselling',
        titleBold: 'Psychology',
        para: 'Personalised care to help cope with life situations, problems, and everyday issues ',
      },
      {
        titleLight: 'Art-Based',
        titleBold: 'Therapy',
        para: 'Visual arts, storytelling, music, creative writing, and movement in a therapeutic setting.',
      },
    ],
    col:'Col1'
  },
  {
    Cards:[
      {
        titleLight: 'rTMS',
        titleBold: 'Treatment',
        para: ' Repetitive Transcranial Magnetic Stimulation (rTMS) treatments for behavioural and emotional disorders',
      },
      {
        titleLight: 'Remediation',
        titleBold: '',
        para: 'Special educators assist children with learning disabilities, attention deficit, and intellectual disabilities',
      },
      {
        titleLight: 'Psychoanalytical',
        titleBold: 'Therapy',
        para: 'Work through early life traumas and change long standing maladaptive personality and relational patterns',
      },

    ],
    col:'Col2'
  },
  {
    Cards:[
      {
        titleLight: 'Occupational',
        titleBold: 'Therapy',
        para: 'Treatments designed for restoring cognitive and motor functions to perform better at daily activities.',
      },
      {
        titleLight: 'Virtual',
        titleBold: 'Therapy',
        para: 'Continue your treatment plan and receive expert psychiatric care via chat, phone calls, or video calls',
      },

    ],
    col:'Col3'
  },
  {
    Cards:[
      {
        titleLight: 'Psycho',
        titleBold: 'Oncology',
        para: 'Specialised treatments designed to address the psychological impact and social aspects of cancer',
      },
    ],
    col:'Col4'
  }
];

const PyramidWrapper = styled.div`
      flex-direction: ${props => props.reverse ? 'row-reverse' : 'row'};
    `;

const Pyramid = (props) =>{

  const Card = styled.div`
      width: 20vw;
      padding: 13px;
      
       > div > div{
        padding: 5% 6%;
      }
      
      
    `;
  const Col1 = styled.div`
        width: fit-content;
    `;
  const Col2 = styled.div`
        width: fit-content;
        margin-top: 10rem;
    `;
  const Col3 = styled.div`
        width: fit-content;
        margin-top: 18rem;
    `;
  const Col4 = styled.div`
        width: fit-content;
        margin-top: 27rem;
    `;

  const CoolCards = ()=>{
    let items = props.content.map((item)=>{
      let Col = item.col;
      let Cards = item.Cards.map((card)=>{
        return(
          <Card className="card-container mb-4 mx-2">
            <div className="bg-white w-full">
              <div className="">
                <h3 className="text-v2xl font-bold text-sukoon block">{card.titleLight}</h3>
                <h3 className="text-v2xl font-bold text-sukoon block">{card.titleBold}</h3>
                <Para Class="w-full pt-4">
                  {card.para}
                  {/*<ArrowIcon/>*/}
                </Para>
              </div>
            </div>
          </Card>
        )
      });

      if(Col === 'Col1'){
        return (
          <Col1>
            {Cards}
          </Col1>
        )
      }
      else if(Col === 'Col2'){
        return (
          <Col2>
            {Cards}
          </Col2>
        )
      }
      else if(Col === 'Col3'){
        return (
          <Col3>
            {Cards}
          </Col3>
        )
      }
      else{
        return (
          <Col4>
            {Cards}
          </Col4>
        )
      }
    });
    return(items);
  };

  // Final return statement
  return(
    <PyramidWrapper top={props.top} reverse={props.reverse} className="flex-no-wrap flex">
      {CoolCards()}
    </PyramidWrapper>
  )
};


const ResidentialServices = (props) => {

  return (
    <section id="Residential Services" className="relative py-12">
      <div className="w-fit absolute pl-20 pt-12">
        <Title subHeading="IPD" titleLight="Residential" titleBold="Services" display="block"/>
        <Para width="40%">Home is where the heart is! At Sukoon, your heart has over 20,000 sq. ft to fall in love with. Its spread across 6 lush green floors to positively affect your well-being
        </Para>
      </div>
      <Pyramid content={ResidentialServicesContent} reverse={true} top="-12rem"/>
    </section>
  )
};

const FaqsPara = (item) =>{
  return(
    item.map((description=>{
        return(
          <Para width="97%" Class={`mb-0`} padding=".8rem 1rem">
            {description}
          </Para>
        )
      }
    ))
  )
};

const Faqs = (props) => {

  let content = [
    {
      summary: 'How do I find which expert to consult ?',
      description:[
        `A psychiatrist is a trained doctor (MBBS degree) who has done a specialisation in  psychiatry. They are allowed to prescribe medication and use them as a form of treatment, whereas a clinical psychologist, or a psychologist can’t. `,
        `A clinical psychologist is a professional with a specialisation in clinical psychiatry.  They conduct psychological testing (psychometry), psychotherapy, and treat emotional and mental disorders with behavioural changes. A clinical psychologist has to be registered with the Rehabilitation Council of India whereas a psychologist isn’t.`,
        `A psychologist or therapist is someone with a college degree in psychology. They focus on individuals with fewer concerns and can’t identify mental and emotional disorders. A psychologist hasn’t received any certified training and hence, we don’t have any at Sukoon.`
      ],
    },
    {
      summary: 'What should I expect from my first consultation?',
      description: ["You will first meet with a clinical psychologist for a psychological assessment. They will understand your concerns, needs, and medical history. Based on their diagnosis, you will be treated either by a psychiatrist, or a clinical psychologist, or both." ],
    },
    {
      summary: 'Who has access to my medical information?',
      description: ["Only your caregiver(s) - psychiatrist, clinical psychologist, and nurses - will have access to your medical information. At Sukoon, we take our patient confidentiality with utmost seriousness and will never share your medical records without your consent."],
    },

  ];

  let items = content.map((item)=>{
    return(
      <div className="flex-col flex shadow-lg mb-4 bg-white">
        <Details summary={item.summary} content={FaqsPara} arguments={[item.description]}>
        </Details>
      </div>
    )
  });

  return (
    <section id="faq-section" className="py-12 px-20 flex relative flex-row justify-between">
      <div className="mr-40">
        <Title HeadingTag={`h3`} subHeading="Learn" titleLight="Frequently" addClass="block" titleBold="Asked Questions"/>
      </div>
      <div className="w-3/5">
        {items}
      </div>
    </section>
  )
};

const Blogs = (props) =>{
  const Img = styled.img`
                
    `;
  const ImgWrapper = styled.div`
    
    `;
  return(
    <section className="py-12 px-20">
      <div>
        <Title subHeading="Learn" titleLight="" titleBold="Blogs"/>
        <div className="flex">
          <div id="blog-left" className="w-1/2 flex justify-around">
            <div className="shadow-lg m-4 flex flex-col justify-between">
              <ImgWrapper className="h-4/5">
                <Img src={BlogImg} className="h-full w-full object-cover object-center" alt="Blog"/>
              </ImgWrapper>
              <div className="p-2 mb-4">
                <h2 className="block pt-2 text-sukoon text-xl text-lg font-normal">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </h2>
                <p className="text-gray-700  text-sm py-4">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                  been the industry's standard dummy text ever since the 1500s,
                </p>
                <div>
                  <span className="text-sukoon font-bold text-sm">Guest</span>
                  <span className="text-sukoon font-light text-sm"> / Apr 16 2019</span>
                </div>
              </div>
            </div>
          </div>
          <div id="blog-right" className="w-1/2 flex">
            <div id="blog-right-inner" className="flex-col justify-between">
              <div className="shadow-lg m-4">
                <div className="h-40">
                  <img src={BlogImg} className="w-full h-full object-center object-cover" alt="Blog"/>
                </div>
                <div className="p-2 mb-4">
                  <h2 className="block pt-2 text-sukoon text-xl text-lg font-normal">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </h2>
                  <p className="text-gray-700  text-sm py-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s,
                  </p>
                  <div>
                    <span className="text-sukoon font-bold text-sm">Guest</span>
                    <span className="text-sukoon font-light text-sm"> / Apr 16 2019</span>
                  </div>
                </div>
              </div>
              <div className="shadow-lg m-4">
                <div className="h-40">
                  <img src={BlogImg} className="w-full h-full object-center object-cover" alt="Blog"/>
                </div>
                <div className="p-2 mb-4">
                  <h2 className="block pt-2 text-sukoon text-xl text-lg font-normal">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </h2>
                  <p className="text-gray-700 text-sm py-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s,
                  </p>
                  <div>
                    <span className="text-sukoon font-bold text-sm">Guest</span>
                    <span className="text-sukoon font-light text-sm"> / Apr 16 2019</span>
                  </div>
                </div>
              </div>
            </div>
            <div id="blog-right-inner-2" className="flex bg-white justify-around">
              <div className="shadow-lg m-4 flex flex-col justify-between">
                <div className="h-3/5">
                  <img src={BlogImg} className="w-full h-full object-center object-cover" alt="Blog"/>
                </div>
                <div className="p-2 mb-4">
                  <h2 className="block pt-2 text-sukoon text-xl text-lg font-normal">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </h2>
                  <p className="text-gray-700  text-sm py-4">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s,
                  </p>
                  <div>
                    <span className="text-sukoon font-bold text-sm">Guest</span>
                    <span className="text-sukoon font-light text-sm"> / Apr 16 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

const OutPatientServiceHeading = styled.div`
        top: 0;
        right: 3rem;
        padding-left: 3vw;
    `;

const OutPatientServices = (props) => {

  return (
    <section id="out-patient-services" className="relative py-12 mb-4">
      <OutPatientServiceHeading className="w-fit pt-12 absolute">
        <Title subHeading="OPD" titleLight="Out Patient" textAlign="right" titleBold="Care Services" borderRight={true} display="block"/>
        <Para width="40vw" textAlign="right">
          We offer effective daycare treatment programs in a calming, and relaxing environment. Our team of expert doctors, combined with modern facilities ensure holistic care.
        </Para>
      </OutPatientServiceHeading>
      <Pyramid content={OutPatientServicesContent}top="0" reverse={false}/>
    </section>
  )
};

const IntroContent = {
  Heading: { titleLight: 'Why', titleBold: 'Sukoon'},
  Caption: [
    {
      heading: "Consult the best doctors",
      para: "Get expert advice from an experienced team of psychiatrists, clinical psychologists, counsellors, and art-based therapists that ensure holistic care to address your concerns. We take our doctor-patient confidentiality with utmost seriousness while guiding you towards better days."
    },
    {
      heading: "Get personalised care 24*7",
      para: "Powered by Fortis Healthcare, Sukoon is India’s first super-specialty psychiatric center. We have leading psychiatric, deaddiction, rehabilitation, and mental health treatments for both inpatients and outpatients. We are a one-of-a-kind healthcare provider for all your psychiatric and mental well-being needs."
    },
    { heading: "Recover in premium facilities", para: "Enhance your recovery in a calming, positive, and comfortable world-class environment. With residential care tailor-made to your mental and psychological health, recovery and better days are just around the corner." }
  ]
};

/**
 * @return {boolean}
 */
function DesktopHome() {
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
      <TopRow>
        <PopUp  handlePopUp={handlePopUp} popUp={popUp}/>
        <Banner showHidePopUp={handlePopUp} bannerPara={``} captionLight={`A safe space`} captionBold={`for better days`} booking discover HeaderImg={HeaderImg}/>
        <WhySukoon content={IntroContent}/>
      </TopRow>
      <ResidentialServices/>
      <OutPatientServices/>
      <Infrastructure/>
      <MFBWrapper>
        <MeetExperts/>
        <Faqs/>
        {/*<Blogs/>*/}
      </MFBWrapper>

    </>
  );
}

export default DesktopHome;
