import React from "react";

// Components
import Para from "../../elements/Para/desktop";
import Title from "../../elements/Heading/desktop";


const Caption = (props) => {
  return (
    <div className="pt-8 pr-4">
      <h2 className="text-sukoon text-3xl pb-4 font-gilroyBold block">
        {props.subHeading || ''}
      </h2>
      <Para width="100%" className="py-2 pr-16">
        {props.para || ''}
      </Para>
    </div>

  )
};

const PageIntro = (props) => {

  let items = props.content.Caption.map((caption)=>{
    return(
      <Caption subHeading={caption.heading}
               para={caption.para}/>
    )
  });

  return (
    <section id="why-sukoon" className="why-sukoon py-8 px-20">
      <Title subHeading="About" titleLight={props.content.Heading.titleLight} titleBold={props.content.Heading.titleBold} />
      <div className="flex">
        {items}
      </div>
    </section>
  )
};

export default PageIntro;