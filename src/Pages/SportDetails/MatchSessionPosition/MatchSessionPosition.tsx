import BreadcrumbNav from "../../../Component/Breadcrumb/BreadcrumbNav";
import { Breadcrumb } from "../../Dashboard/Dashboard";
import { Col, Row } from "react-bootstrap";
import MatchOdds from "./MatchOdds";
import SessonOdds from "./SessonOdds";
import "./style.scss";

const breadData: Breadcrumb[] = [
  {
    name: "Sport's Betting",
    link: "#",
    class: "divider",
  },
  {
    name: "Match & Session Position",
    link: "",
    class: "divider",
  },
  {
    name: "Back",
    link: "/",
    class: "divider-last",
  },
];

const MatchSessionPosition = () => {
  return (
    <>
      <BreadcrumbNav breadData={breadData} heading="" subHeading="" />
      <div className="widget_body form">

     
      <Row>
        <Col md={6}>
          <MatchOdds />
        </Col>
        <Col md={6}>
          <SessonOdds />
        </Col>
      </Row>
      </div>
    </>
  );
};

export default MatchSessionPosition;
