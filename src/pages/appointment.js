import React  from "react";

// Components
import Mobile from "./Appointment/AppointmentMobile";
import Desktop from "./Appointment/AppointmentDesktop";
import SEO from "../components/seo";
import Loader from "../components/loader";

export default class IndexPage extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      overlay:false,
      view:'',
      loading: true,
    }
  }

  // Function to update state.
  updateState = (stateName, value) => {
    this.setState({[stateName] : value});
  };
  componentDidMount() {
    if(window && window.matchMedia("(max-device-width: 760px)").matches){
      this.setState({view: 'mobile', loading: false});
    }
    else{
      this.setState({view: 'desktop', loading: false});
    }
  }

  render() {

    if(this.state.loading !== 'undefined' && this.state.loading){
      return (
        <div className={`flex`}>
          <Loader/>
        </div>
      )

    }
    else {
      return(
        <>
          <SEO
            title="Appointment"
            keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
          />

          {
            this.state.view === 'mobile' ?
              <Mobile/> :
              <Desktop/>
          }
        </>
      )
    }
  }
}