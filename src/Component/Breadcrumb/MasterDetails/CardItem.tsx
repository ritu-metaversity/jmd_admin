import React from 'react';
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Payload } from "./MasterDetails";

interface CardItemProps {
  data: Payload[];
}

const CardItem: React.FC<CardItemProps> = ({ data }) => {
  return (
    <Row>
      {data.map((res, id) => (
        <Col key={id} xs={6} md={2}>
          <div className="circle-wrap">
            <Link to="/main/masterdetails">
              <div
                className="stats-circle turquoise-color"
                style={{ background: res?.color }}
              >
                <FaUser />
              </div>
              <strong>
                <p style={{ color: res?.color }}>{res?.title}</p>
              </strong>
            </Link>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default CardItem;
