import { FC } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import AllReportHeaderMobile from "./AllReportHeaderMobile";


export interface PropsComm {
    setStartDate: any;
    startDate: any;
}

const AllReportHeader: FC<PropsComm> = ({ setStartDate, startDate }) => {
    return (
        <>
            <table
                width="100%"
                className="table table-striped table-hover  update_table table-bordered">
                <tbody>
                    <tr className="mobile-hidden">
                        <td width="10%" className="TableHeading">
                            Agent
                        </td>
                        <td width="20%" className="TableHeading">
                            Search
                        </td>
                        <td width="10%" className="TableHeading">
                            Date From
                        </td>
                        <td width="10%" className="TableHeading">
                            Date To
                        </td>
                    </tr>

                    <tr className="mobile-hidden">
                        <td>
                            <Form.Select aria-label="Default select example">
                                <option> DemoSuperAgent(SA16499)</option>
                                <option value="72151">ewfertergf(SA16527)</option>
                            </Form.Select>
                        </td>

                        <td className="TableHeading1">
                            <Form.Control type="text" />
                            <button className="btn btn-success">Search</button>
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
                    </tr>


                    <AllReportHeaderMobile setStartDate={setStartDate} startDate={startDate} />

                </tbody>
            </table>
        </>
    );
};

export default AllReportHeader;
