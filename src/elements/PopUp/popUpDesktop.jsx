import styled from "styled-components";
import React, { useState } from "react";
import General from "../../components/common/general";

const DialogWrapper = styled.div`
    z-index: 10001;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
      
    &::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      background: rgba(31, 30, 30, .7);
    }  
      
    .inside-box-wrapper{
    opacity: 1;
    }
`;

const PopUp = (props) =>{

  return (
    <DialogWrapper id={`pop-up-box`} className={`${props.popUp ? 'block' : 'hidden'} fixed pin overflow-auto  flex`}>
      <div className={`relative inside-box-wrapper bg-tab w-full max-w-md m-auto flex-col flex`}>
        <div className={`header px-8 py-2 flex justify-between`}>
          <h3>Ooops...</h3>
          <button className={`text-2xl text-white`} onClick={()=>props.handlePopUp(false)}>X</button>
        </div>
        <div className={`body bg-white px-8 py-4 text-lg`}>
          <h6 className={`my-2`}>Unfortunately, we aren't able to accept appointments online at the time being.</h6>
          <h6 className={`my-4`}>Kindly call us at <span className={`tracking-widest font-bold border-gray-600 border-b-2`}>7558640422</span> to book one. Thank you! We regret the inconvenience caused.</h6>
        </div>
        <div className={`footer`}>

        </div>
      </div>
    </DialogWrapper>
  )
};

export default PopUp;