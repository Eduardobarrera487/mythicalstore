import { data } from "autoprefixer";
import React from "react";
const {default : axios}=require("axios");
const { headers } = require("next/headers");

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY
const apiUrl= 'http://localhost:1337/api';

const axiosClient=axios.create({
    baseURL:apiUrl,
    headers:{
        Authorization:`Bearer ${apiKey}`
    }
})

const getLatestProducts=()=>axiosClient.get('/products?populate=*')

const getProductById=(productId)=>{
    console.log("Product Id",productId)
    const res = axiosClient.get('/products/'+productId+'?populate=*')
    console.log(res)
    return res
}
const getProductByCategory=(category)=>axiosClient.get('/products?filters[category][$eq]='+"&populate=*")

const addToCart=(data)=>axiosClient.post('/carts',data)

const getUserCartItem=(email)=>axiosClient.get('/carts?populate[products][populate][0]=banner&filters[email][$eq]'+email)

const deleteCartItem=()=>axiosClient.delete('/carts'+id)

export default{
    getLatestProducts,
    getProductById,
    getProductByCategory,
    addToCart,
    getUserCartItem,
    deleteCartItem
}