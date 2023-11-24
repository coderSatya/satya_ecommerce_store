import {
  Products,
  ProductDetailItem,
} from "@/typescript/interface/product.interface";
import Image from "next/image";
import React from "react";
import FormattedPrice from "./FormattedPrice";
import { IoMdCart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { Audio } from "react-loader-spinner";
import toast, { Toaster } from "react-hot-toast";

const SingleProduct = ({ productDetail }: ProductDetailItem) => {
  return (
    <div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg">
      {productDetail ? (
       ""
      ) : (
        <Audio
        height="80"
        width="80"
        // radius="9"
        color="green"
        ariaLabel="loading"
        // wrapperStyle
        // wrapperClass
      />
      )}
      <div>
        <Image
          src={productDetail?.image}
          alt="product image"
          width={500}
          height={500}
          className="w-full max-h-[700px] object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center gap-y-10">
        <div>
          <p className="text-3xl font-semibold">{productDetail?.title}</p>
          <p className="text-xl font-semibold">
            <FormattedPrice amount={productDetail?.price} />
          </p>
        </div>
        <p className="text-lightText">{productDetail?.description}</p>
        <div className="text-sm text-lightText flex flex-col">
          <span>
            SKU: <span className="text-darkText">{productDetail?._id}</span>
          </span>
          <span>
            Category:{" "}
            <span className="text-darkText">{productDetail?.category}</span>
          </span>
        </div>
        <div className="flex items-center cursor-pointer group">
          <button className="bg-darkText text-slate-100 px-6 py-3 text-sm uppercase flex items-center border-r-[1px] border-r-slate-500">
            add to cart
          </button>
          <span className="bg-darkText text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-orange-500 duration-200 py-3">
            <IoMdCart />
          </span>
        </div>
        <p className="flex items-center gap-x-2 text-sm">
          <MdFavoriteBorder className="text-xl" />
          Add to wishlist
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default SingleProduct;
