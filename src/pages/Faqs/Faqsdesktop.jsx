import React ,{useState} from "react";

// Components
import Banner from "../../components/Banner/desktop";
import Title from "../../elements/Heading/desktop"
import Para from "../../elements/Para/desktop";
import Tab from "../../elements/Tabs/TabsDesktop";
import Details from "../../elements/Details/desktop";

// Images
import HeaderImg from "../../images/Desktop-Header/HomeBanner.jpg";
import styled from "styled-components";


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

const TabList = styled.ul`
   min-height: 40px;
   height: 60px;
   
`;

const Faqs = (props) => {
  const[ListContent, setContent] = useState(General);

  function handleView(content){
    // Content bellow the tab is changed by the next function.
    setContent(content);
  }

  return (
    <section id="faq-section" className="p-8 flex relative flex-row-reverse">
      <div className="w-4/5">
        <TabList className="flex mb-10 justify-between">
          {TabNames.map((tab)=>{
            return(
              <li className="mt-3">
                <Tab width={`10vw`} buttonClass={``} onClick={handleView} active={tab.name === ListContent.tab} argument={[tab.content]}>
                  {tab.name}
                </Tab>
              </li>
            )
          })
          }
        </TabList>
        {
          ListContent.Questions.map((item)=>{
            return(
              <div className="flex-col flex p-4 shadow-lg my-4 bg-white">
                  <Details summary={item.summary}>
                    <Para width="100%" padding="8px 0">
                      {item.description}
                    </Para>
                  </Details>
              </div>
            )
          })
        }
      </div>
      <div className="">
        <Title subHeading={`Learn`}  titleLight="Frequently" addClass="block" titleBold="Asked Questions"/>
        <Para width={`70%`}>Want to find out more about Sukoon? Or find out more about psychiatry, and mental health? The answers to these and more can be found below.
        </Para>
      </div>
    </section>
  )
};


function FaqsPage(props) {
  return (
    <>
      <Banner captionLight={`Know More`} captionBold={`Feel Better`}  HeaderImg={HeaderImg}/>
      <Faqs/>
    </>

  );
}

export default FaqsPage;
