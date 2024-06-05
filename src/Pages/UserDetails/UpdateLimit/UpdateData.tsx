import React from "react";
import { FaChevronDown, FaGlobeAmericas } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const UpdateData = () => {
    return (
        <div className="ng-sport-inserted">
            <div className="span12">
                <div className="widget">
                    <div className="widget-title">
                        <h4>
                            <FaGlobeAmericas />
                            Super Agent Details
                        </h4>
                        <span className="tools">
                            <FaChevronDown />
                            <RxCross2 />
                        </span>
                    </div>
                    <div className="widget-body form">
                        <form
                            name="BetPlayer"
                            id="BetPlayer"
                            method="post"
                            action="SuperAgentLimit.html"
                            autoComplete="off"
                            className="ng-pristine ng-valid ng-touched">
                            <div
                                id="Error"
                                className="alert alert-error"
                                style={{ visibility: "hidden" }}
                            />
                            <div style={{ overflow: "scroll" }}>
                                <table
                                    width="100%"
                                    className="table table-hover table-bordered ng-pristine ng-valid ng-touched">
                                    <thead>
                                        <tr>
                                            <th align="left">SNo.</th>
                                            <th align="left">Super Agent</th>
                                            <th align="left">Current Limit </th>
                                            <th align="left">Add/Minus Limit</th>
                                            <th align="left">Parent Limit</th>
                                            <th align="left">&nbsp;</th>
                                            <th align="left">&nbsp;</th>

                                        </tr>
                                    </thead>
                                    <tbody className="up_limit">
                                        <tr>
                                            <td height={25} align="left" className="FontText">
                                                1
                                            </td>
                                            <td align="left" className="FontText">
                                                <input
                                                    name="AgentName1"
                                                    type="text"
                                                    value="DemoSuperAgent(SA16499)"
                                                    disabled
                                                    className="TextBoxTransparent ng-untouched ng-pristine ng-valid"
                                                    style={{ textAlign: "left" }}
                                                />
                                            </td>
                                            <td align="left" className="FontText">
                                                <input
                                                    name="CurrentLimit1"
                                                    type="text"
                                                    value={1000}
                                                    disabled
                                                    className="TextBox100 ng-pristine ng-valid ng-touched"
                                                    style={{ textAlign: "right" }}
                                                />
                                            </td>
                                            <td align="left" className="FontText">
                                                <input
                                                    name="ClientLimit1"
                                                    type="number"
                                                    value={0}
                                                    className="TextBox100 ng-pristine ng-valid ng-touched"
                                                    style={{ textAlign: "right" }}
                                                />
                                            </td>
                                            <td align="left" className="FontText">
                                                <input
                                                    name="ClientLimit1"
                                                    type="number"
                                                    value={2000}
                                                    disabled
                                                    className="TextBox100 ng-pristine ng-valid ng-touched"
                                                    style={{ textAlign: "right" }}
                                                />
                                            </td>
                                            <td align="left" className="FontText" />
                                            <td align="center" className="FontText">
                                                <button type="button" className="btn" style={{ background: "#87bb33", color: "#fff" }}>
                                                    Update
                                                </button>
                                            </td>

                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateData;
