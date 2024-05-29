import { Dropdown } from "react-bootstrap";
import { FaBan, FaColumns, FaFilm, FaPencilAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const Optionbutton = () => {
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
          <Dropdown.Item href="#">
            <span> <FaPencilAlt /> Edit</span>
          </Dropdown.Item>
          <Dropdown.Item href="#">
            <span><FaBan /> Inactive</span>
          </Dropdown.Item>
          <hr/>
          <Dropdown.Item href="#">
            <span><FaColumns /> Super Agent Limit</span>
          </Dropdown.Item>
          <Dropdown.Item href="#">
            <span><FaFilm /> Send Login Details</span>
          </Dropdown.Item>
          <Dropdown.Item href="#">
            <span><FaColumns /> Change Password</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Optionbutton;
