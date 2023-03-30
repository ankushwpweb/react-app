import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidenav = (props) => {
  return (
    <>
      <aside className={`main-sidebar sidebar-${props.mode}-cyan elevation-1`}>
        <Link to={"/"} className="brand-link">
          <img src="../dist/img/logo.png" alt="logo" className="brand-image img-circle elevation-1" />
          <span className="brand-text font-weight-light">Ankush</span>
        </Link>        
        <div className="sidebar">          
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link">
                  <i className="nav-icon fa-duotone fa-igloo" />
                  <p>Home Page</p>
                </NavLink>
              </li>              
              <li className="nav-item">
                <NavLink to={"/textutil"} className="nav-link">
                  <i className="nav-icon fa-duotone fa-keyboard" />                  
                  <p>Text Utils</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/task"} className="nav-link">
                  <i className="nav-icon fa-duotone fa-list-check" />                  
                  <p>Tasks</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/news"} className="nav-link">
                  <i className="nav-icon fa-duotone fa-newspaper" />                  
                  <p>News</p>
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to={"/charts"} className="nav-link">
                  <i className="nav-icon fa-duotone fa-chart-pie"></i>                  
                  <p>Charts</p>
                </NavLink>
              </li> */}
            </ul>
          </nav>          
        </div>        
      </aside>
    </>
  )
}

export default Sidenav;