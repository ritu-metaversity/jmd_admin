import { Breadcrumb } from "../../Dashboard/Dashboard";
import BreadcrumbNav from "../../../Component/Breadcrumb/BreadcrumbNav";
import TotalProfitHeader from "./TotalProfitHeader";
import '../CommissionLenaDena/style.scss'
import { FaChevronDown, FaGlobeAmericas } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const breadData: Breadcrumb[] = [
  {
    name: "Total Profit",
    link: "#",
    class: "divider",
  },
  {
    name: "Back",
    link: "/",
    class: "divider-last",
  },
];

const TotalProfit = () => {
  return (
    <>
      <BreadcrumbNav
        breadData={breadData}
        heading="Total Profit"
        subHeading=""
      />

      <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
          <div className="widget-title">
              <h4>
                <FaGlobeAmericas />
                Total Profit
              </h4>
              <span className="tools">
                <FaChevronDown />
                <RxCross2 />
              </span>
            </div>
            <div className="widget-body">
              <div className="portlet-body">
                <div style={{ overflow: "scroll" }}>
                  <TotalProfitHeader/>
                </div>
                <br />
                <br />
                <div style={{ overflow: "scroll" }}>
                  <table
                    width="100%"
                    border={0}
                    cellSpacing={2}
                    cellPadding={0}
                    id="sample_editable_1"
                    className="table_jmd11 table table-striped table-hover table-bordered ch_bg ">
                    <thead className="thead-color">
                      <tr>
                        <th
                          align="left"
                          className="TableHeading">
                          Date
                        </th>
                        <th
                        style={{width:"10%"}}
                          className="TableHeading">
                          Credit
                        </th>
                        <th
                          className="TableHeading"
                          style={{
                            verticalAlign: "middle",
                            width:"10%",
                          }}>
                          Debit 
                        </th>
                        <th
                          className="TableHeading"
                          style={{
                            verticalAlign: "middle",
                            width:"10%",
                          }}>
                          Balance
                        </th>
                        <th
                        style={{width:"40%"}}
                          className="TableHeading">
                          Winner/Remark
                        </th>
                      </tr>
                    </thead>
                    <tbody className="tbody-color">
                    <tr className="ng-star-inserted">
                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText ng-star-inserted" style={{color: "#F00"}}>
                          <strong>Total Amount</strong>
                        </td>
                        
                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText green-text">
                          <strong>78.40</strong>
                        </td>
                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText green-text">
                           <strong>0.00</strong>
                        </td>
                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText green-text">
                           <strong>78.40</strong>
                        </td>
                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText">
                          
                        </td>
                      </tr>

                      <tr className="ng-star-inserted">
                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText ng-star-inserted">
                          2024-05-27 19:00:00
                        </td>
                        
                        <td align="left" valign="middle" className="FontText green-text">
                          0.00
                        </td>
                        <td
                          align="left"
                          valign="middle"
                          className="FontText green-text"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "left",
                          }}>
                          0.00
                        </td>
                        <td
                          align="left"
                          valign="middle"
                          className="FontText green-text"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "left",
                          }}>
                          0.00
                        </td>
                        <td align="left" valign="middle" className="FontText">
                        ... /Southern Vipers v Sunrisers
                        </td>
                      </tr>      
                    
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalProfit;
