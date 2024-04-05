import React from 'react'
import Image from 'next/image'

function ProductBanner({product}) {
  return (
    <div>
    {product?  <Image src={product?.attributes?.banner?.data?.attributes.url}
        alt='banner'
        width={350}
        height={400}
        className='round-lg object-cover
        text-center
        sm:float-right'
        />:
        
        <div className='h-[350px] w-[350px]
        bg-slate-200 animate-pulse'>
        </div>}
    </div>
  )
}

export default ProductBanner