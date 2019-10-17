import React from "react";
import styled from "styled-components";

import SukoonLogo from "../images/sukoon-logo/logo_dark@3x.png";


const Wrapper = styled.div`
   
@keyframes loader {
  from {
      transform: scale(1);
  }
    to{
        transform: scale(1.5);
    }

}

.image-loader{
    animation-name: loader;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
}
    
`;

const Loader = () => {

  return(
    <Wrapper style={{color: 'red', margin: '200px auto'}}>
      <img src={SukoonLogo} className="image-loader w-12" alt="Sukoon Logo"/>
    </Wrapper>
  )
};

export default Loader;