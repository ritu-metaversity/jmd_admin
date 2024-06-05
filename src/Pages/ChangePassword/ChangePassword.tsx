import { FaChevronDown, FaGlobeAmericas } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Button, Col, Row, Form } from "react-bootstrap";
import "../UserDetails/CreateUser/createuser.scss";
import { Breadcrumb } from "../Dashboard/Dashboard";
import BreadcrumbNav from "../../Component/Breadcrumb/BreadcrumbNav";
import { useParams } from "react-router-dom";

const breadData: Breadcrumb[] = [
  {
    name: "Settings",
    link: "#",
    class: "divider",
  },
  {
    name: "Change Password",
    link: "",
    class: "divider",
  },
  {
    name: "Back",
    link: "/main/admindetails/5",
    class: "divider-last",
  },
];

const ChangePassword = () => {
  const { id } = useParams();
  return (
    <>
      <BreadcrumbNav
        breadData={breadData}
        heading="Change Password"
        subHeading=""
      />
      <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
            <div className="widget-title">
              <h4>
                <FaGlobeAmericas />
                Change Password
              </h4>
              <span className="tools">
                <FaChevronDown />
                <RxCross2 />
              </span>
            </div>
            <div className="widget-body">
              <div
                id="Error"
                className="alert alert-error hidden-phone"
                style={{ visibility: "hidden" }}></div>
              <Form className="user_form">
                <Row>
                  <Col xs={12} md={6}>
                    <Row>
                      <Col md={6}>
                        <Form.Label>
                          {id ? " Master Password" : "Old Password"}
                        </Form.Label>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="password" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Row>
                      <Col md={6}>
                        <Form.Label>New Password</Form.Label>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="password" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12} md={6}>
                    <Row>
                      <Col md={6}>
                        <Form.Label>Confirm Password</Form.Label>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Control type="password" />
                        </Form.Group>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
              <Row className="form-actions">
                <Col md={1}></Col>
                <Col md={11}>
                  <div>
                    <Button
                      style={{ background: "#2b982b" }}
                      type="button"
                      className="btn btn-success">
                      Change Password
                    </Button>
                    <Button
                      style={{ background: "#e8e8e8", color: "#000" }}
                      type="button"
                      className="btn">
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

export default ChangePassword;
