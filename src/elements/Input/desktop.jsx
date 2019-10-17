import React from "react";
import styled from "styled-components";

// Material UI imports
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

// To customize the input text field component of material ui.
const useStyles = makeStyles(theme => ({
  root: {
    background: 'white',
  },
    selectMenu:{
      background: 'black',
    },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  // Main root class
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  MuiMenu: {
    background: 'black',
  },
}));

// This styled component is to design the textField component of material ui.
const Wrapper = styled.div((props)=>{

  if(props.green){
    return`
  //  Root class    
  .textField {
  }  
  .MuiInputLabel-formControl{
      font-size: 14px;
    }
  .textField  .MuiInputLabel-root{
    
  }
  
  ..MuiPaper-root{
    background: black!important;
    }
  .textField .MuiPaper-root{
    background: black;
  }
  .textField label{
    color: #12443e;
  }
  // input tag inside the textfield. 
  .textField .MuiInputBase-input{
    color: #12443e;
  }
   // Border bottom class
   .textField .MuiInput-underline:before{
   border-color: #12443e;
   }
   .MuiFormControl-marginNormal{
      margin: 0;
   }
  .textField .MuiInput-underline:hover:not(.Mui-disabled):before{
  border-bottom: 2px solid #f6e05e;
  }
  // Border bottom on hover 
  .textField .MuiInput-underline:after{
    border-bottom: 2px solid #f6e05e;
  }
  
  `}
  else {
    return`
      
     .textField .MuiInputLabel-shrink {
    transform: translate(0, .5px) scale(0.75);
    transform-origin: top 4px left;
    }
      .MuiFormControl-marginNormal{
        margin: 4px;
      }
  //  Root class    
  .textField {
    margin :0;
  }  
  
   body .MuiList-root{
    background: black;
  }
  .textField .MuiMenu-paper{
    background: #C2DCD3;
    color: #12443E;
    }
  .textField  .MuiInputLabel-root{
  
  }
  
  .textField label{
    color: white;
  }
  // input tag inside the textfield. 
  .textField .MuiInputBase-input{
    color: white;
  }
   // Border bottom class
   .textField .MuiInput-underline:before{
   border-color: #ffffff;
   }
  
  .textField .MuiInput-underline:hover:not(.Mui-disabled):before{
  border-bottom: 2px solid #f6e05e;
  }
  // Border bottom on hover 
  .textField .MuiInput-underline:after{
    border-bottom: 2px solid #f6e05e;
  }
  
  // focused 
  .textField .MuiFormLabel-root.Mui-focused{
    color: #f6e05e;
  }
  `
  }

});

// default options
const countries = [
  {
    value: 'India',
    label: 'Online Consulting',
  },
  {
    value: 'USA',
    label: 'Value',
  },
];

const TextInput = ({classes,defaultValue,textarea,lable,required}) => {
  return(
    <TextField
      required={required}
      id="standard-dense"
      label={lable}
      defaultValue={defaultValue}
      multiline={textarea ? true : null}
      placeholder={``}
      type={ textarea ? 'textarea' : 'text'}
      className={classes}
      margin="normal"
      helperText=""
    />
  )
};

const SelectInput = ({classes,lable,value}) => {
  // Null check
  if(value){
    return(
      <TextField
        id="standard-select-with-placeholder"
        label={lable}
        select
        defaultValue="Enter details"
        className={classes}
        value={``}
        margin="normal"
        helperText=""
        SelectProps={{
          MenuProps: {
            className: classes.menu,
          },
        }}
      > {value.map(option => (
        <MenuItem key={option.value} value={option.value} className={`MenuItem`}>
          {option.label}
        </MenuItem>
      ))}</TextField>
    )
  }
  else{
    return(
      null
    )
  }

};

// This component sets the input type you have selected by passing props type
const setInput = (classes, props) => {
  switch(props.type){
    case 'name':
      return <TextInput lable={props.label} required={props.required} defaultValue={props.defaultValue} textarea={props.textarea} classes={classes}/>;
    case 'select':
      return <SelectInput value={props.value} lable={props.label} placeholder={props.placeholder} classes={classes}/>;
      break;
    default:
      return <TextInput classes={classes}/>;
      break;
  }
};

// Main component
const Input = (props) => {
  const classes = useStyles();
  return(
    <Wrapper green={props.green} className={`${props.wrapperClass} `}>
      {setInput(classes,props)}
    </Wrapper>
  )
};

export default Input;