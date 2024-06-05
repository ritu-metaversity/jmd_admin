import { Dropdown } from "react-bootstrap";
import { FaBan, FaColumns, FaFilm, FaFilter, FaKey, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

const SportOptionbutton = () => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          id={"options-button"}
          variant="borderless-dark"
          bsPrefix="no-chevron"
          size="sm" className="drop_option">
          <IoMdArrowDropdown />
        </Dropdown.Toggle>
        <Dropdown.Menu style={{ willChange: "transform" }}>
          <Dropdown.Item >
            <Link to="/main/matchSession/33293817" style={{padding:"0px"}}>
            <span> <FaTrashAlt /> Match & Session Position</span>
            </Link>
          </Dropdown.Item>
          <hr/>
          <Dropdown.Item >
          <Link to="/main/session-plus-minus/33293819" style={{padding:"0px"}}>
            <span><FaTrashAlt /> Session Plus Minus</span>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item>
            <Link to="/main/matchSessionBets/33293819" style={{padding:"0px"}}>
            <span><FaKey /> Display Match & Session Bets</span>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item >
          <Link to="/main/viewMatchedBet/33293819" style={{padding:"0px"}}>
            <span><FaFilter /> Display Match Bets</span>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link to="/main/viewSessionBet/33293819" style={{padding:"0px"}}>
            <span><FaColumns /> Display Session Bets</span>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default SportOptionbutton;
