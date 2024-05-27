import { FaHome } from "react-icons/fa";
import "./BreadcrumbNav.scss";
import { Breadcrumb } from "../../Pages/Dashboard/Dashboard";

interface Props {
  heading: string;
  subHeading: string;
  breadData: Breadcrumb[];
}

const BreadcrumbNav = ({ heading, subHeading, breadData }: Props) => {
  return (
    <div className="row-fluid">
      <div className="span12">
        <h3 className="page-title">
          {heading} <small> {subHeading} </small>
        </h3>
        <ul className="breadcrumb">
          <li>
            <a href="/main">
              <FaHome />
            </a>
            <span className="divider"></span>
          </li>
          {breadData?.map((item) => {
            return (
              <li>
                <a>{item?.name}</a>
                <span className={item?.class}>&nbsp;</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BreadcrumbNav;
