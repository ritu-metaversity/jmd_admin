import React, { FC, useState } from "react";
import { AiFillDashboard } from "react-icons/ai";
import {
  FaAddressCard,
  FaAngleLeft,
  FaBook,
  FaChartLine,
  FaChevronRight,
  FaClipboardList,
  FaCogs,
  FaDatabase,
  FaList,
  FaPlay,
  FaRegFile,
  FaRegStopCircle,
  FaRupeeSign,
  FaSignInAlt,
  FaSignal,
  FaWallet,
} from "react-icons/fa";
import { GrTasks } from "react-icons/gr";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

interface Props {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface NavItem {
  to: string;
  icon: React.ComponentType<{ className: string }>;
  text: string;
}
const SidebarItem: FC<Props> = ({ isActive, setIsActive }) => {


  return (
    // <aside className={`main-sidebar elevation-4 sidebar-light-indigo ${isActive ? 'nav_sort' : 'navigation'}`}>
    //   {!isActive && <div className="overlay" onClick={() => setIsActive(false)}></div>}
    //   <div className="sidebar">
    //     <nav className="mt-2">
    //       <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
    //         <li className={`nav-header ${isActive ? 'hide_text' : ''}`}>MASTER DETAILS</li>
    //         {renderNavItem({to:'/collection', icon:FaRupeeSign, text:'Collection Master'})}
    //         {renderNavItem({to:'/master', icon:FaAddressCard, text:'MasterAgent Master'})}
    //         {renderNavItem({to:'/super', icon:FaAddressCard, text:'SuperAgent Master'})}
    //         {renderNavItem({to:'/agent', icon:FaAddressCard, text:'Agent Master'})}
    //         {renderNavItem({to:'/client', icon:FaAddressCard, text:'Client Master'})}

    //         <li className={`nav-header ${isActive ? 'hide_text' : ''}`}>GAMES</li>
    //         {renderNavItem({to:'/game/inPlay', icon:FaPlay, text:'InPlay Game'})}
    //         {renderNavItem({to:'/game/completeGame', icon:FaRegStopCircle, text:'Complete Game'})}

    //         <li className={`nav-header ${isActive ? 'hide_text' : ''}`}>Casino</li>
    //         <li className="nav-item">
    //           <Link to="#" onClick={handleLiveCasino} className="nav-link">
    //             <FaChartLine className="nav-icon" />
    //             <p className={`${isActive ? 'hide_text' : ''}`}>
    //               Live Casino Position
    //               <FaAngleLeft className={`right_icon ${showCasino ? 'rotate-icon' : ''}`}/>
    //             </p>
    //           </Link>
    //           <ul className={`nav ${showCasino?"nav-treeview show":"hide_sub_menu" }`}>
    //             {renderNavItem({to:'/casino/position', icon:FaSignal, text:'VirtualTeen Position'})}
    //             {renderNavItem({to:'/casino/liveTeenPatti20Position', icon:FaChartLine, text:'LiveTeen20 Position'})}
    //           </ul>
    //         </li>
    //         {renderNavItem({to:'/casino/ledger', icon:FaWallet, text:'Casino Details'})}
    //         {renderNavItem({to:'/casino/report', icon:FaChartLine, text:'Int. Casino Details'})}

    //         <li className={`nav-header ${isActive ? 'hide_text' : ''}`}>CASH TRANSACTION</li>
    //         {renderNavItem({to:'/ct/client', icon:FaChevronRight, text:'Debit/Credit Entry (C)'})}
    //         {renderNavItem({to:'/ct/agent', icon:FaChevronRight, text:'Debit/Credit Entry (A)'})}
    //         {renderNavItem({to:'/ct/super', icon:FaChevronRight, text:'Debit/Credit Entry (S)'})}
    //         {renderNavItem({to:'/ct/master', icon:FaChevronRight, text:'Debit/Credit Entry (M)'})}

    //         <li className={`nav-header ${isActive ? 'hide_text' : ''}`}>LEDGER</li>
    //         {renderNavItem({to:'/ledger', icon:FaChevronRight, text:'My Ledger'})}
    //         {renderNavItem({to:'/ledger/client/pm', icon:FaChevronRight, text:'Client Plus/Minus'})}
    //         {renderNavItem({to:'/ledger/client', icon:FaChevronRight, text:'All Client Ledger'})}
    //         {renderNavItem({to:'/ledger/agent', icon:FaChevronRight, text:'All Agent Ledger'})}
    //         {renderNavItem({to:'/ledger/super', icon:FaChevronRight, text:'All Super Ledger'})}
    //         {renderNavItem({to:'/ledger/master', icon:FaChevronRight, text:'All Master Ledger'})}

    //         <li className={`nav-header ${isActive ? 'hide_text' : ''}`}>OLD DATA</li>
    //         {renderNavItem({to:'/old/game/completeGame', icon:FaRegStopCircle, text:'Sport Game'})}
    //         {renderNavItem({to:'/old/ledger', icon:FaChevronRight, text:'My Ledger'})}
    //         {renderNavItem({to:'/old/ct/client', icon:FaChevronRight, text:'Debit/Credit Entry (C)'})}
    //         {renderNavItem({to:'/old/ct/agent', icon:FaChevronRight, text:'Debit/Credit Entry (A)'})}
    //         {renderNavItem({to:'/old/ct/super', icon:FaChevronRight, text:'Debit/Credit Entry (S)'})}
    //         {renderNavItem({to:'/old/ct/master', icon:FaChevronRight, text:'Debit/Credit Entry (MA)'})}

    //         <li className={`nav-header ${isActive ? 'hide_text' : ''}`}>REPORTS</li>
    //         <li className="nav-item">
    //           <Link onClick={handleDataReport} to="#" className="nav-link ">
    //             <FaDatabase className="nav-icon" />
    //             <p className={isActive ? 'hide_text' : ''}>
    //               Data Reports
    //               <FaAngleLeft className={`right_icon ${showDataReport ? 'rotate-icon' : ''}`}/>
    //             </p>
    //           </Link>
    //           <ul  className={`nav ${showDataReport?"nav-data show":"hide_sub_menu" }`}>
    //             {renderNavItem({to:'/report/master', icon:FaList, text:'Master Reports'})}
    //             {renderNavItem({to:'/report/super', icon:FaList, text:'Super Reports'})}
    //             {renderNavItem({to:'/report/agent', icon:FaList, text:'Agent Reports'})}
    //             {renderNavItem({to:'/report/client', icon:FaList, text:'Clients Reports'})}
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <Link onClick={handleLoginReport} to="#" className="nav-link ">
    //             <FaSignInAlt className="nav-icon" />
    //             <p className={isActive ? 'hide_text' : ''}>
    //               Login Reports
    //               <FaAngleLeft className={`right_icon ${showLoginReport ? 'rotate-icon' : ''}`}/>
    //             </p>
    //           </Link>
    //           <ul  className={`nav ${showLoginReport?"nav-data show":"hide_sub_menu" }`}>
    //             {renderNavItem({to:'/report/login/master', icon:FaClipboardList, text:'Master Login Reports'})}
    //             {renderNavItem({to:'/report/login/super', icon:FaClipboardList, text:'Super Login Reports'})}
    //             {renderNavItem({to:'/report/login/agent', icon:FaClipboardList, text:'Agent Login Reports'})}
    //             {renderNavItem({to:'/report/login/client', icon:FaClipboardList, text:'Clients Login Reports'})}
    //           </ul>
    //         </li>
    //         <br />
    //       </ul>
    //     </nav>
    //   </div>
    // </aside>
    <>
      <div id="" className="sidebar_main" style={{marginLeft:`${isActive?"0px":"-190px"}`, transition:"margin 0.3s"}}>
      <div _ngcontent-trl-c46="" onClick={()=>setIsActive(!isActive)} className="sidebar-toggler hidden-phone">
        {isActive?<MdArrowBackIos />:<MdArrowForwardIos />}
      </div>
        <div id="sidebar">
          <ul className="sidebar-menu" style={{display:`${isActive?"block":"none"}`}} >
            <li>
              <a href="/main">
                <span className="icon-box">
                  <AiFillDashboard  />
                </span>
                Dashboard
              </a>
            </li>

            <li className="has-sub">
              <a href="javascript:;">
                <span className="icon-box">
                <FaBook />
                </span>
                Master Details <span className="arrow" />
              </a>
              <ul className="sub" style={{ display: "none" }}>
                <li className="ng-star-inserted">
                  <a href="/main/admindetails/5">Super Agent</a>
                </li>

                <li className="ng-star-inserted">
                  <a href="/main/admindetails/6">Agent</a>
                </li>

                <li>
                  <a href="/main/admindetails/7">Client</a>
                </li>
              </ul>
            </li>
            <li className="has-sub open">
              <a href="javascript:;">
                <span className="icon-box">
                  <GrTasks />
                </span>
                Sport's Betting <span className="arrow open" />
              </a>
              <ul className="sub" style={{ display: "none" }}>
                <li>
                  <a href="/main/currentsportsdetails">
                    Current Sport's Details
                  </a>
                </li>
                <li>
                  <a href="/main/sportsdetails">Completed Sport's Details</a>
                </li>
              </ul>
            </li>
            <li className="has-sub">
              <a href="javascript:;">
                <span className="icon-box">
                  <GrTasks />
                </span>{" "}
                Ledger <span className="arrow" />
              </a>
              <ul className="sub">
                <li>
                  <a href="/main/myledger">My Ledger</a>
                </li>

                <li className="ng-star-inserted">
                  <a href="/main/agentledger/5">Super Agent Ledger</a>
                </li>

                <li className="ng-star-inserted">
                  <a href="/main/agentledger/6">Agent Ledger</a>
                </li>

                <li>
                  <a href="/main/agentledger/7">All Client Ledger</a>
                </li>
                <li>
                  <a href="/main/commission-lena-dena">Comission Lena Dena</a>
                </li>
                <li>
                  <a href="/main/totalProfit">Total Profit</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="/main/allagentreport">
                <span className="icon-box">
                  <FaRegFile />
                </span>{" "}
                All SA Reports
              </a>
            </li>
            <li className="has-sub">
              <a href="javascript:;">
                <span className="icon-box">
                  <FaCogs />
                </span>
                Cash Transaction <span className="arrow" />
              </a>
              <ul className="sub">
                <li className="ng-star-inserted">
                  <a href="/main/debitclient/7">Debit/Credit Entry (C)</a>
                </li>

                <li className="ng-star-inserted">
                  <a href="/main/debitclient/6">Debit/Credit Entry (A)</a>
                </li>

                <li className="ng-star-inserted">
                  <a href="/main/debitclient/5">Debit/Credit Entry (SA)</a>
                </li>
              </ul>
            </li>
            <li className="has-sub">
              <a href="javascript:;">
                <span className="icon-box">
                  <FaCogs />
                </span>
                Settings <span className="arrow" />
              </a>
              <ul className="sub">
                <li>
                  <a href="/main/changepassword">Change Password</a>
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
