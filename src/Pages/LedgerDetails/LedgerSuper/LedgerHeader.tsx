import { useState } from "react";



const LedgerHeader = () => {
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
            <td  width={64} align="left" valign="middle">
              <strong >Date</strong>
            </td>
            <td  width={300} align="left" valign="middle">
              <DatePicker
                showWeekNumbers
                selected={startDate}
                onChange={(date:any) => setStartDate(date)}
              />
            </td>
            <td  align="left">
              <button type="button" className="btn btn-success">
                Show
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LedgerHeader;
