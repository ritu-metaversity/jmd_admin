
// import { LimitUpdateTableBody, LimitUpdateTableHead } from './TableData';

import BreadcrumbNav from '../../../Component/Breadcrumb/BreadcrumbNav';
import { Breadcrumb } from '../../Dashboard/Dashboard';
import { ShareUpdateTableBody, ShareUpdateTableHead } from '../TableData';
import UpdateListHeader from '../UpdateListHeader';
import UpdateListTable from '../UpdateListTable';
import '../style.scss'

const breadData: Breadcrumb[] = [
    {
      name: "Super Agent Share Update Details",
      link: "#",
      class: "divider",
    },
    {
      name: "Back",
      link: "/",
      class: "divider-last",
    },
  ];

const ShareUpdate = () => {
  return (
    <>
    <BreadcrumbNav
        breadData={breadData}
        heading="Super Agent Share Update Details"
        subHeading=""
      />
     <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
         
            <div className="widget-body">
                <UpdateListHeader />
                <UpdateListTable TableHead={ShareUpdateTableHead} TableBody={ShareUpdateTableBody}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShareUpdate