
// import { LimitUpdateTableBody, LimitUpdateTableHead } from './TableData';

import BreadcrumbNav from '../../../Component/Breadcrumb/BreadcrumbNav';
import { Breadcrumb } from '../../Dashboard/Dashboard';
import { StatusUpdateTableHead, statusUpdateTableBody } from '../TableData';
import UpdateListHeader from '../UpdateListHeader';
import UpdateListTable from '../UpdateListTable';
import '../style.scss'

const breadData: Breadcrumb[] = [
    {
      name: "Super Agent Status Update Details",
      link: "#",
      class: "divider",
    },
    {
      name: "Back",
      link: "/",
      class: "divider-last",
    },
  ];

const StatusUpdate = () => {
  return (
    <>
    <BreadcrumbNav
        breadData={breadData}
        heading="Super Agent Status Update Details"
        subHeading=""
      />
     <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
         
            <div className="widget-body">
                <UpdateListHeader />
                <UpdateListTable TableHead={StatusUpdateTableHead} TableBody={statusUpdateTableBody}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StatusUpdate