import { Form } from "react-bootstrap";

const TotalProfitMobileHeader = () => {
  return (
    <>
      <tr className="desk_hidden">
        <td width="15%" className="TableHeading">
          <strong>Agent Name</strong>
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
        <td className="TableHeading1">
          <Form.Control type="text" />
        </td>
      </tr>
    </>
  );
};

export default TotalProfitMobileHeader;
