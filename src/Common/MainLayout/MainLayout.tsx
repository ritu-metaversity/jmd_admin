import { Outlet} from "react-router-dom";
import { FC } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

interface props {
  isActive:boolean,
  toggleNavigation:any,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainLayout: FC<props> = ({
  isActive,
  toggleNavigation,
  setIsActive
}) => {
  return (
    <div>

      <Navbar setIsActive={setIsActive} isActive={isActive} />
      <Sidebar
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <div className={`main  ${!isActive ? "main_active" : ""}`} style={{marginTop: "45px", background:"#f2f2f2"}} >
        <Outlet />
      </div>
      
    </div>
  );
};

export default MainLayout;
