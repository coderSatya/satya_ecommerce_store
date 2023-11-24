import { StateProps } from '@/typescript/interface/product.interface';
import React from 'react';
import {useSelector} from 'react-redux';
import Container from '@/components/Container';
import CartItem from '@/components/CartItem';
import { useDispatch } from 'react-redux';
import { resetCart } from '@/redux-toolkit/slices/shoppingSlice';
import Link from 'next/link';
import PaymentForm from '@/components/PaymentForm';


const CartPage = () => {
  const productData = useSelector((state:StateProps)=>state.shoppingSlice)
  const dispatch = useDispatch()
  return (
    
    <Container className="">
    {productData.productData.length > 0 ? (
      <Container className="">
        <h2 className="text-2xl font-semibold mb-2">Cart</h2>
        <div className="flex flex-col gap-5">
          <CartItem />
          <div className="flex items-center justify-end">
            <button
              onClick={() => dispatch(resetCart())}
              className="bg-red-500 text-base font-semibold text-slate-100 py-2 px-6 hover:bg-red-700 hover:text-white duration-200"
            >
              reset cart
            </button>
          </div>
          {/* Payment Form */}
         <PaymentForm />
        </div>
      </Container>
    ) : (
      <div className="flex flex-col gap-y-6 items-center justify-center bg-white h-96 px-4">
        <p className="border-[1px] border-orange-600 w-full p-2 text-center">
          Your product cart is currently empty
        </p>
        <Link href={"/"}>
          <button className="bg-darkText text-white py-2 px-6 rounded-md hover:bg-orange-600 duration-200">
            Return to Shop
          </button>
        </Link>
      </div>
    )}
  </Container>
      
  )
}

export default CartPage
