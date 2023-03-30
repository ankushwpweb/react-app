import React from "react";

const Footer = (props) => {
  return (
    <>
      <footer className={`main-footer ${props.mode === 'light' ? 'bg-white ' : 'bg-dark'}`}>
        <div className="float-right d-none d-sm-inline">
          Ver 1.0
        </div>        
        <strong>React Learning</strong>
      </footer>
    </>
  )
}

export default Footer;