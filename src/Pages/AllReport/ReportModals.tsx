import { FC, SetStateAction } from "react";
import { Modal } from "react-bootstrap";
import './style.scss'

interface Props {
  setLgShow: React.Dispatch<SetStateAction<boolean>>;
  lgShow: boolean;
}

const ReportModals: FC<Props> = ({ setLgShow, lgShow }) => {
  return (
    <>
      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        className="report_modals"
        aria-labelledby="example-modal-sizes-title-lg ">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          Detail Report
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ng-sport-inserted">
            <div className="span12">
              <div className="widget">
                <div className="widget-body">
                  <div className="portlet-body">
                    <div style={{ overflow: "scroll" }}>
                      <table
                        width="100%"
                        border={0}
                        cellSpacing={2}
                        cellPadding={0}
                        id="sample_editable_1"
                        className="table_jmd11 table table-striped table-hover table-bordered ">
                        <thead className="thead-color">
                          <tr>
                            <th
                              style={{ width: "15%" }}
                              align="left"
                              className="TableHeading">
                              Match Name
                            </th>
                            <th
                              style={{ width: "12%" }}
                              align="left"
                              className="TableHeading">
                              Start Date
                            </th>
                            <th
                              style={{ width: "7%" }}
                              className="TableHeading">
                              Match (+/-)
                            </th>
                            <th
                              style={{ width: "7%" }}
                              className="TableHeading">
                              Session (+/-)
                            </th>
                            <th
                              style={{ width: "7%" }}
                              className="TableHeading">
                              Total
                            </th>
                            <th
                              style={{ width: "7%" }}
                              className="TableHeading">
                              M.Com
                            </th>
                            <th
                              style={{ width: "7%" }}
                              className="TableHeading">
                              S.Com
                            </th>
                            <th
                              style={{ width: "7%" }}
                              className="TableHeading">
                              T.Com
                            </th>
                            <th
                              style={{ width: "7%" }}
                              className="TableHeading">
                              G. Total
                            </th>
                            <th
                              style={{ width: "7%" }}
                              className="TableHeading">
                              A. Share
                            </th>
                            <th
                              style={{ width: "7%" }}
                              className="TableHeading">
                              Balance
                            </th>
                          </tr>
                        </thead>
                        <tbody className="tbody-color">
                          <tr className="ng-star-inserted">
                            <td
                              height={25}
                              align="left"
                              className="FontText ng-star-inserted">
                              Southern Vipers v Sunrisers
                            </td>
                            <td
                              height={25}
                              align="left"
                              className="FontText ng-star-inserted">
                              May 27, 2024, 7:00:00 PM
                            </td>

                            <td align="left" className="FontText green-text1">
                              100.00
                            </td>
                            <td align="left" className="FontText red-text">
                              0.00
                            </td>
                            <td align="left" className="FontText green-text1">
                              100.00
                            </td>
                            <td align="left" className="FontText red-text">
                              -1.80
                            </td>
                            <td align="left" className="FontText red-text">
                              0.00
                            </td>
                            <td align="left" className="FontText red-text">
                              -1.80
                            </td>
                            <td align="left" className="FontText green-text1">
                              98.20
                            </td>
                            <td align="left" className="FontText green-text1">
                              10.00
                            </td>
                            <td align="left" className="FontText green-text1">
                              88.20
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ReportModals;
