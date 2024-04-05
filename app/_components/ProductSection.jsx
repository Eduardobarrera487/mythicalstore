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
    return (
        <div>
            <ProductList/>
        </div>
    )
}

export default ProductSection