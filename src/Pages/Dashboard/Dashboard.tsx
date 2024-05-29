import BreadcrumbNav from "../../Component/Breadcrumb/BreadcrumbNav";
import { FaEye, FaTags, FaUser } from "react-icons/fa";
import { RiBarChartBoxLine } from "react-icons/ri";
import { Col, Row } from "react-bootstrap";
import './style.scss'
import { Link } from "react-router-dom";

export interface Breadcrumb {
  name: string;
  link: string;
  class: string;
}
export interface dashData {
  title: string;
  icon: any;
  color: string;
}

const breadData: Breadcrumb[] = [
  {
    name: "Dashboard",
    link: "",
    class: "divider-last",
  },
];

const DashboardData: dashData[] = [
  {
    title: "Sport's Betting",
    icon: <FaTags />,
    color: "#e17f90",
  },
  {
    title: "Ledger",
    icon: <FaEye />,
    color: "#c8abdb",
  },
  {
    title: "Setting",
    icon: <RiBarChartBoxLine />,
    color: "#93c4e4",
  },
];

const Dashboard = () => {
  return (
    <>
      <BreadcrumbNav
        breadData={breadData}
        heading="Dashboard"
        subHeading="General Information"
      />
      <Row fluid>
        <Col xs={6} md={2} >
          <div className="circle-wrap">
            <Link to="/main/masterdetails">
              <div
                className="stats-circle turquoise-color"
                style={{ background: "#4cc5cd" }}>
                <FaUser />
              </div>
              <strong>
                <p style={{ color: "#4cc5cd" }}>Super Admin</p>
              </strong>
            </Link>
          </div>
        </Col>
        {DashboardData.map((item) => (
          <Col xs={6} md={2} >
            <div className="circle-wrap">
              <Link to="/main/masterdetails">
                <div
                  className="stats-circle turquoise-color"
                  style={{ background: item?.color }}>
                  {item?.icon}
                </div>
                <strong>
                  <p style={{ color: item?.color }}>{item?.title}</p>
                </strong>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Dashboard;
