import BreadcrumbNav from '../../../../Component/Breadcrumb/BreadcrumbNav';
import { Breadcrumb } from '../../../Dashboard/Dashboard';
import SportTable from '../SportTable';
import '../../../UserDetails/usertable.scss'
import SportHeader from '../SportHeader';

const breadData: Breadcrumb[] = [
    {
      name: "Sport's Betting",
      link: "#",
      class: "divider",
    },
    {
      name: "Current Sport Details ",
      link: "",
      class: "divider",
    },
    {
      name: "Back",
      link: "/",
      class: "divider-last",
    },
  ];

const CurrentSport = () => {
  return (
    <>
    <BreadcrumbNav
        breadData={breadData}
        heading="Current Sport Details"
        subHeading="Create, Modify, Delete and Display Super Agent Details"
      />
      <div>
        <SportTable name='Current Sport Details'/>
      </div>
    </>
  )
}

export default CurrentSport