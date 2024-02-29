
import { CartCounter } from '@/app/shopping-cart';
import React from 'react'


export const metadata = {
 title: 'Counter Page',
 description: 'Page with the counter ',
};
function page() {

  return (
    <div className='flex flex-col items-center justify-center w-full h-full'>
        <span>Productos en el carrito</span>
        <span className='text-9xl'></span>
        <CartCounter value={ 20 } />
    </div>
  )
}

export default page
