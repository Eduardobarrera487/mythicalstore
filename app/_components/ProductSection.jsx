"use client"
import React, { useEffect, useState } from 'react'
import ProductList from './ProductList'
import GlobalApi from '../_utils/GlobalApi'

function ProductSection() {

    const [productList, setProductList]=useState([]);
    
    useEffect(()=>{
        getLatestProducts_();
    },[])

    const getLatestProducts_=()=>{
        GlobalApi.getLatestProducts().then(resp=>{
            console.log(resp.data);
            setProductList(resp.data.data);
        })
    }
    return productList&&(
        <div className='px-10 md:px-20'>
            <h2>NEW ARRIVALS</h2>
            <ProductList productList={productList}/>
        </div>
    )
}

export default ProductSection