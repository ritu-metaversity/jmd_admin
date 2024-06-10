import { Col, Form, Row } from "react-bootstrap";
import BreadcrumbNav from "../../../Component/Breadcrumb/BreadcrumbNav";
import { Breadcrumb } from "../../Dashboard/Dashboard";

const breadData: Breadcrumb[] = [
  {
    name: "Sport's Betting",
    link: "#",
    class: "divider",
  },
  {
    name: "Match & Session Bets",
    link: "",
    class: "divider",
  },
  {
    name: "Back",
    link: "/",
    class: "divider-last",
  },
];

const MatchSessionBet = () => {
  return (
    <>
      <BreadcrumbNav
        breadData={breadData}
        heading="Match & Session Bet Details"
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
                              <strong>CLIENT NAME</strong>
                            </td>
                            <td width={260} align="left" valign="middle">
                              <Form.Select aria-label="Default select example">
                                <option> Select Client</option>
                              </Form.Select>
                            </td>
                            <td align="left">
                              <button type="button" className="btn btn-success">
                                View
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <Row style={{ marginTop: "30px" }}>
                      <Col md={6} style={{ overflowX: "scroll" }}>
                        <table className="table table-striped table-hover table-bordered">
                          <tbody>
                            <tr>
                              <td colSpan={9} className="TableHeading">
                                <strong>MATCH BETS</strong>
                              </td>
                            </tr>
                            <tr>
                              <td
                                colSpan={3}
                                className="TableHeading red-text"
                                style={{
                                  color: "#00F",
                                }}>
                                <strong>LOSS: -82</strong>
                              </td>
                              <td
                                colSpan={2}
                                className="TableHeading"
                                >
                                <strong>TOTAL AMOUNT</strong>
                              </td>

                              <td
                                className="TableHeading blue-text"
                                style={{
                                  
                                  color: "#00F",
                                }}>
                                <strong>100 </strong>
                              </td>

                              <td
                                className="TableHeading red-text"
                                style={{
                                 
                                  color: "#00F",
                                }}>
                                <strong>-82 </strong>
                              </td>

                              <td
                                className="TableHeading"
                                style={{
                                  textAlign: "right",
                                  color: "#00F",
                                }}>
                                <strong> &nbsp; </strong>
                              </td>
                            </tr>
                            <tr>
                              <td
                                width="2%"
                                align="left"
                                className="TableHeading">
                                <strong>Sr.</strong>
                              </td>
                              <td
                                className="TableHeading"
                                style={{ textAlign: "right" }}>
                                <strong> Rate</strong>
                              </td>
                              <td align="left" className="TableHeading">
                                <strong> Mode</strong>
                              </td>
                              <td
                                width={60}
                                align="left"
                                className="TableHeading">
                                <strong>Team </strong>
                              </td>
                              <td
                                className="TableHeading"
                                style={{ textAlign: "right" }}>
                                <strong>Amount</strong>
                              </td>
                              <td align="left" className="TableHeading">
                                <strong>Shaheen Hunters</strong>
                              </td>
                              <td align="left" className="TableHeading">
                                <strong>Kabul Zalmi</strong>
                              </td>

                              <td align="left" className="TableHeading">
                                <strong>Date &amp; Time</strong>
                              </td>
                            </tr>
                            <tr>
                              <td
                                width="2%"
                                align="left"
                                className="TableHeading">
                                1
                              </td>
                              <td
                                className="TableHeading"
                                style={{ textAlign: "right" }}>
                                82
                              </td>
                              <td align="left" className="TableHeading">
                                K
                              </td>
                              <td
                                width={60}
                                align="left"
                                className="TableHeading">
                                Kabul Zalmi
                              </td>
                              <td
                                className="TableHeading"
                                style={{ textAlign: "right" }}>
                                100
                              </td>
                              <td align="left" className="TableHeading">
                                100
                              </td>
                              <td align="left" className="TableHeading">
                                -82
                              </td>

                              <td align="left" className="TableHeading">
                                2024-06-07 16:23:11
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                      <Col md={6} style={{ overflowX: "scroll" }}>
                        <table className="table table-striped table-hover table-bordered">
                          <tbody>
                            <tr>
                              <td colSpan={8} className="TableHeading">
                                <strong> SESSION BETS : </strong>
                                <strong style={{ color: "#00F" }}>
                                  WON : -100
                                </strong>
                              </td>
                            </tr>
                            <tr>
                              <td
                                width="2%"
                                align="left"
                                className="TableHeading">
                                Sr.
                              </td>
                              <td align="left" className="TableHeading">
                                <strong>Session</strong>
                              </td>
                              <td align="right" className="TableHeading">
                                <strong>Rate</strong>
                              </td>
                              <td align="right" className="TableHeading">
                                <strong>Runs</strong>
                              </td>
                              <td align="center" className="TableHeading">
                                <strong>Mode</strong>
                              </td>
                              <td align="right" className="TableHeading">
                                <strong>Amount</strong>
                              </td>
                              <td align="right" className="TableHeading">
                                <strong>Dec</strong>
                              </td>
                              <td align="left" className="TableHeading">
                                <strong>Date &amp; Time</strong>
                              </td>
                            </tr>
                            <tr />
                            <tr>
                              <td align="left" className="FontTextBlue">
                                1
                              </td>
                              <td align="left" className="FontTextBlue">
                                20 over run KZ
                              </td>
                              <td align="left" className="FontTextBlue">
                                100
                              </td>
                              <td align="left" className="FontTextBlue">
                                171
                              </td>
                              <td align="left" className="FontTextBlue">
                                No
                              </td>
                              <td align="left" className="FontTextBlue">
                                100
                              </td>
                              <td align="left" className="FontTextBlue">
                                186
                              </td>
                              <td align="left" className="FontTextBlue">
                                2024-06-07 16:22:58
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </Col>
                    </Row>
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

export default MatchSessionBet;
