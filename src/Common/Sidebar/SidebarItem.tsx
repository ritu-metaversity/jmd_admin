import React, { FC, useState } from "react";
import { AiFillDashboard } from "react-icons/ai";
import {FaBook,FaCogs,FaRegFile } from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

interface Props {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
const SidebarItem: FC<Props> = ({ isActive, setIsActive }) => {

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu));
  };


  return (
    <>
      <div id="" className="sidebar_main" style={{marginLeft:`${isActive?"0px":"-190px"}`, transition:"margin 0.3s"}}>
      <div _ngcontent-trl-c46="" onClick={()=>setIsActive(!isActive)} className="sidebar-toggler hidden-phone">
        {isActive?<MdArrowBackIos />:<MdArrowForwardIos />}
      </div>
        <div id="sidebar">
          <ul className="sidebar-menu" style={{display:`${isActive?"block":"none"}`}} >
            <li>
              <Link to="/main">
                <span className="icon-box">
                  <AiFillDashboard  />
                </span>
                Dashboard
              </Link>
            </li>

            <li  className="has-sub">
              <Link to="javascript:;" onClick={() => toggleMenu("masterDetails")}>
                <span className="icon-box">
                <FaBook />
                </span>
                Master Details <span className={`arrow ${openMenu === "masterDetails" ? "open" : ""}`} />
              </Link>
              <ul className={`sub ${openMenu === "masterDetails" ? "open" : ""}`}>
                <li className="ng-star-inserted">
                  <Link to="/main/admindetails/4">Admin</Link>
                </li>
                <li className="ng-star-inserted">
                  <Link to="/main/admindetails/5">Sub Admin</Link>
                </li>
                <li className="ng-star-inserted">
                  <Link to="/main/admindetails/5">Super Master</Link>
                </li>
                <li className="ng-star-inserted">
                  <Link to="/main/admindetails/5">Master</Link>
                </li>

                <li className="ng-star-inserted">
                  <Link to="/main/admindetails/6">Agent</Link>
                </li>

                <li>
                  <Link to="/main/admindetails/7">Client</Link>
                </li>
              </ul>
            </li>
            <li className="has-sub">
              <Link to="javascript:;" onClick={() => toggleMenu("sportsBetting")}>
                <span className="icon-box">
                  <GrTasks />
                </span>
                Sport's Betting <span className={`arrow ${openMenu === "sportsBetting" ? "open" : ""}`} />
              </Link>
              <ul className={`sub ${openMenu === "sportsBetting" ? "open" : ""}`}>
                <li>
                  <Link to="/main/currentsportsdetails">
                    Current Sport's Details
                  </Link>
                </li>
                <li>
                  <Link to="/main/sportsdetails">Completed Sport's Details</Link>
                </li>
              </ul>
            </li>
            <li className="has-sub">
              <Link to="javascript:;" onClick={() => toggleMenu("ledger")}>
                <span className="icon-box">
                  <GrTasks />
                </span>{" "}
                Ledger <span className={`arrow ${openMenu === "ledger" ? "open" : ""}`} />
              </Link>
              <ul className={`sub ${openMenu === "ledger" ? "open" : ""}`}>
                <li>
                  <Link to="/main/myledger">My Ledger</Link>
                </li>

                <li className="ng-star-inserted">
                  <Link to="/main/agentledger/5">Super Agent Ledger</Link>
                </li>

                <li className="ng-star-inserted">
                  <Link to="/main/agentledger/6">Agent Ledger</Link>
                </li>

                <li>
                  <Link to="/main/agentledger/7">All Client Ledger</Link>
                </li>
                <li>
                  <Link to="/main/commission-lena-dena">Comission Lena Dena</Link>
                </li>
                <li>
                  <Link to="/main/totalProfit">Total Profit</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/main/allagentreport">
                <span className="icon-box">
                  <FaRegFile />
                </span>
                All SA Reports
              </Link>
            </li>
            <li className="has-sub">
              <Link to="javascript:;" onClick={() => toggleMenu("cashTransaction")}>
                <span className="icon-box">
                  <FaCogs />
                </span>
                Cash Transaction <span className={`arrow ${openMenu === "cashTransaction" ? "open" : ""}`}  />
              </Link>
              <ul className={`sub ${openMenu === "cashTransaction" ? "open" : ""}`}>
                <li className="ng-star-inserted">
                  <Link to="/main/debitclient/7">Debit/Credit Entry (C)</Link>
                </li>

                <li className="ng-star-inserted">
                  <Link to="/main/debitclient/6">Debit/Credit Entry (A)</Link>
                </li>

                <li className="ng-star-inserted">
                  <Link to="/main/debitclient/5">Debit/Credit Entry (SA)</Link>
                </li>
              </ul>
            </li>
            <li className="has-sub">
              <Link to="javascript:;" onClick={() => toggleMenu("settings")}>
                <span className="icon-box">
                  <FaCogs />
                </span>
                Settings <span className={`arrow ${openMenu === "settings" ? "open" : ""}`} />
              </Link>
              <ul className={`sub ${openMenu === "settings" ? "open" : ""}`}>
                <li>
                  <Link to="/main/changePassword">Change Password</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SidebarItem;
