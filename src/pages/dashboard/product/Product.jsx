import { Link, useLoaderData, useSearchParams } from "react-router-dom";
import { getProducts } from "../../../api";
import { requiredAuth } from "../../../utils";

export async function loader() {
  await requiredAuth();
  return getProducts();
}
export const Product = () => {
  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }
  const products = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type")?.toString();
  const price = searchParams.get("price")?.toString();

  var priceArray = price?.split("-");
  var lowerBound = priceArray ? parseInt(priceArray[0]) : undefined;
  var upperBound = priceArray ? parseInt(priceArray[1]) : undefined;

  const displayProducts = products.filter((product) => {
    if (typeFilter && typeFilter !== product.category) {
      return false;
    }
    if (lowerBound !== undefined && upperBound !== undefined) {
      return product.price >= lowerBound && product.price < upperBound;
    }
    return true;
  });

  return (
    <section className="w-full h-[100vh] min-h-full bg-primary px-[10px] py-[10px] overflow-y-auto">
      {/* CATEGORY */}
      <div className="flex justify-end items-center px-5 gap-5 h-[50px] w-fit ml-auto bg-[#ffecd6] my-5">
        {/* <Link to={handleFilterChange("type", "smartphones")} className={`uppercase  border-2 border-red-950 px-2 ${typeFilter === "smartphones" && "bg-green-400 text-coral-red rounded-lg"}`}>
      smartphones
      </Link> */}
        <p
          onClick={() => handleFilterChange("type", "smartphones")}
          className={`cursor-pointer uppercase  border-2 border-red-950 px-2 ${
            typeFilter === "smartphones" &&
            "bg-green-400 text-coral-red rounded-lg"
          }`}
        >
          smartphones
        </p>
        <p
          onClick={() => handleFilterChange("type", "fragrances")}
          className={`cursor-pointer uppercase border-2 border-red-950 px-2 ${
            typeFilter === "fragrances" &&
            // typeFilter === "fragrances" || typeFilter2 === "fragrances" &&
            "bg-green-400 text-coral-red rounded-lg"
          }`}
        >
          fragrances
        </p>
        <p
          onClick={() => handleFilterChange("type", "skincare")}
          className={`cursor-pointer uppercase border-2 border-red-950 px-2 ${
            typeFilter === "skincare" &&
            "bg-green-400 text-coral-red rounded-lg"
          }`}
        >
          skincare
        </p>
        <p
          onClick={() => handleFilterChange("type", "groceries")}
          className={`cursor-pointer uppercase border-2 border-red-950 px-2 ${
            typeFilter === "groceries" &&
            "bg-green-400 text-coral-red rounded-lg"
          }`}
        >
          groceries
        </p>
        <p
          onClick={() => handleFilterChange("type", "laptops")}
          className={`cursor-pointer uppercase border-2 border-red-950 px-2 ${
            typeFilter === "laptops" && "bg-green-400 text-coral-red rounded-lg"
          }`}
        >
          laptops
        </p>
        <p
          onClick={() => handleFilterChange("type", "home-decoration")}
          className={`cursor-pointer uppercase border-2 border-red-950 px-2 ${
            typeFilter === "home-decoration" &&
            "bg-green-400 text-coral-red rounded-lg"
          }`}
        >
          home decoration
        </p>

        {/* <p
          onClick={() => setSearchParams({})}
          className="cursor-pointer uppercase border-2 border-red-950 px-2"
        >
          CLEAR FILTER
        </p> */}
      </div>

      {/* Price */}
      <div className="flex justify-end items-center px-5 gap-5 h-[50px] w-fit ml-auto bg-[#ffecd6] my-5">
        <p
          onClick={() => handleFilterChange("price", "1-100")}
          className={`cursor-pointer uppercase  border-2 border-red-950 px-2 ${
            price === "1-100" && "bg-green-400 text-coral-red rounded-lg"
          }`}
        >
          $1 to $100
        </p>
        <p
          onClick={() => handleFilterChange("price", "100-300")}
          className={`cursor-pointer uppercase border-2 border-red-950 px-2 ${
            price === "100-300" && "bg-green-400 text-coral-red rounded-lg"
          }`}
        >
          $100 to $300
        </p>
        <p
          onClick={() => handleFilterChange("price", "300-600")}
          className={`cursor-pointer uppercase border-2 border-red-950 px-2 ${
            price === "300-600" && "bg-green-400 text-coral-red rounded-lg"
          }`}
        >
          $300-$600
        </p>
        <p
          onClick={() => handleFilterChange("price", "600-1000")}
          className={`cursor-pointer uppercase border-2 border-red-950 px-2 ${
            price === "600-1000" && "bg-green-400 text-coral-red rounded-lg"
          }`}
        >
          $600-$1000
        </p>
        <p
          onClick={() => handleFilterChange("price", "1000-5000")}
          className={`cursor-pointer uppercase border-2 border-red-950 px-2 ${
            price === "1000-5000" && "bg-green-400 text-coral-red rounded-lg"
          }`}
        >
          $1000-$5000
        </p>
        {(typeFilter || price) && (
          <p
            onClick={() => setSearchParams({})}
            className="cursor-pointer uppercase border-2 border-red-950 px-2"
          >
            CLEAR FILTER
          </p>
        )}
      </div>

      {/* <div className="flex justify-end items-center px-5 gap-5 h-[50px] w-fit ml-auto bg-[#ffecd6] my-5">
      <Link to='?type=smartphones' className={`uppercase  border-2 border-red-950 px-2 ${typeFilter === "smartphones" && "bg-green-400 text-coral-red rounded-lg"}`}>
      smartphones
      </Link>
      <p onClick={() => setSearchParams({type: "fragrances"})} className={`cursor-pointer uppercase border-2 border-red-950 px-2 ${typeFilter === "fragrances" && "bg-green-400 text-coral-red rounded-lg"}`}>
      fragrances
      </p>
      <p onClick={() => setSearchParams({type: "skincare"})} className={`cursor-pointer uppercase border-2 border-red-950 px-2 ${typeFilter === "skincare" && "bg-green-400 text-coral-red rounded-lg"}`}>
      skincare
      </p>
      <p onClick={() => setSearchParams({type: "groceries"})} className={`cursor-pointer uppercase border-2 border-red-950 px-2 ${typeFilter === "groceries" && "bg-green-400 text-coral-red rounded-lg"}`}>
      groceries
      </p>
      <p onClick={() => setSearchParams({type: "home-decoration"})} className={`cursor-pointer uppercase border-2 border-red-950 px-2 ${typeFilter === "home-decoration" && "bg-green-400 text-coral-red rounded-lg"}`}>
      home decoration
      </p>
       

      <p onClick={() => setSearchParams({})} className="cursor-pointer uppercase border-2 border-red-950 px-2">
      CLEAR FILTER
      </p>
      </div> */}
      <div className="grid grid-cols-4 gap-y-5 gap-x-2">
        {displayProducts.length > 0 ? (
          displayProducts.map((product, index) => (
            <div
              key={index}
              className=" border-red-400 border-[2px] p-5 rounded-md shadow-lg hover:shadow-2xl cursor-pointer"
            >
              <p className="mb-5 text-[18px] uppercase font-bold font-palanquin">
                {product.category}
              </p>
              <img
                src={product.thumbnail}
                alt={"shoe" + `${index + 1}`}
                className="mb-3 w-fit h-[300px]"
              />
              <div>
                <p className="capitalize font-bold font-palanquin text-[19px] truncate hover:text-clip">
                  {product.title}
                </p>
                <p className="capitalize font-bold font-montserrat text-[19px] text-[#858585]">
                  {`$${product.price}`}
                </p>
                <p className="capitalize font-thin font-palanquin truncate hover:text-ellipsis">
                  {product.description}
                </p>
                <p></p>
              </div>
              <Link
                to={`${product.id}`}
                state={{
                  search: searchParams.toString(),
                  type: typeFilter,
                  price: price,
                }}
              >
                {/* <Link to={`${product.id}`} state={{search: `?${searchParams.toString()}`}}> */}
                <p className="text-[18px] uppercase font-bold font-palanquin bg-coral-red w-fit m-auto px-5 py-1 border-none text-white mt-2 cursor-pointer rounded-md shadow-xl">
                  View
                </p>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-coral-red text-[24px] w-fit text-center font-palanquin font-bold mx-auto">
            LOADING...
          </p>
        )}
      </div>
    </section>
  );
};
