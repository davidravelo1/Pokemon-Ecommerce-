"use client";
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, substractOne, initCounterState } from '@/store/counter/counterSlice';
import { useEffect, useState } from 'react'

interface Props {
    value?: number; 
}
const getAPICounter = async():Promise<CounterResponse> =>{
    const data= await fetch('/api/counter').then( res=>res.json());
    return data;
  }
  
  export interface CounterResponse{
    method: string;
    count: number;
  }
export const CartCounter = ({ value = 0 }: Props) => {

    const count = useAppSelector(state => state.counter.count ) ;
    const dispatch = useAppDispatch();
    useEffect(()=>{
        getAPICounter().then(({count})=> dispatch( initCounterState(count) ))
    },[dispatch])
    
    return (
        <>
            <span className='text-9xl'> { count }</span>
            <div className='flex'>
                <button onClick={() => dispatch( substractOne() )} className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>-1</button>
                <button onClick={() => dispatch( addOne() )} className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>+1</button>
            </div>
        </>
    )
}

