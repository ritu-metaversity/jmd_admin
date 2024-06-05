import { FaChevronDown, FaGlobeAmericas} from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import SportOptionbutton from "./SportOptionbutton";
import SportHeader from "./SportHeader";
import { FC } from "react";

interface props{
    name:string
}

const SportTable:FC<props> = ({name}) => {
  return (
    <>
      <div className="ng-sport-inserted">
        <div className="span12">
          <div className="widget">
            <div className="widget-title">
              <h4>
                <FaGlobeAmericas />
                {name}
              </h4>
              <span className="tools">
                <FaChevronDown />
                <RxCross2 />
              </span>
            </div>
            <div className="widget-body form">
              <div className="portlet-body ng-star-inserted">
              <SportHeader />

                <div className="space15" />
              </div>
              <form
                name="BetPlayer"
                id="BetPlayer"
                method="post"
                autoComplete="off"
                className="ng-untouched ng-pristine ng-valid">
                <table
                  width="100%"
                  id="sample_1"
                  className="table table-striped table-hover table-bordered ch_bg" style={{backgroundColor:"#605d5d", color:"#fff"}}>
                  <thead>
                    <tr>
                      <th align="left">&nbsp;</th>
                      <th align="left">Date Time</th>
                      <th align="left">Name</th>
                      <th align="left">Winner</th>
                      <th align="left">My Share P/L</th>
                      <th align="left">Total P/L</th>
                    </tr>
                  </thead>
                  <tbody className="ng-star-inserted">
                    <tr className="ng-star-inserted">
                      <td align="left"><SportOptionbutton /></td>
                      <td height={20} align="left">2024-06-02 20:00:00</td>
                      <td align="left">West Indies v Papua New Guinea</td>
                      <td align="left" className="relat " width={150}></td>
                      <td align="left" className="relat" width={100} style={{color:"green"}}>0.00</td>
                      <td align="left" style={{color:"green"}}><strong>0.00</strong></td>
                    </tr>
                    <tr className="ng-star-inserted">
                      <td align="left"><SportOptionbutton /></td>
                      <td height={20} align="left">2024-06-02 06:00:00</td>
                      <td align="left">ICC World Cup T20 2024</td>
                      <td align="left" className="relat " width={150}></td>
                      <td align="left" className="relat" width={100} style={{color:"green"}}>0.00</td>
                      <td align="left" style={{color:"green"}}><strong>0.00</strong></td>
                    </tr>
                    <tr className="ng-star-inserted">
                      <td align="left"><SportOptionbutton /></td>
                      <td height={20} align="left">2024-06-02 06:00:00</td>
                      <td align="left">USA v Canada</td>
                      <td align="left" className="relat " width={150}></td>
                      <td align="left" className="relat" width={100} style={{color:"green"}}>0.00</td>
                      <td align="left" style={{color:"green"}}><strong>0.00</strong></td>
                    </tr>
                    <tr className="ng-star-inserted">
                      <td align="left"><SportOptionbutton /></td>
                      <td height={20} align="left">2024-06-01 23:00:00</td>
                      <td align="left">Warwickshire v Nottinghamshire</td>
                      <td align="left" className="relat " width={150}></td>
                      <td align="left" className="relat" width={100} style={{color:"green"}}>0.00</td>
                      <td align="left" style={{color:"green"}}><strong>0.00</strong></td>
                    </tr>
                    <tr className="ng-star-inserted">
                      <td align="left"><SportOptionbutton /></td>
                      <td height={20} align="left">2024-06-01 20:00:00</td>
                      <td align="left">Bangladesh v India</td>
                      <td align="left" className="relat " width={150}></td>
                      <td align="left" className="relat" width={100} style={{color:"green"}}>0.00</td>
                      <td align="left" style={{color:"green"}}><strong>0.00</strong></td>
                    </tr>
                    <tr className="ng-star-inserted">
                      <td align="left"><SportOptionbutton /></td>
                      <td height={20} align="left">2024-06-01 19:00:00</td>
                      <td align="left">Derbyshire v Leicestershire</td>
                      <td align="left" className="relat " width={150}></td>
                      <td align="left" className="relat" width={100} style={{color:"green"}}>0.00</td>
                      <td align="left" style={{color:"green"}}><strong>0.00</strong></td>
                    </tr>
                    <tr className="ng-star-inserted" style={{background:"#c5c5c5"}}>
                      <td align="left" colSpan={4}>Total</td>
                      <td align="left" className="relat" width={100} >0.00</td>
                      <td align="left"><strong>0.00</strong></td>
                    </tr>
                  </tbody>
                 
                </table>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportTable;
