//si los botones ShoppingCart y UserButton del navbar
//no funcionan, eliminen este componente

//tambien recordar borrar <Cart/> de navbar
//(linea de codigo 86)
//se borraria lo que aparece asi
//<div className='flex items-center gap-5'>
//              <UserButton/>
//              <h2 className='flex gap-1 cursor-pointer'
//              onClick={()=>setOpenCart(!openCart)}>
//                <ShoppingCart/>({cart?.length})</h2>
//(linea 96 a la 99) y reemplazarlo con algun texto (h2) o con otra cosa

//A partir de la linea 78 del navbar se encuentra funcion
//para el login y register (esto no se borra)


//Si se elimina este archivo (Cart.jsx), poner lo siguiente
//en algun otro componente:
/*
<div className="space-y-4 text-center mt-5">
      

      <a
        href="#"
        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
      >
        Ver mi carrito ({cart?.length})
      </a>

      <a
        href="#"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </a>
    </div>
*/
//Ya que eso es para acceder a la pagina del carrito

import React, { useContext, useEffect } from 'react'
import { CartContext } from '../_contex/CartContext'

function Cart() {
    const {cart,setCart}=useContext(CartContext);

    useEffect(()=>{
        cart &&console.log(cart)
    },[])


  return cart&&(
    <div className='h-[300px] w-[250px] bg-gray-100
    z-10 rounded-md absolute mx-10 right-10 top-12
    p-5 overflow-auto'>
        <div className="mt-4 space-y-6">
    <ul className="space-y-4">


        {cart.map((item,index)=>{
            <li className="flex items-center gap-4">
            <img
              src={item?.product?.attributes?.banner?.data?.attributes?.url}
              alt=""
              className="size-16 rounded object-cover"
            />
    
            <div>
              <h3 className="text-sm text-gray-900 line-clamp-1">{item.product?.attributes.title}</h3>
    
              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline">{item?.product?.attributes?.category}</dt>
                </div>
    
                <div>
                  <dt className="inline"> $ {item?.product?.attributes?.pricing}</dt>
                </div>
              </dl>
            </div>
          </li>
        })}


      </ul>
      </div>

      
      <div className="space-y-4 text-center mt-5">
      

      <a
        href="#"
        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
      >
        Ver mi carrito ({cart?.length})
      </a>

      <a
        href="#"
        className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </a>
    </div>
    </div>
  )
}

export default Cart