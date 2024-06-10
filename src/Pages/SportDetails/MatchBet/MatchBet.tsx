import { FC } from "react";
import { Form } from "react-bootstrap";
import BreadcrumbNav from "../../../Component/Breadcrumb/BreadcrumbNav";
import { Breadcrumb, Bet } from "./types"; // Adjust the import path as needed

const breadData: Breadcrumb[] = [
  { name: "Sport's Betting", link: "#", class: "divider" },
  { name: "View Match Bets", link: "", class: "divider" },
  { name: "Back", link: "/", class: "divider-last" },
];

const betsData: Bet[] = [
  {
    sr: 1,
    rate: "82.00",
    amount: 100,
    mode: "K",
    team: "Kabul Zalmi",
    client: "C151041 demoClient",
    agent: "A23431 demoAgent",
    dateTime: "2024-06-07 16:23:11",
    shaheenHunters: 100,
    kabulZalmi: -82,
  },
];

const MatchBet: FC = () => {
  return (
    <>
      <BreadcrumbNav breadData={breadData} heading="Match Bet Details" subHeading="" />
      <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
            <div className="widget-body">
              <div style={{ overflowX: "auto" }}>
                <table className="table table-striped table-hover table-bordered update_table">
                  <tbody>
                    <tr className="MainHeading">
                      <td width={181} height={35} valign="middle" className="textTeamHead"><strong>Kabul Zalmi</strong></td>
                      <td width={193} valign="middle" className="textTeamHead green-text">8.20</td>
                      <td colSpan={4} className="textTeamHead"></td>
                    </tr>
                    <tr className="MainHeading">
                      <td className="textTeamHead"><strong>Shaheen Hunters</strong></td>
                      <td className="textTeamHead red-text"><strong>-10.00</strong></td>
                      <td colSpan={4} className="textTeamHead"></td>
                    </tr>
                    <tr className="MainHeading">
                      <td>CLIENT</td>
                      <td className="textTeamHead">
                        <Form.Select aria-label="Select Client">
                          <option>Select Client</option>
                          <option value={72153}>C151041 demoClient</option>
                        </Form.Select>
                      </td>
                      <td colSpan={4} className="textTeamHead"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <div className="row-fluid" />
              <div style={{ overflowX: "auto" }}>
                <table className="table table-striped table-hover table-bordered" style={{ margin: "10px 0" }}>
                  <thead>
                    <tr>
                      <th className="TableHeading"><strong>Sr.</strong></th>
                      <th className="TableHeading"><strong>Rate</strong></th>
                      <th className="TableHeading"><strong>Amount</strong></th>
                      <th className="TableHeading"><strong>Mode</strong></th>
                      <th className="TableHeading"><strong>Team</strong></th>
                      <th className="TableHeading"><strong>Client</strong></th>
                      <th className="TableHeading"><strong>Agent</strong></th>
                      <th className="TableHeading"><strong>Date & Time</strong></th>
                      <th className="TableHeading"><strong>Shaheen Hunters</strong></th>
                      <th className="TableHeading"><strong>Kabul Zalmi</strong></th>
                    </tr>
                  </thead>
                  <tbody>
                    {betsData.map((bet) => (
                      <tr key={bet.sr}>
                        <td>{bet.sr}</td>
                        <td>{bet.rate}</td>
                        <td>{bet.amount}</td>
                        <td>{bet.mode}</td>
                        <td>{bet.team}</td>
                        <td>{bet.client}</td>
                        <td>{bet.agent}</td>
                        <td>{bet.dateTime}</td>
                        <td className="TableHeading"><strong>{bet.shaheenHunters}</strong></td>
                        <td className="TableHeading"><strong>{bet.kabulZalmi}</strong></td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={8}>Total</td>
                      <td className="TableHeading" style={{ color: "#00F" }}><strong>100</strong></td>
                      <td className="TableHeading" style={{ color: "#00F" }}><strong>-82</strong></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchBet;
