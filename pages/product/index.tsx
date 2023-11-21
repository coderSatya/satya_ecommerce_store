import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useQuery } from 'react-query';
import { Products } from '@/typescript/interface/product.interface';

const ProductPage = () => {
  const router = useRouter();
 const params = router.query._id;
  const fetchDetail = async () => {
    return await axios.get("https://fakestoreapiserver.reactbd.com/smart");
  };
  
  const {data} = useQuery("productDetail",fetchDetail )
 const y = data?.data.filter((ele:Products)=>ele._id === router.query._id)
  return (
    <div>
      ProductPage
    </div>
  )
}

export default ProductPage
