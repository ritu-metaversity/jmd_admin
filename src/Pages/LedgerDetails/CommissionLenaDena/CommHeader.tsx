import { FC } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import './style.scss'
import MobileHeader from "./MobileHeader";

export interface PropsComm {
  setStartDate: any;
  startDate: any;
}

const CommHeader: FC<PropsComm> = ({ setStartDate, startDate }) => {
  return (
    <>
      <table
        width="100%"
        className="table table-striped table-hover  update_table table-bordered">
        <tbody>
          <tr className="mobile-hidden">
            <td width="15%" className="TableHeading">
              Select Client
            </td>
            <td width="15%" className="TableHeading">
              Date From
            </td>
            <td width="15%" className="TableHeading">
              Date To
            </td>
            <td width="10%" />
          </tr>
          
          <tr className="mobile-hidden">
            <td>
              <Form.Select aria-label="Default select example">
                <option> DemoSuperAgent(SA16499)</option>
                <option value="72151">ewfertergf(SA16527)</option>
              </Form.Select>
            </td>
            <td>
              <DatePicker
                showWeekNumbers
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </td>
            <td>
              <DatePicker
                showWeekNumbers
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </td>
            <td>
              <button className="btn btn-success">Submit</button>
            </td>
          </tr>


        <MobileHeader setStartDate={setStartDate} startDate={startDate}/>

        </tbody>
      </table>
    </>
  );
};

export default CommHeader;
