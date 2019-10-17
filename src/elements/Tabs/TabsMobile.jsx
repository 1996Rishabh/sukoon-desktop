import React from "react";
import styled from "styled-components";

// Styled components
const TabButton = styled.button`
    padding: 10px;
    width: ${props => props.width || '235px'};
    margin: 0 5px;
`;

export default class TabsMobile extends React.PureComponent{

  handleClick = ()=>{
    this.props.onClick(...this.props.argument);
  };

  render() {
    return(
      <TabButton width={``} className={`${this.props.buttonClass || ''} ${this.props.active ? 'bg-tab text-white' : 'bg-sukoonGrey text-gray-600' }`} onClick={this.handleClick}>
        {this.props.children}
      </TabButton>
    )
  }
}