import { Link } from "react-router-dom";
import { shoe1, shoe2, shoe3, shoe4, shoe5 } from "../../../assets/images";
// import { requiredAuth } from "../../../utils";

// export async function loader() {
//    await requiredAuth();
//    return null
// }

export const DashboardHome = () => {
  return (
    <section className="w-full h-[100vh] min-h-full bg-primary px-[10px] py-[10px] overflow-y-auto">
      <div className="grid grid-cols-4 gap-y-5 gap-x-2">
        <div className=" border-red-400 border-[2px] p-5 rounded-md shadow-lg hover:shadow-2xl cursor-pointer">
          <p className="mb-5 text-[18px] uppercase font-bold font-palanquin">
            men&apos;s clothing
          </p>
          <img src={shoe1} alt="shoe1" className="mb-3" />
          <div>
            <p className="capitalize font-bold font-palanquin text-[19px]">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </p>
            <p className="capitalize font-bold font-montserrat text-[19px] text-[#858585]">
              $109.4
            </p>
            <p className="capitalize font-thin font-palanquin">
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
            </p>
            <p></p>
          </div>
          <Link to="product/2">
            <p className="text-[18px] uppercase font-bold font-palanquin bg-coral-red w-fit m-auto px-5 py-1 border-none text-white mt-2 cursor-pointer rounded-md shadow-xl">
              View
            </p>
          </Link>
        </div>
        <div className=" border-red-400 border-[2px] p-5 rounded-md shadow-lg hover:shadow-2xl cursor-pointer">
          <p className="mb-5 text-[18px] uppercase font-bold font-palanquin">
            men&apos;s clothing
          </p>
          <img src={shoe2} alt="shoe1" className="mb-3" />
          <div>
            <p className="capitalize font-bold font-palanquin text-[19px]">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </p>
            <p className="capitalize font-bold font-montserrat text-[19px] text-[#858585]">
              $109.4
            </p>
            <p className="capitalize font-thin font-palanquin">
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
            </p>
            <p></p>
          </div>
          <p className="text-[18px] uppercase font-bold font-palanquin bg-coral-red w-fit m-auto px-5 py-1 border-none text-white mt-2 cursor-pointer rounded-md shadow-xl">
            View
          </p>
        </div>
        <div className=" border-red-400 border-[2px] p-5 rounded-md shadow-lg hover:shadow-2xl cursor-pointer">
          <p className="mb-5 text-[18px] uppercase font-bold font-palanquin">
            men&apos;s clothing
          </p>
          <img src={shoe3} alt="shoe1" className="mb-3" />
          <div>
            <p className="capitalize font-bold font-palanquin text-[19px]">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </p>
            <p className="capitalize font-bold font-montserrat text-[19px] text-[#858585]">
              $109.4
            </p>
            <p className="capitalize font-thin font-palanquin">
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
            </p>
            <p></p>
          </div>
          <p className="text-[18px] uppercase font-bold font-palanquin bg-coral-red w-fit m-auto px-5 py-1 border-none text-white mt-2 cursor-pointer rounded-md shadow-xl">
            View
          </p>
        </div>
        <div className=" border-red-400 border-[2px] p-5 rounded-md shadow-lg hover:shadow-2xl cursor-pointer">
          <p className="mb-5 text-[18px] uppercase font-bold font-palanquin">
            men&apos;s clothing
          </p>
          <img src={shoe4} alt="shoe1" className="mb-3" />
          <div>
            <p className="capitalize font-bold font-palanquin text-[19px]">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </p>
            <p className="capitalize font-bold font-montserrat text-[19px] text-[#858585]">
              $109.4
            </p>
            <p className="capitalize font-thin font-palanquin">
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
            </p>
            <p></p>
          </div>
          <p className="text-[18px] uppercase font-bold font-palanquin bg-coral-red w-fit m-auto px-5 py-1 border-none text-white mt-2 cursor-pointer rounded-md shadow-xl">
            View
          </p>
        </div>
        <div className=" border-red-400 border-[2px] p-5 rounded-md shadow-lg hover:shadow-2xl cursor-pointer">
          <p className="mb-5 text-[18px] uppercase font-bold font-palanquin">
            men&apos;s clothing
          </p>
          <img src={shoe5} alt="shoe1" className="mb-3" />
          <div>
            <p className="capitalize font-bold font-palanquin text-[19px]">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </p>
            <p className="capitalize font-bold font-montserrat text-[19px] text-[#858585]">
              $109.4
            </p>
            <p className="capitalize font-thin font-palanquin">
              Your perfect pack for everyday use and walks in the forest. Stash
              your laptop (up to 15 inches) in the padded sleeve, your everyday
            </p>
            <p></p>
          </div>
          <Link to=".">
            <p className="text-[18px] uppercase font-bold font-palanquin bg-coral-red w-fit m-auto px-5 py-1 border-none text-white mt-2 cursor-pointer rounded-md shadow-xl">
              View
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};
