'use client'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import NotFound from './notFound';
import CustomImage from '@/app/components/CustomImage';

export default function Page() {
    const [product, setProduct] = useState()
    const {id} = useParams()
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const product = await res.json()
            setProduct(product)
        }
        catch(error) {
            <NotFound/>
        }
    }

    console.log(product);
  return (
    <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 mt-24 pb-10'>
        <CustomImage product={product}/>
        <div className='divide-2 space-y-2 pb-8'>
            <div className='flex justify-between items-center'>
                  <h1 className='text-2xl md:text-4xl font-bold'>{product?.title}</h1>
                  <h2 className='text-gray-500 font-bold text-xl md:text-3xl'>${product?.price}</h2>
            </div>
            <p className='text-xs pt-8 md:text-sm'>{product?.description}</p>
        </div>
    </div>
  )
}
