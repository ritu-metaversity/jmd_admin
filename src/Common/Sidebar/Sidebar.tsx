import { FC } from "react";
import "./Sidebar.scss";
import SidebarItem from "./SidebarItem";

interface props {
  isActive:boolean,
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}


const Sidebar:FC<props> = ({ isActive, setIsActive }) => {
  return (
    <>
      <div className="hidden-phone">
        <SidebarItem isActive={isActive} setIsActive={setIsActive}/>
      </div>
      <div className="hidden-desk">
        <SidebarItem isActive={!isActive} setIsActive={setIsActive}/>
      </div>
    </>
  );
};

export default Sidebar;