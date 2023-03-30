import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [sidebar, setSidebar] = useState('fa-duotone fa-toggle-large-on');
  const toggleSidebar = () => {
    if(sidebar === 'fa-duotone fa-toggle-large-on'){
      setSidebar('fa-duotone fa-toggle-off');
    }else{
      setSidebar('fa-duotone fa-toggle-large-on');
    }
  }
  return (
    <nav className={`main-header navbar navbar-expand ${props.mode === 'light' ? 'navbar-white' : null} navbar-${props.mode}`}>
      {/* Left navbar links */}
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/" className="nav-link" data-widget="pushmenu" role="button" onClick={toggleSidebar} title="sidebar"><i className={sidebar}/></a>
        </li>
      </ul>
      {/* Right navbar links */}
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" data-widget="fullscreen" role="button" title="fullscreen">
            <i className="fas fa-expand-arrows-alt" />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" data-widget="control-sidebar" data-slide="true" role="button" title="control bar">
            <i className="fa-duotone fa-gear" />
          </Link>
        </li>          
      </ul>
    </nav>
  );
}

export default Header;