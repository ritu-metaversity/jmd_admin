import { Link } from "react-router-dom";
import Optionbutton from "./Optionbutton";
import { FaChevronDown, FaGlobeAmericas, FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Dropdown } from "react-bootstrap";

const UserTable = () => {
  return (
    <>
      <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
            <div className="widget-title">
              <h4>
                <FaGlobeAmericas />
                Super Agent Details
              </h4>
              <span className="tools">
                <FaChevronDown />
                <RxCross2 />
              </span>
            </div>
            <div className="widget-body form">
              <div className="portlet-body ng-star-inserted">
                <div className="clearfix">
                  <Link to="/main/createuser/5">
                    <button type="button" className="btn btn-warning">
                      <FaPlus /> Create
                    </button>
                  </Link>
                  <Link to="/main/updatelimit?user_type_id=5">
                    <button type="button" className="btn btn-primary">
                      Update Limit
                    </button>
                  </Link>

                  <div className="btn-group report_droup_down">
                    <Dropdown>
                      <Dropdown.Toggle variant="danger" id="dropdown-basic">
                        Report Details
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item >
                          <Link to="/main/limitUpdateDetails/5" style={{ padding: "0px" }}>
                            Limit Update Details
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item >
                          <Link to="/main/shareUpdateDetails/5" style={{ padding: "0px" }}>
                            Share Update Details
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item style={{ padding: "0px" }} >
                          <Link to="/main/commUpdateDetails/5">
                            Comm Update Details
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          <Link to="/main/statusUpdateDetails/5" style={{ padding: "0px" }}>
                            Status Update Details
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
                <div className="space15" />
              </div>
              <form
                name="BetPlayer"
                id="BetPlayer"
                method="post"
                autoComplete="off"
                className="ng-untouched ng-pristine ng-valid">
                <table
                  width="100%"
                  id="sample_1"
                  className="table table-striped table-hover table-bordered">
                  <thead>
                    <tr>
                      <th align="center">&nbsp;</th>
                      <th align="left">&nbsp;</th>
                      <th align="left">&nbsp;</th>
                      <th align="left">&nbsp;</th>
                      <th align="left">&nbsp;</th>
                      <th align="left">&nbsp;</th>
                      <th align="left">&nbsp;</th>
                      <th align="left">&nbsp;</th>
                      <th
                        colSpan={2}
                        align="center"
                        style={{
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}>
                        Super Agent Comm %
                      </th>
                      <th align="left">&nbsp;</th>
                      <th align="left">&nbsp;</th>
                      <th
                        colSpan={3}
                        align="right"
                        style={{
                          textAlign: "center",
                          verticalAlign: "middle",
                        }}>
                        Limit
                      </th>
                    </tr>
                    <tr>
                      <th align="left">&nbsp;</th>
                      <th align="left">SNo.</th>
                      <th align="left"> Code</th>
                      <th align="left">Name </th>
                      <th align="left">Parent Name </th>
                      <th align="left">Contact</th>
                      <th align="left">D.O.J.</th>
                      <th align="left">Engaged Limit</th>
                      <th align="left">Sport Share%</th>
                      <th align="right"> Type</th>
                      <th align="right" style={{ textAlign: "right" }}>
                        Mat
                      </th>
                      <th align="right" style={{ textAlign: "right" }}>
                        Ses
                      </th>
                      <th align="right" style={{ textAlign: "center" }}>
                        Limit
                      </th>
                      <th align="left">Status</th>
                    </tr>
                  </thead>
                  <tbody className="ng-star-inserted">
                    <tr className="ng-star-inserted">
                      <td align="left">
                        <Optionbutton />
                      </td>
                      <td height={20} align="left">
                        1
                      </td>
                      <td align="left">SA16499</td>
                      <td align="left" className="relat">
                        <Link
                          to="javascript:void(0)"
                          className="user_directory">
                          DemoSuperAgent
                        </Link>
                        <div className="show-hover">
                          <span className="ng-star-inserted"></span>

                        </div>
                      </td>
                      <td align="left" className="relat">
                        <Link
                          to="javascript:void(0)"
                          className="user_directory">
                          Raj(MA1568)
                        </Link>
                        <div className="show-hover">
                          <span className="ng-star-inserted"></span>

                        </div>
                      </td>
                      <td align="left">9876543211</td>
                      <td align="left">5/27/24, 10:49 AM</td>
                      <td align="left">
                        <span style={{ color: "green" }}>0</span>
                      </td>
                      <td align="left">10</td>
                      <td align="right" className="FontText">
                        Bet By Bet
                      </td>
                      <td
                        align="right"
                        className="FontText"
                        style={{ textAlign: "right" }}>
                        2
                      </td>
                      <td
                        align="right"
                        className="FontText"
                        style={{ textAlign: "right" }}>
                        3
                      </td>
                      <td align="right" style={{ textAlign: "right" }}>
                        1000
                      </td>
                      <td align="left">Active</td>
                    </tr>
                    <tr className="ng-star-inserted">
                      <td align="left">
                        <Optionbutton />
                      </td>
                      <td height={20} align="left">
                        1
                      </td>
                      <td align="left">SA16499</td>
                      <td align="left" className="relat">
                        <Link
                          to="javascript:void(0)"
                          className="user_directory">
                          DemoSuperAgent
                        </Link>
                        <div className="show-hover">
                          <span className="ng-star-inserted"></span>

                        </div>
                      </td>
                      <td align="left" className="relat">
                        <Link
                          to="javascript:void(0)"
                          className="user_directory">
                          Raj(MA1568)
                        </Link>
                        <div className="show-hover">
                          <span className="ng-star-inserted"></span>

                        </div>
                      </td>
                      <td align="left">9876543211</td>
                      <td align="left">5/27/24, 10:49 AM</td>
                      <td align="left">
                        <span style={{ color: "green" }}>0</span>
                      </td>
                      <td align="left">10</td>
                      <td align="right" className="FontText">
                        Bet By Bet
                      </td>
                      <td
                        align="right"
                        className="FontText"
                        style={{ textAlign: "right" }}>
                        2
                      </td>
                      <td
                        align="right"
                        className="FontText"
                        style={{ textAlign: "right" }}>
                        3
                      </td>
                      <td align="right" style={{ textAlign: "right" }}>
                        1000
                      </td>
                      <td align="left">Active</td>
                    </tr>
                    <tr className="ng-star-inserted">
                      <td align="left">
                        <Optionbutton />
                      </td>
                      <td height={20} align="left">
                        1
                      </td>
                      <td align="left">SA16499</td>
                      <td align="left" className="relat">
                        <Link
                          to="javascript:void(0)"
                          className="user_directory">
                          DemoSuperAgent
                        </Link>
                        <div className="show-hover">
                          <span className="ng-star-inserted"></span>

                        </div>
                      </td>
                      <td align="left" className="relat">
                        <Link
                          to="javascript:void(0)"
                          className="user_directory">
                          Raj(MA1568)
                        </Link>
                        <div className="show-hover">
                          <span className="ng-star-inserted"></span>

                        </div>
                      </td>
                      <td align="left">9876543211</td>
                      <td align="left">5/27/24, 10:49 AM</td>
                      <td align="left">
                        <span style={{ color: "green" }}>0</span>
                      </td>
                      <td align="left">10</td>
                      <td align="right" className="FontText">
                        Bet By Bet
                      </td>
                      <td
                        align="right"
                        className="FontText"
                        style={{ textAlign: "right" }}>
                        2
                      </td>
                      <td
                        align="right"
                        className="FontText"
                        style={{ textAlign: "right" }}>
                        3
                      </td>
                      <td align="right" style={{ textAlign: "right" }}>
                        1000
                      </td>
                      <td align="left">Active</td>
                    </tr>
                    <tr className="ng-star-inserted">
                      <td align="left">
                        <Optionbutton />
                      </td>
                      <td height={20} align="left">
                        1
                      </td>
                      <td align="left">SA16499</td>
                      <td align="left" className="relat">
                        <Link
                          to="javascript:void(0)"
                          className="user_directory">
                          DemoSuperAgent
                        </Link>
                        <div className="show-hover">
                          <span className="ng-star-inserted"></span>

                        </div>
                      </td>
                      <td align="left" className="relat">
                        <Link
                          to="javascript:void(0)"
                          className="user_directory">
                          Raj(MA1568)
                        </Link>
                        <div className="show-hover">
                          <span className="ng-star-inserted"></span>

                        </div>
                      </td>
                      <td align="left">9876543211</td>
                      <td align="left">5/27/24, 10:49 AM</td>
                      <td align="left">
                        <span style={{ color: "green" }}>0</span>
                      </td>
                      <td align="left">10</td>
                      <td align="right" className="FontText">
                        Bet By Bet
                      </td>
                      <td
                        align="right"
                        className="FontText"
                        style={{ textAlign: "right" }}>
                        2
                      </td>
                      <td
                        align="right"
                        className="FontText"
                        style={{ textAlign: "right" }}>
                        3
                      </td>
                      <td align="right" style={{ textAlign: "right" }}>
                        1000
                      </td>
                      <td align="left">Active</td>
                    </tr>

                  </tbody>

                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserTable;
