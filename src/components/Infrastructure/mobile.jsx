import styled from "styled-components";
import React, { useState } from "react";

// Components
import Title from "../../elements/Heading/mobile";
import Para from "../../elements/Para/mobile";

// Images
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
    bgImg:ConsultingChambers,
    caption: 'Modern Residences',
    titleLight: 'Modern',
    titleBold: 'Residences',
    para: 'Stay in premium, well-lit, comfortably furnished rooms designed to provide a calming, warm, and safe environment. ',
  },
  Card4: {
    bgImg:InHousePharmacy,
    caption: 'Gourmet Meals',
    titleLight: 'Gourmet',
    titleBold: 'Meals',
    para: 'Enjoy healthy meals that will delight your taste buds. You can also take advantage of our in-room dining menu.',
  },
  Card5: {
    bgImg:ConsultingChambers,
    caption: 'Activity Areas',
    titleLight: 'Activity',
    titleBold: 'Areas',
    para: 'Never be limited by space! Undergo alternative therapy programs in our fitness area, art studio, and independent floor lounges',
  },
  Card6: {
    bgImg:InHousePharmacy,
    caption: 'World-Class Amenities',
    titleLight: 'World-Class',
    titleBold: 'Amenities',
    para: 'Intensive Care Unit, 24*7 doctors on-site, terrace garden, or in-room spa - we have you covered at every step of your healing process.',
  }
};

const FirstButton = styled.div`
    top: -3px;
    left: 4px;
`;

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
    <section className="p-4">
      <Title titleLight={props.card.titleLight} className="mb-4" titleBold={props.card.titleBold} display="block"/>
      <Para className="text-gray-600 block" width="100%">
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
        margin-top: 4px;
        background: ${props.yellow ? '#ffc300' : 'white'};
        
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
        height: 230px;
        background-position: center;
        position: relative;
        
        &::after{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 40vw;
        z-index: 10;
        opacity: .7;
        background: linear-gradient(to bottom,transparent 82%,#000000);
        
        }
    `;

const CardWrapper = styled.div`
        right:10vw;
        top:8vw;
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

  const [activeStepper, setStepper] = useState('-95%');

  const[Card, setCard] = useState(CardContent.Card1);


  const StepperInner  = styled.div`
    
  `;

  // Big Button which moves with animation
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
    width: 18px;
    height: 18px;
    background: #ffffff;
    }
    
  `;


  const Stepper = styled.div`
        bottom: 10px;
        left: 4%;
        right: 4%;   
        z-index: 11;
          
         .usp-caption-1{
          top: 40px;
          left: 0;
         } 
          
        .usp-caption{
        top: 40px;
        left: 17vw;
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
      setStepper('-95%');
      setColor1(false);
      setColor2(false);
      setColor3(false);
      setColor4(false);
    }
    else if(name === '1'){
      setStepper('-73%');
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
      setStepper('-52%');
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
      setStepper('-29%');
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
      setStepper('-8%');
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
    <div>
      <InfraSection bgImage={Card.bgImg} id="sukoon-infra-section" className="sukoon-infra-section relative w-full my-4 h-full">
        <Stepper className="flex absolute">
          <StepperInner className="flex">
            <StepperButton className="absolute">
              <button />
            </StepperButton>
            <FirstButton className="relative">
              <SimpleInfraButton onClick={()=>handleToggle('0')} yellow={yellowActive0} name="0" index={index0} className="bg-sukoonYellow"/>
              <h2 className="absolute usp-caption-1 text-white text-xl">
                Consulting Chambers
              </h2>
            </FirstButton>
            <InfraBtnContainer index={index1}>
              <InfraButton  yellow={yellowActive1} handleToggle={handleToggle} name="1"  className="bg-sukoonYellow"/>
              <h2 className="absolute usp-caption text-white text-xl">
                {CardContent.Card2.caption}
              </h2>
            </InfraBtnContainer>
            <InfraBtnContainer index={index2}>
              <InfraButton  yellow={yellowActive2} name="2" handleToggle={handleToggle}  className="bg-sukoonYellow"/>
              <h2 className="absolute usp-caption text-white text-xl">
                {CardContent.Card3.caption}
              </h2>
            </InfraBtnContainer>
            <InfraBtnContainer index={index3}>
              <InfraButton  yellow={yellowActive3} name="3" handleToggle={handleToggle}  className="bg-sukoonYellow"/>
              <h2 className="absolute text-white usp-caption text-xl">
                {CardContent.Card4.caption}
              </h2>
            </InfraBtnContainer>
            <InfraBtnContainer index={index4}>
              <InfraButton  yellow={yellowActive4} name="4" handleToggle={handleToggle}  className="bg-sukoonYellow"/>
              <h2 className="absolute text-white usp-caption text-xl">
                {CardContent.Card5.caption}
              </h2>
            </InfraBtnContainer>
          </StepperInner>
        </Stepper>
      </InfraSection>
      <CardWrapper className="block bg-white">
        <InfraCard card={Card} titleLight="In House" titleBold="Pharmacy" para="You can always find your prescribed medications at Sukoon. Our pharmacy is "/>
      </CardWrapper>
    </div>

  )
};


export default Infra;
