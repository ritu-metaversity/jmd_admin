import { useState } from "react";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";


const UpdateListHeader = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div style={{ overflowX: "scroll" }}>
      <table
        width="100%"
        border={0}
        cellSpacing={0}
        cellPadding={0}
        className="table update_table ">
        <tbody>
          <tr  className="MainHeading">
            <td width={100} height={35} align="left" valign="middle">
              <strong > Super Agent Name</strong>
            </td>
            <td  width={260} align="left" valign="middle">
              <Form.Select aria-label="Default select example">
                <option> Select It...</option>
                <option value="72151">DemoSuperAgent(SA16499)</option>
                <option value="72327">ewfertergf(SA16527)</option>
              </Form.Select>
            </td>
            <td  width={64} align="left" valign="middle">
              <strong >Date</strong>
            </td>
            <td  width={138} align="left" valign="middle">
              <DatePicker
                showWeekNumbers
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </td>
            <td  align="left">
              <button type="button" className="btn btn-success">
                Show Report
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpdateListHeader;
