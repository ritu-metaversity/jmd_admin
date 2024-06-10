import React from 'react';
import { Breadcrumb } from "../../Dashboard/Dashboard";
import BreadcrumbNav from "../../../Component/Breadcrumb/BreadcrumbNav";

interface TableColumn {
  name: string;
  colSpan?: number;
  textAlign?: 'left'| 'right' | 'center';
}

interface TableRowData {
  data: (string | number)[];
  rowClass: string;
}

const breadData: Breadcrumb[] = [
  { name: "Sport's Betting", link: "#", class: "divider" },
  { name: "Match & Session Plus Minus Selection", link: "", class: "divider" },
  { name: "Back", link: "/", class: "divider-last" },
];

const TableHeader: React.FC<{ columns: TableColumn[] }> = ({ columns }) => (
  <tr>
    {columns.map((col, index) => (
      <td key={index} style={{ textAlign: col.textAlign || "left" }} colSpan={col.colSpan || 1}>
        <strong>{col.name}</strong>
      </td>
    ))}
  </tr>
);

const TableRow: React.FC<TableRowData> = ({ data, rowClass }) => (
  <tr>
    {data.map((cell, index) => {
      const cellValue = parseFloat(cell as string);
      const isTotal = data[0] === "TOTAL" || data[0] === "C151041";
      const textColorClass = !isTotal && !isNaN(cellValue) && cellValue > 0 ? "green-text" : "red-text";
      const finalClass = isTotal ? rowClass : `${rowClass} ${textColorClass}`;
      return (
        <td key={index} style={{ textAlign: "right" }} className={finalClass}>
          {cell}
        </td>
      );
    })}
  </tr>
);

const MatchSessionPlusMinus: React.FC = () => {
  const superAgentColumns: TableColumn[] = [
    { name: "CLIENT" },
    { name: "M AMT" },
    { name: "SESS." },
    { name: "TOT. AMT" },
    { name: "M. COM" },
    { name: "S. COM" },
    { name: "TOL. COM" },
    { name: "NET AMT" },
    { name: "SHR AMT" },
    { name: "MOB. APP" },
    { name: "FINAL" },
  ];

  const masterColumns: TableColumn[] = [
    { name: "M. COM" },
    { name: "S. COM" },
    { name: "TOL. COM" },
    { name: "NET AMT" },
    { name: "SHR AMT" },
    { name: "FINAL" },
  ];

  const plusMinusHeaders: TableColumn[] = [
    { name: "Super Agent PLUS MINUS", colSpan: 10, textAlign: "left" },
    { name: "Master PLUS MINUS", colSpan: 7, textAlign: "left" },
  ];

  const rowData: (string | number)[][] = [
    ["C151041", "82.00", "100.00", "182.00", "-1.48", "-2.70", "-4.18", "177.82", "142.18", "0.00", "35.64", "-0.16", "-0.60", "-0.76", "181.24", "163.50", "17.74"],
    ["TOTAL", "82.00", "100.00", "182.00", "-1.48", "-2.70", "-4.18", "177.82", "142.18", "0.00", "35.64", "-0.16", "-0.60", "-0.76", "181.24", "163.50", "17.74"],
  ];

  return (
    <>
      <BreadcrumbNav breadData={breadData} heading="Match & Session Plus Minus Report" subHeading="" />
      <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
            <div className="widget-body">
              <div className="portlet-body">
                <div className="clearfix" />
                <div className="space15" />
              </div>
              <table className="table table-striped table-hover table-bordered">
                <tbody>
                  <tr>
                    <td width="70%" style={{ verticalAlign: "middle" }}>
                      <strong> KABUL ZALMI V SHAHEEN HUNTERS</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              <br />
              <table className="table table-striped table-bordered">
                <tbody>
                  <tr>
                    <td width="11%" height={25} align="left">
                      <strong>Master</strong>
                    </td>
                    <td width={630} align="left">
                      <strong> Raj </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{ overflowX: "scroll" }}>
                <table width="99%" align="left" className="table table-striped table-bordered" style={{ marginBottom: "20px !important" }}>
                  <tbody>
                    <TableHeader columns={[{ name: "Super Agent", colSpan: 0 }, { name: "DemoSuperAgent(SA16499)", colSpan: 0 }]} />
                    <tr>
                      <td colSpan={2} align="left">
                        <br />
                        <table width="100%" align="center" className="table table-striped table-bordered" style={{ paddingBottom: 100 }}>
                          <tbody>
                            <TableHeader columns={[{ name: "", colSpan: 1 }, ...plusMinusHeaders]} />
                            <TableHeader columns={[...superAgentColumns, ...masterColumns]} />
                            {rowData.map((row, index) => (
                              <TableRow key={index} data={row} rowClass={index === 1 ? "total-part" : "FontText"} />
                            ))}
                          </tbody>
                          <tbody className="table-total-bottom">
                            <TableRow data={rowData[1]} rowClass="total-part" />
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchSessionPlusMinus;
