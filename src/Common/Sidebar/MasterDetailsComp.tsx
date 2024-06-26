import React from 'react';
// import { NavItem } from './SidebarItem';
import { Link } from 'react-router-dom';

interface MasterDetailsProps {
    userType: string | number;
    // renderNavItem: ({ to, icon, text }: NavItem) => JSX.Element;
}

const MasterDetailsComp: React.FC<MasterDetailsProps> = ({ userType }) => {
    switch (userType) {
        case '7':
            return (
                <>
                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/6">Admin</Link>
                    </li>
                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/5">Sub Admin</Link>
                    </li>
                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/4">Super Master</Link>
                    </li>
                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/3">Master</Link>
                    </li>

                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/2">Agent</Link>
                    </li>

                    <li>
                        <Link to="/main/admindetails/1">Client</Link>
                    </li>
                </>
            );
        case '6':
            return (
                <>

                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/5">Sub Admin</Link>
                    </li>
                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/4">Super Master</Link>
                    </li>
                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/3">Master</Link>
                    </li>

                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/2">Agent</Link>
                    </li>

                    <li>
                        <Link to="/main/admindetails/1">Client</Link>
                    </li>
                </>
            );
        case '5':
            return (
                <>

                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/4">Super Master</Link>
                    </li>
                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/3">Master</Link>
                    </li>

                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/2">Agent</Link>
                    </li>

                    <li>
                        <Link to="/main/admindetails/1">Client</Link>
                    </li>
                </>
            );
        case '4':
            return (
                <>

                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/3">Master</Link>
                    </li>

                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/2">Agent</Link>
                    </li>

                    <li>
                        <Link to="/main/admindetails/1">Client</Link>
                    </li>
                </>
            );
        case '3':
            return (
                <>


                    <li className="ng-star-inserted">
                        <Link to="/main/admindetails/2">Agent</Link>
                    </li>

                    <li>
                        <Link to="/main/admindetails/1">Client</Link>
                    </li>
                </>
            );
        case '2':
            return (
                <>
                    <li>
                        <Link to="/main/admindetails/1">Client</Link>
                    </li>
                </>
            );
        default:
            return null;
    }
};

export default MasterDetailsComp;