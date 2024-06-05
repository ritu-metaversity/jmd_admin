import BreadcrumbNav from '../../../Component/Breadcrumb/BreadcrumbNav';
import '../../UserDetails/usertable.scss'
import { Breadcrumb } from '../../Dashboard/Dashboard';
import SportTable from '../CurrentSport/SportTable';

const breadData: Breadcrumb[] = [
    {
      name: "Sport's Betting",
      link: "#",
      class: "divider",
    },
    {
      name: "Sport Details",
      link: "",
      class: "divider",
    },
    {
      name: "Back",
      link: "/",
      class: "divider-last",
    },
  ];

const CompletedSport = () => {
  return (
    <>
    <BreadcrumbNav
        breadData={breadData}
        heading="Sport Details"
        subHeading="Display Sport Details Like Match & Session Position etc."
      />
      <div>
        <SportTable name={"Sport Details"}/>
      </div>
    </>
  )
}

export default CompletedSport