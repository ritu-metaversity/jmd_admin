
// import { LimitUpdateTableBody, LimitUpdateTableHead } from './TableData';

import BreadcrumbNav from '../../../Component/Breadcrumb/BreadcrumbNav';
import { Breadcrumb } from '../../Dashboard/Dashboard';
import {  commUpdateTableBody, commUpdateTableHead } from '../TableData';
import UpdateListHeader from '../UpdateListHeader';
import UpdateListTable from '../UpdateListTable';
import '../style.scss'

const breadData: Breadcrumb[] = [
    {
      name: "Super Agent Comm Update Details",
      link: "#",
      class: "divider",
    },
    {
      name: "Back",
      link: "/",
      class: "divider-last",
    },
  ];

const CommUpdate = () => {
  return (
    <>
    <BreadcrumbNav
        breadData={breadData}
        heading="Super Agent Comm Update Details"
        subHeading=""
      />
     <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
         
            <div className="widget-body">
                <UpdateListHeader />
                <UpdateListTable TableHead={commUpdateTableHead} TableBody={commUpdateTableBody}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommUpdate