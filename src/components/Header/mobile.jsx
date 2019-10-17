import {Link} from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Images
import Call from "../../images/icons/phone.svg";

// Components
import BookBtn from "../../elements/BookNowBtn/mobile";

const MenuLinkWrapper = styled.div`
  height: 88%;
`;

const Nav = styled.nav`
  width: 100%;
  transition: all 200ms ease-in-out;
  background: #C2DCD3;
  min-height: 50px;
  z-index: 10;
`;

const Menu = styled.span`
    
  &::before{
    top: 20px;
    left:14px;
    position: absolute;
    content: '';
    background: #12443e;
    width: 34px;
    height: 2px;
  }
  
  &::after{
    left: 14px;
    top: 26px;
    position: absolute;
    content: '';
    background: #12443e;
    width: 34px;
    height: 2px;
  }
`;

function Header(props) {
  const [isExpanded, toggleExpansion] = useState(false);

  // Makes nav bar sticky after user scrolls past banner section.
  const handleScroll = () =>{

    let Header = document.getElementById('header-intro-mobile');
    let Booking = document.getElementById('nav-booking-button');
    let offset =  Math.abs(Number(Header.getBoundingClientRect().top));
    // Logic
    // Book button to be shown whene the banner has been scrolled out of the view.

    if(offset > 786 || offset > 666 || offset > 556){
      Booking.classList.add('show');
      Booking.classList.remove('hide');
    }
    else{
      Booking.classList.add('hide');
      Booking.classList.remove('show');
    }

  };

  // Scroll handle function
  function NoScroll (scroll){
    let body = document.body;
    // To activate page scroll on page click
    body.style.overflow = scroll ? '' : 'hidden';
  }

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  });

  return (
    <Nav id="nav-bar" className="fixed bottom-0">

      <div
        className={`${
          isExpanded ? `` : `hidden`
          } items-center justify-between w-full bg-menuBg`}
      >
        <MenuLinkWrapper className="flex flex-col">
          <div className="mt-6 flex justify-around">
            <div className="">
              <img src={Call} className="w-4 inline-block" alt="Contact Sukoon"/>
              <a href="tel:+91 8448170041" className="ml-2">+91 8448170041</a>
            </div>
            <div className="">
              <img src={Call} className="w-4 inline-block" alt="Contact Sukoon"/>
              <a href="tel:+91 7558640422" className="ml-2">+91 7558640422</a>
            </div>
          </div>
          <div className="text-lg ml-6 text-sukoon flex flex-col">
            <Link
              to="/"
              className="inline-block mt-4 mt-0 mr-6 no-underline"
              onClick={()=>{NoScroll(true)}}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="inline-block mt-4 mt-0 mr-6 no-underline" onClick={()=>{NoScroll(true)}}
            >
              Services
            </Link>
            <Link
              to="/experience"
              className="inline-block mt-4 mt-0 mr-6 no-underline"
              onClick={()=>{NoScroll(true)}}
            >
              Experience
            </Link>
            <Link
              to="/"
              className="inline-block mt-4 mt-0 mr-6 no-underline"
              onClick={()=>{NoScroll(true)}}
            >
              Doctors
            </Link>
            <Link
              to="/internationalPatient"
              className="inline-block mt-4 mt-0 mr-6 no-underline"
              onClick={()=>{NoScroll(true)}}
            >
              International Patients
            </Link>
            <Link
              to="/faqs"
              className="inline-block mt-4 mt-0 mr-6 no-underline"
              onClick={()=>{NoScroll(true)}}
            >
              FAQS
            </Link>
            <Link
              to="/"
              className="inline-block mt-4 mt-0 mr-6 no-underline"
              onClick={()=>{NoScroll(true)}}
            >
              Blogs
            </Link>
            <Link
              to="/contact"
              className="inline-block mt-4 mt-0 mr-6 no-underline"
              onClick={()=>{NoScroll(true)}}
            >
              Contact
            </Link>
          </div>
        </MenuLinkWrapper>
      </div>
      <div className={`${
        isExpanded ? `` : ``
        } flex flex-wrap items-center justify-between mx-auto p-2`}
      >
        <div className="">
          <BookBtn theme="green" id="nav-booking-button" wrapperClass="hide mr-2" full>
            Book Appointment
          </BookBtn>
        </div>
        <div className="flex justify-between py-2">
          <button
            className="block relative focus:outline-none flex items-center px-3 pb-2 rounded text-sukoon"
            onClick={() => {
              toggleExpansion(!isExpanded);
              props.toggleMenu(!isExpanded);
              let body = document.body;
              // To prevent page scrolling when menu is open.
              body.style.overflow = isExpanded ? '' : 'hidden';
            }
            }>
            <Menu id="menu-hamburger-icon" className="text-xs font-bold">
              <span>MENU</span>
            </Menu>
          </button>
        </div>
      </div>
    </Nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
