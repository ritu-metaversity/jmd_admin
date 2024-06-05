import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

const CashTransactionHeader = () => {
  return (
    <>
      <div className="widget-body">
        <Form className="user_form p-0">
          <Row>
            <Col md={4}>
              <Form.Group >
                <Form.Label>
                  <strong>Client</strong>
                </Form.Label>
                <br />
                <Form.Select aria-label="Default select example">
                  <option>Select Super Agent</option>
                  <option value="1">Raj (MA1568)</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} md={4}>
              <Form.Label>
                <strong>Code</strong>
              </Form.Label>
              <br />
              <Form.Group >
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group >
                <Form.Label>
                  <strong>Payment Type</strong>
                </Form.Label>
                <br />
                <Form.Select aria-label="Default select example">
                  <option>Payment Type</option>
                  <option value="1">PAYMENT - DENA</option>
                  <option value="1">PAYMENT - LENA</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col md={4}>
              <Form.Group >
                <Form.Label>
                  <strong>Payment Mode</strong>
                </Form.Label>
                <br />
                <Form.Select aria-label="Default select example">
                  <option>CASH</option>
                  <option value="1">BANK</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col xs={12} md={4}>
              <Form.Label>
                <strong>Remark</strong>
              </Form.Label>
              <br />
              <Form.Group >
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col xs={12} md={4} >
                <br/>
            <div>
              <Button
                style={{ background: "#70bb2e" }}
                type="button"
                className="btn btn-success">
                Save
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
        </Form>
      </div>
    </>
  );
};

export default CashTransactionHeader;
