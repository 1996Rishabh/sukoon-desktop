import React from "react";
import {Link} from "gatsby";
import styled from "styled-components";

// Components
import Header from "../../components/Header/desktop";
import BookBtn from "../../elements/BookNowBtn/desktop";
import Para from "../../elements/Para/desktop";
import SVG from "../../elements/SVG/desktop";
import Input from "../../elements/Input/desktop";
import Tooltip from "../../elements/Tooltip/tooltip";

// Images
import SukoonLogo from "../../images/sukoon-bg-logo/logo.jpg";
import Help from "../../images/helpline/helpline copy 2@3x.jpg"
import Call from "../../images/icons/phone.svg"
import Mail from "../../images/icons/mail.svg"

const LayoutContainer = styled.div`
    background-image: ${props => props.bgImage && (props.loading === 'false') ? `url(${SukoonLogo})`: ''} ;
    background-size: 51vw;
    background-repeat: no-repeat;
    background-position: bottom 16vw right -25vw;
    
    .hide{
    display: none;
    }
    
    .customer-contact-info{
    width: 30%;
    
    }
    .customer-contact-info input::placeholder{
    opacity: 1;
    }
    
    .book-now-button{
    width: 21%;
    }
    .appointment-select{
    width: 59%;
    }
`;

const HeaderIntro = () => {
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
    <section className="w-full">
      <div id="Book-appointment-footer" className="px-8 py-6 bg-sukoon flex justify-between">
        <div className="text-white text-4xl sm:text-5xl my-auto">
                    <span className="font-light mr-2">
                        Book an
                    </span>
          <span className="font-semiBold">
                        Appointment
                    </span>
        </div>
        <div className="flex appointment-select justify-end font-normal items-center w-3/6 md:w-3/5">
          <div className="mr-6 w-1/4">
            <Input type="select" value={BookingOptions} label="Appointment Type" placeholder=""/>
          </div>
          <div className="mr-4 w-2/3 customer-contact-info">
            <Input type="name" required={true} label="Email / Phone Number" defaultValue={``}/>
          </div>
          <div className="book-now-button w-1/6 sm:w-1/4">
            <BookBtn wrapperClass="h-fit float-right" theme="white" border={true}>
              Book Now
            </BookBtn>
          </div>
        </div>
      </div>
    </section>
  )
};

const ReachUs = (props) =>{
  return(
    <div className={`w-1/3 lg:w-1/4`}>
      <Para Class={`text-lg`}>
        <span className={`text-gray font-bold`}>Sukoon Health</span><br/>
        Sector-56, Gurugram <br/>
        Haryana - 122011<br/>
      </Para>

    </div>
  )
};

const FollowUs = (props) =>{
  const Instagram = styled.a`
    background: linear-gradient(to right, #f8ec35, #cf2e8d 67%, #1b31f0);
    margin: 0 1rem;
    cursor: pointer;    
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `;
  return(
    <div className="">
      <div className="mb-2 flex flex-wrap">
        <div className="text-sukoon mr-4 my-2 items-center flex pr-1">
            <SVG display="inline-block" icon="helpline" width={'20px'} fill={'#12443e'}/>
          <span className="ml-2">+91 8448170041</span>
        </div>
        <div className="text-sukoon mr-4 my-2 items-center flex pr-1">
            <SVG display="inline-block" icon="landLine" width={'20px'} fill={'#12443e'}/>
          <span className="ml-2">+91 7558640422</span>
        </div>
        <div className="text-sukoon my-2 flex items-center pr-1">
          <div className="fit"><img src={Mail} className="w-4" alt="Help Icon"/></div>
          <span className="ml-2">sukoonhealth.com</span>
        </div>
      </div>
      <h1 className="text-sukoon inline-block mr-8 font-semiBold text-lg mb-2">Follow us on</h1>
      <div className="text-lg  inline break-words">
        <a href="/" className="mx-4 text-blue-800 cursor-pointer">Facebook</a>
        {/*<a href="/" className="mx-4 text-blue-400 cursor-pointer">Twitter</a>*/}
        <Instagram href="/">Instagram</Instagram>
        {/*<a href="/" className="mx-4 text-blue-600 cursor-pointer">Skype</a>*/}
      </div>
    </div>
  )
};

const CopyRight = (props) =>{
  return(
    <div className="py-2 px-6 bg-sukoon text-center break-words">
      <span className="text-white text-xs">Copyright © 2019 - All Rights Reserved - Design By <a target="_blank" href="http://praaks.com/">Praaks Consultancy</a></span>
    </div>
  )
};

const QuickLinks = (props) =>{

  return(
    <div className="flex justify-between mr-12 w-2/5 lg:w-2/6">
      {/*<div className="">*/}
      {/*  <h3 className="text-sukoon text-2xl font-bold block">Sukoon</h3>*/}
      {/*  <ul className="mt-4 font-semiBold">*/}
      {/*    <li className="text-gray-600 text-lg my-1 list-none"><Link to="/">Sitemap</Link></li>*/}
      {/*    <li className="text-gray-600 text-lg my-1 list-none"><Link to="/">Our Story</Link></li>*/}
      {/*    <li className="text-gray-600 text-lg my-1 list-none"><Link to="/">Privacy Policy</Link></li>*/}
      {/*    <li className="text-gray-600 text-lg my-1 list-none"><Link to="/">Terms & Conditions</Link></li>*/}
      {/*    <li className="text-gray-600 text-lg my-1 list-none"><Link to="/">Careers</Link></li>*/}
      {/*  </ul>*/}
      {/*</div>*/}
      <div className="flex flex-col">
        <h3 className="text-sukoon text-2xl font-bold block">Quick Links</h3>
        <div className="w-fit font-semiBold flex">
          <ul className="mt-4 inline-block mr-8">
            <li className="text-gray-600 text-lg my-1 list-none">
              <Link to="/about">About Us</Link></li>
            <li className="text-gray-600 text-lg my-1 list-none">
              <Link to="/services">Services</Link></li>
            <li className="text-gray-600 text-lg my-1 list-none">
              <Link to="/infrastructure">Infrastructure</Link></li>
            <li className="text-gray-600 text-lg my-1 list-none">
              <Link to="/">Amenities</Link></li>
            <li className="text-gray-600 text-lg my-1 list-none">
              <Link to="/doctors">Doctors</Link></li>
          </ul>
          <ul className="mt-4 inline-block">
            <li className="text-gray-600 text-lg list-none">
              <Link to="/internationalPatient">International Patients</Link></li>
            <li className="text-gray-600 text-lg list-none">
              <Link to="/faqs">FAQs</Link></li>
            <li className="text-gray-600 text-lg list-none">
              <Link to="/">Blogs</Link></li>
            <li className="text-gray-600 text-lg list-none">
              <Link to="/contact">Contacts</Link></li>
          </ul>
        </div>
      </div>
    </div>
  )
};

const Subscribe = (props) =>{

  return(
    <div className="py-6 flex justify-between">
      <div className="my-auto text-v3xl">
        <h3 className="text-sukoon inline font-normal">Subscribe</h3>
        <h3 className="ml-2 inline-block font-bold text-sukoonYellow">Our Newsletter</h3>
      </div>
      <div className="my-auto items-center flex self-end">
        <Input type="name" green required={true} wrapperClass="mr-4 w-v30" label="Email / Phone Number" defaultValue={``}/>
        <BookBtn border>Go</BookBtn>
      </div>
    </div>
  )
};

const StickyMenu = styled.section`
  width: 100%;
  position: fixed;
  z-index: 1001;
  top: 0;
  
`;

const Nav = styled.nav`
  
  ul > li{
  margin-right: 5vw;
  }
`;

export default class DesktopLayout extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      loading: 'true',
    }

  }


  render() {
    return (
      <LayoutContainer bgImage={this.props.bgImage} loading={this.state.loading} className="flex flex-col min-h-screen sukoon-bg-1  text-gray-900">
            <Header logoHighlighter={this.props.logoHighlighter}/>
            <StickyMenu id="sticky-nav" className="hide">
              <Nav className="bg-sukoon text-white py-2 px-20 flex items-center">
                <div className="w-4/5 font-semiBold text-xl">
                  <ul className="flex">
                    <li className="">
                      <Link to="/services">Services</Link>
                    </li>
                    <li className="">
                      <Link to="/experience">Experience</Link>
                    </li>
                    <li className="">
                      <Link to="/">Doctors</Link>
                    </li>
                    <li className="">
                      <Link to="/">International Patients</Link>
                    </li>
                    <li className="">
                      <Link to="/">About</Link>
                    </li>
                  </ul>
                </div>
                <div className="w-1/5 flex justify-end items-center">
                  <div className="w-6 ml-4">
                    <Tooltip toolTipText={`+91 8448170041`}>
                      <SVG display="inline-block" icon="helpline" width={'22px'} fill={'#fff'}/>
                    </Tooltip>
                  </div>
                  <div className="w-8 h-8 mx-4">
                    <Tooltip toolTipText={`+91 7558640422`} toolTipBottomTxt={`Contact Us`}>
                      <SVG display="inline-block" icon="landLine" width={'22px'} fill={'#fff'}/>
                    </Tooltip>
                  </div>
                  <BookBtn buttonPadding="5px 10px" theme="mint"><Link to="/booking">Book Now</Link></BookBtn>
                </div>
              </Nav>
            </StickyMenu>
            <main className="flex flex-col flex-1 justify-center overflow-hidden mx-auto m-0 w-full">
              {this.props.children}
            </main>
            <footer className="">
              <HeaderIntro/>
              <div className="px-8 pt-4">
                {/*<Subscribe/>*/}
                <div className="flex">
                  <QuickLinks/>
                  <div className={`w-4/5 flex flex-col`}>
                    <h3 className="text-sukoon mb-4 font-bold">Reach Us</h3>
                    <div className="flex">
                      <ReachUs/>
                      <FollowUs/>
                    </div>
                  </div>
                </div>
              </div>
              <CopyRight/>
            </footer>
      </LayoutContainer>
    );
  }

}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired
// };

