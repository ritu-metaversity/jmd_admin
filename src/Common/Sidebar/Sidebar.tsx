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
      <div>
        <SidebarItem isActive={isActive} setIsActive={setIsActive}/>
      </div>
    </>
  );
};

export default Sidebar;