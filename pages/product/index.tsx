import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useQuery } from "react-query";
import { Products } from "@/typescript/interface/product.interface";
import { BsType } from "react-icons/bs";
import Container from "@/components/Container";
import ProductsData from "@/components/ProductsData";
import SingleProduct from "@/components/SingleProduct";

const ProductPage = () => {
  const router = useRouter();

  const params = router?.query?._id;

  const fetchDetail = async () => {
    return await axios.get("https://fakestoreapiserver.reactbd.com/smart");
  };
  const trendingProductData = () => {
    return axios.get("https://fakestoreapiserver.reactbd.com/smarttrending");
  };

  const { data } = useQuery("productDetail", fetchDetail);
  const { data: TrendingProduct, isLoading } = useQuery(
    "tendingProduct",
    trendingProductData
  );
  console.log(TrendingProduct);

  const productDetail: Products = data?.data.filter(
    (ele: Products) => ele._id === Number(params)
  )?.[0];
  console.log(productDetail, "productDetail");


  if (isLoading) {
    return <h2>Loading.....</h2>;
  }

  return (
    <div>
      <Container className="">
        <SingleProduct productDetail={productDetail} />
        <div>
          <p className="text-xl py-1 font-semibold">Trending Products</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {TrendingProduct?.data.map((item: Products) => (
              <ProductsData key={item?._id} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
