import React from 'react'

function ProductItem(product) {
  return (
    <div>
        <div className='hover:border p-1 rounded-lg'>
            <Image src={product?.attributes?.banner?.data.attributes?.url}
            alt='banner'
            width={400}
            height={350}
            className='rounded-t-lg
            h-[190px] object-cover'
            />
            <div className='flex justify-between 
            items-center bg-gray-50 p-3'>
            <div className='flex justify-between
            items-center bg-gray-50 p-3 rounded-b-lg '>
                <h2 className='text-[14]
                font-medium line-clamp-2 '>{product.attributes.title}</h2>
                <h2 className='text-[10px]
                text-gray-400'> {product?.attributes?.category}</h2>
            </div>
            <h2>${product.attributes?.pricing}</h2>
            </div>
        </div>
    </div>
  )
}

export default ProductItem