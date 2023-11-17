import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import ProductsData from "./ProductsData";
import { Products } from "@/typescript/interface/product.interface";
import Container from "./Container";

const Products = () => {
  const fetchDetail = async () => {
    return await axios.get("https://fakestoreapiserver.reactbd.com/smart");
  };
  const { data, isLoading, isError, error } = useQuery("products", fetchDetail);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{error?.message}</div>;
  }

  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-10">
      {data?.data?.map((item:Products) => (
        <ProductsData key={item?._id} item={item} />
      ))}
    </Container>
  );
};

export default Products;
