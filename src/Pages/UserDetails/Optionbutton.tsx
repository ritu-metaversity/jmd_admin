import { FC } from "react";
import { Dropdown } from "react-bootstrap";
import { FaBan, FaColumns, FaFilm, FaPencilAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

interface OptionButtonProps {
  onClick: () => void
  userStatus: boolean
}

const Optionbutton: FC<OptionButtonProps> = ({ onClick, userStatus }) => {
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
            <Link to="/main/user-edit/72151/5" style={{ padding: "0px" }}>
              <span> <FaPencilAlt /> Edit</span>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item >
            <span onClick={onClick}><FaBan /> {userStatus ? 'InActive' : 'Active'}</span>
          </Dropdown.Item>
          <hr />
          <Dropdown.Item href="#">
            <Link to="/main/updatelimit?user_id=72151&user_type_id=5" style={{ padding: "0px" }}>
              <span><FaColumns /> Super Agent Limit</span>
            </Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
            <span><FaFilm /> Send Login Details</span>
          </Dropdown.Item>
          <Dropdown.Item href="#">
            <Link to="/main/changePassword/72151" style={{ padding: "0px" }}>
              <span><FaColumns /> Change Password</span>
            </Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Optionbutton;
