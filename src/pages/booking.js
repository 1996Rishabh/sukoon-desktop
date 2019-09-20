import React  from "react";

// Components
import Mobile from "./Booking/mobile";
import Desktop from "./Booking/desktop";
import SEO from "../components/seo";
import Layout from "../components/view/layout";

export default class Booking extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      overlay:false,
      view:'desktop',
    }
  }
  componentDidMount() {
    if(window && window.matchMedia("(max-device-width: 760px)").matches){
      this.setState({view: 'mobile'});
    }
    else{
      this.setState({view: 'desktop'});
    }
  }

  render() {

    return(
      <Layout overlay={this.state.overlay} setOverlay={this.updateState}>
        <SEO
          title="Booking"
          keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        />
        {this.state.view === 'mobile' ?
          <Mobile/> :
          <Desktop/>
        }
      </Layout>
    )
  }
}
