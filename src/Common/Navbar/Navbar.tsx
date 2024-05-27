import { FC, useState } from "react";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Props {
  setIsActive:any;
  isActive:boolean;
}


const Navbar = ({setIsActive, isActive}:Props) => {
  return (
    <header>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <div
          
          id="header"
          className="navbar navbar-inverse navbar-fixed-top">
          <div  className="navbar-inner">
            <div  className="container-fluid">
              <a  className="brand">
                <img
                  
                  src="https://admin.jmd11.com/assets/img/jmd-inner-logo.png"
                  alt="Admin Lab"
                />
              </a>
              <div  className="top-nav">
                <marquee
                  
                  
                  className="marquee-text">
                  {" "}
                  🕉🌀⚽ 🏏🎾 WELCOME TO JMDSPORTS11 @ 🏆CASINO COMING SOON🏆
                  🙏💉GET VACCINATED SAVE LIVES💉**
                </marquee>
                <ul  className="nav pull-right top-menu">
                  <li  className="dropdown">
                    <Link to=""
                      data-toggle="dropdown"
                      className="dropdown-toggle">
                      <img
                        src="https://admin.jmd11.com/assets/img/atomix_user31.png"
                        height={20}
                        width={35}
                      />
                      <span
                        
                        className="username"
                        style={{
                          color: "#FFF",
                          fontFamily: "Verdana, Geneva, sans-serif",
                          fontSize: 12,
                        }}>
                        MA1568 Raj
                      </span>
                      <b  className="caret" />
                    </Link>
                    <ul  className="dropdown-menu">
                      <li >
                        <Link to="/login">
                          <i  className="icon-key" /> Log
                          Out
                        </Link>
                      </li>
                      {/**/}
                    </ul>
                  </li>
                </ul>
              </div>
              
              <button
                type="button"
                onClick={()=>setIsActive(!isActive)}
                data-toggle="offcanvas"
                className={`hamburger  ${isActive?"is-closed":"is-open"}`}>
                <span  className="hamb-top" />
                <span  className="hamb-middle" />
                <span  className="hamb-bottom" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
