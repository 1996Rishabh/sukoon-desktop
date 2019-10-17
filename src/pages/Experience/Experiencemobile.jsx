import React, {useState} from "react";
import styled from "styled-components";

// Components
import Para from "../../elements/Para/mobile";
import Title from "../../elements/Heading/mobile";
import BookBtn from "../../elements/BookNowBtn/mobile";
import Banner from "../../components/Banner/mobile";
import Details from "../../elements/Details/mobile";
import Carousel from "../../components/Carousel/mobile";
import Tab from "../../elements/Tabs/TabsMobile";


// Images
import RoomImg from "../../images/exp/room.jpg";
import FloorAct from "../../images/exp/party.jpg";
import Therapy from "../../images/exp/bg_2.jpg";
import Highlight from "../../images/exp/bg.jpg";
import FacOneBg from "../../images/exp/room_dining.jpg";
import FacOneBgSec from "../../images/exp/room_spa.jpg";
import HighlightSecond from "../../images/exp/bg_3.jpg";
import BannerBg from "../../images/servicesBg.png";
import RoomOne from "../../images/exp/room_2.jpg";
import RoomTwo from "../../images/exp/room_3.jpg";
import RoomThree from "../../images/exp/room_4.jpg";
import RoomFour from "../../images/exp/room_5.jpg";
import Breakfast from "../../images/exp/meal_1.jpg";
import Lunch from "../../images/exp/meal_2.jpg";
import Dinner from "../../images/exp/meal_3.jpg";

const HighlightSection = styled.div(props=>{


  return`
        background-size: cover;
        background-image: url(${props.BgImg});
        background-position: center center;
        background-repeat: no-repeat;
        
        .highlight {
        background: white;
        margin-top: 75px;
        margin-bottom: -65px;
        padding: 25px;
        box-shadow: 0px 6px 10px #00000024;
        }
    `
});

const Face = styled.div(props=>{

  return`
    height:225px;
    background: url('${props.Img}') center center;
    background-size:cover
    `
});

const MealCard = styled.div`
  width: 75vw;
  padding:10px;
  border:1px solid #969696;
  background:white;
`;

const OverCard = styled.div`
    position: relative;
    z-index: 3;
    background:white;
    padding:25px;
    margin:${props => props.margin ? props.margin :'-40px 15px -40px 15px'};
    box-shadow: 0px 6px 10px #00000024;
`;

const Rooms = {
  deluxeRoom: {
    type: 'Deluxe room',
    description: 'lorem ipsum is just a dummy text',
    amenities:['Queen Bed','Smart TV (45”)','Private Balcony','AC & Heater','Mini Fridge','Spacious Closet','Lounge Seating','Writing Desk','Geyser','Wifi'],
    previewImages: [RoomOne, RoomTwo, RoomThree, RoomFour],
    preview: RoomOne,
  },
  suiteRoom: {
    type: 'suite room',
    description: 'lorem ipsum is just a dummy text',
    amenities:['Queen Bed','Food Pantry','Smart TV (55”)','Private Balcony','Outdoor Seating','AC & Heater','Mini Fridge','Spacious Closet','Lounge Seating','Writing Desk' ,'Wifi','Geyser'],
    previewImages: [RoomOne, RoomTwo, RoomThree, RoomFour],
    preview: RoomOne,
  },
  icuRoom: {
    type: 'Intensive Care Unit',
    description: 'lorem ipsum is just a dummy text',
    amenities:['24*7 Doctor','Dedicated Nurse','Soft-touch Walls','Padded Furniture','Personalised Meals','Queen Bed','Private Balcony','AC & Heater','Spacious Closet','Luggage Rack'],
    previewImages: [RoomOne, RoomTwo, RoomThree, RoomFour],
    preview: RoomOne,
  },
};

const RoomDetailFn = (Room) =>{
  return(
    <div className="">
      <img className="mt-3 mb-4" src={RoomImg} alt=""/>
      <Para>{Room.description}</Para>
        <ul className="flex flex-no-wrap w-full justify-between">
          <div className={`left-amenities`}>
            {Room.amenities.map((amenity, index) => {
                if(index < 5 ) {
                  return (
                    <li className="ml-3 mb-3 ">{amenity}</li>
                  )
                }
                else {
                  return null;
                }
              }
            )
            }
          </div>
          <div className={`right-amenities`}>
            {Room.amenities.map((amenity, index) => {
                if(index > 5 ) {
                  return (
                    <li className="mb-3 mr-3">{amenity}</li>
                  )
                }
                else {
                  return null;
                }
              }
            )
            }
          </div>
        </ul>
    </div>
  )
};


const CarouselItems = (item) =>{
  return(
    <MealCard className="flex-col mr-4">
      <div className="">
        <img src={item.image} className={`w-full`} alt={item.imageAlt}/>
      </div>
      <Para wrapperClass={`mt-2`}>
        {item.description}
      </Para>
    </MealCard>
  )
};


// Meals Data
const Meals = [
  {
    description: 'Fresh and healthy breakfast meal',
    image: Breakfast,
    imageAlt: 'Breakfast meal',
  },
  {
    description: 'Fresh and healthy lunch meal',
    image: Lunch,
    imageAlt: 'Lunch Meal',
  },
  {
    description: 'Fresh and healthy dinner meal',
    image: Dinner,
    imageAlt: 'Dinner Meal',
  },
];

const TabList = styled.ul`
   min-height: 40px;
   height: 60px;
`;

// Fitness Therapy Content
const ConsultingChambers = {
  tab: "Consulting Chambers",
  image: Therapy,
  description: `
  Speak with your doctor in a private and comfortable environment. With sophisticated details such as wooden floors and lounge seating, our chambers are designed to have a calming effect. 
  `
};

const Pharmacy = {
  tab: "Pharmacy",
  image: Therapy,
  description: `
You can always find your prescribed medications at Sukoon. No more running around the town to find them. We truly are a one-stop destination for all your psychiatric and mental health needs. 

  `
};

const RTMS = {
  tab: "RTMS",
  image: Therapy,
  description: `
Receive repetitive Transcranial Magnetic Stimulation therapy in a plush room. We only work with the latest equipment to offer you an India-first world class treatment for all behavioural and emotional disorders

  `
};

const VideoConsultation = {
  tab: "Video Consultation",
  image: Therapy,
  description: `
Connect with your psychiatric, psychologist, therapist, counsellor, or doctor no matter where you are. Continue your treatment plan and receive expert psychiatric care via chat, phone calls, or video calls

  `
};

const Cafeteria = {
  tab: "Cafeteria",
  image: Therapy,
  description: `
Take advantage of any of our two fully-equipped cafeterias that serve Indian and Continental cuisines.  Indulge in some delicious snacks, or grab a cup of coffee while you wait. 

    `
};

const WaitingArea = {
  tab: "Waiting Area",
  image: Therapy,
  description: `
At Sukoon, your healing begins the moment you walk in. Get inspired by some great art, or relax in the lush-green environment. Our waiting areas will make you feel right at home!

  `
};

const ArtTherapy = {
  tab: "Art Therapy",
  image: Therapy,
  description: `
Our doctors actively advocate alternate forms of therapy for a sustain healing process. We have licensed art therapists that have developed an effective clinical program. 

  `
};

const FitnessTherapyTabs = [
  {name: 'Consulting Chambers' , content: ConsultingChambers},
  {name: 'Pharmacy', content: Pharmacy},
  {name: 'RTMS', content: RTMS},
  {name: 'Video Consultation', content: VideoConsultation},
  {name: 'Cafeteria', content: Cafeteria},
  {name: 'Waiting Area', content: WaitingArea},
  {name: 'Art Therapy', content: ArtTherapy},
];

const FitnessTherapy = (props) =>{

  const[ListContent, setContent] = useState(ConsultingChambers);

  function handleView(content){
    // Content bellow the tab is changed by the next function.
    setContent(content);
  }

  return(
    <div className="px-5 my-5 mt-20">
      <Title subHeading={`Clinical Programs`} headingClass={``} titleBold={`Fitness Therapy`}/>
      <div className="">
        <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
          <TabList className="flex overflow-x-scroll">
            {FitnessTherapyTabs.map((tab)=>{
               return(
                 <li className="mr-3 mt-3">
                   <Tab onClick={handleView} argument={[tab.content]} active={ ListContent.tab === tab.name} buttonClass={``}>
                     {tab.name}
                   </Tab>
                 </li>
               )
            })
            }
          </TabList>
        </div>
        <Description image={ListContent.image} description={ListContent.description}/>
      </div>
    </div>
  )
};

const Description = (props) =>{

  return(
    <>
    <img className="mt-3 mb-4 w-full" src={props.image} alt=""/>
    <Para>{props.description}</Para>
  </>
  )
};

function Experience(props) {

  return (
    <>
      <Banner captionLight={`Comfort with`} bannerPara={`Your health and happiness are our top priorities. We ensure this with the best doctors and nurses, world-class
        treatments, premium facilities, and modern amenities. Our center has ample natural light, lush green outdoor spaces, and
        spacious activity areas to enhance your recovery. Don’t just stay, live here!`} captionBold={`Superb care`} overlay={props.overlay} backgroundImg={BannerBg}/>
      <section className="p-4">
        <Title subHeading="Tour" titleLight="Experience " titleBold="Sukoon" />
        <div className="flex flex-wrap overflow-x-hidden overflow-y-hidden">
          <Para>At Sukoon, each residential room is thoughtfully designed to aid in your recovery. Sophisticated details such as wooden flooring and lounge seating create a residential comfort, while modern bath amenities and private balconies invite patients to relax.All our rooms are designed in accordance with the American
            Psychiatric Association(APA) standards.</Para>
        </div>
      </section>
      <section className="facilities Exp px-5 my-1">
        <Details  open  content={RoomDetailFn} arguments={Rooms.deluxeRoom}border summaryClass="border-gray-700" summaryTextClass="text-xl" summary="Deluxe Room"/>
        <Details  content={RoomDetailFn} arguments={Rooms.suiteRoom} border summaryClass="border-gray-700" summaryTextClass="text-xl" summary="Suite Room"/>
        <Details content={RoomDetailFn} arguments={Rooms.icuRoom} border summaryClass="border-gray-700" summaryTextClass="text-xl" summary="Intensive  Care Unit"/>
      </section>
      <div className="facilities Perfloor px-5 my-5">
        <span className="facilities  mb-2 block">Spacious Activity Areas</span>
        <Details open padding="0" summaryClass="border-gray-700"  summary="Resident Lounges">
          <div className="">
            <img className="mt-3 mb-4" src={FloorAct} alt=""/>
            <Para>At Sukoon, every floor has a modern resident lounge that comprises of a
              dining area, movie lounge, and board game tables. These versatile spaces are also used for art-based
              therapy, wellness classes, and group therapy.
            </Para>
          </div>
        </Details>
        <Details padding="0" summaryClass="border-gray-700"  summary="Nursing Stations">
          <div className="">
            <img className="mt-3 mb-4" src={FloorAct} alt=""/>
            <Para>At Sukoon, every floor has a dedicated nursing station that is staffed round the clock. They have all the necessary medication, equipment, and technology to handle each and every emergency situation.
            </Para>
          </div>
        </Details>
        <Details padding="0" summaryClass="border-gray-700"  summary="Fitness Studio">
          <div className="">
            <img className="mt-3 mb-4" src={FloorAct} alt=""/>
            <Para>Our physical therapist have designed effective fitness classes that help you recover both physically and mentally. Make use of a world-class fitness studio that overlooks a terrace garden.
            </Para>
          </div>
        </Details>
        <Details padding="0"  summaryClass="border-gray-700"  summary="Terrace Garden">
          <div className="">
            <img className="mt-3 mb-4" src={FloorAct} alt=""/>
            <Para>Being surrounded by nature reduces stress, and increases positive emotions. At Sukoon, you can unwind and rejuvenate  in our terrace garden that is lush-green, spacious, and secure.
            </Para>
          </div>
        </Details>
        <BookBtn border wrapperClass="float-right">
          Enquiry
        </BookBtn>
      </div>
      <HighlightSection BgImg={Highlight} className="highlightSection px-5 py-5 mt-5">
        <div className="highlight">
          <Title headingClass={``} HeadingTag={`h3`} titleLight={`One nurse for`} titleBold={`For every patient`}/>
          <Para>Our promise of holistic care is delivered via an unmatched nurse to patient ratio. At Sukoon, you and your loves ones are given individual attention for a speedy recovery</Para>
        </div>
      </HighlightSection>
      <FitnessTherapy />
      <HighlightSection BgImg={HighlightSecond} className="highlightSection second px-5 py-5 mt-5 mb-24">
        <div className="highlight">
          <Title headingClass={``} HeadingTag={`h3`} subHeading={`Patient Care`} titleLight={`Daily Doctor Consults`}/>
          <Para>Depending on your needs our psychiatrists, psychologists, counsellors, and therapists will ensure that you receive personalised medical care via daily individual attention.</Para>
        </div>
      </HighlightSection>
      <div className="">
        <div className="relative">
          <Face Img={FacOneBg} className="w-full" />
          <OverCard>
            <h2 className="text-sukoon">In Room Dining</h2>
            <Para>Indulge in some freshly prepared food whenever your heart desires. Our room service menu consists of both Indian and Continental dishes to satisfy all your cravings.</Para>
          </OverCard>
        </div>
        <div className="relative">
          <Face Img={FacOneBgSec} className="w-full" />
          <OverCard margin={`-40px 15px 40px 15px`}>
            <h2 className="text-sukoon">In Room Spa</h2>
            <Para>Our licensed massage therapists  are there to help you relax anytime in the comfort of your own room.  Chose from a variety of spa services.</Para>
          </OverCard>
        </div>
      </div>
      <section className="p-8" id="mealSection">
        <Title  headingClass={``} titleLight={`Delicious Meals`} subHeading={`Meal`} titleBold={``}/>
        <Carousel container  cardFn={CarouselItems} content={Meals}/>
      </section>
    </>
  );
}

export default Experience;
