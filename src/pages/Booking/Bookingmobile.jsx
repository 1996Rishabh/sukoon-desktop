import  React  from "react";
import styled from "styled-components";
import 'react-day-picker/lib/style.css';


//  Components
import Radio from "../../elements/RadioButton/mobile";
import BookingBtn from "../../elements/BookNowBtn/mobile";
import Input from "../../elements/Input/desktop";
import Date from "../../elements/datePicker/datePicker";

// Images
import BookingBg from "../../images/bookingBg.png";
import DocImg from "../../images/doctor/doc_mobile.png";
import SukoonLogo from "../../images/logo_light.svg";
import Calender from "../../images/cal.svg";


const Form = styled.form`
  
  input, select{
  padding-bottom: 10px;
  font-size: 18px;
  background: transparent;
  outline: none;
  }
  
  select{
  padding: 0 1.5vw;
  }
  
  input::placeholder{
    opacity: 1;
  }
  select{
  margin: 0 10px;
  border-bottom: 1px solid white;
  padding-bottom: 5px;
  text-align: left;
  }
  select option{
  background-color: transparent;
  }
 
`;

const TimerWrapper = styled.div`
    margin-right: 2rem;
    border-radius: 0px;
    padding: 8px 6px;
`;

const BookingFields = (props) =>{
  return(
    <div>
      {props.children}
    </div>
  );
};

const BookingWrapper = styled.section`
  background-image: url(${BookingBg});
  height: 100vh;
  background-size:cover;
  overflow-y: scroll;
  .BookingInput{
    position: relative;
  }
    
  .BookingInput input{
    padding: 10px;
    border-radius: 5px;
    width: 15vw;
  }
  
  .BookingInput::after{
    content: '';
    width: 30px;
    height: 35px;
    position: absolute;
    top: 5px;
    right: 10px;
    background-image: url(${Calender});
    background-repeat: no-repeat;
  }
`;

// Date Picker style
const BookLogo = styled.img`
    margin: 0 auto;
    padding-top: 25px;
    max-width: 80px;
    display:block;
`;

// Wrapper component
const Main = styled.div`
    display: flex;
    flex-flow: column;
    height: 100vh;
    justify-content:space-between;
    align-items:center;
    
    & .date-submit-button{
      
    }
    
    & #mui-pickers-date{
      color: #ffffff;
    }
    &  .MuiIconButton-label{
      color: white;
    }
    & .MuiInput-underline:before{
    border-color: rgba(255,255,255,0.42);
    }
`;

// Doctor selection listing component
const DoctorListing = styled.div`

ul {
  display:flex;
  flex-flow:wrap;
  max-height: 74vh;
  overflow-x: hidden;
  overflow-y: auto;
}
ul li {
  width:50%;
}
.DocCard {
  margin:0px 15px 25px 15px
}
.DocCard img {
  width:100%;
}
.DocCard p {
    width: 100%;
    display: block;
    padding: 6px;
    font-size: 13px;
    background: #12443E;
    color: #fff;
    text-align: center;
}

`;

const DocSlotImg = styled.img`

display:block;
object-fit:cover;

`;

const DateSlot = styled.ul`
  display: flex;
    width: 480px;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 5px;
  li{
    width: 44px;
    height: 40px;
    background: white;
    padding: 5px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    line-height: 1.3;
    margin-right:20px;
  }
  li:last-child{
    margin-right:0px;
  }
  li::after{
    content: '';
    display: block;
    width: 52px;
    height: 48px;
    background: none;
    border: 1px solid #fff;
    top: -4px;
    position: absolute;
    left: -4px;
  }

`;

const TimeSlot = styled.div`

    display: flex;
    max-height: 300px;
    overflow-x: hidden;
    overflow-y: scroll;
    flex-flow: wrap;
    margin-top:25px;

.slot{
  width:50%;
}
.slot div {
  margin:5px;
    border: 1px solid #fff;
    color: #fff;
}

`;

const ThankSec = styled.div`

display:flex;
flex-flow:column;
justify-content:center;

`;

const FormDesign = styled.div`
 
 .FormSec {
  display:flex;
  flex-flow:column;
  justify-content:space-between;
}

`;


// Function to change the view after submit button.
function handleSubmit (stateName, value, updateState) {
  updateState(stateName, value);
};

// Date selection component
function DatePicker (props) {

  return (
    <Main className="">
      <div className='flex flex-col'>
        <div>
          <BookLogo  src={`${SukoonLogo}`} alt=""/>
          <p className="font-accanthisRegular text-center text-white text-base mt-2">Sukoon</p>
        </div>
        <div className="mt-20">
          <Date/>
        </div>
      </div>
      <BookingBtn wrapperClass="w-full" buttonClass={'w-full date-submit-button'} handleClick={handleSubmit} buttonArguments={['view', 'Doctor List', props.updateState]}  theme="mint" padding="12px">Submit</BookingBtn>
    </Main>
  )
};

const DocList = (props) =>{

  return (
    <Main className="">
      <h3 className="pt-5 text-white w-full pl-5">Choose An Expert</h3>
      <DoctorListing className="">
        <ul>
          <li>
            <div className="DocCard">
              <img src={`${DocImg}`} alt="" />
              <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
              <img src={`${DocImg}`} alt="" />
              <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
              <img src={`${DocImg}`} alt="" />
              <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
              <img src={`${DocImg}`} alt="" />
              <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
              <img src={`${DocImg}`} alt="" />
              <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
              <img src={`${DocImg}`} alt="" />
              <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
              <img src={`${DocImg}`} alt="" />
              <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
              <img src={`${DocImg}`} alt="" />
              <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
              <img src={`${DocImg}`} alt="" />
              <p>Dr. Samir Parikh</p>
            </div>
          </li>
          <li>
            <div className="DocCard">
              <img src={`${DocImg}`} alt="" />
              <p>Dr. Samir Parikh</p>
            </div>
          </li>
        </ul>
      </DoctorListing>
      <BookingBtn wrapperClass="w-full" buttonClass={'w-full'}  handleClick={handleSubmit} buttonArguments={['view', 'Doctor Slots', props.updateState]} theme="mint" padding="8px">
       Submit
      </BookingBtn>
    </Main>
  )
};

const DocBookSlot = (props) =>{

  return (
    <Main className="">
      <div className="SetDocSlot w-full p-3">
        <div className="w-full flex flex-wrap">
          <DocSlotImg className="w-4/12" src={`${DocImg}`} alt="" />
          <p className="w-8/12 pl-5">
            <h2 className="text-2xl text-white leading-tight font-semibold">Dr. Samir Parikh</h2>
            <h5 className="text-sm text-white font-medium">MBBS, DPM, MD (Psychiatry)</h5>
            <span className="text-xs text-white font-regular mt-2 leading-tight block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
          </p>
          <div className="w-full flex my-6 text-white justify-between">
            <h4>Schedule My Booking For ? </h4>
            <Input type="select" />
          </div>
          <div className="w-full overflow-x-auto overflow-y-hidden">
            <DateSlot className="">
              <li className="text-xs">Tue<br/>17</li>
              <li className="text-xs">Tue<br/>17</li>
              <li className="text-xs">Tue<br/>17</li>
              <li className="text-xs">Tue<br/>17</li>
              <li className="text-xs">Tue<br/>17</li>
              <li className="text-xs">Tue<br/>17</li>
              <li className="text-xs">Tue<br/>17</li>
            </DateSlot>
          </div>
          
        </div>
        <TimeSlot className="w-full">
            <div className="slot">
              <TimerWrapper className="flex items-center bg-white">
                 <span className="font-light block text-center w-full text-sukoon block text-center w-full text-sm">03:00 To 03:15PM</span>
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center ">
                 <span className="font-light block text-center w-full text-sukoon block text-center w-full text-sm">03:00 To 03:15PM</span>
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center ">
                 <span className="font-light block text-center w-full text-sukoon block text-center w-full text-sm">03:00 To 03:15PM</span>
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center ">
                 <span className="font-light block text-center w-full text-sukoon block text-center w-full text-sm">03:00 To 03:15PM</span>
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center ">
                 <span className="font-light block text-center w-full text-sukoon block text-center w-full text-sm">03:00 To 03:15PM</span>
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center ">
                 <span className="font-light block text-center w-full text-sukoon block text-center w-full text-sm">03:00 To 03:15PM</span>
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center ">
                 <span className="font-light block text-center w-full text-sukoon block text-center w-full text-sm">03:00 To 03:15PM</span>
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center ">
                 <span className="font-light block text-center w-full text-sukoon block text-center w-full text-sm">03:00 To 03:15PM</span>
              </TimerWrapper>
            </div>
            <div className="slot">
              <TimerWrapper className="flex items-center ">
                 <span className="font-light block text-center w-full text-sukoon block text-center w-full text-sm">03:00 To 03:15PM</span>
              </TimerWrapper>
            </div>
          </TimeSlot>

      </div>
      <BookingBtn wrapperClass="w-full" buttonClass={'w-full'} handleClick={handleSubmit} buttonArguments={['view', 'Patient Info', props.updateState]} theme="mint" padding="8px">Book Now</BookingBtn>
    </Main>

  )

};

const PatientForm = (props) =>{

  const handleRadioButton = () => {
    return null;
  };

  return (
    <FormDesign className="h-screen flex p-0">
      <Form action="" className="FormSec text-white m-0 w-full">        
        <div className="overflow-hidden p-5">
        <h2 className="text-white font-Bold text-4xl">Patient Details</h2>
          <div id="left-information" className="">
            <Input type="name" required={true} defaultValue={``} wrapperClass="my-2 w-full " label="First Name"/>
            <Input type="name" required={true} defaultValue={``} wrapperClass="my-2 w-full " label="Last Name"/>
            <div className="my-2">
              <span>Sex :</span>
              <Radio display="inline-block" handleButton={handleRadioButton} arguments={['M']} spanClass="text-white mx-4" spanText="Male"/>
              <Radio display="inline-block" handleButton={handleRadioButton} spanClass="text-white mx-4" arguments={['F']} spanText="Female"/>
            </div>
          </div>
          <div id="right-information" className="justify-between">
            <div className="flex my-2 items-center">
              <span className="mr-2 self-end">DOB :</span>
              <Input type="select" wrapperClass="inline-block" label="Year" placeholder=""/>
              <Input type="select" wrapperClass="inline-block mr-2" label="Month" placeholder=""/>
              <Input type="select" wrapperClass="inline-block" label="Day" placeholder=""/>
            </div>
            <Input type="name" required={true} defaultValue={``} wrapperClass="w-full " label="Email"/>
            <Input type="name" required={true} wrapperClass="w-full" label="Phone Number" defaultValue={``}/>
          </div>
        </div>
        <BookingBtn wrapperClass="w-full" buttonClass={'w-full'} handleClick={handleSubmit} buttonArguments={['view', 'thank you', props.updateState]} theme="mint" padding="8px">Pay Now</BookingBtn>
      </Form>
    </FormDesign>

  )

};

const ThankYou = () =>{

  return(
    <ThankSec className="p-5 h-screen items-center">
      <div className="w-full">
        <h2 className="text-white text-5xl font-bold text-center">Thank You</h2>
        <h4 className="text-white text-base text-center leading-normal">Your video appointment is on
        <span className={`font-bold text-sukoonYellow`}> 24th March, 2019</span><br/>
        With Dr. Samir Parikh
        <br />From <span className={`font-bold text-sukoonYellow`}>9:00 - 9:15 AM</span></h4>
      </div>
      <div className="w-full mt-10">
        <p className="text-white text-sm text-center">Your appointment details have also been sent
        via your preferred communication
        (SMS or Email).<br />Find out more about <a className="text-blue-500">our online
        consultation process here.</a></p>
      </div>
      <div className="w-full mt-6">
        <p className="text-white text-sm text-center">Kindly reach us at <a className="text-blue-500">9910911092 </a>in case of any queries.</p>
      </div>
    </ThankSec>
  )

};


// Main component
export default class BookingPage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      view: 'Date',
      selectedDate: '',
      bookingFieldKey: Math.random(),
      time: '',
    };
  }

  //   function to State update.
  updateState = (stateName, value) =>{
    this.setState({[stateName]: value});
  };

  render(){

    return(
      <BookingWrapper className="relative">
        <BookingFields key={this.state.bookingFieldKey}>
          {this.state.view === 'Date'? <DatePicker updateState={this.updateState}/>
            :this.state.view === 'Doctor List' ? <DocList date={this.state.selectedDate} updateState={this.updateState}/>
              :this.state.view === 'Doctor Slots' ? <DocBookSlot date={this.state.selectedDate} updateState={this.updateState}/>
              :this.state.view === 'Patient Info' ? <PatientForm date={this.state.selectedDate} time={this.state.time} updateState={this.updateState}/>
                :this.state.view === 'thank you' ? <ThankYou date={this.state.selectedDate} time={this.state.time} updateState={this.updateState}/>
                : null}
        </BookingFields>
      </BookingWrapper>
    )
  }

}






