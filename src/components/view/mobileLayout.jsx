import React, {useState} from "react";
import PropTypes from "prop-types";
import {Link} from "gatsby";
import styled from "styled-components";

// Components
import Para from "../../elements/Para/mobile";
import Header from "../Header/mobile";
import Banner from "../Banner/mobile";
import BookBtn from "../../elements/BookNowBtn/mobile";

// Images
import MailIcon from "../../images/icons/mail.svg";
import SVG from "../../elements/SVG/desktop";

const FooterLinks = styled.ul`
font-size: 16px !important;
`;


const QuickLinks = (props) =>{

  return(
    <section className="flex justify-between p-4">
      <div>
        <span className="text-sukoon text-2xl font-semibold block">Sukoon</span>
        <ul className="mt-2 font-medium">
          <li className="text-gray-600 text-lg list-none"><Link to="/">Sitemap</Link></li>
          <li className="text-gray-600 text-lg list-none"><Link to="/">Our Story</Link></li>
          <li className="text-gray-600 text-lg list-none"><Link to="/">Privacy Policy</Link></li>
          <li className="text-gray-600 text-lg list-none"><Link to="/">Terms & Conditions</Link></li>
          <li className="text-gray-600 text-lg list-none"><Link to="/">Careers</Link></li>
        </ul>
      </div>
      <div>
        <span className="text-sukoon text-2xl font-semibold block">Quick Links</span>
        <FooterLinks className="mt-2 font-medium">
          <li className="text-gray-600 text-lg list-none">
            <Link to="/about">About Us</Link></li>
          <li className="text-gray-600 text-lg list-none">
            <Link to="/services">Services</Link></li>
          <li className="text-gray-600 list-none">
            <Link to="/">Amenities</Link></li>
          <li className="text-gray-600 list-none">
            <Link to="/">Doctors</Link></li>
          <li className="text-gray-600 list-none">
            <Link to="/internationalPatient">International Patients</Link></li>
          <li className="text-gray-600 list-none">
            <Link to="/faqs">FAQs</Link></li>
          <li className="text-gray-600 list-none">
            <Link to="/">Blogs</Link></li>
          <li className="text-gray-600 list-none">
            <Link to="/contact">Contacts</Link></li>
        </FooterLinks>
      </div>
    </section>
  )
};

const Subscribe = (props) =>{
  return(
    <div className="p-4">
      <div className="font-medium text-xl">
        <span className="text-sukoon ">Subscribe</span>
        <span className="ml-2 text-sukoonYellow">Our Newsletter</span>
      </div>
      <div className="mt-4 flex justify-between">
        <input type="text" placeholder="Enter Your Email Address" className="outline-none w-10/12 bg-transparent"/>
        <BookBtn theme="green">Go</BookBtn>
      </div>
    </div>
  )
};

const ReachUs = (props) =>{
  return(
    <div className="p-4">
      <h2 className="text-sukoon text-4xl  font-normal font-medium">Reach Us</h2>
      <Para>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
      </Para>
      <div className="my-2 flex flex-wrap">
        <div className="text-sukoon mr-2 my-2 flex px-1">
          <SVG display="inline-block" icon="helpline" width={'20px'} fill={'#12443e'}/>
          <a href="tel: +91 8448170041" className="ml-4">+91 8448170041</a>
        </div>
        <div className="text-sukoon mr-2 my-2 flex px-1">
          <SVG display="inline-block" icon="landLine" width={'20px'} fill={'#12443e'}/>
          <a className="ml-4" href="tel:+91 7558640422">+91 7558640422</a>
        </div>
        <div className="text-sukoon mr-2 my-2 flex px-1">
          <div className="fit"><img src={MailIcon} className="w-4" alt="Help Icon"/></div>
          <span className="ml-4">sukoonhealth.com</span>
        </div>
      </div>
    </div>
  )
};

const FollowUs = (props) =>{
  const Instagram = styled.a`
    background: linear-gradient(to right, #f8ec35, #cf2e8d 67%, #1b31f0);
    margin-right: 1.5rem;
    cursor: pointer;    
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `;
  return(
    <div className="p-4 font-medium">
      <h2 className="text-sukoon text-xl mb-2">Follow us on</h2>
      <div className="text-sm mr-2 flex break-words">
        <a href="/" className="mr-4 text-blue-800 cursor-pointer">Facebook</a>
        {/*<a href="/" className="mr-2 text-blue-400 cursor-pointer">Twitter</a>*/}
        <Instagram href="/">Instagram</Instagram>
        {/*<a href="/" className="mr-2 text-blue-600 cursor-pointer">Skype</a>*/}
      </div>
    </div>
  )
};

const CopyRight = (props) =>{
  return(
    <div className="py-2 px-6 bg-sukoon text-center font-medium break-words">
      <span className="text-white text-xs">Copyright © 2019 - All Rights Reserved - Design By Praaks</span>
    </div>
  )
};


const LayoutContainer = styled.div((props)=> {

  if (props.overlay) {
    return `
            &::after{
                    content: '';
                    background: #595c62c2;
                    position: absolute;
                    top: 0;
                    z-index: 1;
                    display: block;
                    width: 100%;
                    height: 100vh;
            }
          `
  }

});

function Layout({ children, setOverlay,...props }) {

  const [isExpanded, switchMenu] = useState(false);

  const toggleMenu = (value) =>{
    switchMenu(value);
    setOverlay(value);
  };

  return (
        <LayoutContainer className={`${
          isExpanded ? `menu-open` : `flex `
          } flex-col min-h-screen text-gray-900`}
                         overlay={isExpanded}
        >
          <Header toggleMenu={toggleMenu} />
          <main className="flex flex-col flex-1 justify-center max-w-4xl mx-auto w-full">
            {children}
          </main>
          <footer className="">
            {/*----------------------Removed for time being---by-deepak---------------- */}
            {/*<Banner bookNow captionLight="Book An" captionBold="Appointment"/>*/}
            {/*<Subscribe/>*/}
            {/*<QuickLinks/>*/}
            <ReachUs/>
            <FollowUs/>
            <CopyRight/>
          </footer>
        </LayoutContainer>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
