import React from 'react'
import Image from 'next/image'

function ProductBanner({product}) {
  return (
    <div>
        <Image src={product?.attributes?.banner?.data?.attributes.url}
        alt='banner'
        width={350}
        height={400}
        className='round-lg object-cover'
        />
    </div>
  )
}

export default ProductBanner