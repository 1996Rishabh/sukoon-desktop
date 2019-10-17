import React from "react";
import styled from "styled-components";

const Wrapper = styled.div((props)=>{

  const radioSize = '18px';
  const radioBorder = '#0a2a26';
  const radioActive = '#fff';

  return`
    display: ${props.display || 'block'};
  
    .radio {
    display: block;
    cursor: pointer;
    input {
        display: none;
        & + span {
            line-height: ${radioSize};
            height: ${radioSize};
            padding-left: ${radioSize};
            display: block;
            position: relative;
            &:not(:empty) {
                padding-left: 30px;
            }
            &:before,
            &:after {
                content: '';
                width: ${radioSize};
                height: ${radioSize};
                display: block;
                border-radius: 50%;
                left: 0;
                top: 0;
                position: absolute;
            }
            &:before {
                background: ${radioBorder};
                transition: background .2s ease, transform .4s cubic-bezier(.175, .885, .32, 2);
            }
            &:after {
                background: #fff;
                transform: scale(.78);
                transition: transform .6s cubic-bezier(.175, .885, .32, 1.4);
            }
        }
        &:checked + span {
            &:before {
                transform: scale(1.04);
                background: ${radioActive};
                border: 1px solid #12443e;
            }
            &:after {
                background: #12443e;
                transform: scale(.4);
                transition: transform .3s ease;
            }
        }
    }
    &:hover {
        input {
            & + span {
                &:before {
                    transform: scale(.92);
                }
                &:after {
                    transform: scale(.74);
                }
            }
            &:checked + span {
                &:after {
                    transform: scale(.4);
                }
            }
        }
    }
}
`
});


const Radio = (props) =>{
  return(
    <Wrapper display={props.display}>
      <label className="radio">
        <input type="radio" onClick={(event)=>{props.handleButton(event,...props.arguments)}}/>
        <span className={`${props.spanClass || 'text-gray-700 mx-2 font-light'}`}>{props.spanText}</span>
      </label>
    </Wrapper>
  )
};

export default Radio;
