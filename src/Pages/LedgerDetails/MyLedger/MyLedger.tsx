import React from 'react'
import { FaChevronDown, FaGlobeAmericas } from 'react-icons/fa'
import { RxCross2 } from 'react-icons/rx'
import { Breadcrumb } from '../../Dashboard/Dashboard';
import BreadcrumbNav from '../../../Component/Breadcrumb/BreadcrumbNav';

const breadData: Breadcrumb[] = [
    {
      name: "Ledger",
      link: "#",
      class: "divider",
    },
    {
      name: "My Ledger",
      link: "",
      class: "divider",
    },
    {
      name: "Back",
      link: "/",
      class: "divider-last",
    },
  ];

const MyLedger = () => {
  return (
    <>
    <BreadcrumbNav
        breadData={breadData}
        heading="My Ledger"
        subHeading=""
      />
    <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
            <div className="widget-title">
              <h4>
                <FaGlobeAmericas />
                My Ledger
              </h4>
              <span className="tools">
                <FaChevronDown />
                <RxCross2 />
              </span>
            </div>
            <div className="widget-body form">
              <div className="portlet-body ng-star-inserted">
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
                  className="table table-striped table-hover table-bordered ch_bg" style={{backgroundColor:"#605d5d", color:"#fff"}}>
                  <thead>
                    <tr>
                      <th align="left">SNo.</th>
                      <th align="left">Date</th>
                      <th align="left">Debit</th>
                      <th align="left">Credit</th>
                      <th align="left">Balance</th>
                      <th align="left">Payment Type</th>
                      <th align="left">Remark</th>
                    </tr>
                  </thead>
                  <tbody className="ng-star-inserted">
                    <tr className="ng-star-inserted" style={{background:"#c5c5c5"}}>
                      <td align="left" colSpan={2} style={{color:"#ff0000", fontSize:"16px", fontWeight:"bold"}}>Total Amount</td>
                      <td align="left" style={{color:"green"}}><strong>0.00</strong></td>
                      <td align="left" style={{color:"red"}}><strong>-9.80</strong></td>
                      <td align="left" style={{color:"red"}}><strong>-9.80</strong></td>
                      <td align="left"></td>
                      <td align="left"></td>
                    </tr>
                    <tr className="ng-star-inserted">
                      <td align="left">1</td>
                      <td height={20} align="left">2024-05-27 21:59:13</td>
                      <td align="left">0.00</td>
                      <td align="left" className="relat " style={{color:"red"}}>-9.80</td>
                      <td align="left" className="relat"  style={{color:"red"}}>-9.80</td>
                      <td align="left" >Southern Vipers v Sunrisers</td>
                      <td align="left" >Agent Minus</td>
                    </tr>
                  </tbody>
                 
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyLedger