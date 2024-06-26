import BreadcrumbNav from '../../Component/Breadcrumb/BreadcrumbNav';
import { Breadcrumb } from '../Dashboard/Dashboard';
import UserTable from './UserTable';
import './usertable.scss'
import { useParams } from 'react-router-dom';
import { SidebarObj } from '../../Common/Sidebar/SidebarItem';

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

const sidebarObj: SidebarObj = {
  1: 'Client Details',
  2: 'Agent Details',
  3: 'Master Details',
  4: 'Super Master Details',
  5: 'Sub Admin Details',
  6: 'Admin Details',
  7: 'Super Admin Details'
}


const UserDetails = () => {
  const { id } = useParams();

  return (
    <>
      <BreadcrumbNav
        breadData={breadData}
        heading={sidebarObj[Number(id)]}
        subHeading="Create, Modify, Delete and Display Super Agent Details"
      />
      <div>
        <UserTable sidebarobj={sidebarObj} />
      </div>
    </>
  )
}

export default UserDetails