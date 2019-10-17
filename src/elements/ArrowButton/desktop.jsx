import React from "react";
import styled from "styled-components";
import  {Link} from "gatsby";

import SVG from "../SVG/desktop";

const ButtonWrapper = styled.div`
    margin: ${props => props.margin || '10px 0'};
`;

const ArrowButtonLink = styled(Link)`
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${props => props.border ? '1px solid gray' : 'none'};
    border-radius: ${props => props.border ? '50%' : '0'};
    padding: 4px;
`;


const ArrowButton = (props) =>{

  return(
    <ButtonWrapper margin={props.margin} className={`${props.wrapperClass || 'flex'} `}>
      <ArrowButtonLink border={props.border}  to="/about">
        <SVG Class="arrow-icon" display="inline-block" icon="arrow" width='50px' fill="#000"/>
      </ArrowButtonLink>
    </ButtonWrapper>
  )
};

export default ArrowButton;