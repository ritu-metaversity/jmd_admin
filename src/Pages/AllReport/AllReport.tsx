import { useState } from "react";
import { Breadcrumb } from "../Dashboard/Dashboard";
import BreadcrumbNav from "../../Component/Breadcrumb/BreadcrumbNav";
import AllReportHeader from "./AllReportHeader";
import "../LedgerDetails/CommissionLenaDena/style.scss";
import { FaRegSave } from "react-icons/fa";
import ReportModals from "./ReportModals";

const breadData: Breadcrumb[] = [
  {
    name: "All Super Agent Reports",
    link: "#",
    class: "divider",
  },
  {
    name: "Back",
    link: "/",
    class: "divider-last",
  },
];

const AllReport = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <BreadcrumbNav
        breadData={breadData}
        heading="All Super Agent Reports"
        subHeading=""
      />
      <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
            <div className="widget-body">
              <div className="portlet-body">
                <div style={{ overflow: "scroll" }}>
                  <AllReportHeader
                    startDate={startDate}
                    setStartDate={setStartDate}
                  />
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
                        <th style={{ width: "10%" }} align="left" className="TableHeading">Agent</th>
                        <th style={{ width: "9%" }} className="TableHeading">Match (+/-)</th>
                        <th style={{ width: "9%" }} className="TableHeading">Session (+/-)</th>
                        <th style={{ width: "9%" }} className="TableHeading">Total</th>
                        <th style={{ width: "9%" }} className="TableHeading">M.Com</th>
                        <th style={{ width: "9%" }} className="TableHeading">S.Com</th>
                        <th style={{ width: "9%" }} className="TableHeading">T.Com</th>
                        <th style={{ width: "9%" }} className="TableHeading">G. Total</th>
                        <th style={{ width: "9%" }} className="TableHeading">A. Share</th>
                        <th style={{ width: "9%" }} className="TableHeading">Balance</th>
                        <th style={{ width: "9%" }} className="TableHeading"></th>
                      </tr>
                    </thead>
                    <tbody className="tbody-color">
                      <tr className="ng-star-inserted">
                        <td
                          height={25}
                          align="left"
                          className="FontText ng-star-inserted">
                          DemoSuperAgent(SA16499){" "}
                        </td>

                        <td align="left" className="FontText green-text1">
                          100.00
                        </td>
                        <td align="left" className="FontText red-text">
                          0.00
                        </td>
                        <td align="left" className="FontText green-text1">
                          100.00
                        </td>
                        <td align="left" className="FontText red-text">
                          -1.80
                        </td>
                        <td align="left" className="FontText red-text">
                          0.00
                        </td>
                        <td align="left" className="FontText red-text">
                          -1.80
                        </td>
                        <td align="left" className="FontText green-text1">
                          98.20
                        </td>
                        <td align="left" className="FontText green-text1">
                          10.00
                        </td>
                        <td align="left" className="FontText green-text1">
                          88.20
                        </td>
                        <td align="left" className="FontText save-btn">
                          <FaRegSave onClick={() => setLgShow(true)}/>
                        </td>
                      </tr>
                      <tr className="ng-star-inserted-total">
                        <td
                          height={25}
                          align="left"
                          className="FontText ng-star-inserted">
                         Total
                        </td>

                        <td align="left" className="FontText green-text1">
                          100.00
                        </td>
                        <td align="left" className="FontText red-text">
                          0.00
                        </td>
                        <td align="left" className="FontText green-text1">
                          100.00
                        </td>
                        <td align="left" className="FontText red-text">
                          -1.80
                        </td>
                        <td align="left" className="FontText red-text">
                          0.00
                        </td>
                        <td align="left" className="FontText red-text">
                          -1.80
                        </td>
                        <td align="left" className="FontText green-text1">
                          98.20
                        </td>
                        <td align="left" className="FontText green-text1">
                          10.00
                        </td>
                        <td align="left" className="FontText green-text1">
                          88.20
                        </td>
                        <td align="left" className="FontText save-btn">
                         
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


      <ReportModals setLgShow={setLgShow} lgShow={lgShow}/>
    </>
  );
};

export default AllReport;
