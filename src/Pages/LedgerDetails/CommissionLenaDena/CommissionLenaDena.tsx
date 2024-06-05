import { Breadcrumb } from "../../Dashboard/Dashboard";
import BreadcrumbNav from "../../../Component/Breadcrumb/BreadcrumbNav";
import { useState } from "react";
import CommHeader from "./CommHeader";

const breadData: Breadcrumb[] = [
  {
    name: "Commission Lena Dena ",
    link: "#",
    class: "divider",
  },
  {
    name: "Back",
    link: "/",
    class: "divider-last",
  },
];

const CommissionLenaDena = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <BreadcrumbNav
        breadData={breadData}
        heading="Commission Lena Dena"
        subHeading=""
      />
      <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
            <div className="widget-body">
              <div className="portlet-body">
                <div style={{ overflow: "scroll" }}>
                  <CommHeader
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
                    <tbody>
                      <tr>
                        <td />
                        <td
                          colSpan={3}
                          align="center"
                          className="TableHeading"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "left",
                            backgroundColor: "#76bc76",
                          }}>
                          <strong>PAYMENT RECEIVING FROM (MILA HE)</strong>
                        </td>
                        <td
                          colSpan={3}
                          align="center"
                          className="TableHeading"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "left",
                            backgroundColor: "#ed0303",
                          }}>
                          <strong>PAYMENT PAID TO (DENA HE)</strong>
                        </td>
                      </tr>
                    </tbody>
                    <thead className="thead-color">
                      <tr>
                        <th
                          align="left"
                          className="TableHeading">
                          Name
                        </th>
                        <th
                          style={{ width: "10%" }}
                          className="TableHeading">
                          M.Comm.
                        </th>
                        <th
                          className="TableHeading"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "right",
                            width: "10%",
                          }}>
                          S.Comm.
                        </th>
                        <th
                          className="TableHeading"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "right",
                            width: "10%",
                          }}>
                          T.Comm.
                        </th>
                        <th
                          style={{ width: "10%" }}
                          className="TableHeading">
                          M.Comm.
                        </th>
                        <th
                          className="TableHeading"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "right",
                            width: "10%",
                          }}>
                          S.Comm.
                        </th>
                        <th

                          className="TableHeading"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "right",
                            width: "10%",
                          }}>
                          T.Comm.
                        </th>
                      </tr>
                    </thead>
                    <tbody className="tbody-color">
                      <tr className="ng-star-inserted">


                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText ng-star-inserted">
                          DemoSuperAgent(SA16499){" "}
                          <span style={{ float: "right" }}>
                            <button
                              type="submit"
                              className="btn btn-success"
                              disabled="">
                              Reset
                            </button>
                          </span>
                        </td>

                        <td align="left" valign="middle" className="FontText">
                          0.00
                        </td>
                        <td
                          align="left"
                          valign="middle"
                          className="FontText"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "left",
                          }}>
                          0.00
                        </td>
                        <td
                          align="left"
                          valign="middle"
                          className="FontText"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "left",
                          }}>
                          0.00
                        </td>
                        <td align="left" valign="middle" className="FontText">
                          0.00
                        </td>
                        <td
                          align="left"
                          valign="middle"
                          className="FontText"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "left",
                          }}>
                          0.00
                        </td>
                        <td
                          align="left"
                          valign="middle"
                          className="FontText"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "left",
                          }}>
                          0.00
                        </td>
                      </tr>

                      <tr className="ng-star-inserted">


                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText ng-star-inserted">
                          ewfertergf(SA16527){" "}
                          <span style={{ float: "right" }}>
                            <button
                              type="submit"
                              className="btn btn-success"
                              disabled="">
                              Reset
                            </button>
                          </span>
                        </td>

                        <td align="left" valign="middle" className="FontText">
                          0.00
                        </td>
                        <td
                          align="left"
                          valign="middle"
                          className="FontText"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "left",
                          }}>
                          0.00
                        </td>
                        <td
                          align="left"
                          valign="middle"
                          className="FontText"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "left",
                          }}>
                          0.00
                        </td>
                        <td align="left" valign="middle" className="FontText">
                          0.00
                        </td>
                        <td
                          align="left"
                          valign="middle"
                          className="FontText"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "left",
                          }}>
                          0.00
                        </td>
                        <td
                          align="left"
                          valign="middle"
                          className="FontText"
                          style={{
                            verticalAlign: "middle",
                            textAlign: "left",
                          }}>
                          0.00
                        </td>
                      </tr>


                      <tr className="ng-star-inserted">
                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText ng-star-inserted">
                          Total
                        </td>


                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText">
                          0.00
                        </td>
                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText">
                          0.00
                        </td>
                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText">
                          0.00
                        </td>
                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText">
                          0.00
                        </td>
                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText">
                          0.00
                        </td>
                        <td
                          height={25}
                          align="left"
                          valign="middle"
                          className="FontText">
                          0.00
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

export default CommissionLenaDena;
