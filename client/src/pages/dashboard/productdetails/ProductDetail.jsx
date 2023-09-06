/* eslint-disable no-unused-vars */
import { useEffect, useState, Suspense } from "react";
import {
  Link,
  useLoaderData,
  useLocation,
  useParams,
  defer,
  Await,
} from "react-router-dom";
import { getProducts } from "../../../api";
import { requiredAuth } from "../../../utils";

export async function loader({ params, request }) {
  await requiredAuth(request);
  return defer({ productDetail: getProducts(params.id) });
}

export const ProductDetail = () => {
  const location = useLocation();
  const productDetailPromise = useLoaderData();

  const search = location.state?.search || "";
  const backTypeText = location.state?.type || "";
  const backPriceText = location.state?.price || "";
  function renderProductDetailsElement(productDetail) {
    return (
      <>
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
        ;
      </>
    );
  }

  return (
    <section className="w-full h-[100vh] min-h-full bg-primary px-[10px] py-[10px] overflow-y-auto">
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

      <Suspense fallback={<h2 className="text-[30px] font-bold">product Details Loading...</h2>}>
        <Await resolve={productDetailPromise.productDetail}>
          {renderProductDetailsElement}
        </Await>
      </Suspense>
    </section>
  );
};
