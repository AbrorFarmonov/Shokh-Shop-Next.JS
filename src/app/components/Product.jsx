'use client'
import Link from 'next/link'
import React from 'react'
import Hero from './Hero'
import CustomImage from './CustomImage'

export default function Product({ product }) {
    return (
        <div>
            <Link href={`product/${product.id}`} className="bg-white p-6 rounded-lg h-96 group flex flex-col border border-gray-400 hover:scale-105 transition-transform ease-out duration-200">
                <div className='relative max-h-80 flex-1'>
                    <CustomImage product={product} fill />
                </div>
                <h3 className="tracking-widest text-slate-800 text-xs font-medium title-font">{product.category}</h3>
                <div className='flex justify-between items-center font-semibold mt-4 mb-1'>
                    <p className="w-44 truncate">{product.title}</p>
                    <p>{product.price}$</p>
                </div>
                <p className="leading-relaxed text-base line-clamp-2">{product.description}</p>
            </Link>
        </div>
    )
}
