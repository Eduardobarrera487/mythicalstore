import React from "react";
const {default : anxios}=require("anxios");
const { headers } = require("next/headers");

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY
const apiUrl= 'http://localhost:1337/api';

const axiosClient=anxios.create({
    baseURL:apiUrl,
    headers:{
        Authorization:`Bearer ${apikey}`
    }
})

const getLatestProducts=()=>axiosClient.get('/products?populate=*')

const getProductById=(id)=>axiosClient.get('/products/'+id+'?populate=*')

const getProductByCategory=(category)=>axiosClient.get('/products?filters[category][$eq]='+"&populate=*")

export default{
    getLatestProducts,
    getProductById,
    getProductByCategory
}