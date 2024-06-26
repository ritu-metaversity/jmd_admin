import { FC, useState } from "react";
import "./Navbar.scss";
import { FaBars } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logout, useAuthSelector } from "../../app/features/auth/authSlice";
import { CgKey } from "react-icons/cg";
import { useDispatch } from "react-redux";

interface Props {
  setIsActive: any;
  isActive: boolean;
}


const Navbar = ({ setIsActive, isActive }: Props) => {

  const { userId, isLoggedIn, token } = useAuthSelector();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    setShow(!show);
  }

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  }


  return (
    <header>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        <div

          id="header"
          className="navbar navbar-inverse navbar-fixed-top">
          <div className="navbar-inner">
            <div className="container-fluid">
              <a className="brand">
                <img

                  src="https://admin.jmd11.com/assets/img/jmd-inner-logo.png"
                  alt="Admin Lab"
                />
              </a>
              <div className="top-nav">
                <marquee className="marquee-text">
                  🕉🌀⚽ 🏏🎾 WELCOME TO JMDSPORTS11 @ 🏆CASINO COMING SOON🏆
                  🙏💉GET VACCINATED SAVE LIVES💉**
                </marquee>
                <ul className="nav pull-right top-menu">


                  <li className="dropdown" >
                    <Link to="#"
                      onClick={handleClick}
                      data-toggle="dropdown"
                      className="dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                        {userId}
                      </span>
                      <b className="caret" />
                    </Link>
                    {show &&
                      <ul className="dropdownmenu" onClick={handleLogout}>
                        <li className="li">
                          <CgKey className="key-icon" />
                          {/* <i className="icon-key" /> */}
                          <span>Log Out</span>
                        </li>
                      </ul>}
                  </li>
                </ul>
              </div>

              <button
                type="button"
                onClick={() => setIsActive(!isActive)}
                data-toggle="offcanvas"
                className={`hamburger  ${isActive ? "is-closed" : "is-open"}`}>
                <span className="hamb-top" />
                <span className="hamb-middle" />
                <span className="hamb-bottom" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
