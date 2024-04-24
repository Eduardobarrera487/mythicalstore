const {default : axios}=require("axios");

const apiKey = process.env.NEXT_PUBLIC_REST_API_KEY
const apiUrl= 'https://popular-birds-1caff13786.strapiapp.com/api/';

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

//Add to Cart Collection
const addToCart=(data)=>axiosClient.post('/carts',data)

const getUserCartItems=(email)=>axiosClient.get('/carts?populate[products][populate][0]=banner&filters[email][$eq]='+email)

//Delete Cart Item

const deleteCartItem=(productId)=>{
    console.log("Product Id",productId)
    const res = axiosClient.delete('/carts/'+productId)
    console.log(res)
    return res
}

//Create Order
const createOrder=(data)=>axiosClient.post('/orders',data)

export default{
    getLatestProducts,
    getProductById,
    getProductByCategory,
    addToCart,
    getUserCartItems,
    deleteCartItem,
    createOrder
}