import { FC } from "react";
import { LimitBodyPayload, limitUpdateProps } from "./TableData";

interface Props {
  TableHead: limitUpdateProps[];
  TableBody: LimitBodyPayload[];
}

const UpdateListTable: FC<Props> = ({ TableHead, TableBody }) => {
  return (
    <div style={{ marginTop: "18px", overflowX: "scroll" }}>
      <table
        width="100%"
        border={0}
        cellSpacing={2}
        cellPadding={0}
        className="table  table-bordered">
        <tbody>
          <tr>
            {TableHead?.map((res: limitUpdateProps) => {
              return (
                <th align={res?.align} className="TableHeading">
                  {res?.name}
                </th>
              );
            })}
          </tr>
          {TableBody?.map((item: LimitBodyPayload) => (
            <tr className="ng-star-inserted">
              <td align="right" className="TableHeading">
                {item?.id}
              </td>
              <td align="right" className="TableHeading">
                {item?.report_type}
              </td>
              <td align="right" className="TableHeading">
                {item?.old}
              </td>
              <td align="right" className="TableHeading">
                {item?.new}
              </td>
              <td align="right" className="TableHeading">
                {item?.date}
              </td>
              <td align="right" className="TableHeading">
                {item?.name}
              </td>
              <td align="right" className="TableHeading">
                {item?.operator}
              </td>
              <td align="right" className="TableHeading">
                {item?.ip}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateListTable;
