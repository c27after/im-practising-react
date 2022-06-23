import React from 'react';
import classes from './Backdroproot.module.css'
import ReactDOM from 'react-dom';

const BackdropRoot = document.getElementById('backdrop-root')

const Backdroproot = (props) => {
  return ReactDOM.createPortal(
    <div 
    {...props}
    className={`${classes.Backdrop} ${props.className}`}>
      {props.children}
    </div>,BackdropRoot
  )
};

export default Backdroproot;