import { FC } from "react";
import DatePicker from "react-datepicker";
import { Form } from "react-bootstrap";
import { PropsComm } from "./AllReportHeader";

const AllReportHeaderMobile: FC<PropsComm> = ({ startDate, setStartDate }) => {
  return (
    <>
      <tr className="desk_hidden">
        <td width="15%" className="TableHeading">
          Agent
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
          Search
        </td>
      </tr>
      <tr className="desk_hidden">
        <td className="TableHeading1">
          <Form.Control type="text" />
          <button className="btn btn-success" style={{display:"inline-block"}}>Search</button>
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
    </>
  );
};

export default AllReportHeaderMobile;
