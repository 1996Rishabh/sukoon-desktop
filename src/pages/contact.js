import React  from "react";

// Components
import Mobile from "./Contact/Contactmobile";
import Desktop from "./Contact/Contactdesktop";
import Layout from "../components/view/layout";
import SEO from "../components/seo";

export default class Contact extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      overlay:false,
      view:'desktop',
    }
  }

  // Function to update state.
  updateState = (stateName, value) => {
    this.setState({[stateName] : value});
  };

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
          title="Contact"
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
