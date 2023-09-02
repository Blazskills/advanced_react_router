import { NavLink } from "react-router-dom";

export const DashBoardNav = () => {
  const activeStyles = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
    borderRadius: '5px',
  };
  return (
    <>
    {/* activeStyles */}
      <div className="w-[300px] h-[100vh] mt-4 static">
        <ul className="flex flex-col gap-5 mx-5">
          <NavLink to="." end style={({isActive}) => isActive ? activeStyles : null}>
            <li className="border-2 border-[#337283] p-2 font-palanquin text-[18px] font-semibold text-coral-red" >
              Blazskills
            </li>
          </NavLink>
          {/* <NavLink to="/dashboard" end style={({isActive}) => isActive ? activeStyles : null}>
            <li className="border-2 border-[#337283] p-2 font-palanquin text-[18px] font-semibold text-coral-red" >
              Blazskills
            </li>
          </NavLink> */}
          <NavLink to="product" end style={({isActive}) => isActive ? activeStyles : null}>
            <li className="border-2 border-[#337283] p-2 font-palanquin text-[18px] font-semibold text-coral-red">
              Product
            </li>
          </NavLink>
          {/* <NavLink to="product/2" style={({isActive}) => isActive ? activeStyles : null}>
            <li className="border-2 border-[#337283] p-2 font-palanquin text-[18px] font-semibold text-coral-red">
              Product 2
            </li>
          </NavLink> */}
        </ul>
      </div>
    </>
  );
};
