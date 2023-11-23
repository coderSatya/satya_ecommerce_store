import { Products } from '@/typescript/interface/product.interface'
import React from 'react'


const SingleProduct = ({productDetail}:{
    productDetail:Products
}) => {
  return (
    <div>
      <h1>Single Product</h1>
      <h1>{productDetail?._id}</h1>
      <h1>{productDetail?.title}</h1>
      <h1>Ending Products</h1>
    </div>
  )
}

export default SingleProduct
