import BreadcrumbNav from "../../Component/Breadcrumb/BreadcrumbNav";
import { Breadcrumb } from "../Dashboard/Dashboard";
import CashTransactionHeader from "./CashTransactionHeader";
import CashTransactionTable from "./CashTransactionTable";
import './style.scss'

const breadData: Breadcrumb[] = [
  {
    name: "Client Debit Credit",
    link: "#",
    class: "divider",
  },
  {
    name: "Back",
    link: "/",
    class: "divider-last",
  },
];

const CashTransaction = () => {
  return (
    <>
      <BreadcrumbNav
        breadData={breadData}
        heading="Cash Transaction"
        subHeading=""
      />
      <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
            <div className="widget-body">
              <div className="portlet-body">
                <div style={{ overflow: "scroll" }}>
                <CashTransactionHeader />
                </div>
                <br />
                <div style={{ overflow: "scroll" }}>
                <CashTransactionTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default CashTransaction;
