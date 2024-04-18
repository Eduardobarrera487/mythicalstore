'use client'
import Breadcrumb from '../../_components/Breadcrumb';
import GlobalApi from '../../_utils/GlobalApi';
import React, { useEffect, useState } from 'react'
import ProductBanner from '../_components/ProductBanner';
import ProductInfo from '../_components/ProductInfo';
import ProductList from '../../_components/ProductList';
import Footer from '../../_components/Footer';
import { usePathname } from 'next/navigation';


function ProductDetail(params) {

  const path=usePathname();

  const [productDetail, setProductDetail]=useState({});
  const [productList, setProductList]=useState([]);

  useEffect(()=>{
    console.log("Product Id", params.params.productId)

    const fetchData = async () => {
      console.log("pito", params.params.productId)
      const res = await GlobalApi.getProductById(params.params.productId);
      console.log(res)
      setProductDetail(res.data.data);
      // getProductListByCategory(res.data.data)
    }

    fetchData().catch(err=>console.log(err))
  }, [])
  
  const getProductListByCategory=(product)=>{
    GlobalApi.getProductByCategory(product?.attributes?.category).then(resp=>{
      console.log(resp);
      setProductList(resp.data.data)
    })
  }

  return (
    <>
      <div className='p-5 py-20 px-10 md:px-28'>
      <Breadcrumb path={path}/>
      <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 
      gap-5 sm:gap-5 justify-evenly'>
        <ProductBanner product={productDetail}/>
        <ProductInfo product={productDetail}/>
      </div>
        {productList&& <div className='mt-20'>
          <h2 className='font-medium text-[20px] mb-4 text-white'>Te podría interesar</h2>
          <ProductList productList={productList}/>
        </div>}
    </div>
    <Footer/>
    </>
    
  )
}

export default ProductDetail