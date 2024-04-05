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

export default{
    getLatestProducts
}