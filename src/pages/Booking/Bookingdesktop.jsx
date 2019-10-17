import  React,{useState}  from "react";
import styled from "styled-components";
import 'react-day-picker/lib/style.css';

//  Components
import Radio from "../../elements/RadioButton/desktop";
import BookingBtn from "../../elements/BookNowBtn/desktop";
import Input from "../../elements/Input/desktop";
import Date from "../../elements/datePicker/datePicker";

// Images
import BookingBg from "../../images/bookingBg.png";
import SukoonLogo from "../../images/logo_light.svg";
import Calender from "../../images/cal.svg";
import DocImg from "../../images/doctor/doctor1.jpg";

const Form = styled.form`
  margin: 40px 10vw 0 10vw;
  
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

const HomeLink = styled.div`
     top: 0;
     left: 0;
`;

const TimerWrapper = styled.div`
    margin-right: 2rem;
    /* border-radius: 5px; */
    padding: 5px 10px;
    /* text-align:center; */
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

const BookLogo = styled.img`
    margin: 0 auto;
    padding-top: 25px;
    max-width: 80px;
    display:block;
`;

const MainSec = styled.div`
    display: flex;
    flex-flow: column;
    height: 100%;
    justify-content:space-evenly;
    align-items:center;
    padding:0% 8%;
`;

const DoctorListing = styled.div`

ul {
  display:flex;
  flex-flow:wrap;
  max-height: 35vw;
  overflow-x: hidden;
  overflow-y: auto;
}
ul li {
  width:20%;
}
.DocCard {
  margin:0px 15px 25px 0;
}
.DocCard img {
  width:100%;
  height:160px;
  object-fit:cover;
}
.DocCard p {
    width: 100%;
    display: block;
    padding: 6px;
    font-size: 16px;
    background: #12443E;
    color: #fff;
    text-align: center;
}

`;

const DocSlotImg = styled.img`

max-width:100%;
max-height: 225px;
    object-fit: cover;

`;

const DateSlot = styled.ul`
  display: flex;
  justify-content:space-between;
`;

const TimeSlot = styled.div`
    display: flex;
    overflow-x: hidden;
    overflow-y: auto;
    flex-flow: wrap;
    margin-top:25px;
    margin-bottom:25px;
    height:fit-content;

.slot{
  width:25%;
  height:fit-content;
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

// Function to change the view after submit button.
function handleSubmit (stateName, value, updateState) {
  updateState(stateName, value);
};

// add_material UI date picker
const DatePicker = (props) =>{

  return (
    <MainSec className="">
      <div>
      <BookLogo  src={`${SukoonLogo}`} alt=""/>
      <p className="font-accanthisRegular text-white text-base mt-2">Sukoon</p>
      </div>
      <div className="py-5 text-center text-white relative">
        <Date/>
      </div>
      <BookingBtn wrapperClass="self-end mt-32 mr-64" buttonClass={''} theme="mint" padding="8px"  clickFn={handleSubmit} buttonArguments={['view', 'Doctor List', props.updateState]}>Submit</BookingBtn>
    </MainSec>
  )

};

const Doclist = (props) =>{

  return (
    <MainSec className="">
      <h2 className="pt-16 pb-4 text-white text-2xl w-full font-bold">Choose An Expert</h2>
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
      <div className="w-full justify-end flex">
      <BookingBtn wrapperClass="" buttonClass={''} theme="mint" padding="8px" clickFn={handleSubmit} buttonArguments={['view', 'Doctor Slots', props.updateState]}>Submit</BookingBtn>
      </div>
    </MainSec>
  )

};

const DocBookSlot = (props) =>{

  const[activeCategory, setCategory] = useState('category1');
  const setView = (view ) =>{
    setCategory(view);
  };

return (

  <MainSec className="">
      <div className="SetDocSlot pt-8 w-full">
        <div className="w-full flex flex-wrap">
          <div className="w-1/4">
          <DocSlotImg src={`${DocImg}`} alt="" />
          </div>
          <div className="w-3/4 pl-5">
          <p>
            <h2 className="text-2xl text-white leading-tight font-semibold">Dr. Samir Parikh</h2>
            <h5 className="text-sm text-white font-medium">MBBS, DPM, MD (Psychiatry)</h5>
            <span className="text-xs text-white font-regular mt-2 leading-tight block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </span>
            <div className="w-full mt-8 overflow-y-hidden">
            <DateSlot className="">  
              <BookingBtn buttonText={`#fff`} buttonClass="text-sm leading-tight text-white" buttonPadding="5px 10px" wrapperPadding={activeCategory !== 'category1' ? '': '2px'} theme="white" transparent={activeCategory !== 'category1'} buttonArguments={['category1']} clickFn={setView}>Tuesday<br/>17</BookingBtn>
              <BookingBtn buttonText={`#fff`} buttonClass="text-sm leading-tight text-white" buttonPadding="5px 10px" wrapperPadding={activeCategory !== 'category2' ? '': '2px'} theme="white" transparent={activeCategory !== 'category2'} buttonArguments={['category2']} clickFn={setView}>Wednesday<br/>18</BookingBtn>
              <BookingBtn buttonText={`#fff`} buttonClass="text-sm leading-tight text-white" buttonPadding="5px 10px" wrapperPadding={activeCategory !== 'category3' ? '': '2px'} theme="white" transparent={activeCategory !== 'category3'} buttonArguments={['category3']} clickFn={setView}>Thursday<br/>19</BookingBtn>
              <BookingBtn buttonText={`#fff`} buttonClass="text-sm leading-tight text-white" buttonPadding="5px 10px" wrapperPadding={activeCategory !== 'category4' ? '': '2px'} theme="white" transparent={activeCategory !== 'category4'} buttonArguments={['category4']} clickFn={setView}>Friday<br/>20</BookingBtn>
              <BookingBtn buttonText={`#fff`} buttonClass="text-sm leading-tight text-white" buttonPadding="5px 10px" wrapperPadding={activeCategory !== 'category5' ? '': '2px'} theme="white" transparent={activeCategory !== 'category5'} buttonArguments={['category5']} clickFn={setView}>Saturday<br/>21</BookingBtn>
              <BookingBtn buttonText={`#fff`} buttonClass="text-sm leading-tight text-white" buttonPadding="5px 10px" wrapperPadding={activeCategory !== 'category6' ? '': '2px'} theme="white" transparent={activeCategory !== 'category6'} buttonArguments={['category6']} clickFn={setView}>Sunday<br/>22</BookingBtn>
              <BookingBtn buttonText={`#fff`} buttonClass="text-sm leading-tight text-white" buttonPadding="5px 10px" wrapperPadding={activeCategory !== 'category7' ? '': '2px'} theme="white" transparent={activeCategory !== 'category7'} buttonArguments={['category7']} clickFn={setView}>Monday<br/>23</BookingBtn>
            </DateSlot>
          </div>
          <div className="w-full flex mt-6 text-white">
            <h4 className="mr-5">Schedule My Booking For ? </h4>
            <Input type="select" />
          </div>
          </p>
          </div>
          <TimeSlot className="w-full">
            <div className="flex my-5">
            <div className="SlotTiming w-1/4 text-white text-right pr-12">Morning</div>
            <div className="w-3/4 flex flex-wrap h-fit">
              <div className="slot h-fit">
                <TimerWrapper className="flex  items-center bg-white">
                  <span className="font-light block text-center w-full text-sukoon block text-center w-full">03:00 To 03:15PM</span>
                </TimerWrapper>
              </div>
              <div className="slot h-fit">
                <TimerWrapper className="flex  items-center ">
                  <span className="font-light block text-center w-full">03:00 To 03:15PM</span>
                </TimerWrapper>
              </div>
              <div className="slot h-fit">
                <TimerWrapper className="flex  items-center ">
                  <span className="font-light block text-center w-full">03:00 To 03:15PM</span>
                </TimerWrapper>
              </div>
              <div className="slot h-fit">
                <TimerWrapper className="flex  items-center ">
                  <span className="font-light block text-center w-full">03:00 To 03:15PM</span>
                </TimerWrapper>
              </div>
              <div className="slot h-fit">
                <TimerWrapper className="flex  items-center ">
                  <span className="font-light block text-center w-full">03:00 To 03:15PM</span>
                </TimerWrapper>
              </div>
              <div className="slot h-fit">
                <TimerWrapper className="flex  items-center ">
                  <span className="font-light block text-center w-full">03:00 To 03:15PM</span>
                </TimerWrapper>
              </div>
            </div>
            </div>
          </TimeSlot>
        </div>
      </div>
      <div className="flex justify-end w-full">
      <BookingBtn wrapperClass="" buttonClass={''} theme="mint" padding="8px" clickFn={handleSubmit} buttonArguments={['view', 'Patient Info', props.updateState]}>Book Now</BookingBtn>
      </div>
    </MainSec>

  )

};

const PatientForm = (props) =>{

const handleRadioButton = () => {
  return null;
};


return (

  <div className="h-full flex p-5">
    <Form action="" className="text-white m-0 w-full">
        <h2 className="text-white font-Bold text-4xl">Patient Details</h2>
        <div className="overflow-hidden">
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
        <div className="flex w-full justify-end mt-12">
        <BookingBtn wrapperClass="" buttonClass={''} theme="mint" padding="8px" clickFn={handleSubmit} buttonArguments={['view', 'thank you', props.updateState]}>Pay Now</BookingBtn>
        </div>
      </Form>
  </div>

)

};

const ThankYou = (props) =>{

  return(
    <ThankSec className="p-5 h-full items-center">
      <div className="w-full">
        <h2 className="text-white text-6xl font-bold text-center">Thank You</h2>
        <h4 className="text-white text-base text-center">Your video appointment is on
        <span className={`font-bold text-sukoonYellow`}> 24th March, 2019</span><br/>
        With Dr. Samir Parikh
        From <span className={`font-bold text-sukoonYellow`}>9:00 - 9:15 AM</span></h4>
      </div>
      <div className="w-full mt-16">
        <p className="text-white text-sm text-center">Your appointment details have also been sent
        via your preferred communication
        (SMS or Email).<br />Find out more about <a className="text-blue-500">our online
        consultation process here.</a></p>
      </div>
      <div className="w-full mt-10">
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

  handleDate = (selectedDay) => {
    if(selectedDay !== 'undefined' && selectedDay){
      this.setState({selectedDate: selectedDay});
      this.setState({view: 'Time'})
    }
    else{
      this.setState({view: ''});
    }
  };

  render(){

    return(
      <BookingWrapper className="relative">
        <HomeLink className="text-gray-250 absolute mt-12  ml-8">
        </HomeLink>
           <BookingFields key={this.state.bookingFieldKey}>
           {this.state.view === 'Date'? <DatePicker updateState={this.updateState}/>
             :this.state.view === 'Doctor List' ? <Doclist date={this.state.selectedDate} updateState={this.updateState}/>
               :this.state.view === 'Doctor Slots' ? <DocBookSlot date={this.state.selectedDate} updateState={this.updateState}/>
                 :this.state.view === 'Patient Info' ? <PatientForm date={this.state.selectedDate} time={this.state.time} updateState={this.updateState}/>
                   :this.state.view === 'thank you' ? <ThankYou date={this.state.selectedDate} time={this.state.time} updateState={this.updateState}/>
                     : null}
        </BookingFields>
      </BookingWrapper>
    )
  }

}






