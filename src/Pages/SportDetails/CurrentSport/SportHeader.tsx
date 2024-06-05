import Form from "react-bootstrap/Form";


const SportHeader = () => {
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
            <td width={150} height={35} align="left" valign="middle">
              <strong >Sport Name</strong>
            </td>
            <td  width={260} align="left" valign="middle">
              <Form.Select aria-label="Default select example">
                <option> Cricket</option>
                <option value="72151">Soccer</option>
                <option value="72327">Election</option>
              </Form.Select>
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

export default SportHeader;
