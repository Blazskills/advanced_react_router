import { Link } from "react-router-dom";

export const DashBoardNav = () => {
  return (
    <>
      <div className="w-[300px] h-[100vh] mt-4">
        <ul className="flex flex-col gap-5 mx-5">
          <Link to="/dashboard">
            <li className="border-2 border-[#337283] p-2 font-palanquin text-[18px] font-semibold text-coral-red">
              Blazskills
            </li>
          </Link>
          <Link to="/dashboard/product">
            <li className="border-2 border-[#337283] p-2 font-palanquin text-[18px] font-semibold text-coral-red">
              Product
            </li>
          </Link>
          <Link to="/dashboard/product/2">
            <li className="border-2 border-[#337283] p-2 font-palanquin text-[18px] font-semibold text-coral-red">
              Product 2
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};
