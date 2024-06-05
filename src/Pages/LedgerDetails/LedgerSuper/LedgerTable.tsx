import { Col, Row } from "react-bootstrap";

const LedgerTable = () => {
    return (
        <>
            <div className="ng-sport-inserted" style={{ marginTop: "20px" }}>
                <Row>
                    <Col md={6}  style={{overflow:"scroll"}}>
                        <table
                            width="100%"
                            id="sample_1"
                            className="table table-striped table-hover table-bordered ch_bg"
                            style={{ backgroundColor: "#605d5d", color: "#fff" }}>
                            <thead>
                                <tr>
                                    <th align="left" style={{ whiteSpace: "nowrap" }}>Agent Name</th>
                                    <th align="left" style={{ whiteSpace: "nowrap" }}>Contact</th>
                                    <th align="left" style={{ whiteSpace: "nowrap" }}>Open. Bal.</th>
                                    <th align="left" style={{ whiteSpace: "nowrap" }}>Curr. Bal.</th>
                                    <th align="left" style={{ whiteSpace: "nowrap" }}>Cls. Bal.</th>
                                </tr>
                            </thead>
                            <tbody className="ng-star-inserted">
                                <tr>
                                    <td colSpan={5}>
                                        <span style={{ fontSize: "16px", fontWeight: "bold" }}>PAYMENT RECEIVING FROM (LENA HE)</span>
                                    </td>
                                </tr>
                                <tr className="ng-star-inserted">
                                    <td height={20} align="left">demoClient (C151041)</td>
                                    <td height={20} align="left">9876543211</td>
                                    <td align="left" style={{ color: "green" }}>100.00</td>
                                    <td align="left" className="relat " style={{ color: "green" }}>	0.00</td>
                                    <td align="left" className="relat " style={{ color: "green", fontWeight: "bold" }} >100.00</td>
                                </tr>
                                <tr className="ng-star-inserted">
                                    <td height={20} align="left" colSpan={2} style={{ background: "#c5c5c5" }}>Total</td>
                                    <td align="left" style={{ color: "green", background: "#c5c5c5" }}>100.00</td>
                                    <td align="left" className="relat " style={{ color: "green", background: "#c5c5c5" }}>	0.00</td>
                                    <td align="left" className="relat " style={{ color: "green", fontWeight: "bold", background: "#c5c5c5" }} >100.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col md={6} style={{overflow:"scroll"}} className="mtop-10">
                        <table
                            width="100%"
                            id="sample_1"
                            className="table table-striped table-hover table-bordered ch_bg"
                            style={{ backgroundColor: "#605d5d", color: "#fff" }}>
                            <thead>
                                <tr>
                                    <th align="left" style={{ whiteSpace: "nowrap" }}>Agent Name</th>
                                    <th align="left" style={{ whiteSpace: "nowrap" }}>Contact</th>
                                    <th align="left" style={{ whiteSpace: "nowrap" }}>Open. Bal.</th>
                                    <th align="left" style={{ whiteSpace: "nowrap" }}>Curr. Bal.</th>
                                    <th align="left" style={{ whiteSpace: "nowrap" }}>Cls. Bal.</th>
                                </tr>
                            </thead>
                            <tbody className="ng-star-inserted">
                                <tr>
                                    <td colSpan={5}>
                                        <span style={{ fontSize: "16px", fontWeight: "bold" }}>PAYMENT PAID TO (DENA HE)</span>
                                    </td>
                                </tr>

                                <tr className="ng-star-inserted">
                                    <td height={20} align="left" colSpan={2} style={{ background: "#c5c5c5" }}>Total</td>
                                    <td align="left" style={{ color: "green", background: "#c5c5c5" }}>100.00</td>
                                    <td align="left" className="relat " style={{ color: "green", background: "#c5c5c5" }}>	0.00</td>
                                    <td align="left" className="relat " style={{ color: "green", fontWeight: "bold", background: "#c5c5c5" }} >100.00</td>
                                </tr>
                                <tr className="ng-star-inserted">
                                    <td align="left" colSpan={5} >No Record Founds !</td>

                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>

            </div>
        </>
    );
};

export default LedgerTable;
