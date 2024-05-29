import BreadcrumbNav from "../BreadcrumbNav";
import CardItem from "./CardItem";
import { FaEye, FaUser } from "react-icons/fa";

export interface Payload {
  title: string;
  icon: any;
  color: string;
  userType: number;
  id: number;
}

const breadData: Breadcrumb[] = [
  {
    name: "Dashboard",
    link: "/main",
    class: "divider",
  },
  {
    name: "Back",
    link: "/main",
    class: "divider-last",
  },
];

const MasterDetails = () => {
  const data: Payload[] = [
    {
      title: "Super Admin",
      icon: <FaUser />,
      color: "#a8c77b",
      userType: 6,
      id: 0,
    },
    {
      title: "Admin",
      icon: <FaEye />,
      color: "#b9baba",
      userType: 4,
      id: 1,
    },
    {
      title: "Sub Admin",
      icon: <FaEye />,
      color: "#93c4e4",
      userType: 5,
      id: 2,
    },
    {
      title: "Super Master",
      icon: <FaEye />,
      color: "#e17f90",
      userType: 0,
      id: 3,
    },
    {
      title: "Master Details",
      icon: <FaEye />,
      color: "#4cc5cd",
      userType: 1,
      id: 4,
    },
    {
      title: "Agent Details",
      icon: <FaEye />,
      color: "#c8abdb",
      userType: 2,
      id: 5,
    },
    {
      title: "Client Details",
      icon: <FaEye />,
      color: "#c8abdb",
      userType: 3,
      id: 6,
    },
  ];
  const uType = 6;
  const userTypeMatch = {
    0: [1, 2, 3],
    1: [2, 3],
    2: [3],
    5: [0, 1, 2, 3],
    4: [0, 1, 2, 3, 5],
    6: [0, 1, 2, 3, 4, 5],
  };
  return (
    <>
      <BreadcrumbNav
        breadData={breadData}
        heading="Admin Details"
        subHeading=""
      />
      <CardItem
        data={data.filter((res) =>
          userTypeMatch[uType]?.includes(res?.userType)
        )}
      />
    </>
  );
};

export default MasterDetails;
