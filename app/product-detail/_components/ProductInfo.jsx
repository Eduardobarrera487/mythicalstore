import GlobalApi from '@/app/_utils/GlobalApi'
import { data } from 'autoprefixer'
import React from 'react'

function ProductInfo({product}) {

    const onAddToCartClick=()=>{
        const data={
            data:{
                products:product?.id
            }
        }
        GlobalApi.addToCart(data).then(resp=>{
            console.log("Add to cart",resp);
        },(error)=>{
            console.log("Error",error)
        })
    }

  return (
    <section className="bg-zinc-600">
  
        <div>
            <h2 className='text-[20px]'>
                {product?.attributes?.title}
            </h2>
            <h2 className='text-[15px] text-white'>
                {product?.attributes?.category}
            </h2>
            <h2 className='text-[15px] mt-5 text-white'>
                {product?.attributes?.description}
            </h2>
            <h2 className='text-[32px] text-white font-medium
            mt-5'>
                {product?.attributes?.pricing}
            </h2>
            <button className='flex gap-2 w-full
            hover:bg-zinc-700
            p-4 bg-black text-white rounded-lg'>Agregar al carrito</button>
            <span className="flex items-center" onClick={()=>onAddToCartClick}>
                <span className="h-px flex-1 bg-black"></span>
            </span>
        </div>

    </section>
  )
}

export default ProductInfo