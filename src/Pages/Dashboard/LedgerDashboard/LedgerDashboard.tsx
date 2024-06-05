import {  FaTags } from "react-icons/fa";
import BreadcrumbNav from "../../../Component/Breadcrumb/BreadcrumbNav";
import CardItem from "../../../Component/Breadcrumb/MasterDetails/CardItem";
import { RiBarChartBoxLine } from "react-icons/ri";

export interface Payload {
  title: string;
  icon: any;
  color: string;
  userType: number;
  id: number;
  link:string
}

const breadData: Breadcrumb[] = [
  {
    name: "Master Details",
    link: "/main",
    class: "divider",
  },
  {
    name: "Back",
    link: "/main",
    class: "divider-last",
  },
];

const LedgerDashboard = () => {
  const data: Payload[] = [
    {
      title: "My Ledger",
      icon: <RiBarChartBoxLine />,
      color: "#93c4e4",
      userType: 10,
      id: 0,
      link:"/main/myledger"
    },
    {
      title: "Admin Ledger",
      icon: <FaTags />,
      color: "#e17f90",
      userType: 4,
      id: 1,
      link:"/main/agentledger/5"
    },
    {
      title: "Sub Admin Ledger",
      icon: <FaTags />,
      color: "#e17f90",
      userType: 5,
      id: 2,
      link:"/main/agentledger/5"
    },
    {
      title: "Super Master Ledger",
      icon: <FaTags />,
      color: "#e17f90",
      userType: 0,
      id: 3,
      link:"/main/agentledger/5"
    },
    {
      title: "Super Agent Ledger",
      icon: <FaTags />,
      color: "#e17f90",
      userType: 1,
      id: 4,
      link:"/main/agentledger/5"
    },
    {
      title: "Agent Ledger",
      icon: <FaTags />,
      color: "#e17f90",
      userType: 2,
      id: 5,
      link:"/main/agentledger/5"
    },
    {
      title: "Client Plus/Minus",
      icon: <FaTags />,
      color: "#e17f90",
      userType: 3,
      id: 6,
      link:"/main/agentledger/5"
    },
  ];
  const uType = 6;
  const userTypeMatch = {
    0: [1, 2, 3, 10],
    1: [2, 3, 10],
    2: [0,3, 10],
    5: [0, 1, 2, 3, 10],
    4: [0, 1, 2, 3, 5, 10],
    6: [0, 1, 2, 3, 4, 5, 10],
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

export default LedgerDashboard;
