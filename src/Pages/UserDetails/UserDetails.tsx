import BreadcrumbNav from '../../Component/Breadcrumb/BreadcrumbNav';
import { Breadcrumb } from '../Dashboard/Dashboard';
import UserTable from './UserTable';
import './usertable.scss'

const breadData: Breadcrumb[] = [
    {
      name: "Super Admin",
      link: "#",
      class: "divider",
    },
    {
      name: "Admin",
      link: "",
      class: "divider",
    },
    {
      name: "Back",
      link: "/",
      class: "divider-last",
    },
  ];

const UserDetails = () => {
  return (
    <>
    <BreadcrumbNav
        breadData={breadData}
        heading="Super Agent Details"
        subHeading="Create, Modify, Delete and Display Super Agent Details"
      />
      <div>
        <UserTable />
      </div>
    </>
  )
}

export default UserDetails