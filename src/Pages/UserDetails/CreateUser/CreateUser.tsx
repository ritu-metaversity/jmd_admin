import { FaChevronDown, FaGlobeAmericas } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import BreadcrumbNav from "../../../Component/Breadcrumb/BreadcrumbNav";
import { Breadcrumb } from "../../Dashboard/Dashboard";
import { Button, Col, Row, Form } from "react-bootstrap";
import "./createuser.scss";

const breadData: Breadcrumb[] = [
  {
    name: "Super Admin",
    link: "#",
    class: "divider",
  },
  {
    name: "Super Agent Details",
    link: "",
    class: "divider",
  },
  {
    name: "Create New Super Agent ",
    link: "",
    class: "divider",
  },
  {
    name: "Back",
    link: "/main/admindetails/5",
    class: "divider-last",
  },
];

const CreateUser = () => {
  return (
    <>
      <BreadcrumbNav
        breadData={breadData}
        heading="Create New Super Agent"
        subHeading=""
      />
      <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
            <div className="widget-title">
              <h4>
                <FaGlobeAmericas />
                Super Agent Details
              </h4>
              <span className="tools">
                <FaChevronDown />
                <RxCross2 />
              </span>
            </div>
            <div className="widget-body">
              <Form className="user_form">
                <Row>
                  <Col xs={12} md={6}>
                    <Row>
                      <Col md={6}>
                        <Form.Label>Super Agent</Form.Label>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Select aria-label="Default select example">
                            <option>Select Super Agent</option>
                            <option value="1">Raj (MA1568)</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Row>
                      <Col md={6}>
                        <Form.Label>Code</Form.Label>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="text"/>
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Row>
                      <Col md={6}>
                        <Form.Label>Name</Form.Label>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="text"  />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={6}>
                    <Row>
                      <Col md={6}>
                        <Form.Label style={{ fontWeight: 700 }}>
                          My Limit
                        </Form.Label>
                      </Col>
                      {/* <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" placeholder="My" />
                        </Form.Group>
                      </Col> */}
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6}>
                    <Row>
                      <Col md={6}>
                        <Form.Label>Reference</Form.Label>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="text"  />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6}>
                    <Row>
                      <Col md={6}>
                        <Form.Label>Agent Limit</Form.Label>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={6}>
                    <Row>
                      <Col md={6}>
                        <Form.Label>Rem Limit</Form.Label>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" disabled />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6}>
                    <Row>
                      <Col md={6}>
                        <Form.Label>Contact No.</Form.Label>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="number" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Row>
                      <Col md={6}>
                        <Form.Label>Password</Form.Label>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6}>
                    <Row>
                      <div
                        style={{ fontSize: "13px", fontWeight: 800 }}
                        className="mt-1">
                        Super Agent Share
                      </div>
                      <Col md={1}></Col>
                      <Col md={5}>
                        <Form.Label>Agent Limit</Form.Label>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={6}>
                    <div
                      style={{ fontSize: "13px", fontWeight: 800 }}
                      className="mt-1">
                      My Share
                    </div>
                    <Row>
                      <Col md={1}></Col>
                      <Col md={5}>
                        <Form.Label>Rem Limit</Form.Label>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="text" disabled />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6}>
                    <Row>
                      <div
                        style={{ fontSize: "13px", fontWeight: 800 }}
                        className="mt-1">
                        Super Agent Commission
                      </div>
                      <Row>
                        <Col md={1}></Col>
                        <Col md={5}>
                          <Form.Label>Session Commission Type</Form.Label>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Select aria-label="Default select example">
                              <option>Commission Type</option>
                              <option value="1">Bet By Bet</option>
                              <option value="1">No Comm</option>
                            </Form.Select>
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={1}></Col>
                        <Col md={5}>
                          <Form.Label> Match Commission</Form.Label>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Control type="number" />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={1}></Col>
                        <Col md={5}>
                          <Form.Label>Session Commission</Form.Label>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Control type="number" />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                  <Col xs={12} md={6}>
                    <div
                      style={{ fontSize: "13px", fontWeight: 800 }}
                      className="mt-1">
                      My Commission
                    </div>
                    <Row>
                      <Row>
                        <Col md={1}></Col>
                        <Col md={5}>
                          <Form.Label>Session Commission Type</Form.Label>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Control type="text" disabled />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={1}></Col>
                        <Col md={5}>
                          <Form.Label> Match Commission</Form.Label>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Control type="text" disabled />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col md={1}></Col>
                        <Col md={5}>
                          <Form.Label>Session Commission</Form.Label>
                        </Col>
                        <Col md={6}>
                          <Form.Group className="mb-3">
                            <Form.Control type="text" disabled />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                </Row>

                
              </Form>
              <Row className="form-actions">
                <Col md={2}></Col>
                  <Col md={10}>
                    <div >
                      <Button style={{background:"#70bb2e"}} type="button" className="btn btn-success">
                        Save
                      </Button>
                      <Button style={{background:"#e8e8e8", color:"#000"}} type="button" className="btn">
                        Cancel
                      </Button>
                    </div>
                  </Col>
                </Row>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
