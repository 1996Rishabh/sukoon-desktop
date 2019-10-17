import React, {useState} from "react";
import styled from "styled-components";
import {Link} from "gatsby";

// Components
import Banner from "../../components/Banner/mobile";
import Carousel from "../../components/Carousel/mobile";
import MeetExperts from "../../components/MeetExperts/mobile";
import ArrowButton from "../../elements/ArrowButton/mobile";
import Infrastructure from "../../components/Infrastructure/mobile";
import Title from "../../elements/Heading/mobile";
import Para from "../../elements/Para/mobile";

// Images
import BlogImg  from "../../images/iStock-968194620_2019-07-17/blogImg.jpg";
import HeaderBg from "../../images/mobile_home_banner_with_logo.jpg";

const Caption = (props) => {
  return (
    <div className={`${props.WrapperClass || 'my-8'}`}>
      <h3 className="text-sukoon font-semibold block">
        {props.subHeading || ''}
      </h3>
      <Para wrapperClass={`mb-0`}>
        {props.para || ''}
      </Para>
    </div>

  )
};

const WhySukoon = (props) => {
  return (
    <section id="why-sukoon" className="why-sukoon py-6 px-4">
      <Title subHeading="About" titleLight="Why" titleBold="Sukoon" />
      <Caption subHeading="Consult the best doctors"
               para="Get expert advice from an experienced team of psychiatrists, clinical psychologists, counsellors, and art-based therapists that ensure holistic care. We take doctor-patient confidentiality with utmost seriousness."/>
      <Caption subHeading="Get personalised care 24*7"
               para="Powered by Fortis Healthcare, Sukoon is India’s first super-specialty psychiatric center. We have leading deaddiction, psychiatric, mental health, and rehabilitation treatments for inpatients and outpatients."/>
      <Caption WrapperClass={`my-0`} subHeading="Recover in premium facilities"
               para="Enhance your recovery in a calming, positive, and comfortable world-class environment. With residential care tailor-made to your mental and psychological health, recovery and better days are just around the corner."/>
    </section>
  )
};

const ResidentialService = [
  {
    mainTitle: 'Acute',
    subTitle: 'Psychiatry Care',
    para: 'Inpatient hospitalisation with high levels of personalised care, comfort, privacy, and safety.'
  },
  {
    mainTitle: 'Intensive',
    subTitle: 'Care Units',
    para: 'Three ICUs designed to handle any emergencies with round the clock care, and medical supervision'
  },
  {
    mainTitle: 'Alcohol',
    subTitle: 'Deaddiction',
    para: 'Customised treatment programs designed for alcohol deaddiction, and  alcohol rehabilitation.'
  },
  {
    mainTitle: 'Drug',
    subTitle: 'Deaddiction',
    para: 'Personalised treatments addressing substance abuse such as smoking cigarettes, taking drugs, or sniffing glue. '
  },
  {
    mainTitle: 'Habit',
    subTitle: 'Deaddiction',
    para: 'Specialised treatments for lifestyle issues such as gambling, gaming, and internet addiction.'
  },
  {
    mainTitle: 'Sukoon',
    subTitle: 'At Home',
    para: 'Get tailor-made psychiatric care in the comfort of your residence from our expert team of doctors and nurses.'
  },
  {
    mainTitle: 'Geriatric',
    subTitle: 'Psychiatry',
    para: 'Old age psychiatric treatments and mental health programs for all needs of the elderly.'
  },
  {
    mainTitle: 'Women',
    subTitle: 'Focused Care',
    para: ' Consult with only female doctors, and receive care from female nurses in a safe environment'
  },
  {
    mainTitle: 'Child',
    subTitle: 'Psychiatry',
    para: 'Adolescent focused mental health programs and psychiatric treatments delivered with extra care'
  },
];

const OutPatientCareServices = [
  {
    mainTitle: 'Clinical',
    subTitle: 'Psychology',
    para: 'Specialised psychotherapeutic treatments for emotional and behavioural disorders'
  },
  {
    mainTitle: 'Counselling',
    subTitle: 'Psychology',
    para: 'Personalised care to help cope with life situations, problems, and everyday issues.'
  },
  {
    mainTitle: 'Art-Based',
    subTitle: 'Therapy',
    para: 'Visual arts, storytelling, music, creative writing, and movement in a therapeutic setting'
  },
  {
    mainTitle: 'RTMS',
    subTitle: 'Treatment',
    para: 'Repetitive Transcranial Magnetic Stimulation (rTMS) treatments for behavioural and emotional disorders'
  },
  {
    mainTitle: 'Remediation',
    subTitle: '',
    para: 'Special educators assist children with learning disabilities, attention deficit, and intellectual disabilities'
  },
  {
    mainTitle: 'Psychoanalytical',
    subTitle: 'Therapy',
    para: 'Work through early life traumas and change long standing maladaptive personality and relational patterns'
  },
  {
    mainTitle: 'Occupational',
    subTitle: 'Therapy',
    para: 'Treatments designed for restoring cognitive and motor functions to perform better at daily activities  '
  },
  {
    mainTitle: 'Virtual',
    subTitle: 'Therapy',
    para: 'Continue your treatment plan and receive expert psychiatric care via chat, phone calls, or video calls'
  },
  {
    mainTitle: 'Psycho-',
    subTitle: 'Oncology',
    para: 'Specialised treatments designed to address the psychological impact and social aspects of cancer'
  },
];

const ResidentialServices = (props) => {

  return (
    <section id="" className="p-4">
      <Title subHeading="IPD" titleLight="Residential" titleBold="Care Services" display="block"/>
      <Carousel class="" content={ResidentialService}/>
    </section>
  )
};

const FaqCardWrapper = styled.div`

   & summary {
    display: flex;
    justify-content: space-between;
    outline: none
  }

  & summary::-webkit-details-marker {
    display: none;
  }

    & summary:after {
        content: "+";
        color: #12443e;
        float: right;
        font-size: 35px;
        padding: 0;
        text-align: center;
        line-height: 25px;
        margin-top: 4px;
    }
    
    & details[open] summary:after {
        content: "-";
    }

`;

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
      <div className="flex-col flex p-4 shadow-lg my-4 bg-white">
        <FaqCardWrapper className="flex justify-between">
          <details>
            <summary className="text-sukoon text-lg font-medium">{item.summary}</summary>
           { item.description.map((description)=> {
             return (
               <Para width="97%" padding="1rem">
                 {description}
               </Para>)
           })
           }
          </details>
        </FaqCardWrapper>
      </div>
    )
  });


  return (
    <section className="p-4">
      <Title subHeading="Learn" titleLight="Frequently" titleBold="Asked Questions"/>
      <div className="">
        {items}
      </div>
    </section>
  )
};

const Blogs = (props) =>{
  return(
    <section className="p-4 pb-1">
      <div>
        <Title subHeading="Learn" titleLight="" titleBold="Blogs"/>
        <div className="shadow-lg mt-4">
          <img src={BlogImg} alt="Blog"/>
          <div className="p-2">
            <h5 className="block pt-2 text-sukoon font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </h5>
            <Para className="text-gray-700 text-right py-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s,
            </Para>
            <div>
              <span className="text-sukoon font-bold small">Guest</span>
              <span className="text-sukoon font-normal small"> / Apr 16 2019</span>
            </div>
          </div>
        </div>
        <div className="mt-6 text-sukoon flex">
          <Link to="/" className="pb-1 border-solid border-b border-sukoon ">Read More Blogs</Link>
          <ArrowButton border={false} margin="0 12px"/>
        </div>
      </div>
    </section>
  )
};

const OutPatientServices = (props) => {

  return (
    <section id="" className="p-4">
      <Title subHeading="OPD" titleLight="Out Patient" titleBold="Care Services" display="block"/>
      <Carousel content={OutPatientCareServices}/>
    </section>
  )
};


const DialogWrapper = styled.div`
    z-index: 10001;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
      
    &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      background: rgba(31, 30, 30, .7);
    }  
      
    .inside-box-wrapper{
    }
`;

const PopUp = (props) =>{

  return (
    <DialogWrapper id={`pop-up-box`} className={`${props.popUp ? 'block' : 'hidden'} fixed pin overflow-auto  flex`} onClick={()=>props.show(false)}>
      <div className={`relative inside-box-wrapper w-full mt-16 flex-col flex self-end`}>
        <div className={`header px-8 py-2 flex bg-tab justify-between`}>
          <h3>Ooops...</h3>
        </div>
        <div className={`body bg-white px-8 py-4 text-lg`}>
          <h6 className={`my-2`}>Unfortunately, we aren't able to accept appointments online at the time being.</h6>
          <h6 className={`my-4`}>Kindly call us at <span className={`tracking-widest font-bold border-gray-600 border-b-2`}><a
            href="tel:+91 7558640422">7558640422</a></span> to book one. Thank you! We regret the inconvenience caused.</h6>
        </div>
        <div className={`footer`}>

        </div>
      </div>
    </DialogWrapper>
  )
};

function IndexPage(props) {
  const[popUp, setPopUp] = useState(false);

  // To prevent page scroll when dialog box is open.
  function handlePopUp(showBox) {
    let body = document.body;
    if(showBox){
      setPopUp(showBox);
      body.style.overflow = 'hidden';
    }
    else{
      setPopUp(showBox);
      body.style.overflow = 'auto';
    }
  }

  return (
    <>
      <PopUp show={handlePopUp} popUp={popUp}/>
      <Banner showHidePopUp={handlePopUp} captionLight={`A safe space`} captionBold={`for better days`} overlay={props.overlay} bookNow contact discover backgroundImg={HeaderBg}/>
      <WhySukoon/>
      <ResidentialServices/>
      <OutPatientServices/>
      {/*<Infrastructure />*/}
      <MeetExperts/>
      <Faqs/>
      {/*<Blogs/>*/}
    </>
  );
}

export default IndexPage;
