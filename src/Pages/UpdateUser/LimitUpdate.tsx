import BreadcrumbNav from '../../Component/Breadcrumb/BreadcrumbNav'
import { Breadcrumb } from '../Dashboard/Dashboard';
import { LimitUpdateTableBody, LimitUpdateTableHead } from './TableData';
import UpdateListHeader from './UpdateListHeader';
import UpdateListTable from './UpdateListTable';
import './style.scss'

const breadData: Breadcrumb[] = [
    {
      name: "Super Agent Limit Update Details",
      link: "#",
      class: "divider",
    },
    {
      name: "Back",
      link: "/",
      class: "divider-last",
    },
  ];

const LimitUpdate = () => {
  return (
    <>
    <BreadcrumbNav
        breadData={breadData}
        heading="Super Agent Limit Update Details"
        subHeading=""
      />
     <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
         
            <div className="widget-body">
                <UpdateListHeader />
                <UpdateListTable TableHead={LimitUpdateTableHead} TableBody={LimitUpdateTableBody}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LimitUpdate