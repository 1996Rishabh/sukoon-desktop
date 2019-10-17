import React from "react";
import styled from "styled-components";
import  {Link} from "gatsby";

import ArrowIcon from "../../images/icons/arrow_right.svg";

const ButtonWrapper = styled.div`
    display: flex;
    margin: ${props => props.margin || '10px 0'};
`;

const Img = styled.img`
    width: 24px;
    height: 24px;
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
    <ButtonWrapper margin={props.margin}>
      <ArrowButtonLink border={props.border}  to="/about">
        <Img src={ArrowIcon} alt="arrow-icon"/>
      </ArrowButtonLink>
    </ButtonWrapper>
  )
};

export default ArrowButton;