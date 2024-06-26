import { Link, useParams } from "react-router-dom";
import Optionbutton from "./Optionbutton";
import { FaChevronDown, FaGlobeAmericas, FaPlus } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Dropdown } from "react-bootstrap";
import { SidebarObj } from "../../Common/Sidebar/SidebarItem";
import { useActiveDeactiveUserMutation, useGetuserlistMutation } from "../../app/apis/mainApi/mainApislice";
import { useEffect, useState } from "react";
import snackbarUtil from "../../utils/snackbar";



interface userListDataProps {
  sidebarobj: SidebarObj
}

const UserTable: React.FC<userListDataProps> = ({ sidebarobj }) => {
  const { id } = useParams();
  const [userListPayload, setUserListPayload] = useState({
    userType: 2,
    noOfRecords: 100,
    index: 0
  });
  const [userAcitveDeactiveTrigger, { data: userAcitveDeactiveData }] = useActiveDeactiveUserMutation();

  const handlerActiveDeactive = (userId: string, userStatus: boolean) => {
    userAcitveDeactiveTrigger({
      userId: userId,
      activate: userStatus === true ? false : true
    })
  }

  const [userListTrigger, { data: userListData }] = useGetuserlistMutation();

  useEffect(() => {
    if (userAcitveDeactiveData) {
      if (!userAcitveDeactiveData?.status) {
        userListTrigger({
          ...userListPayload
        })
        snackbarUtil.success(userAcitveDeactiveData?.message);
      }
    }
  }, [userAcitveDeactiveData])

  useEffect(() => {
    setUserListPayload((prevstate) => ({
      ...prevstate,
      userType: Number(id)
    }))
  }, [id])

  useEffect(() => {
    userListTrigger({
      ...userListPayload
    })
  }, [userListPayload])



  return (
    <>
      <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
            <div className="widget-title">
              <h4>
                <FaGlobeAmericas />
                {sidebarobj[Number(id)]}
              </h4>
              <span className="tools">
                <FaChevronDown />
                <RxCross2 />
              </span>
            </div>
            <div className="widget-body form">
              <div className="portlet-body ng-star-inserted">
                <div className="clearfix">
                  <Link to={`/main/createuser/${id}`}>
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
                    {userListData?.data?.map((userData, index) => (
                      <tr className="ng-star-inserted" key={index}>
                        <td align="left">
                          <Optionbutton userStatus={userData?.userStatus} onClick={() => handlerActiveDeactive(userData?.userId, userData?.userStatus)} />
                        </td>
                        <td height={20} align="left">
                          {index + 1}
                        </td>
                        <td align="left">{userData?.userId}</td>
                        <td align="left" className="relat">
                          <Link
                            to="javascript:void(0)"
                            className="user_directory">
                            {userData?.userName}
                          </Link>
                          <div className="show-hover">
                            <span className="ng-star-inserted"></span>

                          </div>
                        </td>
                        <td align="left" className="relat">
                          <Link
                            to="javascript:void(0)"
                            className="user_directory">
                            {userData?.parentId}
                          </Link>
                          <div className="show-hover">
                            <span className="ng-star-inserted"></span>
                          </div>
                        </td>
                        <td align="left">{userData?.mobile}</td>
                        <td align="left">N/A</td>
                        <td align="left">
                          <span style={{ color: "green" }}>{userData?.balance}</span>
                        </td>
                        <td align="left">{userData?.share}</td>
                        <td align="right" className="FontText">
                          N/A
                        </td>
                        <td
                          align="right"
                          className="FontText"
                          style={{ textAlign: "right" }}>
                          {userData?.matchCommission.toFixed(1)}
                        </td>
                        <td
                          align="right"
                          className="FontText"
                          style={{ textAlign: "right" }}>
                          {userData?.sessionCommission.toFixed(1)}
                        </td>
                        <td align="right" style={{ textAlign: "right" }}>
                          N/A
                        </td>
                        <td align="left">{userData?.userStatus ? 'ACTIVE' : 'InActive'}</td>
                      </tr>
                    ))}


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
