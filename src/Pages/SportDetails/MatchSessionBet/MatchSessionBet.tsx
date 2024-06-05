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