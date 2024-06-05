import { useParams } from "react-router-dom";
import BreadcrumbNav from "../../../Component/Breadcrumb/BreadcrumbNav";
import { Breadcrumb } from "../../Dashboard/Dashboard";
import LedgerHeader from "./LedgerHeader";
import LedgerTable from "./LedgerTable";

const LedgerSuper = () => {
    const {id} = useParams();
    const headName = {
        5:"Super Agent Ledger",
        6:"Agent Ledger",
        7:"Client Ledger"
      }
    const breadData: Breadcrumb[] = [
        {
          name: "Ledger ",
          link: "#",
          class: "divider",
        },
        {
          name: `${headName[id]}`,
          link: "",
          class: "divider",
        },
        {
          name: "Back",
          link: "/",
          class: "divider-last",
        },
      ];

      

  return (
    <>
    <BreadcrumbNav
        breadData={breadData}
        heading={`${headName[id]}`}
        subHeading=""
      />
      <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
         
            <div className="widget-body">
                <LedgerHeader />
                <LedgerTable/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LedgerSuper