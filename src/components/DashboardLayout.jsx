import { Outlet } from "react-router-dom";
import { DashBoardNav } from "./DashBoardNav";

export const DashBoardLayout = () => {
  return (
    <div className="flex">
      <div className="bg-primary mr-[20px]">
        <DashBoardNav />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};
