import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
// import { shoe1, } from "../../../assets/images";

export const ProductDetail = () => {
  const param = useParams();
  const location = useLocation();
  console.log(location);
  const [productDetail, setProductDetail] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${param.id}`)
      .then((res) => res.json())
      .then((data) => setProductDetail(data));
  }, [param.id]);

  // console.log(productDetail)
  const search = location.state?.search || "";
  const backTypeText = location.state?.type || "";
  const backPriceText = location.state?.price || "";
  console.log(backTypeText, backPriceText);
  return (
    <section className="w-full h-[100vh] min-h-full bg-primary px-[10px] py-[10px] overflow-y-auto">
      {/* <Link to={`..?${search}`} relative="path" className="font-semibold capitalize"> {`Back to  ${backTypeText && backTypeText + ` product`}  ${ backPriceText && ` Price of $${backPriceText}$` + ` range`}`}</Link> */}
      <Link
        to={`..?${search}`}
        relative="path"
        className="font-semibold capitalize"
      >
        {" "}
        {`Back to  ${
          backPriceText != "" && backTypeText != ""
            ? `${backTypeText} range of $${backPriceText}$`
            : backPriceText != "" && backTypeText == ""
            ? `price range of $${backPriceText}$`
            : backPriceText == "" && backTypeText != ""
            ? `${backTypeText} product`
            : "all product"
        }`}
      </Link>
      {/* <Link to="/dashboard/product" className="font-semibold capitalize"> Back to all product</Link> */}
      <div className="w-[40%] m-auto">
        <div className=" border-red-400 border-[2px] p-5 rounded-md shadow-lg hover:shadow-2xl cursor-pointer flex flex-col">
          <p className="mb-5 text-[18px] uppercase font-bold font-palanquin">
            {productDetail?.category}
          </p>
          <img
            src={productDetail?.thumbnail}
            alt={productDetail.title}
            className="mb-3"
          />
          <div>
            <p className="capitalize font-bold font-palanquin text-[19px]">
              {productDetail.title}
            </p>
            <p className="capitalize font-bold font-montserrat text-[19px] text-[#858585]">
              {productDetail?.price ? (
                `$${productDetail?.price}`
              ) : (
                <p>Loading...</p>
              )}
            </p>
            <p className="capitalize font-thin font-palanquin">
              {productDetail.description}
            </p>
          </div>
          <Link>
            <p className="text-[18px] uppercase font-bold font-palanquin bg-coral-red w-fit m-auto px-5 py-1 border-none text-white mt-2 cursor-pointer rounded-md shadow-xl">
              Buy
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};
