import { Form } from "react-bootstrap";
import BreadcrumbNav from "../../../Component/Breadcrumb/BreadcrumbNav";
import { Breadcrumb } from "../../Dashboard/Dashboard";

const breadData: Breadcrumb[] = [
  {
    name: "Sport's Betting",
    link: "#",
    class: "divider",
  },
  {
    name: "View Match Bets",
    link: "",
    class: "divider",
  },
  {
    name: "Back",
    link: "/",
    class: "divider-last",
  },
];

const TableHead = [
    {
        align:"left",
        name:"Sr."
    },
    {
        align:"left",
        name:"Client"
    },
    {
        align:"left",
        name:"Session"
    },
    {
        align:"right",
        name:"Rate"
    },
    {
        align:"right",
        name:"Amount"
    },
    {
        align:"right",
        name:"Runs"
    },
    {
        align:"center",
        name:"Mode"
    },
    {
        align:"right",
        name:"No"
    },
    {
        align:"right",
        name:"Yes"
    },
    {
        align:"left",
        name:"Date & Time"
    },
    {
        align:"left",
        name:"Agent"
    },
]

const SessionBet = () => {
  return (
    <>
      <BreadcrumbNav
        breadData={breadData}
        heading="Match Bet Details"
        subHeading=""
      />
      <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
            <div className="ng-sport-inserted">
              <div className="span12">
                <div className="widget">
                  <div className="widget-body">
                    <div style={{ overflowX: "scroll" }}>
                      <table
                        width="100%"
                        border={0}
                        cellSpacing={0}
                        cellPadding={0}
                        className="table update_table ">
                        <tbody>
                          <tr className="MainHeading">
                            <td
                              width={150}
                              height={35}
                              align="left"
                              valign="middle">
                              <strong>CLIENT</strong>
                            </td>
                            <td width={260} align="left" valign="middle">
                              <Form.Select aria-label="Default select example">
                                <option> Select Client</option>
                                {/* <option value="72151">
                                  DemoSuperAgent(SA16499)
                                </option>
                                <option value="72327">
                                  ewfertergf(SA16527)
                                </option> */}
                              </Form.Select>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr className="MainHeading">
                            <td
                              width={150}
                              height={35}
                              align="left"
                              valign="middle">
                              <strong>SESSION</strong>
                            </td>
                            <td width={260} align="left" valign="middle">
                              <Form.Select aria-label="Default select example">
                                <option>All Session</option>
                                {/* <option value="72151">
                                  DemoSuperAgent(SA16499)
                                </option>
                                <option value="72327">
                                  ewfertergf(SA16527)
                                </option> */}
                              </Form.Select>
                            </td>
                            <td align="left">
                              <button type="button" className="btn btn-success">
                                View
                              </button>
                            </td>
                            <td></td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div style={{ marginTop: "18px", overflowX: "scroll" }}>
                      <table
                        width="100%"
                        border={0}
                        cellSpacing={2}
                        cellPadding={0}
                        className="table  table-bordered">
                        <tbody>
                          <tr>
                            {TableHead?.map((res: limitUpdateProps) => {
                              return (
                                <th align={res?.align} className="TableHeading">
                                  {res?.name}
                                </th>
                              );
                            })}
                          </tr>
                          {/* {TableBody?.map((item: LimitBodyPayload) => (
                            <tr className="ng-star-inserted">
                              <td align="right" className="TableHeading">
                                {item?.id}
                              </td>
                              <td align="right" className="TableHeading">
                                {item?.report_type}
                              </td>
                              <td align="right" className="TableHeading">
                                {item?.old}
                              </td>
                              <td align="right" className="TableHeading">
                                {item?.new}
                              </td>
                              <td align="right" className="TableHeading">
                                {item?.date}
                              </td>
                              <td align="right" className="TableHeading">
                                {item?.name}
                              </td>
                              <td align="right" className="TableHeading">
                                {item?.operator}
                              </td>
                              <td align="right" className="TableHeading">
                                {item?.ip}
                              </td>
                            </tr>
                          ))} */}
                          <tr>
                            <td colSpan={12}>No Records Found</td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionBet;
