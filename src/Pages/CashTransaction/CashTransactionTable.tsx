const CashTransactionTable = () => {
  return (
    <>
      {" "}
      <table
        width="100%"
        border={0}
        cellSpacing={2}
        cellPadding={0}
        id="sample_editable_1"
        className="table_jmd11 table table-striped table-hover table-bordered ch_bg ">
        <thead className="thead-color">
          <tr>
            <th style={{ width: "4%" }} align="left" className="TableHeading">
              SNo.
            </th>
            <th style={{ width: "18%" }} className="TableHeading">
              Date
            </th>
            <th style={{ width: "25%" }} className="TableHeading">
              Collection Name
            </th>
            <th style={{ width: "9%" }} className="TableHeading">
              Debit
            </th>
            <th style={{ width: "9%" }} className="TableHeading">
              Credit
            </th>
            <th style={{ width: "9%" }} className="TableHeading">
              Balance
            </th>
            <th className="TableHeading">Payment Description</th>
          </tr>
        </thead>
        <tbody className="tbody-color">
          <tr className="ng-star-inserted-total">
            <td
              height={25}
              align="left"
              className="FontText ng-star-inserted"></td>
            <td align="left" className="FontText "></td>
            <td align="left" className="FontText red-text">
              <strong>Total Amount</strong>
            </td>
            <td align="left" className="FontText ">
              <strong>0.00</strong>
            </td>
            <td align="left" className="FontText ">
              <strong>100.00</strong>
            </td>
            <td align="left" className="FontText green-text">
              <strong>200.00</strong>
            </td>
            <td align="left" className="FontText "></td>
          </tr>
          <tr className="ng-star-inserted">
            <td height={25} align="left" className="FontText ng-star-inserted">
              1
            </td>

            <td align="left" className="FontText ">
              2024-06-05 14:06:35
            </td>
            <td align="left" className="FontText "></td>
            <td align="left" className="FontText ">
              0.00
            </td>
            <td align="left" className="FontText ">
              100.00
            </td>
            <td align="left" className="FontText green-text">
              200.00
            </td>
            <td align="left" className="FontText ">
              Payment Paid
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default CashTransactionTable;
