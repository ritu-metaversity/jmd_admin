import React from 'react'
import BreadcrumbNav from '../../../Component/Breadcrumb/BreadcrumbNav'
import { Breadcrumb } from '../../Dashboard/Dashboard';
import { FaChevronDown, FaGlobeAmericas } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import UpdateData from './UpdateData';

const breadData: Breadcrumb[] = [
    {
      name: "Super Admin",
      link: "#",
      class: "divider",
    },
    {
      name: "Admin Details",
      link: "",
      class: "divider",
    },
    {
      name: "Back",
      link: "/main/admindetails/5",
      class: "divider-last",
    },
  ];

const UpdateLimit = () => {
  return (
    <>
     <BreadcrumbNav
        breadData={breadData}
        heading="Super Agent Limit"
        subHeading="Modify"
      />
     <UpdateData />
    </>
  )
}

export default UpdateLimit