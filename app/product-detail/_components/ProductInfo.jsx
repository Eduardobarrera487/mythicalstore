import GlobalApi from '../../_utils/GlobalApi';
import { data } from 'autoprefixer'
import React, { useContext } from 'react'
import {useUser} from '@clerk/nextjs'
import { useRouter } from 'next/navigation';
import { CartContext } from '../../_contex/CartContext';
import { ShoppingCart } from 'lucide-react'

function ProductInfo({product}) {

    const {user}=useUser();
    const router=useRouter();
    const {cart,setCart}=useContext(CartContext);

    const onAddToCartClick=()=>{
        if(!user)
        {
            router.push('/sign-in')
            return ;
        }
        else{
          //Logic to add to cart
            const data= {
              data:{
                userName:user.fullName,
                email:user.primaryEmailAddress.emailAddress,
                products:[product?.id]
              }
            }

            GlobalApi.addToCart(data).then(resp=>{
                console.log("Add to cart",resp);
                if(resp)
                {
                setCart(cart=>[...cart,
                    {
                        id:resp?.data?.id,
                        product:product
                    }

                ]);
            }
            },(error)=>{
                console.log("Error",error)
            })
        }
    }
      return (
        <section class="py-16 px-8">
      <div
        class="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2"
      >
       
        <div>
          <h3
            class="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-inherit mb-4"
          >
            {product?.attributes?.title}
          </h3>
          <h5
            class="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-inherit"
          >
            ${product?.attributes?.pricing}
          </h5>
          <p
            class="block antialiased font-sans text-base font-light leading-relaxed text-inherit mt-4 font-normal leading-[27px] !text-gray-500"
          >
                {product?.attributes?.description}
          </p>
          <div class="my-8 flex items-center gap-2">
            <div class="inline-flex items-center text-amber-500">
              <span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5 text-inherit cursor-pointer text-yellow-700 w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path></svg></span
              ><span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5 text-inherit cursor-pointer text-yellow-700 w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path></svg></span
              ><span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5 text-inherit cursor-pointer text-yellow-700 w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path></svg></span
              ><span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-5 h-5 text-inherit cursor-pointer text-yellow-700 w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  ></path></svg></span
              ><span
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 text-inherit cursor-pointer text-blue-gray-500 w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  ></path></svg
              ></span>
            </div>
            <p
              class="block antialiased font-sans text-base font-light leading-relaxed text-inherit !text-sm font-bold !text-gray-700"
            >
              4.0/5 (100 reviews)
            </p>
          </div>
          <h6
            class="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900"
          >
            Color
          </h6>
          <div class="my-8 mt-3 flex items-center gap-2">
            <div
              class="h-5 w-5 rounded border border-gray-900 bg-blue-gray-600"
            ></div>
            <div
              class="h-5 w-5 rounded border border-blue-gray-100"
            ></div>
            <div
              class="h-5 w-5 rounded border border-blue-gray-100 bg-gray-900"
            ></div>
          </div>
          <div
            class="mb-4 flex w-full items-center gap-3 md:w-1/2"
          >
            <button
              class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-gray-900 w-52"
              type="button"
              data-ripple-light="true"
              >
            
              Add to Cart</button
            ><button
              class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20 shrink-0"
              type="button"
              data-ripple-dark="true"
              onClick={()=>onAddToCartClick()}>
              <ShoppingCart/>
              
            
              <span
               class="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  ></path></svg
              ></span>
            </button>
          </div>
        </div>
      </div>
    
    </section>
      )
    }
    export default ProductInfo  