import { Form } from "react-bootstrap";
import TotalProfitMobileHeader from "./TotalProfitMobileHeader";


const TotalProfitHeader= () => {
    return (
        <>
            <table
                width="100%"
                className="table table-striped table-hover  update_table table-bordered">
                <tbody>
                    <tr className="mobile-hidden1">
                        <td  className="TableHeading">
                           <strong>Agent Name</strong>
                        </td>
                        <td>
                            <Form.Select aria-label="Default select example">
                                <option> DemoSuperAgent(SA16499)</option>
                                <option value="72151">ewfertergf(SA16527)</option>
                            </Form.Select>
                        </td>
                        <td  className="TableHeading">
                            <Form.Control type="text" />
                        </td>

                    </tr>
                    <TotalProfitMobileHeader />

                </tbody>
            </table>
        </>
    );
};

export default TotalProfitHeader;
