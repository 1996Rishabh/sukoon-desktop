import styled from "styled-components";
import React, { useState } from "react";

// Components
import Title from "../../elements/Heading/desktop";
import Para from "../../elements/Para/desktop";

// Images
import InfraBgImg from "../../images/InfraSectionbg.jpg";
import GourmetMeals from "../../images/Infra/gourmet_meals.png";
import ConsultingChambers from "../../images/exp/bg.jpg";
import InHousePharmacy from "../../images/exp/bg_2.jpg";


// Cards data
const CardContent = {
  Card1: {
    bgImg:ConsultingChambers,
    caption: 'Consulting Chambers',
    titleLight: 'Consulting',
    titleBold: 'Chamber',
    para: 'Consult with your doctor in a private and comfortable environment. Grab a coffee, or indulge in some snacks while you wait.',
  },
  Card2: {
    bgImg:InHousePharmacy,
    caption: 'In House Pharmacy',
    titleLight: 'In House',
    titleBold: 'Pharmacy',
    para: 'You can always find your prescribed medications at Sukoon. No more running around the town to find them.',
  },
  Card3: {
    bgImg:InfraBgImg,
    caption: 'Modern Residences',
    titleLight: 'Modern',
    titleBold: 'Residences',
    para: 'Stay in premium, well-lit, comfortably furnished rooms designed to provide a calming, warm, and safe environment.',
  },
  Card4: {
    bgImg:GourmetMeals,
    caption: 'Gourmet Meals',
    titleLight: 'Gourmet',
    titleBold: 'Meals',
    para: 'Enjoy healthy meals that will delight your taste buds. You can also take advantage of our in-room dining menu.',
  },
  Card5: {
    bgImg:InfraBgImg,
    caption: 'Activity Areas',
    titleLight: 'Activity',
    titleBold: 'Areas',
    para: 'Never be limited by space! Undergo alternative therapy programs in our fitness area, art studio, and independent floor lounges.',
  },
  Card6: {
    bgImg:InfraBgImg,
    caption: 'World-Class Amenities',
    titleLight: 'World-Class',
    titleBold: 'Amenities',
    para: 'Intensive Care Unit, 24*7 doctors on-site, terrace garden, or in-room spa - we have you covered at every step of your healing process.',
  }
};

// Bottom Button wrapper
const InfraBtnContainer = (props) =>{

  const Wrapper = styled.div`
            position: relative;
            width: 20vw;
            z-index: ${props => props.index || '0'};
        `;
  return(
    <Wrapper index={props.index}>
      {props.children}
    </Wrapper>
  )
};

// Card component
const InfraCard = (props) => {
  return (
    <section className="p-6">
      <Title wrapperClass={`mb-6`} titleLight={props.card.titleLight} headingClass={`text-4xl`} titleBold={props.card.titleBold} singleLine/>
      <Para className="text-gray-600 block" width="23vw">
        {props.card.para}
      </Para>
    </section>
  )
};

const InfraButton = (props)=>{

  const Button = styled.button`
        width: 10px;
        height: 10px;
        border-radius: 50%;
        float:right;
        margin: 4px 0;
        background: ${props.yellow ? '#ffc300' : 'white'};
        transition: all 200ms ease-in;
        
        ::before{
            position: absolute;
            content: '';
            width: 100%;
            height: 4px;
            background: ${props.yellow ?  '#ffc300' : 'white'};
            top:7px;
            left:0;
        }
    `;
  return(
    <Button onClick={()=>{props.handleToggle(props.name)}}/>
  )
};

const InfraSection = styled.section`
        background-image: url(${props => props.bgImage});
        background-size: cover;
        height: 40vw;
        background-position: center;
        position: relative;
        
        &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 40vw;
        z-index: 1;
        opacity: .7;
        background: linear-gradient(to bottom,transparent 82%,#000000);
        
        }
    `;

const CardWrapper = styled.div`
    margin: 8% 8% 0 0;
    width: fit-content;
    float: right;
    `;

const SimpleInfraButton = styled.button`
        width: 10px;
        height: 10px;
        border-radius: 50%;
        position: relative;
        z-index: ${props=> props.index || '0'};
    `;

const Infra = (props) =>{
  const [yellowActive0, setColor0] = useState(true);
  const [yellowActive1, setColor1] = useState(false);
  const [yellowActive2, setColor2] = useState(false);
  const [yellowActive3, setColor3] = useState(false);
  const [yellowActive4, setColor4] = useState(false);

  // Z-index for seek bar yellow button
  const[index0, setIndex0] = useState('0');
  const[index1, setIndex1] = useState('0');
  const[index2, setIndex2] = useState('0');
  const[index3, setIndex3] = useState('0');
  const[index4, setIndex4] = useState('0');

  const [activeStepper, setStepper] = useState('-99%');

  const[Card, setCard] = useState(CardContent.Card1);

  const Stepper = styled.div`
        bottom: 6rem;
        left: 8%;
        z-index: 2;
        line-height: 1;
          
         .usp-caption-1{
          top: 40px;
          left: 0;
         } 
          
        .usp-caption{
        top: 40px;
        left: 17vw;
        }
    `;

  const StepperInner  = styled.div`
    
  `;

  const StepperButton = styled.div`
    z-index: 1;
    width: 100%;
    transform: translate(${activeStepper},0);
    transition: all 2s;
    
    button{
    position: relative;
    z-index: 10;
    float: right;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    background: #ffffff;
    }
    
  `;

  const handleToggle = (name)=>{

    if(name === '0'){

      if(yellowActive0){
        setIndex0('0');
      }
      else{
        setIndex0('10');
      }
      setCard(CardContent.Card1);
      setStepper('-99%');
      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColor4(false);
    }
    else if(name === '1'){
      setStepper('-74%');
      setCard(CardContent.Card2);
      if(!yellowActive1){
        setIndex0('10');
        setColor0(true);
        setColor1(true);
      }
      else{
        setIndex1('0');
        setColor2(false);
        setColor3(false);
        setColor4(false);
      }
    }
    else if(name === '2'){
      setStepper('-49%');
      setCard(CardContent.Card3);
      if(!yellowActive2){
        setColor0(true);
        setIndex1('10');
        setColor2(true);
        setColor1(true);
      }
      else{
        setIndex2('0');

        setColor3(false);
        setColor4(false);
      }
    }
    else if(name === '3'){
      setStepper('-24%');
      setCard(CardContent.Card4);
      if(!yellowActive3){
        setIndex2('10');
        setColor0(true);
        setColor1(true);
        setColor2(true);
        setColor3(true);
      }
      else{
        setIndex3('0');

        setColor4(false);
      }
    }
    else{
      setStepper('0%');
      setCard(CardContent.Card5);
      if(!yellowActive4){
        setIndex3('10');
        setColor0(true);
        setColor1(true);
        setColor2(true);
        setColor3(true);
        setColor4(true);
      }
      else{
        setIndex4('0');
      }
    }
  };

  return(
    <InfraSection bgImage={Card.bgImg} id="sukoon-infra-section" className="sukoon-infra-section relative w-full my-12 h-full">
      <CardWrapper className="block bg-white">
        <InfraCard card={Card} titleLight="In House" titleBold="Pharmacy" para="You can always find your prescribed medications at Sukoon. Our pharmacy is "/>
      </CardWrapper>
      <Stepper className="flex absolute">
        <StepperInner className="flex">
          <StepperButton className="absolute">
            <button />
          </StepperButton>
          <div className="relative">
            <SimpleInfraButton onClick={()=>handleToggle('0')} yellow={yellowActive0} name="0" index={index0} className="bg-sukoonYellow"/>
            <h2 className="absolute usp-caption-1 text-white text-xl font-gilroyMedium">
              Consulting Chambers
            </h2>
          </div>
          <InfraBtnContainer index={index1}>
            <InfraButton  yellow={yellowActive1} handleToggle={handleToggle} name="1"  className="bg-sukoonYellow"/>
            <h2 className="absolute usp-caption text-white text-xl font-gilroyMedium">
              {CardContent.Card2.caption}
            </h2>
          </InfraBtnContainer>
          <InfraBtnContainer index={index2}>
            <InfraButton  yellow={yellowActive2} name="2" handleToggle={handleToggle}  className="bg-sukoonYellow"/>
            <h2 className="absolute usp-caption text-white text-xl font-gilroyMedium">
              {CardContent.Card3.caption}
            </h2>
          </InfraBtnContainer>
          <InfraBtnContainer index={index3}>
            <InfraButton  yellow={yellowActive3} name="3" handleToggle={handleToggle}  className="bg-sukoonYellow"/>
            <h2 className="absolute text-white usp-caption text-xl font-gilroyMedium">
              {CardContent.Card4.caption}
            </h2>
          </InfraBtnContainer>
          <InfraBtnContainer index={index4}>
            <InfraButton  yellow={yellowActive4} name="4" handleToggle={handleToggle}  className="bg-sukoonYellow"/>
            <h2 className="absolute text-white usp-caption text-xl font-gilroyMedium">
              {CardContent.Card5.caption}
            </h2>
          </InfraBtnContainer>
        </StepperInner>

      </Stepper>
    </InfraSection>
  )
};


export default Infra;
