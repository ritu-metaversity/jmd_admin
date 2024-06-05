import { FC } from "react";
import DatePicker from "react-datepicker";
import { PropsComm } from "./CommHeader";
import { Form } from "react-bootstrap";

const MobileHeader: FC<PropsComm> = ({ startDate, setStartDate }) => {
  return (
    <>
      <tr className="desk_hidden">
        <td width="15%" className="TableHeading">
          Select Client
        </td>
      </tr>
      <tr className="desk_hidden">
        <td>
          <Form.Select aria-label="Default select example">
            <option> DemoSuperAgent(SA16499)</option>
            <option value="72151">ewfertergf(SA16527)</option>
          </Form.Select>
        </td>
      </tr>
      <tr className="desk_hidden">
        <td width="15%" className="TableHeading">
          Date From
        </td>
      </tr>
      <tr className="desk_hidden">
        <td>
          <DatePicker
            showWeekNumbers
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </td>
      </tr>
      <tr className="desk_hidden">
        <td width="15%" className="TableHeading">
          Date To
        </td>
      </tr>
      <tr className="desk_hidden">
        <td>
          <DatePicker
            showWeekNumbers
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </td>
      </tr>
      <tr className="desk_hidden">
      <td >
              <button className="btn btn-success">Submit</button>
            </td>
      </tr>
    </>
  );
};

export default MobileHeader;
