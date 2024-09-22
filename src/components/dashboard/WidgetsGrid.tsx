'use client'
import React from 'react'
import SimpleWidget from './SimpleWidget'
import { useAppSelector } from '@/store'
import { IoCartOutline } from 'react-icons/io5';

function WidgetsGrid() {
    const isCart = useAppSelector( state=> state.counter.count);
  return ( 
    <div className='flex flex-wrap p-2 items-center justify-center'>
            <SimpleWidget
            subTittle='Productos agragados'
            title={ `${isCart}` }
            label="Contador"
            icon={ <IoCartOutline size= {70} className="text-blue-500"/> }
            href='/dashboard/counter'
            />
    </div>
  )
}

export default WidgetsGrid
