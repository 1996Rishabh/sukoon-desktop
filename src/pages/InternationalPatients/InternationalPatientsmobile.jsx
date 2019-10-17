import React, {useState} from "react";
import styled from "styled-components";

// Components
import Title from "../../elements/Heading/mobile";
import Para from "../../elements/Para/mobile";
import Banner from "../../components/Banner/mobile";
import MeetExperts from "../../components/MeetExperts/mobile";
import BookBtn from "../../elements/BookNowBtn/mobile";

// Images
import HeaderBg from "../../images/mobile_header.jpg";
import VirtualFormBg from "../../images/internationalpatient/form_bg.png";
import PartnerHotel from "../../images/internationalpatient/partner_hotel.png";
import SukoonBullets from "../../images/internationalpatient/sukoon_bullet.svg";
import Input from "../../elements/Input/desktop";

const Caption = (props) => {
  return (
    <div className="mt-6 ">
      <h2 className="text-sukoon text-lg font-normal font-bold block">
        {props.subHeading || ''}
      </h2>
      <Para className="text-right py-2">
        {props.para || ''}
      </Para>
    </div>

  )
};

const MainForm = styled.div`
   background-image: url(${VirtualFormBg});
   background-position: center center;
   background-size:cover;
   background-repeat:no-repeat;
`;
const PartnerHotelContent = styled.div`
    position:relative;
    background:white;
    margin-top:-65px;
    z-index:1;
`;



const Intro = (props) => {
  return (
    <section id="why-sukoon" className="why-sukoon p-4">
      <Title singleLine titleLight="Plan a" titleBold=" Trip" />
      <Caption subHeading="Caption 1"
               para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
      <Caption subHeading="Caption 2"
               para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
      <Caption subHeading="Caption 3"
               para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"/>
    </section>
  )
};

function InternationalPatient(props) {

  const BookingOptions = [
    {
      value: "Video Appointment",
      label: "Video Appointment"
    },
    {
      value: "In Person Appointment",
      label: "In Person Appointment"
    }
  ];

  return (
    <>
      <Banner
        captionLight={`Feel like`}
        captionBold={`Yourself Again`}
        overlay={props.overlay}
        bookNow
        contact
        discover
        backgroundImg={HeaderBg}
      />
      <Intro />
      <form className="VirtualConsForm p-4">
        <div className="FormHead border-b border-yellow-500 bg-sukoon px-4 py-2">
          <h2 className="text-white text-lg">Free Virtual Consultation</h2>
        </div>
        <MainForm className="p-4 text-white">
          <Input type="name" required={true} defaultValue={``} wrapperClass="my-2 mr-2" label="Patient Name"/>
          <Input type="name" required={true} defaultValue={``} wrapperClass="my-2 mr-2" label="Age"/>
          <Input type="name" required={true} defaultValue={``} wrapperClass="w-full " label="Email"/>
          <Input type="name" required={true} defaultValue={``} wrapperClass="w-full " label="Contact Number"/>
          <Input type="select" wrapperClass="inline-block w-full" label="Enter your query" value={BookingOptions} placeholder=""/>
          <Input type="name" required={true} defaultValue={``} wrapperClass="my-2 mr-2" label="Upload Doc"/>
          <Input type="name" required={true} defaultValue={``} wrapperClass="my-2 mr-2" label="Upload Medical Records.."/>
          <Input type="name" defaultValue={``} wrapperClass="w-full" label="Comments" textarea/>
          <BookBtn theme="green" wrapperClass={`mt-6`}>Get An Estimate</BookBtn>
        </MainForm>
        <Para wrapperClass={`small`}>
          Disclaimer :
        </Para>
      </form>
      <section className="p-4" id="InternationalPatientInfo">
        <Title titleLight={`Facilities for`} titleBold={`International Patient`} display="inline-block"/>
        <Para width="100%" wrapperClass={`mt-2`}>
          Sukoon's International Team will compassionately ensure that you and
          your loved ones medical journey is smooth, hassle free, and
          comfortable. We will hand hold you at every step to provide a
          world-class experience.
        </Para>
        <ul>
          <li className="text-para font-gilroyMedium text-base mt-3">
            1. Providing detailed medical opinion and video- consultation with
            our team of doctors before arrival
          </li>
          <li className="text-para font-gilroyMedium text-base mt-1">
            2. Assistance with Visa Services
          </li>
          <li className="text-para font-gilroyMedium text-base mt-1">
            3. A dedicated relationship manager is assigned to each patient to
            take care of all you needs inside the hospital and to assist you
            with hospital administrative processes
          </li>
          <li className="text-para font-gilroyMedium text-base mt-1">
            4. International Concierge Desk at dedicated International lounge
            will help to arrange for a hotel/ guest house as per your
            preference.
          </li>
          <li className="text-para font-gilr<dioyMedium text-base mt-1">
            5. Complimentary two way airport transfers
          </li>
          <li className="text-para font-gilroyMedium text-base mt-1">
            6. Dedicated Relationship manager to take care of all you needs
            inside the hospital.
          </li>
          <li className="text-para font-gilroyMedium text-base mt-1">
            7. Payments can be done either via cash, credit card or Wire
            Transfer.
          </li>
          <li className="text-para font-gilroyMedium text-base mt-1">
            8. International Concierge Desk available at the hospital will
            facilitate travel within the city as well as for local sight-seeing
          </li>
          <li className="text-para font-gilroyMedium text-base mt-1">
            9. Interpreters available at the hospital
          </li>
        </ul>
      </section>
      <section className="partnerhotelinfo py-6" id="">
        <div className="mb-6">
          <img src={PartnerHotel} />
          <PartnerHotelContent className="mx-5 p-5 shadow-lg">
            <Title subHeading={`Patient Care`} titleLight={`Partners Hotels`} wrapperClass={`text-sm`} titleBold={`Guest Houses`} display="inline-block"/>
            <Para width="100%">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Assumenda cum dicta facilis, iure mollitia numquam quae quis
              tenetur voluptate voluptatibus! Distinctio minima non pariatur.
            </Para>
          </PartnerHotelContent>
        </div>
      </section>
      <section className="Stats pt-0">
        <div className="Steps p-5 bg-paleMintLight">
          <h2 className="text-sukoon font-semibold text-3xl">Process</h2>
          <ul className="mt-2">
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} />
              General Enquiry
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} />
              Medical opinion by psychiatrist
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              Visa assistance
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Lorem
              Booking, Arrival
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} />
              Consultation with doctors
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Treatment
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} />Sight seeing if medically allowed
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} />
              Follow-up via video appointments
            </li>
          </ul>
        </div>
        <div className="Steps p-5 bg-paleMint">
          <h2 className="text-sukoon font-semibold text-3xl">Checklist</h2>
          <ul className="mt-2">
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} />
              Quotation provided by Sukoon
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} />
              Treatment plan provided by Sukoon
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} />
              Photographs (passport size)
            </li>
          </ul>
        </div>
        <div className="Steps p-5 bg-paleMintDark">
          <h2 className="text-sukoon font-gilroyBold text-3xl">
            Document Needed
          </h2>
          <ul className="mt-2">
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Old Medical Reports
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} /> Visa
            </li>
            <li className="flex">
              <img width="12px" className="mr-2" src={SukoonBullets} />Passport
            </li>
          </ul>
        </div>
      </section>
      <MeetExperts />
    </>
  );
}

export default InternationalPatient;

