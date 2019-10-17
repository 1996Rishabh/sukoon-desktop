import React, {useState} from "react";
import styled from "styled-components";

// Components
import Title from "../../elements/Heading/mobile";
import Para from "../../elements/Para/mobile";
import Banner from "../../components/Banner/mobile";
import Tab from "../../elements/Tabs/TabsMobile";
// Images
import HeaderBg from "../../images/mobile_header.jpg";


const Caption = (props) => {
  return (
    <div className="my-2">
      <h2 className="text-sukoon text-lg font-normal font-bold block">
        {props.subHeading || ''}
      </h2>
      <Para className="text-right py-2">
        {props.para || ''}
      </Para>
    </div>

  )
};

const TabList = styled.ul`
   min-height: 40px;
   height: 60px;
   
`;

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



const General = {
  tab:'General',
  Questions:[
    {
      summary: 'How do I find which expert to consult?',
      description:
        "A psychiatrist is a trained doctor (MBBS degree) who has done a specialisation in  psychiatry. They are allowed to prescribe medication and use them as a form of treatment, whereas a clinical psychologist, or a psychologist can’t.",
    }
    ,
    {
      summary: 'What should I expect from my first consultation?',
      description
        :
        "You will first meet with a clinical psychologist for a psychological assessment. They will understand your concerns, needs, and medical history. Based on their diagnosis, you will be treated either by a psychiatrist, or a clinical psychologist, or both.",
    }
    ,
    {
      summary: 'Who has access to my records?',
      description
        :
        "Except for your experts (psychiatrist and clinical psychologist) no one has access to your medical information. We take our doctor-patient confidentiality with utmost seriousness and will never share your medical records without your consent.",
    },
  ]
};

const Illnesses = {
  tab:'Illnesses',
  Questions:[
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description
      :
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  }
  ,
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description
      :
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  }
  ,
  {
    summary: 'Introduction What is the meaning of Lorem ipsum?',
    description
      :
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
  },
  ]
};


const Treatments = {
  tab:'Treatments',
  Questions:[
    {
      summary: 'Introduction What is the meaning of Lorem ipsum?',
      description
        :
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    }
    ,
    {
      summary: 'Introduction What is the meaning of Lorem ipsum?',
      description
        :
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    }
    ,
    {
      summary: 'Introduction What is the meaning of Lorem ipsum?',
      description
        :
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    }
    ,
  ]

};
const Experience = {
  tab:'Experience',
  Questions:[
    {
      summary: 'Introduction What is the meaning of Lorem ipsum?',
      description
        :
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    }
    ,
    {
      summary: 'Introduction What is the meaning of Lorem ipsum?',
      description
        :
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    }
    ,
    {
      summary: 'Introduction What is the meaning of Lorem ipsum?',
      description
        :
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.",
    },
  ]
};

const TabNames =[
  {name: 'General' , content: General},
  {name: 'Illnesses' , content: Illnesses},
  {name: 'Treatments' , content: Treatments},
  {name: 'Experience' , content: Experience},
];

// Main page function
const Faqs = (props) => {

  const[ListContent, setContent] = useState(General);

  function handleView(content){
    // Content bellow the tab is changed by the next function.
    setContent(content);
  }

  let items = ListContent.Questions.map((item)=>{
    return(
      <div className="flex-col flex p-4 shadow-lg my-4 bg-white">
        <FaqCardWrapper className="flex justify-between">
          <details>
            <summary className="text-sukoon text-lg font-gilroyMedium">{item.summary}</summary>
            <Para width="100%" padding="8px 0">
              {item.description}
            </Para>
          </details>
        </FaqCardWrapper>
      </div>
    )
  });

  return (
    <section className="p-4">
      <Title subHeading={`Learn`} titleLight="Frequently" titleBold="Asked Questions"/>
      <Para width="100%">Want to find out more about Sukoon? Or find out more about psychiatry, and mental health? The answers to these and more can be found below.
      </Para>
      <div className="flex flex-wrap overflow-x-hidden">
        <TabList className="patient_services_nav flex overflow-y-hidden overflow-x-scroll">
          {TabNames.map((tab)=>{
            return(
              <li className="mt-3">
                <Tab buttonClass={``} onClick={handleView} active={tab.name === ListContent.tab} argument={[tab.content]}>
                  {tab.name}
                </Tab>
              </li>
            )
          })
          }
        </TabList>
      </div>
      <div className="">
        {items}
      </div>
    </section>
  )
};


function Faq(props) {

  return (
    <>
      <Banner captionLight={`Know More`} captionBold={`Feel Better`} overlay={props.overlay} backgroundImg={HeaderBg}/>
      <Faqs/>
    </>
  );
}

export default Faq;
