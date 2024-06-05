const MatchOdds = () => {
  return (
    <>
      <table
        width="100%"
        className="table table-hover table-bordered session-table odds_data">
        <tbody>
          <tr>
            <td
              className="ButtonK"
              style={{
                textAlign: "center",
                width: 220,
              }}>
              TEAM
            </td>
            <td
              className="ButtonL"
              style={{
                textAlign: "center",

                width: 50,
              }}>
              KHAI
            </td>
            <td
              className="ButtonK"
              style={{
                textAlign: "center",

                width: 50,
              }}>
              LAGAI
            </td>
            <td
              className="ButtonL"
              style={{
                textAlign: "center",

                width: 50,
              }}>
              <span className="ButtonK">PLUS</span>/
              <span className="ButtonL">MINUS</span>
            </td>
          </tr>
          <tr className="ng-star-inserted">
            <td
              className="ButtonK button_hover"
              style={{
                textAlign: "center",
                width: 120,
              }}>
              <a>Nepal</a>
            </td>
            <td
              className="ButtonL button_hover"
              style={{
                textAlign: "center",
                width: 101,
                backgroundColor: "#fa9fad",
              }}>
              46
            </td>
            <td
              className="ButtonK button_hover"
              style={{
                textAlign: "center",
                width: 101,
                backgroundColor: "#60adec",
              }}>
              48
            </td>
            <td
              className="green-text"
              style={{
                textAlign: "center",
              }}>
              0.00
            </td>
          </tr>

          <tr className="ng-star-inserted">
            <td
              className="ButtonK button_hover"
              style={{
                textAlign: "center",

                width: 120,
              }}>
              <a>Netherlands</a>
            </td>
            <td
              className="ButtonL button_hover"
              style={{
                textAlign: "center",

                width: 101,
                backgroundColor: "#fa9fad",
              }}>
              39
            </td>
            <td
              className="ButtonK button_hover"
              style={{
                textAlign: "center",
                width: 101,
                backgroundColor: "#60adec",
              }}>
              41
            </td>
            <td
              className="green-text"
              style={{
                textAlign: "center",
                width: 101,
              }}>
              0.00
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default MatchOdds;
